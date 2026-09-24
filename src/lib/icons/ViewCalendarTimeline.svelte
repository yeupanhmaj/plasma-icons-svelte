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
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 12 2 L 12 4 L 10 4 L 10 2 L 6 2 L 6 4 L 4 4 L 4 2 L 2 2 z M 3 5 L 13 5 L 13 13 L 3 13 L 3 5 z M 4 6 L 4 9 L 5 9 L 5 8 L 9 8 L 9 9 L 10 9 L 10 6 L 9 6 L 9 7 L 5 7 L 5 6 L 4 6 z M 7 9 L 7 12 L 8 12 L 8 11 L 11 11 L 11 12 L 12 12 L 12 9 L 11 9 L 11 10 L 8 10 L 8 9 L 7 9 z "
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
    d="M 6 3 C 6 3 5 2.99997 5 4 L 3 4 L 3 7 L 3 18 L 3 19 L 19 19 L 19 18 L 19 7 L 19 4 L 17 4 C 17 2.99997 16 3 16 3 L 13 3 C 13 3 12 2.99997 12 4 L 10 4 C 10 2.99997 9 3 9 3 L 6 3 z M 6 4 L 9 4 L 9 5 L 6 5 L 6 4 z M 13 4 L 16 4 L 16 5 L 13 5 L 13 4 z M 4 7 L 18 7 L 18 18 L 4 18 L 4 7 z M 5 8 L 5 11 L 6 11 L 6 10 L 10 10 L 10 11 L 11 11 L 11 8 L 10 8 L 10 9 L 6 9 L 6 8 L 5 8 z M 11 14 L 11 17 L 12 17 L 12 16 L 16 16 L 16 17 L 17 17 L 17 14 L 16 14 L 16 15 L 12 15 L 12 14 L 11 14 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
