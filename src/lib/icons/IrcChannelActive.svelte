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
     d="m 4,2 0,2 -2,0 0,1 2,0 0,6 -2,0 0,1 2,0 0,2 1,0 0,-2 6,0 0,2 1,0 0,-2 2,0 0,-1 -2,0 0,-6 2.310547,0 0,-1 L 12,4 12,2 11,2 11,4 5,4 5,2 4,2 Z m 1,3 6,0 0,6 -6,0 0,-6 z"
     class="ColorScheme-Text"
     />
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
   d="m 10.499991,6.9999781 c 1.939,0 3.5,1.561 3.5,3.4999999 0,1.939 -1.561,3.5 -3.5,3.5 -1.939,0 -3.5,-1.561 -3.5,-3.5 0,-1.9389999 1.561,-3.4999999 3.5,-3.4999999 z"/>
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
     d="M 7 3 L 7 7 L 3 7 L 3 8 L 7 8 L 7 14 L 3 14 L 3 15 L 7 15 L 7 19 L 8 19 L 8 15 L 11 15 L 11 14 L 8 14 L 8 8 L 14 8 L 14 11 L 15 11 L 15 8 L 19 8 L 19 7 L 15 7 L 15 3 L 14 3 L 14 7 L 8 7 L 8 3 L 7 3 z "
     class="ColorScheme-Text"
     />
    <path
     style="fill:#2ecc71;fill-opacity:1;stroke:none"
     d="M 15.5 12 C 13.561 12 12 13.561 12 15.5 C 12 17.439 13.561 19 15.5 19 C 17.439 19 19 17.439 19 15.5 C 19 13.561 17.439 12 15.5 12 z "
     />
		</svg>
	{/if}
