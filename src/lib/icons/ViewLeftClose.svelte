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
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 4 L 9 4 L 9 13 L 3 13 L 3 4 z M 10 4 L 13 4 L 13 13 L 10 13 L 10 4 z "
       transform="translate(421.71429,531.79074)"
     class="ColorScheme-Text"
       id="rect4272" />
    <path
        style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="m 425.95691,537.79079 -0.70703,0.70703 1.79296,1.79297 -1.79296,1.79297 0.70703,0.70703 1.79297,-1.79296 1.79297,1.79296 0.70703,-0.70703 -1.79296,-1.79297 1.79296,-1.79297 -0.70703,-0.70703 -1.79297,1.79296 -1.79297,-1.79296 z"
       id="rect4153" />
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
     d="M 3 3 L 3 19 L 13 19 L 14 19 L 19 19 L 19 3 L 14 3 L 13 3 L 3 3 z M 4 7 L 13 7 L 13 18 L 4 18 L 4 7 z M 14 7 L 18 7 L 18 18 L 14 18 L 14 7 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="m 428.42132,535.79074 -0.70703,0.70703 1.79297,1.79297 -1.79297,1.79297 0.70703,0.70703 1.79297,-1.79297 1.79297,1.79297 0.70703,-0.70703 -1.79297,-1.79297 1.79297,-1.79297 -0.70703,-0.70703 -1.79297,1.79297 -1.79297,-1.79297 z"
     transform="translate(-421.71429,-525.79074)"
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4 4 L 4 28 L 28 28 L 28 4 L 4 4 z M 5 9 L 19 9 L 19 27 L 5 27 L 5 9 z M 20 9 L 27 9 L 27 27 L 20 27 L 20 9 z "
     id="path79" 
     class="ColorScheme-Text"/>
  <path
     style="fill:#da4453"
     id="path81"
     d="M 16,14.71 12.707,18.003 16,21.296 c -0.013,0.025 -0.707,0.707 -0.707,0.707 L 12,18.71 8.707,22.003 8,21.296 11.293,18.003 8,14.71 8.707,14.003 12,17.296 15.293,14.003 Z" 
     />
		</svg>
	{/if}
