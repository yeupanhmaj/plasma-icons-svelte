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
       d="M 2 2 L 2 7 L 9 7 L 9 2 L 2 2 z M 10 2 L 10 14 L 11 14 L 11 2 L 10 2 z M 3 3 L 8 3 L 8 6 L 3 6 L 3 3 z M 4 9 L 4 14 L 9 14 L 9 9 L 4 9 z M 12 9 L 12 14 L 14 14 L 14 9 L 12 9 z M 5 10 L 8 10 L 8 13 L 5 13 L 5 10 z "
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
	d="m572.72253 602.11926h-1-3v-1-5h1 3zm-6 0h-1v-16h1zm-3-10h-1-6v-1-5h1 6zm-1 10h-1-4-1v-1-4-1h6v5zm0-11v-4h-5v4zm-1 10v-4h-4v4z" 
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
     d="M 4 4 L 4 14 L 16 14 L 16 4 L 4 4 z M 18 4 L 18 28 L 20 28 L 20 4 L 18 4 z M 5 5 L 15 5 L 15 13 L 5 13 L 5 5 z M 4 18 L 4 28 L 14 28 L 14 18 L 4 18 z M 22 18 L 22 28 L 28 28 L 28 18 L 22 18 z M 5 19 L 13 19 L 13 27 L 5 27 L 5 19 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
