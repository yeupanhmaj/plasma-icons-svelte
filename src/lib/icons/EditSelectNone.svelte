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
     d="M 2 2 L 2 5 L 3 5 L 3 3 L 5 3 L 5 2 L 3 2 L 2 2 z M 11 2 L 11 3 L 13 3 L 13 5 L 14 5 L 14 2 L 11 2 z M 4 4 L 4 7 L 7 7 L 7 4 L 4 4 z M 9 4 L 9 7 L 12 7 L 12 4 L 9 4 z M 5 5 L 6 5 L 6 6 L 5 6 L 5 5 z M 10 5 L 11 5 L 11 6 L 10 6 L 10 5 z M 4 9 L 4 12 L 7 12 L 7 9 L 4 9 z M 5 10 L 6 10 L 6 11 L 5 11 L 5 10 z M 2 11 L 2 14 L 5 14 L 5 13 L 3 13 L 3 11 L 2 11 z "
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     d="M 9,9.83 10.667,11.497 9,13.164 9.833,13.997 11.5,12.33 13.167,13.997 14,13.164 12.333,11.497 14,9.83 13.167,8.997 11.5,10.664 9.833,8.997 Z" />
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
     d="M 3 3 L 3 4 L 3 7 L 4 7 L 4 4 L 7 4 L 7 3 L 4 3 L 3 3 z M 15 3 L 15 4 L 18 4 L 18 7 L 19 7 L 19 3 L 15 3 z M 5 5 L 5 10 L 10 10 L 10 5 L 5 5 z M 12 5 L 12 10 L 17 10 L 17 5 L 12 5 z M 6 6 L 9 6 L 9 9 L 6 9 L 6 6 z M 13 6 L 16 6 L 16 9 L 13 9 L 13 6 z M 5 12 L 5 17 L 10 17 L 10 12 L 5 12 z M 6 13 L 9 13 L 9 16 L 6 16 L 6 13 z M 3 15 L 3 19 L 4 19 L 7 19 L 7 18 L 4 18 L 4 15 L 3 15 z "
    class="ColorScheme-Text"
    />  
  <path
     style="fill:#da4453"
     d="M 13.99023,13 13,13.99023 15.00976,16 13,18.00977 13.99023,19 16,16.99023 18.00976,19 19,18.00977 16.99023,16 19,13.99023 18.00976,13 16,15.00977 13.99023,13" />
		</svg>
	{/if}
