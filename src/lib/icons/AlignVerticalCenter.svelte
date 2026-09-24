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
       d="M 3 3 L 3 7.5 L 2 7.5 L 2 8.5 L 3 8.5 L 3 13 L 7 13 L 7 8.5 L 9 8.5 L 9 11 L 13 11 L 13 8.5 L 14 8.5 L 14 7.5 L 13 7.5 L 13 5 L 9 5 L 9 7.5 L 7 7.5 L 7 3 L 3 3 z M 4 4 L 6 4 L 6 12 L 4 12 L 4 4 z M 10 6 L 12 6 L 12 10 L 10 10 L 10 6 z "
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
	d="m572.72253 593.61926h-1v-2.5h-1-3-1v2.5h-4v-5.5h-1-4v1 4.5h-1v1h1v5.5h1 3 1v-5.5h4v1.5 1h1 3 1v-1-1.5h1v-1m-2-1.5v4h-3v-4h3m-9-3v10h-3v-10h3" transform="translate(-553.72253-583.11926)"
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
     d="M 6 7 L 6 15 L 4 15 L 4 17 L 6 17 L 6 25 L 14 25 L 14 17 L 18 17 L 18 21 L 26 21 L 26 17 L 28 17 L 28 15 L 26 15 L 26 11 L 18 11 L 18 15 L 14 15 L 14 7 L 6 7 z M 7 8 L 13 8 L 13 24 L 7 24 L 7 8 z M 19 12 L 25 12 L 25 20 L 19 20 L 19 12 z "
     id="path6" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
