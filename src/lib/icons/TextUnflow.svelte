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
     d="M 2 2 L 2 14 L 7 14 L 7 13 L 3 13 L 3 3 L 13 3 L 13 7 L 14 7 L 14 2 L 2 2 z M 4 4 L 4 5 L 12 5 L 12 4 L 4 4 z M 4 7 L 4 8 L 8 8 L 8 7 L 4 7 z M 4 10 L 4 11 L 7 11 L 7 10 L 4 10 z "
     class="ColorScheme-Text"/>
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
     d="M 3 3 L 3 19 L 12 19 L 12 18 L 4 18 L 4 4 L 18 4 L 18 12 L 19 12 L 19 3 L 3 3 z M 5 5 L 5 6 L 17 6 L 17 5 L 5 5 z M 5 7 L 5 8 L 14 8 L 14 7 L 5 7 z M 5 10 L 5 11 L 17 11 L 17 10 L 5 10 z M 5 12 L 5 13 L 9 13 L 9 12 L 5 12 z M 5 15 L 5 16 L 12 16 L 12 15 L 5 15 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 13.980469 13 L 12.990234 13.990234 L 15 16 L 12.990234 18.009766 L 13.980469 19 L 15.990234 16.990234 L 18 19 L 18.990234 18.009766 L 16.980469 16 L 18.990234 13.990234 L 18 13 L 15.990234 15.009766 L 13.980469 13 z "
     />
		</svg>
	{/if}
