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
     d="M 2 1 L 2 2 L 1 2 L 1 3 L 2 3 L 2 13 L 1 13 L 1 14 L 2 14 L 2 15 L 3 15 L 3 14 L 13 14 L 13 15 L 14 15 L 14 14 L 15 14 L 15 13 L 14 13 L 14 3 L 15 3 L 15 2 L 14 2 L 14 1 L 13 1 L 13 2 L 3 2 L 3 1 L 2 1 z M 3 3 L 13 3 L 13 13 L 3 13 L 3 3 z M 4 4 L 4 6 L 7 6 L 7 12 L 9 12 L 9 6 L 12 6 L 12 4 L 4 4 z "
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
     d="M 3 2 L 3 3 L 2 3 L 2 4 L 3 4 L 3 18 L 2 18 L 2 19 L 3 19 L 3 20 L 4 20 L 4 19 L 14 19 L 14 18 L 4 18 L 4 4 L 18 4 L 18 14 L 19 14 L 19 4 L 20 4 L 20 3 L 19 3 L 19 2 L 18 2 L 18 3 L 4 3 L 4 2 L 3 2 z M 6 6 L 6 8 L 10 8 L 10 16 L 12 16 L 12 8 L 16 8 L 16 6 L 6 6 z M 17 15 L 17 17 L 15 17 L 15 18 L 17 18 L 17 20 L 18 20 L 18 18 L 20 18 L 20 17 L 18 17 L 18 15 L 17 15 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
