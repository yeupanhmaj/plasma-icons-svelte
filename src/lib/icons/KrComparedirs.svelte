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
     d="M 4.5 2 A 1.500015 1.500015 0 0 0 3 3.5 A 1.500015 1.500015 0 0 0 4 4.9121094 L 4 11 C 4 12.105 4.895 13 6 13 L 7 13 L 7 14 L 9 12.5 L 7 11 L 7 12 L 6 12 C 5.448 12 5 11.552 5 11 L 5 4.9121094 A 1.500015 1.500015 0 0 0 6 3.5 A 1.500015 1.500015 0 0 0 4.5 2 z M 9 2 L 7 3.5 L 9 5 L 9 4 L 10 4 C 10.552 4 11 4.448 11 5 L 11 11.087891 A 1.500015 1.500015 0 0 0 10 12.5 A 1.500015 1.500015 0 0 0 11.5 14 A 1.500015 1.500015 0 0 0 13 12.5 A 1.500015 1.500015 0 0 0 12 11.087891 L 12 5 C 12 3.895 11.105 3 10 3 L 9 3 L 9 2 z M 4.5 3 A 0.5 0.5 0 0 1 5 3.5 A 0.5 0.5 0 0 1 4.5 4 A 0.5 0.5 0 0 1 4 3.5 A 0.5 0.5 0 0 1 4.5 3 z M 11.5 12 A 0.5 0.5 0 0 1 12 12.5 A 0.5 0.5 0 0 1 11.5 13 A 0.5 0.5 0 0 1 11 12.5 A 0.5 0.5 0 0 1 11.5 12 z "
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
     d="M 6.5 3 A 1.500015 1.500015 0 0 0 5 4.5 A 1.500015 1.500015 0 0 0 6 5.9121094 L 6 15 A 2 2 0 0 0 8 17 L 9 17 L 9 19 L 12 16.5 L 9 14 L 9 16 L 8 16 A 1 1 0 0 1 7 15 L 7 5.9121094 A 1.500015 1.500015 0 0 0 8 4.5 A 1.500015 1.500015 0 0 0 6.5 3 z M 13 3 L 10 5.5 L 13 8 L 13 6 L 14 6 A 1 1 0 0 1 15 7 L 15 16.087891 A 1.500015 1.500015 0 0 0 14 17.5 A 1.500015 1.500015 0 0 0 15.5 19 A 1.500015 1.500015 0 0 0 17 17.5 A 1.500015 1.500015 0 0 0 16 16.087891 L 16 7 A 2 2 0 0 0 14 5 L 13 5 L 13 3 z M 6.5 4 A 0.5 0.5 0 0 1 7 4.5 A 0.5 0.5 0 0 1 6.5 5 A 0.5 0.5 0 0 1 6 4.5 A 0.5 0.5 0 0 1 6.5 4 z M 15.5 17 A 0.5 0.5 0 0 1 16 17.5 A 0.5 0.5 0 0 1 15.5 18 A 0.5 0.5 0 0 1 15 17.5 A 0.5 0.5 0 0 1 15.5 17 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
