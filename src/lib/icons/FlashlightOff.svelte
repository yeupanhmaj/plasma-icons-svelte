<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 22
	);
</script>

	{#if numericSize <= 19}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 4.2333332 4.2333335"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g transform="translate(0 -292.76666)"><path d="m7.0273438 5 2.0039062 2h.96875v.96875l1 .9980469v-1.9667969c.356978-.6183307 1.016502-.9994331 1.730469-1h1.269531v4h-1.269531c-.333719-.000265-.652906-.090283-.9375-.2421875l1.24414 1.2421875h.962891 1v-6h-1-1.269531c-.851739.0015874-1.662651.3651528-2.230469 1h-1.5v-1zm-6.0273438 1v1 2 1h6.9824219l-1-1h-4.9824219v-2h2.9824219l-1-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="matrix(.26458333 0 0 .26458333 0 292.76666)"/><path d="m.52916667 293.48291.1870886-.18709 2.98791133 2.98106-.1870891.19394z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"/></g>
		</svg>
	{:else if numericSize <= 27}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 22 22"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g id="g7" transform="matrix(3.7795276,0,0,3.7795276,0,-1100.5196)" fill="currentColor" stroke-width=".264583">
        <path id="path3" class="ColorScheme-Text" fill="currentColor" transform="matrix(.26458333 0 0 .26458333 0 291.17915)" d="m11 8v0.9882812l1.011719 1.0117188h1.988281v1.988281l1.867188 1.867188c0.27847 0.08471 0.566311 0.143978 0.863281 0.144531h3.269531v-6h-3.269531c-0.851739 0.0015874-1.662651 0.365115-2.230469 1h-1.5v-1zm-9 1v4h8.982422l-1.0000001-1h-6.9824219v-2h4.9824219l-1-1zm14.730469 0h2.269531v4h-2.269531c-0.713964-5.67e-4 -1.373481-0.381707-1.730469-1v-2h2e-3c0.356637-0.617726 1.01525-0.9987528 1.728516-1z"/>
        <path id="path5" class="ColorScheme-NegativeText" fill="currentColor" d="m0.79375004 292.16 0.1870889-0.18709 4.0462444 4.04624-0.1870887 0.18709z"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8.4666665 8.4666669"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g transform="translate(0 -288.53332)"><path d="m25.458984 11c-1.571038.002457-3.049568.743156-3.992187 2h-3.466797v-1h-3v.984375l1.015625 1.015625h4.863281.121094v4h-.117188-.867187l1 1h.455078c.941801 1.25571 2.418624 1.996334 3.988281 2h3.541016 1v-10h-1zm0 1h3.541016v8h-3.541016c-1.427233-.001852-2.745363-.763981-3.458984-2v-4c.713621-1.236019 2.031751-1.998148 3.458984-2zm-23.458984 1v1 4 1h14.984375l-1-1h-12.984375v-4h8.986328l-1-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="matrix(.26458333 0 0 .26458333 0 288.53332)"/><path d="m.52916504 289.24957.1870863-.18709 7.22125016 7.22125-.1870863.18709z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"/></g>
		</svg>
	{/if}
