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
        <path id="path289" d="m8 2a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 3.667969-1.269531l2.048828 2.048828a0.75 0.75 0 0 0 1.0625 0 0.75 0.75 0 0 0 0-1.0625l-2.048828-2.048828a6 6 0 0 0 1.269531-3.667969 6 6 0 0 0-6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-3-1.007812v-7.9843755a5 5 0 0 1 3-1.0078125zm0 2v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2zm-4 0.0078125v5.9843755a5 5 0 0 1-1-2.992188 5 5 0 0 1 1-2.9921875z" class="ColorScheme-Text" fill="currentColor" style="paint-order:markers stroke fill"/>
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
			<path id="path347" d="m11 3a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 4.892578-1.693359l2.400391 2.40039a1 1 0 0 0 1.414062 0 1 1 0 0 0 0-1.414062l-2.40039-2.400391a8 8 0 0 0 1.693359-4.892578 8 8 0 0 0-8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-2-0.302734v-4.697266h-1-1v1h1v1h-1v1h1v1h-0.5644531a7 7 0 0 1-3.4355469-6 7 7 0 0 1 3.4355469-6h0.5644531v1h-1v1h1v1h-1v1h1 1v-4.6972656a7 7 0 0 1 2-0.3027344zm-1 3v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square" stroke-width="2" style="paint-order:markers stroke fill"/>
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
			<path id="path14232" d="m16 4a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 7.337891-2.541016l4.101562 4.101563a1.5 1.5 0 0 0 2.121094 0 1.5 1.5 0 0 0 0-2.121094l-4.101563-4.101562a12 12 0 0 0 2.541016-7.337891 12 12 0 0 0-12-12zm0 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-4-0.867188v-5.132812h-1-1v1h1v1h-1v1h1v1h-0.982422a10 10 0 0 1-4.017578-8 10 10 0 0 1 4.017578-8h0.982422v1h-1v1h1v1h-1v1h1 1v-5.1328125a10 10 0 0 1 4-0.8671875zm-2 4v4h-4v4h4v4h4v-4h4v-4h-4v-4h-4z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="round" style="-inkscape-stroke:none;paint-order:markers stroke fill"/>
		</svg>
	{/if}
