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
     d="M 4 2 L 4 3 L 5 3 L 5 2 L 4 2 z M 11 2 L 11 3 L 12 3 L 12 2 L 11 2 z M 2 4 L 2 12 L 7 12 L 7 10 L 9 10 L 9 12 L 14 12 L 14 4 L 9 4 L 9 6 L 7 6 L 7 4 L 2 4 z M 3 5 L 6 5 L 6 11 L 3 11 L 3 5 z M 10 5 L 13 5 L 13 11 L 10 11 L 10 5 z M 11 6 L 11 10 L 12 10 L 12 6 L 11 6 z M 7 7 L 9 7 L 9 9 L 7 9 L 7 7 z M 4 13 L 4 14 L 5 14 L 5 13 L 4 13 z M 11 13 L 11 14 L 12 14 L 12 13 L 11 13 z "
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
     d="M 6 3 L 6 4 L 7 4 L 7 3 L 6 3 z M 15 3 L 15 4 L 16 4 L 16 3 L 15 3 z M 6 5 L 6 6 L 3 6 L 3 16 L 6 16 L 6 17 L 7 17 L 7 16 L 10 16 L 10 13 L 12 13 L 12 16 L 15 16 L 15 17 L 16 17 L 16 16 L 19 16 L 19 6 L 16 6 L 16 5 L 15 5 L 15 6 L 12 6 L 12 9 L 10 9 L 10 6 L 7 6 L 7 5 L 6 5 z M 4 7 L 9 7 L 9 15 L 4 15 L 4 7 z M 13 7 L 18 7 L 18 15 L 13 15 L 13 7 z M 14 8 L 14 14 L 17 14 L 17 8 L 14 8 z M 10 10 L 12 10 L 12 12 L 10 12 L 10 10 z M 6 18 L 6 19 L 7 19 L 7 18 L 6 18 z M 15 18 L 15 19 L 16 19 L 16 18 L 15 18 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
