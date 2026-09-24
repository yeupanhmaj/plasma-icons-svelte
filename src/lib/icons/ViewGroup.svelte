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
       d="M 2 2 L 2 5 L 2 14 L 3 14 L 14 14 L 14 13 L 14 2 L 3 2 L 2 2 z M 3 5 L 13 5 L 13 13 L 3 13 L 3 5 z M 4 6 L 4 8 L 6 8 L 6 6 L 4 6 z M 7 6 L 7 8 L 9 8 L 9 6 L 7 6 z M 10 6 L 10 8 L 12 8 L 12 6 L 10 6 z M 4 10 L 4 12 L 6 12 L 6 10 L 4 10 z M 7 10 L 7 12 L 9 12 L 9 10 L 7 10 z "
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 27}
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
    d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 7 L 18 7 L 18 18 L 4 18 L 4 7 z M 6 8 L 6 12 L 10 12 L 10 8 L 6 8 z M 12 8 L 12 12 L 16 12 L 16 8 L 12 8 z M 7 9 L 9 9 L 9 11 L 7 11 L 7 9 z M 13 9 L 15 9 L 15 11 L 13 11 L 13 9 z M 6 13 L 6 17 L 10 17 L 10 13 L 6 13 z M 12 13 L 12 17 L 16 17 L 16 13 L 12 13 z M 7 14 L 9 14 L 9 16 L 7 16 L 7 14 z M 13 14 L 15 14 L 15 16 L 13 16 L 13 14 z "
	class="ColorScheme-Text"
    />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4 4 L 4 28 L 28 28 L 28 4 L 4 4 z M 5 9 L 27 9 L 27 27 L 5 27 L 5 9 z M 8 11 L 8 17 L 15 17 L 15 11 L 8 11 z M 17 11 L 17 17 L 24 17 L 24 11 L 17 11 z M 9 12 L 14 12 L 14 16 L 9 16 L 9 12 z M 18 12 L 23 12 L 23 16 L 18 16 L 18 12 z M 8 19 L 8 25 L 15 25 L 15 19 L 8 19 z M 17 19 L 17 25 L 24 25 L 24 19 L 17 19 z M 9 20 L 14 20 L 14 24 L 9 24 L 9 20 z M 18 20 L 23 20 L 23 24 L 18 24 L 18 20 z "
     id="path45" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
