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
       d="M 2 2 L 2 14 L 3 14 L 14 14 L 14 13 L 13 13 L 13 11 L 13 8 L 12 8 L 12 6 L 11 6 L 11 9 L 10 9 L 10 7 L 9 7 L 9 5 L 8 5 L 8 2 L 7 2 L 7 4 L 6 4 L 6 6 L 5 6 L 5 7 L 4 7 L 4 8 L 3 8 L 3 2 L 2 2 z "
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
    d="M 4 3 L 4 17 L 3 17 L 3 18 L 4 18 L 4 19 L 5 19 L 5 18 L 6 18 L 19 18 L 19 17 L 19 8 L 18 8 L 18 9 L 17 9 L 17 8 L 16 8 L 16 7 L 15 7 L 15 8 L 14 8 L 14 6 L 13 6 L 13 9 L 12 9 L 12 7 L 11 7 L 11 5 L 10 5 L 10 3 L 9 3 L 9 4 L 8 4 L 8 5 L 7 5 L 7 6 L 6 6 L 6 7 L 5 7 L 5 3 L 4 3 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
