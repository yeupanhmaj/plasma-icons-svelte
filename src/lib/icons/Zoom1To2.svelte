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
        <path id="path289" d="m8 2a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 3.667969-1.269531l2.048828 2.048828a0.75 0.75 0 0 0 1.0625 0 0.75 0.75 0 0 0 0-1.0625l-2.048828-2.048828a6 6 0 0 0 1.269531-3.667969 6 6 0 0 0-6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2v6h3v-6h-3zm-3 3v3h2v-3h-2z" class="ColorScheme-Text" fill="currentColor" style="paint-order:markers stroke fill"/>
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
			<path id="path347" d="m11 3a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 4.892578-1.693359l3.400391 3.40039a1 1 0 0 0 1.414062 0 1 1 0 0 0 0-1.414062l-3.40039-3.400391a8 8 0 0 0 1.693359-4.892578 8 8 0 0 0-8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7zm0 3v8h4v-8h-4zm-4 4v4h2v-4h-2z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square" stroke-width="2" style="paint-order:markers stroke fill"/>
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
			<path id="path14232" d="m16 4a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 7.337891-2.541016l4.101562 4.101563a1.5 1.5 0 0 0 2.121094 0 1.5 1.5 0 0 0 0-2.121094l-4.101563-4.101562a12 12 0 0 0 2.541016-7.337891 12 12 0 0 0-12-12zm0 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10zm0 4v12h6v-12h-6zm-6 6v6h3v-6h-3z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="round" style="-inkscape-stroke:none;paint-order:markers stroke fill"/>
		</svg>
	{/if}
