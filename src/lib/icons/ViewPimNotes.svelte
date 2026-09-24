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
       d="M 3 2 L 3 3 L 2 3 L 2 14 L 14 14 L 14 3 L 13 3 L 13 2 L 12 2 L 12 3 L 11 3 L 11 2 L 10 2 L 10 3 L 6 3 L 6 2 L 5 2 L 5 3 L 4 3 L 4 2 L 3 2 z M 3 4 L 13 4 L 13 13 L 3 13 L 3 4 z M 4 5 L 4 6 L 12 6 L 12 5 L 4 5 z M 4 7 L 4 8 L 8 8 L 8 7 L 4 7 z M 4 9 L 4 10 L 10 10 L 10 9 L 4 9 z M 10 11 L 10 12 L 12 12 L 12 11 L 10 11 z "
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
    d="M 3 3 L 3 5 L 3 6 L 3 19 L 4 19 L 12 19 L 14 19 L 16 19 L 18 19 L 19 19 L 19 16 L 19 14 L 19 5 L 19 3 L 18 3 L 18 4 L 16 4 L 16 3 L 15 3 L 15 4 L 13 4 L 13 3 L 12 3 L 12 4 L 10 4 L 10 3 L 9 3 L 9 4 L 7 4 L 7 3 L 6 3 L 6 4 L 4 4 L 4 3 L 3 3 z M 4 6 L 18 6 L 18 7 L 18 8 L 18 9 L 18 10 L 18 15 L 18 17 L 18 18 L 17 18 L 15 18 L 12 18 L 4 18 L 4 10 L 4 9 L 4 8 L 4 7 L 4 6 z M 6 8 L 6 9 L 16 9 L 16 8 L 6 8 z M 6 11 L 6 12 L 12 12 L 12 11 L 6 11 z M 6 14 L 6 15 L 14 15 L 14 14 L 6 14 z M 14 16 L 14 17 L 16 17 L 16 16 L 14 16 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
