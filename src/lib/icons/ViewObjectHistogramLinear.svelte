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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="m 2,2 0,11 0,1 1,0 11,0 0,-1 -1,0 0,-1 -1,0 0,-1 0,-1 -1,0 0,1 -1,0 0,-1 L 9,10 9,6 8,6 8,3 7,3 7,2 6,2 6,4 5,4 5,6 4,6 4,9 3,9 3,2 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{:else}
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 4 3 L 4 17 L 3 17 L 3 18 L 4 18 L 4 19 L 5 19 L 5 18 L 19 18 L 19 17 L 18 17 L 18 16 L 17 16 L 16 16 L 16 15 L 15 15 L 14 15 L 14 14 L 13 14 L 13 15 L 12 15 L 12 14 L 11 14 L 11 7 L 10 7 L 10 3 L 9 3 L 9 5 L 8 5 L 8 8 L 7 8 L 7 10 L 6 10 L 6 13 L 5 13 L 5 3 L 4 3 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
