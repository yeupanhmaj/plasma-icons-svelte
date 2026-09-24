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
			<path class="ColorScheme-Text" 
          style="fill:currentColor; fill-opacity:1; stroke:none" 
          d="M 2 2 L 2 3 L 3 3 L 3 13 L 2 13 L 2 14 L 5 14 L 5 13 L 4 13 L 4 3 L 5 3 L 5 2 L 2 2 z M 6 3 L 6 4 L 13 4 L 13 12 L 6 12 L 6 13 L 14 13 L 14 3 L 6 3 z M 9 5 L 7 11 L 8 11 L 10 5 L 9 5 z M 11 5 L 9 11 L 10 11 L 12 5 L 11 5 z M 5 10 L 5 11 L 6 11 L 6 10 L 5 10 z "
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
			<path class="ColorScheme-Text" 
          style="fill:currentColor; fill-opacity:1; stroke:none" 
          d="M 2 3 L 2 4 L 4 4 L 4 18 L 2 18 L 2 19 L 7 19 L 7 18 L 5 18 L 5 4 L 7 4 L 7 3 L 2 3 z M 8 4 L 8 5 L 18 5 L 18 17 L 8 17 L 8 18 L 19 18 L 19 4 L 8 4 z M 13 6 L 9 16 L 10 16 L 14 6 L 13 6 z M 16 6 L 12 16 L 13 16 L 17 6 L 16 6 z M 7 15 L 7 16 L 8 16 L 8 15 L 7 15 z "
    />
		</svg>
	{/if}
