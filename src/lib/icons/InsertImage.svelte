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
     d="M 2 2 L 2 13.28125 L 2 14 L 8 14 L 8 10 L 7.65625 10.34375 L 6.3125 9 L 6.28125 9 L 3 12.28125 L 3 3 L 13 3 L 13 8 L 14 8 L 14 2 L 2 2 z M 6 4 C 4.8954305 4 4 4.8954305 4 6 C 4 7.1045695 4.8954305 8 6 8 C 7.1045695 8 8 7.1045695 8 6 C 8 4.8954305 7.1045695 4 6 4 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z "
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
     d="M 3 3 L 3 4 L 3 19 L 4 19 L 15 19 L 12 16 L 15 13 L 17 13 L 16 12 L 14 10 L 10 14 L 9 13 L 4.1484375 17.851562 L 4 18 L 4 4 L 18 4 L 18 12 L 19 12 L 19 4 L 19 3 L 4 3 L 3 3 z M 7 5 C 5.892 5 5 5.892 5 7 C 5 8.108 5.892 9 7 9 C 8.108 9 9 8.108 9 7 C 9 5.892 8.108 5 7 5 z M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
