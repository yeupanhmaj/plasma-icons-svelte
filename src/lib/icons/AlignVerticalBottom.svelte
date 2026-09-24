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
       d="M 9 2 L 9 12 L 14 12 L 14 2 L 9 2 z M 10 3 L 13 3 L 13 11 L 10 11 L 10 3 z M 2 7 L 2 12 L 7 12 L 7 7 L 2 7 z M 3 8 L 6 8 L 6 11 L 3 11 L 3 8 z M 2 13 L 2 14 L 14 14 L 14 13 L 2 13 z "
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
	d="m13 3v13h6v-13h-6m1 1h4v11h-4v-11m-11 6v6h6v-6h-6m1 1h4v4h-4v-4m-1 7v1h16v-1h-16"
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
     d="M 18 4 L 18 24 L 28 24 L 28 4 L 18 4 z M 19 5 L 27 5 L 27 23 L 19 23 L 19 5 z M 4 14 L 4 24 L 14 24 L 14 14 L 4 14 z M 5 15 L 13 15 L 13 23 L 5 23 L 5 15 z M 4 26 L 4 28 L 28 28 L 28 26 L 4 26 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
