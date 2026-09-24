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
     d="M 2 2 L 2 9 L 2 14 L 3 14 L 7 14 L 7 13 L 3 13 L 3 9 L 3 5 L 13 5 L 13 8 L 14 8 L 14 2 L 12 2 L 12 4 L 10 4 L 10 2 L 6 2 L 6 4 L 4 4 L 4 2 L 2 2 z M 4 6 L 4 8 L 6 8 L 6 6 L 4 6 z M 7 6 L 7 8 L 9 8 L 9 6 L 7 6 z M 10 6 L 10 8 L 12 8 L 12 6 L 10 6 z M 4 9 L 4 11 L 6 11 L 6 9 L 4 9 z M 8 9 L 8 14 L 14 14 L 14 9 L 13 9 L 13 10 L 12 10 L 12 9 L 10 9 L 10 10 L 9 10 L 9 9 L 8 9 z M 9 11 L 13 11 L 13 13 L 9 13 L 9 11 z "
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
    d="M 6 3 C 6 3 5 2.99997 5 4 L 3 4 L 3 7 L 3 18 L 3 19 L 10 19 L 10 18 L 4 18 L 4 7 L 18 7 L 18 10 L 19 10 L 19 7 L 19 4 L 17 4 C 17 2.99997 16 3 16 3 L 13 3 C 13 3 12 2.99997 12 4 L 10 4 C 10 2.99997 9 3 9 3 L 6 3 z M 6 4 L 9 4 L 9 5 L 6 5 L 6 4 z M 13 4 L 16 4 L 16 5 L 13 5 L 13 4 z M 6 8 L 6 10 L 8 10 L 8 8 L 6 8 z M 10 8 L 10 10 L 12 10 L 12 8 L 10 8 z M 14 8 L 14 10 L 16 10 L 16 8 L 14 8 z M 6 11 L 6 13 L 8 13 L 8 11 L 6 11 z M 11 11 L 11 19 L 19 19 L 19 11 L 18 11 L 18 12 L 17 12 L 17 11 L 13 11 L 13 12 L 12 12 L 12 11 L 11 11 z M 12 13 L 18 13 L 18 18 L 12 18 L 12 13 z M 13 14 L 13 15 L 14 15 L 14 14 L 13 14 z M 16 14 L 16 15 L 17 15 L 17 14 L 16 14 z M 16 16 L 16 17 L 17 17 L 17 16 L 16 16 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
