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
       d="m 2,2 0,9 3,3 0,-3 2,0 0,-1 -4,0 0,-7 10,0 0,4 1,0 0,-5 z"
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     d="M 8.99,8 8,8.99 10.01,11 8,13.01 8.99,14 11,11.99 13.01,14 14,13.01 11.99,11 14,8.99 13.01,8 11,10.01 Z" />
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
	d="M 3 3 L 3 13 L 6 17 L 6 14 L 6 13 L 19 13 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 12 L 4 12 L 4 4 z "
	class="ColorScheme-Text"
    />
  <path
     style="fill:#da4453"
     d="M 13.980469 14 L 12.990234 14.990234 L 15 17 L 12.990234 19.009766 L 13.980469 20 L 15.990234 17.990234 L 18 20 L 18.990234 19.009766 L 16.980469 17 L 18.990234 14.990234 L 18 14 L 15.990234 16.009766 L 13.980469 14 z "
	 />
		</svg>
	{/if}
