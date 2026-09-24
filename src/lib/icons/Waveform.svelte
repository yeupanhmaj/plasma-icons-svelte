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
       d="M 10 3 L 10 5 L 9 5 L 9 6 L 8 6 L 8 7 L 7 7 L 7 8 L 5 8 L 5 7 L 4 7 L 4 4 L 3 4 L 3 6 L 2 6 L 2 8 L 1 8 L 1 9 L 2 9 L 2 11 L 3 11 L 3 12 L 4 12 L 4 10 L 5 10 L 5 9 L 7 9 L 7 10 L 8 10 L 8 11 L 9 11 L 9 12 L 10 12 L 10 14 L 11 14 L 11 13 L 12 13 L 12 11 L 13 11 L 13 10 L 14 10 L 14 9 L 15 9 L 15 8 L 14 8 L 14 7 L 13 7 L 13 6 L 12 6 L 12 4 L 11 4 L 11 3 L 10 3 z "
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
    d="M 6 4 L 6 6 L 5 6 L 5 9 L 4 9 L 4 11 L 3 11 L 3 12 L 4 12 L 4 14 L 5 14 L 5 17 L 6 17 L 6 19 L 7 19 L 7 16 L 8 16 L 8 13 L 9 13 L 9 12 L 11 12 L 11 13 L 12 13 L 12 14 L 13 14 L 13 15 L 14 15 L 14 17 L 15 17 L 15 16 L 16 16 L 16 14 L 17 14 L 17 13 L 18 13 L 18 12 L 19 12 L 19 11 L 18 11 L 18 10 L 17 10 L 17 9 L 16 9 L 16 7 L 15 7 L 15 6 L 14 6 L 14 8 L 13 8 L 13 9 L 12 9 L 12 10 L 11 10 L 11 11 L 9 11 L 9 10 L 8 10 L 8 7 L 7 7 L 7 4 L 6 4 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
