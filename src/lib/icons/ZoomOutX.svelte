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
			viewBox="0 0 16 16"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g id="layer1">
        <path id="path289" d="m8 2a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 3.667969-1.269531l2.048828 2.048828a0.75 0.75 0 0 0 1.0625 0 0.75 0.75 0 0 0 0-1.0625l-2.048828-2.048828a6 6 0 0 0 1.269531-3.667969 6 6 0 0 0-6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1-1.007812 3h-7.9843755a5 5 0 0 1-1.0078125-3 5 5 0 0 1 5-5zm-3 3v2h6v-2h-6zm0.0078125 6h5.9843755a5 5 0 0 1-2.992188 1 5 5 0 0 1-2.9921875-1z" class="ColorScheme-Text" fill="currentColor" style="paint-order:markers stroke fill"/>
    </g>
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
			<path id="path301" d="m11 3a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 4.892578-1.693359l2.400391 2.40039a1 1 0 0 0 1.414062 0 1 1 0 0 0 0-1.414062l-2.40039-2.400391a8 8 0 0 0 1.693359-4.892578 8 8 0 0 0-8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1-0.302734 2h-13.394532a7 7 0 0 1-0.3027344-2 7 7 0 0 1 7-7zm-4 6v2h8v-2h-8zm-2.3105469 4h0.3105469v0.564453a7 7 0 0 1-0.3105469-0.564453zm1.3105469 0h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v0.564453a7 7 0 0 1-6 3.435547 7 7 0 0 1-5.734375-3h0.734375v-1z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="round" style="-inkscape-stroke:none;paint-order:markers stroke fill"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path id="path14232" d="m16 4a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 7.337891-2.541016l4.101562 4.101563a1.5 1.5 0 0 0 2.121094 0 1.5 1.5 0 0 0 0-2.121094l-4.101563-4.101562a12 12 0 0 0 2.541016-7.337891 12 12 0 0 0-12-12zm0 2a10 10 0 0 1 10 10 10 10 0 0 1-0.867188 4h-18.265624a10 10 0 0 1-0.8671875-4 10 10 0 0 1 10-10zm-6 8v4h12v-4h-12zm-2 7h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h0.984375a10 10 0 0 1-7.984375 4 10 10 0 0 1-8-4.017578v-0.982422zm16 0h0.626953a10 10 0 0 1-0.626953 0.982422v-0.982422z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="round" style="-inkscape-stroke:none;paint-order:markers stroke fill"/>
		</svg>
	{/if}
