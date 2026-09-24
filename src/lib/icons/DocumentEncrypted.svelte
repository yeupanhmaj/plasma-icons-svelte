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
     d="M 8,2 C 6.3431375,2 5,3.3431372 5,5 l 0,3 -2,0 0,6 10,0 0,-6 -2,0 0,-3 C 11,3.3431372 9.6568625,2 8,2 Z m 0,1 c 1.1045695,0 2,0.8954305 2,2 L 10,8 6,8 6,5 C 6,3.8954305 6.8954305,3 8,3 Z"
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11,3 C 8.784,3 7,4.784 7,7 l 0,4 -2,0 c 0,2.666667 0,5.333333 0,8 4,0 8,0 12,0 l 0,-8 c -0.666667,0 -1.333333,0 -2,0 L 15,7 C 15,4.784 13.216,3 11,3 m 0,1 c 1.662,0 3,1.561 3,3.5 L 14,11 8,11 8,7.5 C 8,5.561 9.338,4 11,4"
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 6 4 L 6 28 L 15 28 L 15 27 L 7 27 L 7 5 L 18 5 L 18 12 L 25 12 L 25 15 L 26 15 L 26 11 L 19 4 L 18 4 L 6 4 z M 21 16 C 19.343 16 18 17.343 18 19 L 18 22 L 16 22 L 16 28 L 26 28 L 26 22 L 24 22 L 24 19 C 24 17.343 22.657 16 21 16 z M 21 17 C 22.105 17 23 17.895 23 19 L 23 22 L 19 22 L 19 19 C 19 17.895 19.895 17 21 17 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
