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
     d="M 3 2 L 3 14 L 8 14 L 8 13 L 4 13 L 4 3 L 9 3 L 9 6 L 12 6 L 12 9 L 13 9 L 13 6 L 13 5 L 10 2 L 9 2 L 3 2 z M 10 9 L 10 11 L 8 11 L 8 12 L 10 12 L 10 14 L 11 14 L 11 12 L 13 12 L 13 11 L 11 11 L 11 9 L 10 9 z "
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
     d="M 4 3 L 4 19 L 5 19 L 13 19 L 13 18 L 5 18 L 5 4 L 13 4 L 13 7 L 13 8 L 17 8 L 17 14 L 18 14 L 18 8.40625 L 18 7 L 18 6.9921875 L 14.007812 3 L 14 3.0097656 L 14 3 L 13 3 L 5 3 L 4 3 z M 15 14 L 15 16 L 13 16 L 13 17 L 15 17 L 15 19 L 16 19 L 16 17 L 18 17 L 18 16 L 16 16 L 16 14 L 15 14 z "
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
     d="m 6,4 0,24 9,0 0,-1 -8,0 0,-22 11,0 0,7 7,0 0,5 1,0 0,-6 L 19,4 18,4 6,4 Z m 14,13 0,5 -5,0 0,1 5,0 0,5 1,0 0,-5 5,0 0,-1 -5,0 0,-5 -1,0 z"
     id="path6"
     class="ColorScheme-Text" />
		</svg>
	{/if}
