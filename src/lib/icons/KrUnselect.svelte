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
     d="M 3.75,2 C 3.357,2 3,2.357 3,2.75 3,3.143 3.357,3.5 3.75,3.5 4.143,3.5 4.5,3.143 4.5,2.75 4.5,2.357 4.143,2 3.75,2 M 4.5,4.25 4.505,14 7.5,10 12,10 Z" 
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     d="M 9,2.83 10.667,4.497 9,6.164 9.833,6.997 11.5,5.33 13.167,6.997 14,6.164 12.333,4.497 14,2.83 13.167,1.997 11.5,3.664 9.833,1.997 Z" />
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
     d="M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 6 5 A 1 1 0 0 0 7 4 A 1 1 0 0 0 6 3 z M 7 6 L 7.0058594 19 L 10.900391 14.300781 L 17 14 L 7 6 z "
     class="ColorScheme-Text"
     />
    <path
     style="fill:#da4453;fill-opacity:1;stroke:none"
     d="M 14.707031 3 L 14 3.7070312 L 15.792969 5.5 L 14 7.2929688 L 14.707031 8 L 16.5 6.2070312 L 18.292969 8 L 19 7.2929688 L 17.207031 5.5 L 19 3.7070312 L 18.292969 3 L 16.5 4.7929688 L 14.707031 3 z "
     />
		</svg>
	{/if}
