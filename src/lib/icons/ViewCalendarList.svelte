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
     d="M 3 2 L 3 3 L 3 4 L 2 4 L 2 5 L 3 5 L 3 11 L 2 11 L 2 12 L 3 12 L 3 13 L 3 14 L 5 14 L 7 14 L 14 14 L 14 13 L 14 7 L 14 2 L 13 2 L 3 2 z M 5 3 L 13 3 L 13 7 L 13 13 L 7 13 L 5 13 L 5 3 z M 6 4 L 6 5 L 12 5 L 12 4 L 6 4 z M 6 8 L 6 9 L 12 9 L 12 8 L 6 8 z M 10 11 L 10 12 L 12 12 L 12 11 L 10 11 z "
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
    d="M 4 3 L 4 5 L 3 5 L 3 6 L 4 6 L 4 7 L 3 7 L 3 8 L 4 8 L 4 14 L 3 14 L 3 15 L 4 15 L 4 16 L 3 16 L 3 17 L 4 17 L 4 19 L 7 19 L 19 19 L 19 18 L 19 3 L 7 3 L 4 3 z M 7 4 L 9 4 L 10 4 L 18 4 L 18 6 L 18 7 L 18 9 L 18 10 L 18 12 L 18 13 L 18 15 L 18 16 L 18 18 L 10 18 L 9 18 L 7 18 L 7 16 L 7 15 L 7 13 L 7 12 L 7 10 L 7 9 L 7 7 L 7 6 L 7 4 z M 8 6 L 8 7 L 17 7 L 17 6 L 8 6 z M 8 10 L 8 11 L 17 11 L 17 10 L 8 10 z M 8 14 L 8 15 L 17 15 L 17 14 L 8 14 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
