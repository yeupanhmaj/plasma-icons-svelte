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
       style="fill:currentColor"
       d="M 8.5 1.8 L 5.8 4.5 L 8.5 7.2 L 9.2 6.5 L 7.7 5 L 10 5 A 1 1 0 0 1 11 6 L 11 11.1 A 1.5 1.5 0 0 0 10 12.5 A 1.5 1.5 0 0 0 11.5 14 A 1.5 1.5 0 0 0 13 12.5 A 1.5 1.5 0 0 0 12 11.1 L 12 6 A 2 2 0 0 0 10 4 A 2 2 0 0 0 10 4 L 7.7 4 L 9.2 2.5 L 8.5 1.8 z M 3.5 3 A 1.5 1.5 0 0 0 2 4.5 A 1.5 1.5 0 0 0 3 5.9 L 3 11.1 A 1.5 1.5 0 0 0 2 12.5 A 1.5 1.5 0 0 0 3.5 14 A 1.5 1.5 0 0 0 5 12.5 A 1.5 1.5 0 0 0 4 11.1 L 4 5.9 A 1.5 1.5 0 0 0 5 4.5 A 1.5 1.5 0 0 0 3.5 3 z M 3.5 4 A 0.5 0.5 0 0 1 3.5 4 A 0.5 0.5 0 0 1 4 4.5 A 0.5 0.5 0 0 1 3.5 5 A 0.5 0.5 0 0 1 3 4.5 A 0.5 0.5 0 0 1 3.5 4 z M 3.5 12 L 3.5 12 A 0.5 0.5 0 0 1 4 12.5 A 0.5 0.5 0 0 1 3.5 13 A 0.5 0.5 0 0 1 3 12.5 A 0.5 0.5 0 0 1 3.5 12 z M 11.5 12 L 11.5 12 A 0.5 0.5 0 0 1 12 12.5 A 0.5 0.5 0 0 1 11.5 13 A 0.5 0.5 0 0 1 11 12.5 A 0.5 0.5 0 0 1 11.5 12 z "
       class="ColorScheme-Text" />
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
       style="fill:currentColor"
       d="M 12.5 2.7929688 L 12.146484 3.1464844 L 8.7929688 6.5 L 12.146484 9.8535156 L 12.5 10.207031 L 13.207031 9.5 L 12.853516 9.1464844 L 10.707031 7 L 14 7 A 1 1 0 0 1 15 8 L 15 14.050781 A 2.5 2.5 0 0 0 13 16.5 A 2.5 2.5 0 0 0 15.5 19 A 2.5 2.5 0 0 0 18 16.5 A 2.5 2.5 0 0 0 16 14.054688 L 16 8 A 2 2 0 0 0 14.048828 6 A 2 2 0 0 0 14 6 L 10.707031 6 L 12.853516 3.8535156 L 13.207031 3.5 L 12.5 2.7929688 z M 5.5 4 A 2.5 2.5 0 0 0 3 6.5 A 2.5 2.5 0 0 0 5 8.9453125 L 5 14.050781 A 2.5 2.5 0 0 0 3 16.5 A 2.5 2.5 0 0 0 5.5 19 A 2.5 2.5 0 0 0 8 16.5 A 2.5 2.5 0 0 0 6 14.054688 L 6 8.9492188 A 2.5 2.5 0 0 0 8 6.5 A 2.5 2.5 0 0 0 5.5 4 z M 5.5 5 A 1.5 1.5 0 0 1 7 6.5 A 1.5 1.5 0 0 1 5.5 8 A 1.5 1.5 0 0 1 4 6.5 A 1.5 1.5 0 0 1 5.5 5 z M 5.5 15 A 1.5 1.5 0 0 1 7 16.5 A 1.5 1.5 0 0 1 5.5 18 A 1.5 1.5 0 0 1 4 16.5 A 1.5 1.5 0 0 1 5.5 15 z M 15.5 15 A 1.5 1.5 0 0 1 17 16.5 A 1.5 1.5 0 0 1 15.5 18 A 1.5 1.5 0 0 1 14 16.5 A 1.5 1.5 0 0 1 15.5 15 z "
       class="ColorScheme-Text" />
		</svg>
	{:else if numericSize <= 48}
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
     d="M 2 3 L 2 10 L 1 10 L 1 29 L 12 29 L 13 29 L 31 29 L 31 8 L 30 8 L 30 5 L 16 5 L 14 3 L 2 3 z "
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33;fill-rule:evenodd"
     d="m 2,3 0,7 9,0 L 13,8 30,8 30,5 16,5 14,3 2,3 Z"
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2;fill-rule:evenodd"
     d="M 14 3 L 15 6 L 30 6 L 30 5 L 16 5 L 14 3 z M 13 8 L 11 10 L 1 10 L 1 11 L 12 11 L 13 8 z "
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 13 8 L 11 9 L 2 9 L 2 10 L 11 10 L 13 8 z M 1 28 L 1 29 L 31 29 L 31 28 L 1 28 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none" 
     d="M 11.001953 13 C 9.8973834 13 9.0019531 13.89543 9.0019531 15 C 9.0132731 15.703054 9.3929594 16.347737 10.001953 16.699219 L 10.001953 21.199219 C 9.3616314 21.568352 8.9770843 22.261316 9.0019531 23 C 9.0019531 24.10457 9.8973834 25 11.001953 25 C 12.106522 25 13.001953 24.104569 13.001953 23 C 12.990633 22.296946 12.610948 21.652263 12.001953 21.300781 L 12.001953 16.730469 C 12.620121 16.37357 13.001221 15.713798 13.001953 15 C 13.001953 13.895431 12.106522 13 11.001953 13 z M 13.001953 15 L 16.001953 17.099609 L 16.001953 16 L 18.001953 16 C 19.109953 16 20.001953 16.45656 20.001953 18 L 20.001953 21.269531 C 19.383785 21.62643 19.002685 22.286202 19.001953 23 C 19.001953 24.104569 19.897384 25 21.001953 25 C 22.106522 25 23.001953 24.104569 23.001953 23 C 22.990633 22.296946 22.610948 21.652263 22.001953 21.300781 L 22.001953 17 C 22.001953 15.3 20.601953 14.033 19.001953 14 L 16.001953 14 L 16.001953 13 L 13.001953 15 z M 11.001953 14 C 11.554238 14 12.001953 14.447715 12.001953 15 C 12.001953 15.552285 11.554238 16 11.001953 16 C 10.449668 16 10.001953 15.552285 10.001953 15 C 10.001953 14.447715 10.449668 14 11.001953 14 z M 11.001953 22 C 11.554238 22 12.001953 22.447715 12.001953 23 C 12.001953 23.552285 11.554238 24 11.001953 24 C 10.449668 24 10.001953 23.552285 10.001953 23 C 10.001953 22.447715 10.449668 22 11.001953 22 z M 21.001953 22 C 21.554238 22 22.001953 22.447715 22.001953 23 C 22.001953 23.552285 21.554238 24 21.001953 24 C 20.449668 24 20.001953 23.552285 20.001953 23 C 20.001953 22.447715 20.449668 22 21.001953 22 z "
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 80}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path 
     style="fill:currentColor" 
     d="M 4 6 L 4 11 L 4 20 L 3 20 L 3 21 L 3 21 C 3 21 3 21 3 21 L 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 61 21 L 61 21 L 61 16 L 60 16 L 60 11 C 60 11 60 11 60 11 L 60 11 L 60 10 L 32 10 L 28 6 L 4 6 z "
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33"
     d="M 4 6 L 4 11 L 4 20 L 22 20 L 26 16 L 60 16 L 60 11 C 60 11 60 11 60 11 L 60 11 L 60 10 L 32 10 L 28 6 L 4 6 z "
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2"
     d="M 28 6 L 31 11 L 33 11 L 60 11 L 60 10 L 33 10 L 32 10 L 28 6 z M 26 16 L 22 20 L 3 20 L 3 21 L 23 21 L 26 16 z "
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 26 16 L 20 19 L 4 19 L 4 20 L 22 20 L 26 16 z M 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 60 57 L 4 57 L 3 57 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="m 26,26 a 2,2 0 0 0 -2,2 2,2 0 0 0 1,1.7 v 14.5 A 2,2 0 0 0 24,46 a 2,2 0 0 0 2,2 2,2 0 0 0 2,-2 2,2 0 0 0 -1,-1.7 V 29.73 A 2,2 0 0 0 28,28 2,2 0 0 0 26,26 m 2,2 3,2.1 V 29 h 4 c 1.108,0 2,0.9 2,2 v 13.27 a 2,2 0 0 0 -1,1.73 2,2 0 0 0 2,2 2,2 0 0 0 2,-2 2,2 0 0 0 -1,-1.7 V 30 c 0,-1.7 -1.4,-2.967 -3,-3 h -5 v -1 z m -2,-1 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 m 0,18 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 m 12,0 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1"
     class="ColorScheme-Text"
     />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 96 96"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
    style="fill:currentColor"
    class="ColorScheme-Accent"
    d="m6 9v21h-1v57h86v-63h-1v-9h-42l-6-6z" />

  
  <path
    d="m6 9v21h27l6-6h51v-9h-42l-6-6z"
    fill-opacity=".33" />

  
  <path
    d="m42 9 5 7h43v-1h-42zm-3 15-6 6h-28v1h29z"
    fill="#fff"
    fill-opacity=".2" />

  
  <path
    d="m39 24-7 5h-26v1h27zm-34 62v1h86v-1z"
    fill-opacity=".2" />

  
  <path
    d="m52 40.75-6.25 3.5 6.25 3.5v-3c2.999997 0 5 2.250003 5 5v16.306641a2.5 2.5 0 0 0 -2 2.443359 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2-2.449219v-16.300781c0-3.749996-3.250003-6-6-6zm-11.5 1.25a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2 2.443359v19.113282a2.5 2.5 0 0 0 -2 2.443359 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2-2.449219v-19.107422a2.5 2.5 0 0 0 2-2.443359 2.5 2.5 0 0 0 -2.5-2.5zm10.75.25v4l-4-2zm-10.75.75a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5 1.5 1.5 0 0 1 -1.5-1.5 1.5 1.5 0 0 1 1.5-1.5zm0 24a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5 1.5 1.5 0 0 1 -1.5-1.5 1.5 1.5 0 0 1 1.5-1.5zm17 0a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5 1.5 1.5 0 0 1 -1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
