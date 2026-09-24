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
			<path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 2,2 0,12 7,0 0,-1 -6,0 0,-8 10,0 0,3 1,0 0,-6 -2,0 0,2 L 10,4 10,2 6,2 6,4 4,4 4,2 Z"
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 10 9 L 10 10 L 10 14 L 15 14 L 15 9 L 14 9 L 14 10 L 13 10 L 13 9 L 12 9 L 12 10 L 11 10 L 11 9 L 10 9 z M 11 11 L 14 11 L 14 13 L 11 13 L 11 11 z "
        class="ColorScheme-Accent"
        />
		</svg>
	{:else}
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
     d="M 3 3 L 3 19 L 12 19 L 12 18 L 4 18 L 4 7 L 18 7 L 18 12 L 19 12 L 19 3 L 17 3 L 17 6 L 15 6 L 15 3 L 7 3 L 7 6 L 5 6 L 5 3 L 3 3 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 13 13 L 13 14 L 13 19 L 19 19 L 19 14 L 19 13 L 18 13 L 18 14 L 17 14 L 17 13 L 15 13 L 15 14 L 14 14 L 14 13 L 13 13 z M 14 15 L 18 15 L 18 18 L 14 18 L 14 15 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
