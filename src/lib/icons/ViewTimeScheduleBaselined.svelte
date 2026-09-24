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
			<g
     transform="translate(-421.71429,-531.79074)">
    <rect
       style="opacity:1;fill:#1d99f3;fill-opacity:1;stroke:none;stroke-linecap:round"
       id="rect4143"
       width="1"
       height="8"
       x="430.71429"
       y="536.79071"
       ry="2.53291e-05" />
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 12 2 L 12 4 L 10 4 L 10 2 L 6 2 L 6 4 L 4 4 L 4 2 L 2 2 z M 3 5 L 13 5 L 13 13 L 3 13 L 3 5 z M 4 6 L 4 9 L 5 9 L 5 8 L 8 8 L 8 9 L 9 9 L 9 6 L 8 6 L 8 7 L 5 7 L 5 6 L 4 6 z M 8 9 L 7 9 L 7 12 L 8 12 L 8 11 L 11 11 L 11 12 L 12 12 L 12 9 L 11 9 L 11 10 L 8 10 L 8 9 z "
       transform="translate(421.71429,531.79074)"
     class="ColorScheme-Text"
       id="rect4449" />
  </g>
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
     d="M 3 3 L 3 19 L 19 19 L 19 3 L 17 3 L 17 6 L 15 6 L 15 3 L 7 3 L 7 6 L 5 6 L 5 3 L 3 3 z M 4 7 L 18 7 L 18 18 L 4 18 L 4 7 z M 5 8 L 5 11 L 6 11 L 6 10 L 10 10 L 10 11 L 11 11 L 11 8 L 10 8 L 10 9 L 6 9 L 6 8 L 5 8 z M 10 14 L 10 17 L 11 17 L 11 16 L 15 16 L 15 17 L 16 17 L 16 14 L 15 14 L 15 15 L 11 15 L 11 14 L 10 14 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 433.71432,532.79071 0.99995,0 c 10e-6,0 2e-5,10e-6 2e-5,3e-5 l 0,10.99994 c 0,2e-5 -1e-5,3e-5 -2e-5,3e-5 l -0.99995,0 c -10e-6,0 -3e-5,-10e-6 -3e-5,-3e-5 l 0,-10.99994 c 0,-2e-5 2e-5,-3e-5 3e-5,-3e-5 z"
     class="ColorScheme-Accent"
     transform="translate(-421.71429,-525.79074)"
     />
		</svg>
	{/if}
