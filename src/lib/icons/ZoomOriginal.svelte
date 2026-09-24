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
        <path id="path289" d="m2 2v4h4l-1.5195312-1.5195312a5 5 0 0 1 3.5195312-1.4804688 5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5h-1a6 6 0 0 0 6 6 6 6 0 0 0 3.667969-1.269531l2.048828 2.048828a0.75 0.75 0 0 0 1.0625 0 0.75 0.75 0 0 0 0-1.0625l-2.048828-2.048828a6 6 0 0 0 1.269531-3.667969 6 6 0 0 0-6-6 6 6 0 0 0-4.2304688 1.7695312l-1.7695312-1.7695312z" class="ColorScheme-Text" fill="currentColor" style="paint-order:markers stroke fill"/>
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
			<path id="path347" d="m3 3v6h0.2695312 1.0332032 4.6972656l-2.9394531-2.9394531a7 7 0 0 1 4.9394531-2.0605469 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7h-1a8 8 0 0 0 8 8 8 8 0 0 0 4.892578-1.693359l3.400391 3.40039a1 1 0 0 0 1.414062 0 1 1 0 0 0 0-1.414062l-3.40039-3.400391a8 8 0 0 0 1.693359-4.892578 8 8 0 0 0-8-8 8 8 0 0 0-5.6347656 2.3652344l-2.3652344-2.3652344z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square" stroke-width="2" style="paint-order:markers stroke fill"/>
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
			<path id="path299" d="m4 4v9h0.4042969 2.0644531 6.53125l-4.0644531-4.0644531a10 10 0 0 1 7.0644531-2.9355469 10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10h-2a12 12 0 0 0 12 12 12 12 0 0 0 7.337891-2.541016l4.101562 4.101563a1.5 1.5 0 0 0 2.121094 0 1.5 1.5 0 0 0 0-2.121094l-4.101563-4.101562a12 12 0 0 0 2.541016-7.337891 12 12 0 0 0-12-12 12 12 0 0 0-8.453125 3.546875l-3.546875-3.546875z" class="ColorScheme-Text" fill="currentColor" stroke-width="2" style="paint-order:markers stroke fill"/>
		</svg>
	{/if}
