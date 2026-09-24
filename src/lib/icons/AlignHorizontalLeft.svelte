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
       d="M 2 2 L 2 14 L 3 14 L 3 2 L 2 2 z M 4 2 L 4 7 L 14 7 L 14 2 L 4 2 z M 5 3 L 13 3 L 13 6 L 5 6 L 5 3 z M 4 9 L 4 14 L 9 14 L 9 9 L 4 9 z M 5 10 L 8 10 L 8 13 L 5 13 L 5 10 z "
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
     d="m572.72253 592.11926h-13v-6h13v6m-1-1v-4h-11v4h11m-6 11h-6v-6h6v6m-1-1v-4h-4v4h4m-7 1h-1v-16h1v16" transform="translate(-553.72253-583.11926)"
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
     d="M 4 4 L 4 28 L 6 28 L 6 4 L 4 4 z M 8 4 L 8 14 L 28 14 L 28 4 L 8 4 z M 9 5 L 27 5 L 27 13 L 9 13 L 9 5 z M 8 18 L 8 28 L 18 28 L 18 18 L 8 18 z M 9 19 L 17 19 L 17 27 L 9 27 L 9 19 z "
     id="path158" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
