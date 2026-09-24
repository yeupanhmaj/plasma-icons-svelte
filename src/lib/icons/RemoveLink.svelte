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
     d="M 4,2 4,4 2,4 2,5 4,5 4,7 7,7 7,6 5,6 5,3 7,3 7,2 5,2 Z m 5,0 0,1 2,0 0,3 -2,0 0,1 3,0 0,-2 2,0 0,-1 -2,0 0,-2 -1,0 z M 7,4 7,5 9,5 9,4 Z" 
     class="ColorScheme-Text"/>
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="M 9.71,9.03 9.003,9.737 10.796,11.53 9.003,13.323 9.71,14.03 11.503,12.237 13.296,14.03 14.003,13.323 12.21,11.53 14.003,9.737 13.296,9.03 11.503,10.823 Z" />
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
     d="M 6 3 L 6 5 L 3 5 L 3 6 L 6 6 L 6 8 L 10 8 L 10 7 L 7 7 L 7 4 L 10 4 L 10 3 L 6 3 z M 12 3 L 12 4 L 15 4 L 15 7 L 12 7 L 12 8 L 16 8 L 16 6 L 19 6 L 19 5 L 16 5 L 16 3 L 12 3 z M 10 5 L 10 6 L 12 6 L 12 5 L 10 5 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 14.707031 14.033203 L 14 14.740234 L 15.792969 16.533203 L 14 18.326172 L 14.707031 19.033203 L 16.5 17.240234 L 18.292969 19.033203 L 19 18.326172 L 17.207031 16.533203 L 19 14.740234 L 18.292969 14.033203 L 16.5 15.826172 L 14.707031 14.033203 z "
     />
		</svg>
	{/if}
