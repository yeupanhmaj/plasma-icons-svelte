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
        d="m 6,4 0,1 -4,0 0,1 4,0 0,2 4,0 0,-2 4,0 0,-1 -4,0 0,-1 z M 7,5 9,5 9,7 7,7 Z"
        class="ColorScheme-Text"
        />
  <path 
       style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
   d="M 9,9.83 10.667,11.497 9,13.164 9.833,13.997 11.5,12.33 13.167,13.997 14,13.164 12.333,11.497 14,9.83 13.167,8.997 11.5,10.664 9.833,8.997 Z" />
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
     d="M 9 9 L 9 10 L 3 10 L 3 11 L 9 11 L 9 13 L 13 13 L 13 11 L 19 11 L 19 10 L 13 10 L 13 9 L 9 9 z M 10 10 L 12 10 L 12 11 L 12 12 L 10 12 L 10 10 z "
     class="ColorScheme-Text"
     />
    <path
     style="fill:#da4453;fill-opacity:1;stroke:none"
     d="M 13.990234 13 L 13 13.990234 L 15.009766 16 L 13 18.009766 L 13.990234 19 L 16 16.990234 L 18.009766 19 L 19 18.009766 L 16.990234 16 L 19 13.990234 L 18.009766 13 L 16 15.009766 L 13.990234 13 z "
     />
		</svg>
	{/if}
