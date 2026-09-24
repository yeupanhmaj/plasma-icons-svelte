import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_ICONS_DIR = path.resolve(__dirname, '../raw-icons/icons');
const TARGET_LIB_DIR = path.resolve(__dirname, '../src/lib');
const TARGET_ICONS_DIR = path.join(TARGET_LIB_DIR, 'icons');

function toPascalCase(name) {
	let clean = name
		.replace(/\+/g, '-plus-')
		.replace(/\./g, '-')
		.replace(/[^a-zA-Z0-9]/g, '-');
	const parts = clean.split(/[-_]+/).filter(Boolean);
	let res = parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
	if (/^[0-9]/.test(res)) {
		res = 'Icon' + res;
	}
	return res;
}

function cleanSvg(raw) {
	let s = raw
		.replace(/<\?xml[^>]*\?>/gi, '')
		.replace(/<!DOCTYPE[^>]*>/gi, '')
		.replace(/<!--[\s\S]*?-->/gi, '')
		.trim();

	const svgMatch = s.match(/<svg([^>]*)>([\s\S]*)<\/svg>/i);
	if (!svgMatch) return null;

	const attrs = svgMatch[1];
	let inner = svgMatch[2];

	// Extract viewBox or calculate from width/height
	const vbMatch = attrs.match(/viewBox=["']([^"']*)["']/i);
	let viewBox = vbMatch ? vbMatch[1].trim() : '';
	if (!viewBox) {
		const wMatch = attrs.match(/width=["']([^"']*)["']/i);
		const hMatch = attrs.match(/height=["']([^"']*)["']/i);
		if (wMatch && hMatch) {
			const w = parseFloat(wMatch[1]);
			const h = parseFloat(hMatch[1]);
			viewBox = `0 0 ${w} ${h}`;
		}
	}

	// Remove editor tags (inkscape, sodipodi, metadata, rdf)
	inner = inner.replace(/<sodipodi:[^>]*>[\s\S]*?<\/sodipodi:[^>]*>/gi, '');
	inner = inner.replace(/<sodipodi:[^>]*\/>/gi, '');
	inner = inner.replace(/<inkscape:[^>]*>[\s\S]*?<\/inkscape:[^>]*>/gi, '');
	inner = inner.replace(/<inkscape:[^>]*\/>/gi, '');
	inner = inner.replace(/<metadata[^>]*>[\s\S]*?<\/metadata>/gi, '');
	inner = inner.replace(/<defs[^>]*id=["']defs1?["']\/>/gi, '');

	// Remove namespaced editor attributes: inkscape:..., sodipodi:..., rdf:..., dc:...
	inner = inner.replace(/\s*(?:inkscape|sodipodi|rdf|dc|cc):[a-zA-Z0-9_\-]+="[^"]*"/gi, '');
	inner = inner.replace(/\s*(?:inkscape|sodipodi|rdf|dc|cc):[a-zA-Z0-9_\-]+='[^']*'/gi, '');
	inner = inner.replace(/\s*xmlns:(?:inkscape|sodipodi|rdf|dc|cc)="[^"]*"/gi, '');

	// Remove current-color-scheme style tag
	inner = inner.replace(/<style[^>]*id=["']current-color-scheme["'][^>]*>[\s\S]*?<\/style>/gi, '');
	// Remove empty defs tags
	inner = inner.replace(/<defs[^>]*>\s*<\/defs>/gi, '');
	inner = inner.trim();

	return { viewBox, inner };
}

function generateComponent(name, variants) {
	variants.sort((a, b) => a.size - b.size);

	let defaultSize = 22;
	if (variants.some((v) => v.size === 22)) {
		defaultSize = 22;
	} else if (variants.some((v) => v.size === 16)) {
		defaultSize = 16;
	} else {
		defaultSize = variants[0].size || 22;
	}

	if (variants.length === 1) {
		const v = variants[0];
		const vb = v.viewBox || `0 0 ${v.size || defaultSize} ${v.size || defaultSize}`;
		return `<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = ${defaultSize},
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="${vb}"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	${v.inner}
</svg>
`;
	}

	let template = '';
	for (let i = 0; i < variants.length; i++) {
		const v = variants[i];
		const vb = v.viewBox || `0 0 ${v.size} ${v.size}`;
		const isLast = i === variants.length - 1;

		let condition = '';
		if (i === 0) {
			const threshold = Math.round((v.size + variants[i + 1].size) / 2);
			condition = `{#if numericSize <= ${threshold}}`;
		} else if (!isLast) {
			const threshold = Math.round((v.size + variants[i + 1].size) / 2);
			condition = `{:else if numericSize <= ${threshold}}`;
		} else {
			condition = '{:else}';
		}

		template += `\t${condition}
\t\t<svg
\t\t\txmlns="http://www.w3.org/2000/svg"
\t\t\tviewBox="${vb}"
\t\t\twidth={size}
\t\t\theight={size}
\t\t\tfill={color}
\t\t\tclass="plasma-icon {className}"
\t\t\tstyle="color: {color}; {style}"
\t\t\t{...restProps}
\t\t>
\t\t\t${v.inner}
\t\t</svg>\n`;
	}
	template += '\t{/if}';

	return `<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = ${defaultSize},
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || ${defaultSize}
	);
</script>

${template}
`;
}

async function main() {
	console.log('Reading icons from:', ROOT_ICONS_DIR);
	if (!fs.existsSync(ROOT_ICONS_DIR)) {
		console.error('Icons directory not found:', ROOT_ICONS_DIR);
		process.exit(1);
	}

	const iconsMap = new Map();

	function walk(dir) {
		const items = fs.readdirSync(dir);
		for (const item of items) {
			const fullPath = path.join(dir, item);
			const stat = fs.statSync(fullPath);
			if (stat.isDirectory()) {
				walk(fullPath);
			} else if (item.endsWith('.svg')) {
				const rel = path.relative(ROOT_ICONS_DIR, fullPath);
				const parts = rel.split(path.sep);
				const cat = parts[0];
				const sizeStr = parts[1] || '22';
				const size = parseInt(sizeStr, 10) || 22;
				const baseName = item.replace('.svg', '');

				const rawSvg = fs.readFileSync(fullPath, 'utf8');
				const cleaned = cleanSvg(rawSvg);
				if (!cleaned) continue;

				if (!iconsMap.has(baseName)) {
					iconsMap.set(baseName, []);
				}

				const existing = iconsMap.get(baseName);
				if (!existing.some((e) => e.size === size)) {
					existing.push({
						cat,
						size,
						viewBox: cleaned.viewBox,
						inner: cleaned.inner,
					});
				}
			}
		}
	}

	walk(ROOT_ICONS_DIR);
	console.log(`Found ${iconsMap.size} unique icons.`);

	if (!fs.existsSync(TARGET_ICONS_DIR)) {
		fs.mkdirSync(TARGET_ICONS_DIR, { recursive: true });
	}

	const typesContent = `import type { SVGAttributes } from 'svelte/elements';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
	size?: number | string;
	color?: string;
}
`;
	fs.writeFileSync(path.join(TARGET_LIB_DIR, 'types.ts'), typesContent, 'utf8');

	const cssContent = `/* Plasma Icons CSS */
.plasma-icon {
	display: inline-block;
	vertical-align: middle;
	flex-shrink: 0;
}

.plasma-icon .ColorScheme-Text {
	fill: currentColor;
}

.plasma-icon .ColorScheme-NegativeText {
	fill: var(--plasma-color-danger, #da4453);
}

.plasma-icon .ColorScheme-PositiveText {
	fill: var(--plasma-color-success, #27ae60);
}

.plasma-icon .ColorScheme-NeutralText {
	fill: var(--plasma-color-warning, #f67400);
}

.plasma-icon .ColorScheme-Highlight,
.plasma-icon .ColorScheme-Accent {
	fill: var(--plasma-color-primary, #3daee9);
}
`;
	fs.writeFileSync(path.join(TARGET_LIB_DIR, 'plasma-icons.css'), cssContent, 'utf8');

	const entries = Array.from(iconsMap.entries());
	const exportsList = [
		"export * from './types.js';",
		"export type { IconProps } from './types.js';\n"
	];

	console.log(`Generating ${entries.length} Svelte components...`);
	let count = 0;
	for (const [baseName, variants] of entries) {
		const componentName = toPascalCase(baseName);
		const componentCode = generateComponent(componentName, variants);
		fs.writeFileSync(path.join(TARGET_ICONS_DIR, `${componentName}.svelte`), componentCode, 'utf8');
		exportsList.push(`export { default as ${componentName} } from './icons/${componentName}.svelte';`);
		count++;
		if (count % 500 === 0) {
			console.log(`Generated ${count}/${entries.length} icons...`);
		}
	}

	fs.writeFileSync(path.join(TARGET_LIB_DIR, 'index.ts'), exportsList.join('\n') + '\n', 'utf8');
	console.log(`Done! Successfully generated ${count} icon components.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
