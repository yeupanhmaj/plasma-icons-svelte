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
       d="M 2 2 L 2 7 L 12 7 L 12 2 L 2 2 z M 13 2 L 13 14 L 14 14 L 14 2 L 13 2 z M 3 3 L 11 3 L 11 6 L 3 6 L 3 3 z M 7 9 L 7 14 L 12 14 L 12 9 L 7 9 z M 8 10 L 11 10 L 11 13 L 8 13 L 8 10 z "
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
     d="m556.72253 592.11926h13v-6h-13v6m1-1v-4h11v4h-11m6 11h6v-6h-6v6m1-1v-4h4v4h-4m7 1h1v-16h-1v16" 
	 transform="translate(-553.72253-583.11926)"
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
     d="M 4 4 L 4 14 L 24 14 L 24 4 L 4 4 z M 26 4 L 26 28 L 28 28 L 28 4 L 26 4 z M 5 5 L 23 5 L 23 13 L 5 13 L 5 5 z M 14 18 L 14 28 L 24 28 L 24 18 L 14 18 z M 15 19 L 23 19 L 23 27 L 15 27 L 15 19 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
