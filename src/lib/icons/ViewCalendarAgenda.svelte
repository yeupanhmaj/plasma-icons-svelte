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
     d="M 2 2 L 2 4 L 3 4 L 3 5 L 2 5 L 2 11 L 3 11 L 3 12 L 2 12 L 2 14 L 5 14 L 13 14 L 14 14 L 14 3 L 14 2 L 5 2 L 2 2 z M 5 3 L 7 3 L 7 5 L 5 5 L 5 3 z M 8 3 L 13 3 L 13 5 L 8 5 L 8 3 z M 5 6 L 7 6 L 7 7 L 7 8 L 7 9 L 7 10 L 5 10 L 5 9 L 5 8 L 5 7 L 5 6 z M 8 6 L 13 6 L 13 8 L 13 9 L 13 10 L 8 10 L 8 9 L 8 8 L 8 6 z M 5 11 L 7 11 L 7 13 L 5 13 L 5 11 z M 8 11 L 13 11 L 13 13 L 8 13 L 8 11 z "
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
    d="M 4 3 L 4 5 L 3 5 L 3 6 L 4 6 L 4 7 L 3 7 L 3 8 L 4 8 L 4 14 L 3 14 L 3 15 L 4 15 L 4 16 L 3 16 L 3 17 L 4 17 L 4 19 L 7 19 L 19 19 L 19 18 L 19 3 L 7 3 L 4 3 z M 7 4 L 9 4 L 9 6 L 7 6 L 7 4 z M 10 4 L 18 4 L 18 6 L 10 6 L 10 4 z M 7 7 L 9 7 L 9 9 L 7 9 L 7 7 z M 10 7 L 18 7 L 18 9 L 10 9 L 10 7 z M 7 10 L 9 10 L 9 12 L 7 12 L 7 10 z M 10 10 L 18 10 L 18 12 L 10 12 L 10 10 z M 7 13 L 9 13 L 9 15 L 7 15 L 7 13 z M 10 13 L 18 13 L 18 15 L 10 15 L 10 13 z M 7 16 L 9 16 L 9 18 L 7 18 L 7 16 z M 10 16 L 18 16 L 18 18 L 10 18 L 10 16 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
