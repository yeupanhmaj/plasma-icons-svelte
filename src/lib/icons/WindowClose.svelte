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
			<g class="ColorScheme-Text" stroke-linecap="square">
        <path
            d="m4 4 8 8m-8 0 8-8"
            fill="currentColor"/>
        <path
            d="M 4,3.1523438 3.1523438,4 7.1523437,8 3.1523438,12 4,12.847656 8,8.8476563 12,12.847656 12.847656,12 8.8476563,8 12.847656,4 12,3.1523438 8,7.1523437 Z"
            fill="currentColor"/>
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
			<g class="ColorScheme-Text" stroke-linecap="square">
        <path
            d="m6 6 10 10m-10 0 10-10"
            fill="currentColor"/>
        <path
            d="M 6,5.1523437 5.1523437,6 10.152344,11 5.1523437,16 6,16.847656 l 5,-5 5,5 L 16.847656,16 l -5,-5 5,-5 L 16,5.1523437 11,10.152344 Z"
            fill="currentColor"/>
    </g>
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
			<g class="ColorScheme-Text" stroke-linecap="square">
        <path d="m7 7 18 18m-18 0 18-18"
              fill="currentColor"/>
        <path
            d="M 7,6.1523437 6.1523437,7 15.152344,16 6.1523437,25 7,25.847656 l 9,-9 9,9 L 25.847656,25 l -9,-9 9,-9 L 25,6.1523437 16,15.152344 Z"
            fill="currentColor"/>
    </g>
		</svg>
	{/if}
