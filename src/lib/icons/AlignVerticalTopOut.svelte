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
       d="M 9 2 L 9 4 L 14 4 L 14 2 L 9 2 z M 2 5 L 2 6 L 14 6 L 14 5 L 2 5 z M 9 7 L 9 14 L 14 14 L 14 7 L 9 7 z M 10 8 L 13 8 L 13 13 L 10 13 L 10 8 z M 2 9 L 2 14 L 7 14 L 7 9 L 2 9 z M 3 10 L 6 10 L 6 13 L 3 13 L 3 10 z "
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
	d="m572.72253 586.1191v1 3h-1-5v-1-3zm0 6v1h-16v-1zm-10 3v1 6h-1-5v-1-6zm10 1.00033v1 4 1h-1-4-1v-6h5zm-11-.00033h-4v5h4zm10 1.00033h-4v4h4z" 
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
     d="M 18 4 L 18 10 L 28 10 L 28 4 L 18 4 z M 4 12 L 4 14 L 28 14 L 28 12 L 4 12 z M 4 16 L 4 28 L 14 28 L 14 16 L 4 16 z M 5 17 L 13 17 L 13 27 L 5 27 L 5 17 z M 18 18 L 18 28 L 28 28 L 28 18 L 18 18 z M 19 19 L 27 19 L 27 27 L 19 27 L 19 19 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
