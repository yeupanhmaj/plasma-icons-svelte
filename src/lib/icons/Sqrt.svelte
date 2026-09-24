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
     d="M 7.65625 3 L 7.53125 3.34375 L 4.90625 10.8125 L 3.4375 8.25 L 3.28125 8 L 3 8 L 2 8 L 2 9 L 2.71875 9 L 4.5625 12.25 L 5.09375 13.1875 L 5.46875 12.15625 L 8.34375 4 L 14 4 L 14 3 L 8 3 L 7.65625 3 z M 11 6 C 9.338 6 8 7.338 8 9 C 8 10.662 9.338 12 11 12 C 11.7733 12 12.46912 11.69593 13 11.21875 L 13 12 L 14 12 L 14 9 L 14 6 L 13 6 L 13 6.78125 C 12.46912 6.30407 11.7733 6 11 6 z M 11 7 C 12.108 7 13 7.892 13 9 C 13 10.108 12.108 11 11 11 C 9.892 11 9 10.108 9 9 C 9 7.892 9.892 7 11 7 z "
     class="ColorScheme-Text"
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
    d="m 11.515627,6 -5.1953127,9.002 -2.3164063,-4.0059 -0.00391,0 c 0,0 -2.9908787,0.066 -2.99999995,0 l 0,1 2.41601565,0 2.9062499,5 c 0,0 5.7825404,-9.9915 5.7714844,-10 l 7.906254,0 0,1 1,0 0,-1 0,-1 c -3.161458,0 -9.484375,0 -9.484375,0 z m 3.484375,3 c -2.209139,0 -4,1.7909 -4,4 0,2.2091 1.790861,4 4,4 1.149118,0 2.241964,-0.4977 3,-1.3613 l 0,1.3613 1,0 0,-4 0,-4 -1,0 0,1.3613 C 17.241966,9.4977 16.14912,9.0018 15.000002,9 Z m 0,1 c 1.656854,0 3,1.3431 3,3 0,1.6569 -1.343146,3 -3,3 -1.656854,0 -3,-1.3431 -3,-3 0,-1.6569 1.343146,-3 3,-3 z"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
