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
     d="M 2 2 L 2 14 L 10 14 L 10 13 L 3 13 L 3 3 L 13 3 L 13 7 L 14 7 L 14 2 L 2 2 z M 4 4 L 4 5 L 12 5 L 12 4 L 4 4 z M 4 7 L 4 8 L 8 8 L 8 7 L 4 7 z M 4 10 L 4 11 L 10 11 L 10 10 L 4 10 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:#1d99f3"
     d="m 9,7 0,1 1.5,0 c 1.385,0 2.5,1.115 2.5,2.5 0,0.819 -0.396,1.545 -1,2 l 0,-1.5 -1,0 0,3 3,0 0,-1 -1.063,0 C 13.595,12.368 14,11.49 14,10.5 14,8.561 12.439,7 10.5,7 L 10,7 Z" />
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
     d="M 3 3 L 3 19 L 11 19 L 11 18 L 4 18 L 4 4 L 18 4 L 18 12 L 19 12 L 19 3 L 3 3 z M 5 5 L 5 6 L 17 6 L 17 5 L 5 5 z M 5 7 L 5 8 L 14 8 L 14 7 L 5 7 z M 5 10 L 5 11 L 17 11 L 17 10 L 5 10 z M 5 12 L 5 13 L 9 13 L 9 12 L 5 12 z M 5 15 L 5 16 L 14 16 L 14 15 L 5 15 z M 12 17 L 12 18 L 15 18 L 15 17 L 12 17 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 12 L 11 13 L 15 13 L 15.5 13 C 16.885 13 18 14.115 18 15.5 C 18 16.3187 17.60449 17.035134 17 17.490234 L 17 16 L 16 16 L 16 17.949219 L 16 18 L 16 18.951172 L 16 19 L 17 19 L 19 19 L 19 18 L 17.923828 18 C 18.581798 17.3681 19 16.4903 19 15.5 C 19 13.561 17.439 12 15.5 12 L 11 12 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
