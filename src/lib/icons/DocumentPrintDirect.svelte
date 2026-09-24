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
     d="M 4 2 L 4 3 L 4 5 L 3 5 L 2 5 L 2 6 L 2 11 L 2 12 L 3 12 L 5 12 L 5 13 L 5 14 L 10 14 L 10 13 L 6 13 L 6 12 L 10 12 L 10 10 L 4 10 L 4 11 L 3 11 L 3 6 L 13 6 L 13 7 L 13 9 L 14 9 L 14 7 L 14 6 L 14 5 L 12 5 L 12 3 L 12 2 L 4 2 z M 5 3 L 11 3 L 11 5 L 5 5 L 5 3 z M 4 7 L 4 8 L 6 8 L 6 7 L 4 7 z M 11 9 L 11 14 L 14 11.5 L 11 9 z "
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
	d="M 5 3 L 5 4 L 5 8 L 3 8 L 3 9 L 3 16 L 4 16 L 7 16 L 7 18 L 7 19 L 15 19 L 15 16 L 16 16 L 16 13 L 15 13 L 6 13 L 6 15 L 4 15 L 4 9 L 18 9 L 18 12 L 18 13 L 19 13 L 19 12 L 19 9 L 19 8 L 17 8 L 17 4 L 17 3 L 5 3 z M 6 4 L 16 4 L 16 8 L 15 8 L 15 7 L 7 7 L 7 8 L 6 8 L 6 4 z M 7 5 L 7 6 L 15 6 L 15 5 L 7 5 z M 5 10 L 5 11 L 8 11 L 8 10 L 5 10 z M 17 14 L 17 19 L 20 16.5 L 17 14 z M 8 16 L 14 16 L 14 18 L 8 18 L 8 16 z "
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
     id="path8"
     d="m 7,4 0,8 -3,0 0,12 6,0 0,4 11,0 0,-1 -10,0 0,-3 11,0 0,-5 -14,0 0,4 -3,0 0,-10 22,0 0,5 1,0 0,-6 -3,0 0,-8 z m 1,1 16,0 0,7 -16,0 z m 2,2 0,1 12,0 0,-1 z m 0,3 0,1 12,0 0,-1 z m 12,5 0,1 4,0 0,-1 z"
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     id="path10"
     d="M 24,28 29,23.5 24,19 Z" 
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
