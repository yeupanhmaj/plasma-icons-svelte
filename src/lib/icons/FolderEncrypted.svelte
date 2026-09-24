<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 32
	);
</script>

	{#if numericSize <= 40}
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
     style="fill:#5c5c5c" 
     d="M 2 3 L 2 10 L 1 10 L 1 29 L 12 29 L 13 29 L 31 29 L 31 8 L 30 8 L 30 5 L 16 5 L 14 3 L 2 3 z "
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
     d="m 16,13 c -1.7,0 -3,1.3 -3,3 v 2 h -1 v 5 h 8 v -5 h -1 v -2 c 0,-1.7 -1.3,-3 -3,-3 z m 0,1 c 1.1,0 2,0.9 2,2 v 2 h -4 v -2 c 0,-1.1 0.9,-2 2,-2 z"
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 56}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
     style="fill:#5c5c5c" 
     d="M 5,6 V 16 H 4 V 42 H 44 V 13 H 43 V 9 H 24 L 21,6 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="m 5,6 v 10 h 12 l 3,-3 H 43 V 9 H 24 L 21,6 Z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.2"
     d="m 21,6 2,4 H 43 V 9 H 24 Z m -1,7 -3,3 H 4 v 1 h 14 z"
     />
  <path
     style="fill-opacity:0.4;fill-rule:evenodd"
     d="m 20,13 -4,2 H 5 v 1 H 17 Z M 4,41 v 1 c 0,0 40,0 40,0 v -1 z"
     class="ColorScheme-Text"
     />
  <path
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 4 34 L 4 37 L 7 37 L 7 34 L 4 34 z M 7 37 L 7 40 L 10 40 L 10 37 L 7 37 z M 10 37 L 13 37 L 13 34 L 10 34 L 10 37 z M 13 37 L 13 40 L 16 40 L 16 37 L 13 37 z M 16 37 L 19 37 L 19 34 L 16 34 L 16 37 z M 19 37 L 19 40 L 22 40 L 22 37 L 19 37 z M 22 37 L 25 37 L 25 34 L 22 34 L 22 37 z M 25 37 L 25 40 L 28 40 L 28 37 L 25 37 z M 28 37 L 31 37 L 31 34 L 28 34 L 28 37 z M 31 37 L 31 40 L 34 40 L 34 37 L 31 37 z M 34 37 L 37 37 L 37 34 L 34 34 L 34 37 z M 37 37 L 37 40 L 40 40 L 40 37 L 37 37 z M 40 37 L 43 37 L 43 34 L 40 34 L 40 37 z M 43 37 L 43 40 L 44 40 L 44 37 L 43 37 z M 43 40 L 40 40 L 40 42 L 43 42 L 43 40 z M 37 40 L 34 40 L 34 42 L 37 42 L 37 40 z M 31 40 L 28 40 L 28 42 L 31 42 L 31 40 z M 25 40 L 22 40 L 22 42 L 25 42 L 25 40 z M 19 40 L 16 40 L 16 42 L 19 42 L 19 40 z M 13 40 L 10 40 L 10 42 L 13 42 L 13 40 z M 7 40 L 4 40 L 4 42 L 7 42 L 7 40 z "
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="m 24,22 c -1.7,0 -3,1.3 -3,3 v 3 h -2 v 6 h 10 v -6 h -2 v -3 c 0,-1.7 -1.3,-3 -3,-3 z m 0,1 c 1.25,0 2,0.55 2,2 v 3 h -4 v -3 c 0,-1.45 0.75,-2 2,-2 z"
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
     style="fill:#5c5c5c" 
     d="M 4 6 L 4 11 L 4 20 L 3 20 L 3 21 L 3 21 C 3 21 3 21 3 21 L 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 61 21 L 61 21 L 61 16 L 60 16 L 60 11 C 60 11 60 11 60 11 L 60 11 L 60 10 L 32 10 L 28 6 L 4 6 z "
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
     style="fill-opacity:0.4;fill-rule:evenodd"
     d="M 26 16 L 20 19 L 4 19 L 4 20 L 22 20 L 26 16 z M 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 60 57 L 4 57 L 3 57 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="m 3,46 v 4 h 3 v -4 z m 3,4 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 3 v -4 h -3 z m 0,4 v 4 h 3 v -4 z m -4,0 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z M 6,54 H 3 v 4 h 3 z"
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="M 32 27 C 29.23 27 27 29.23 27 32 L 27 37 L 24 37 L 24 47 L 40 47 L 40 37 L 37 37 L 37 32 C 37 29.23 34.77 27 32 27 z M 32 28 C 34 28 36 29.6 36 32 L 36 37 L 28 37 L 28 32 C 28 29.6 30 28 32 28 z "
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
     style="fill:#5c5c5c" 
     d="M 42,9 H 6 V 30 H 5 V 87 H 91 V 24 H 90 V 15 H 48 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="m 6,9 v 21 h 27 l 6,-6 H 90 V 15 H 48 L 42,9 Z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.2"
     d="M 42 9 L 47 16 L 90 16 L 90 15 L 48 15 L 42 9 z M 39 24 L 33 30 L 5 30 L 5 31 L 34 31 L 39 24 z "
     />
  <path
     style="fill-opacity:0.4;fill-rule:evenodd"
     d="m 47.9,41 c -3.7,0 -6.67,2.9 -6.9,6.5 L 41,56 H 36 V 71 H 60 V 56 H 55 L 55,47.5 C 54.75,43.9 51.7,41 48,41 c -0,-2.1e-4 -0.1,-2.1e-4 -0.1,0 z M 48,42 c 3.1,10e-4 5.7,2.4 6,5.5 L 54,56 H 42 l 0,-8.46 C 42.26,44.4 44.9,42 48,42 Z"
     class="ColorScheme-Text"
     />
  <path
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="m 5,72 v 5 h 5 v -5 z m 5,5 v 5 h 5 v -5 z m 5,0 h 5 v -5 h -5 z m 5,0 v 5 h 5 v -5 z m 5,0 h 5 v -5 h -5 z m 5,0 v 5 h 5 v -5 z m 5,0 h 5 v -5 h -5 z m 5,0 v 5 h 5 v -5 z m 5,0 h 5 v -5 h -5 z m 5,0 v 5 h 5 v -5 z m 5,0 h 5 v -5 h -5 z m 5,0 v 5 h 5 v -5 z m 5,0 h 5 v -5 h -5 z m 5,0 v 5 h 5 v -5 z m 5,0 h 5 v -5 h -5 z m 5,0 v 5 h 5 v -5 z m 5,0 h 5 v -5 h -5 z m 5,0 v 5 h 1 v -5 z m 0,5 h -5 v 5 h 5 z m -10,0 h -5 v 5 h 5 z m -10,0 h -5 v 5 h 5 z m -10,0 h -5 v 5 h 5 z m -10,0 h -5 v 5 h 5 z m -10,0 h -5 v 5 h 5 z m -10,0 h -5 v 5 h 5 z m -10,0 h -5 v 5 h 5 z M 10,82 H 5 v 5 h 5 z"
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="M 39 24 L 32 29 L 6 29 L 6 30 L 33 30 L 39 24 z M 5 86 L 5 87 L 91 87 L 91 86 L 5 86 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
