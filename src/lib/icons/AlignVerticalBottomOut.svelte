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
       d="M 2 2 L 2 9 L 7 9 L 7 2 L 2 2 z M 3 3 L 6 3 L 6 8 L 3 8 L 3 3 z M 9 4 L 9 9 L 14 9 L 14 4 L 9 4 z M 10 5 L 13 5 L 13 8 L 10 8 L 10 5 z M 2 10 L 2 11 L 14 11 L 14 10 L 2 10 z M 9 12 L 9 14 L 14 14 L 14 12 L 9 12 z "
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
	d="m572.72253 602.11943v-1-3h-1-5v1 3zm0-6v-1h-16v1zm-10-3v-1-6h-1-5v1 6zm10-1.00033v-1-4-1h-1-4-1v6h5zm-11 .00033h-4v-5h4zm10-1.00033h-4v-4h4z" 
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
     d="M 4 4 L 4 16 L 14 16 L 14 4 L 4 4 z M 18 4 L 18 14 L 28 14 L 28 4 L 18 4 z M 5 5 L 13 5 L 13 15 L 5 15 L 5 5 z M 19 5 L 27 5 L 27 13 L 19 13 L 19 5 z M 4 18 L 4 20 L 28 20 L 28 18 L 4 18 z M 18 22 L 18 28 L 28 28 L 28 22 L 18 22 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
