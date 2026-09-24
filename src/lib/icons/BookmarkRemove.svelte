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
			<g transform="translate(-421.71-531.79)">
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m425.71 533.79v12l4-1.594v-1l-3 1.188v-9.594h6v5h1v-6h-7z"
     class="ColorScheme-Text"/>
<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     d="m431.42 540.82l-.707.707 1.793 1.793-1.793 1.793.707.707 1.793-1.793 1.793 1.793.707-.707-1.793-1.793 1.793-1.793-.707-.707-1.793 1.793z" 
     />
</g>
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
	 d="m 6,3 0,1 0,14 0,1 5,-2 2,0.800781 0,-1 L 11,16 7,17.599609 7,4 l 8,0 0,9 1,0 0,-9 0,-1 -10,0"
	 class="ColorScheme-Text"
     />
  <path
     style="fill:#da4453"
     d="M 14,14.83333 15.66667,16.5 14,18.16667 14.83333,19 16.5,17.33333 18.16667,19 19,18.16667 17.33334,16.5 19,14.83333 18.16667,14 16.5,15.66667 14.83333,14 14,14.83333" />
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
      d="m 8,4 0,24 8,-4 3,1.5 0,-0.975 L 16,23 9,26.557 9,5 l 14,0 0,14 1,0 0,-15 z"
     class="ColorScheme-Text"
     />
  <path
     fill="#da4453" 
      id="path94"
     d="M 20,20.71 23.293,24.003 20,27.296 c 0.013,0.025 0.707,0.707 0.707,0.707 L 24,24.71 27.293,28.003 28,27.296 24.707,24.003 28,20.71 27.293,20.003 24,23.296 20.707,20.003 Z" />
		</svg>
	{/if}
