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
       d="M 2 2 L 2 5 L 5 5 L 5 2 L 2 2 z M 11 2 L 11 5 L 14 5 L 14 2 L 11 2 z M 3 3 L 4 3 L 4 4 L 3 4 L 3 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 6 4 L 6 5 L 7 5 L 7 4 L 6 4 z M 9 4 L 9 5 L 10 5 L 10 4 L 9 4 z M 4 6 L 4 7 L 5 7 L 5 6 L 4 6 z M 11 6 L 11 7 L 12 7 L 12 6 L 11 6 z M 4 9 L 4 10 L 5 10 L 5 9 L 4 9 z M 9 9 L 9 10 L 11 10 L 11 14 L 12 14 L 12 10 L 14 10 L 14 9 L 12 9 L 11 9 L 9 9 z M 2 11 L 2 14 L 5 14 L 5 11 L 2 11 z M 6 11 L 6 12 L 7 12 L 7 11 L 6 11 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z "
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
    d="M 3 3 L 3 5 L 3 6 L 6 6 L 6 5 L 6 3 L 4 3 L 3 3 z M 16 3 L 16 4 L 16 5 L 16 6 L 17 6 L 18 6 L 19 6 L 19 5 L 19 4 L 19 3 L 16 3 z M 4 4 L 5 4 L 5 5 L 4 5 L 4 4 z M 17 4 L 18 4 L 18 5 L 17 5 L 17 4 z M 7 5 L 7 6 L 9 6 L 9 5 L 7 5 z M 10 5 L 10 6 L 12 6 L 12 5 L 10 5 z M 13 5 L 13 6 L 15 6 L 15 5 L 13 5 z M 5 7 L 5 9 L 6 9 L 6 7 L 5 7 z M 16 7 L 16 9 L 17 9 L 17 7 L 16 7 z M 5 10 L 5 12 L 6 12 L 6 10 L 5 10 z M 16 10 L 16 12 L 17 12 L 17 10 L 16 10 z M 5 13 L 5 15 L 6 15 L 6 13 L 5 13 z M 14 13 L 14 14 L 16 14 L 16 19 L 17 19 L 17 14 L 19 14 L 19 13 L 14 13 z M 3 16 L 3 17 L 3 19 L 4 19 L 5 19 L 6 19 L 6 16 L 3 16 z M 7 16 L 7 17 L 9 17 L 9 16 L 7 16 z M 10 16 L 10 17 L 12 17 L 12 16 L 10 16 z M 4 17 L 5 17 L 5 18 L 4 18 L 4 17 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
