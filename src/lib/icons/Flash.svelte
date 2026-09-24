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
       d="M 3 2 L 3 3 L 3 5 L 2 5 L 2 14 L 14 14 L 14 5 L 13 5 L 13 3 L 13 2 L 3 2 z M 4 3 L 12 3 L 12 5 L 4 5 L 4 3 z M 3 6 L 13 6 L 13 13 L 3 13 L 3 6 z M 7 7 L 7 12 L 10 9.5 L 7 7 z "
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
     d="M 2 4 L 2 16 L 4 16 L 4 18 L 20 18 L 20 6 L 18 6 L 18 4 L 2 4 z M 3 5 L 17 5 L 17 6 L 4 6 L 4 15 L 3 15 L 3 5 z M 5 7 L 19 7 L 19 17 L 5 17 L 5 7 z M 10 9 L 10 15 L 14 12 L 10 9 z "
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
     d="M 3 6 L 3 24 L 5 24 L 5 26 L 29 26 L 29 8 L 27 8 L 27 6 L 3 6 z M 4 7 L 26 7 L 26 8 L 5 8 L 5 23 L 4 23 L 4 7 z M 6 9 L 28 9 L 28 25 L 6 25 L 6 9 z M 14 13 L 14 21 L 21 17 L 14 13 z "
     id="path10" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
