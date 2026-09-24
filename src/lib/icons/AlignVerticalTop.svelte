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
       d="M 2 2 L 2 3 L 14 3 L 14 2 L 2 2 z M 2 4 L 2 9 L 7 9 L 7 4 L 2 4 z M 9 4 L 9 14 L 14 14 L 14 4 L 9 4 z M 3 5 L 6 5 L 6 8 L 3 8 L 3 5 z M 10 5 L 13 5 L 13 13 L 10 13 L 10 5 z "
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
	d="m566.72253 602.11926v-13h6v13h-6m1-1h4v-11h-4v11m-11-6v-6h6v6h-6m1-1h4v-4h-4v4m-1-7v-1h16v1h-16" 
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
     d="M 4 4 L 4 6 L 28 6 L 28 4 L 4 4 z M 4 8 L 4 18 L 14 18 L 14 8 L 4 8 z M 18 8 L 18 28 L 28 28 L 28 8 L 18 8 z M 5 9 L 13 9 L 13 17 L 5 17 L 5 9 z M 19 9 L 27 9 L 27 27 L 19 27 L 19 9 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
