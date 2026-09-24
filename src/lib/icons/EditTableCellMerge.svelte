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
     d="M 2 2 L 2 14 L 3 14 L 9 14 L 10 14 L 13 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 6 3 L 6 5 L 7 5 L 7 3 L 9 3 L 9 5 L 10 5 L 10 3 L 11 3 L 12 3 L 13 3 L 13 5 L 13 6 L 11.65625 6 L 11 6 L 11 7 L 11.65625 7 L 13 7 L 13 9 L 12 9 L 11 9 L 11 10 L 12 10 L 13 10 L 13 13 L 12 13 L 11 13 L 10 13 L 10 11 L 9 11 L 9 13 L 7 13 L 7 11 L 6 11 L 6 13 L 3 13 L 3 10 L 5 10 L 5 9 L 3 9 L 3 7 L 5 7 L 5 6 L 3 6 L 3 5 L 3 3 z M 7 6 L 5 8 L 7 10 L 7 6 z M 9 6 L 9 10 L 11 8 L 9 6 z "
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
    d="M 3 3 L 3 4 L 3 19 L 4 19 L 18 19 L 19 19 L 19 4 L 19 3 L 3 3 z M 4 4 L 8 4 L 8 5 L 8 6 L 7 6 L 4 6 L 4 4 z M 9 4 L 13 4 L 13 5 L 13 6 L 9 6 L 9 5 L 9 4 z M 14 4 L 18 4 L 18 6 L 15 6 L 14 6 L 14 5 L 14 4 z M 4 7 L 7 7 L 8 7 L 8 8 L 9 8 L 9 7 L 13 7 L 13 8 L 14 8 L 14 7 L 18 7 L 18 9 L 15 9 L 15 10 L 18 10 L 18 12 L 15 12 L 15 13 L 18 13 L 18 15 L 14 15 L 14 14 L 13 14 L 13 15 L 9 15 L 9 14 L 8 14 L 8 15 L 7 15 L 4 15 L 4 13 L 7 13 L 7 12 L 4 12 L 4 10 L 7 10 L 7 9 L 4 9 L 4 7 z M 10 9 L 8 11 L 10 13 L 10 9 z M 12 9 L 12 13 L 14 11 L 12 9 z M 4 16 L 7 16 L 8 16 L 8 17.099609 L 8 18 L 4 18 L 4 16 z M 9 16 L 13 16 L 13 18 L 9 18 L 9 16 z M 14 16 L 18 16 L 18 18 L 14 18 L 14 16 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
