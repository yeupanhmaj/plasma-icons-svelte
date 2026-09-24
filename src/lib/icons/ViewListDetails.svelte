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
       d="M 2 2 L 2 7 L 7 7 L 7 2 L 2 2 z M 8 2 L 8 3 L 14 3 L 14 2 L 8 2 z M 3 3 L 6 3 L 6 6 L 3 6 L 3 3 z M 8 5 L 8 6 L 14 6 L 14 5 L 8 5 z M 2 9 L 2 14 L 7 14 L 7 9 L 2 9 z M 8 9 L 8 10 L 12 10 L 12 9 L 8 9 z M 8 12 L 8 13 L 12 13 L 12 12 L 8 12 z "
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
     d="M 3 3 L 3 10 L 10 10 L 10 3 L 3 3 z M 4 4 L 9 4 L 9 9 L 4 9 L 4 4 z M 12 4 L 12 5 L 19 5 L 19 4 L 12 4 z M 12 8 L 12 9 L 19 9 L 19 8 L 12 8 z M 3 12 L 3 19 L 10 19 L 10 12 L 3 12 z M 12 13 L 12 14 L 16 14 L 16 13 L 12 13 z M 12 17 L 12 18 L 16 18 L 16 17 L 12 17 z "
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
     d="M 4 4 L 4 14 L 14 14 L 14 4 L 4 4 z M 5 5 L 13 5 L 13 13 L 5 13 L 5 5 z M 16 6 L 16 7 L 28 7 L 28 6 L 16 6 z M 16 11 L 16 12 L 28 12 L 28 11 L 16 11 z M 4 18 L 4 28 L 14 28 L 14 18 L 4 18 z M 16 20 L 16 21 L 24 21 L 24 20 L 16 20 z M 16 25 L 16 26 L 24 26 L 24 25 L 16 25 z "
     id="path59" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
