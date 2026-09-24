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
     d="M 16 13 C 14.3 13 13 14.3 13 16 L 14 16 C 14 14.9 14.9 14 16 14 C 17.1 14 18 14.9 18 16 L 18 18 L 12 18 L 12 23 L 20 23 L 20 18 L 19 18 L 19 16 C 19 14.3 17.7 13 16 13 z M 13 19 L 19 19 L 19 22 L 13 22 L 13 19 z "
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
     d="M 22 13 L 22 16 L 25 16 L 25 13 L 22 13 z M 25 16 L 25 19 L 28 19 L 28 16 L 25 16 z M 28 16 L 31 16 L 31 13 L 28 13 L 28 16 z M 31 16 L 31 19 L 34 19 L 34 16 L 31 16 z M 34 16 L 37 16 L 37 13 L 34 13 L 34 16 z M 37 16 L 37 19 L 40 19 L 40 16 L 37 16 z M 40 16 L 43 16 L 43 13 L 40 13 L 40 16 z M 43 16 L 43 19 L 44 19 L 44 16 L 43 16 z M 43 19 L 40 19 L 40 22 L 43 22 L 43 19 z M 37 19 L 34 19 L 34 22 L 37 22 L 37 19 z M 31 19 L 28 19 L 28 22 L 31 22 L 31 19 z M 25 19 L 22 19 L 22 22 L 25 22 L 25 19 z M 22 19 L 22 16 L 19 16 L 19 19 L 22 19 z M 19 19 L 16 19 L 16 22 L 19 22 L 19 19 z M 16 19 L 16 16 L 13 16 L 13 19 L 16 19 z M 13 19 L 10 19 L 10 22 L 13 22 L 13 19 z M 10 19 L 10 16 L 7 16 L 7 19 L 10 19 z M 7 19 L 4 19 L 4 22 L 7 22 L 7 19 z M 19 16 L 19 14 L 17 16 L 19 16 z "
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="M 24 22 C 22.3 22 21 23.3 21 25 L 21 26 L 22 26 L 22 25 C 22 23.9 22.9 23 24 23 C 25.1 23 26 23.9 26 25 L 26 28 L 19 28 L 19 34 L 29 34 L 29 28 L 27 28 L 27 25 C 27 23.3 25.6 22 24 22 z M 20 29 L 28 29 L 28 33 L 20 33 L 20 29 z "
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
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 26 16 L 20 19 L 4 19 L 4 20 L 22 20 L 26 16 z M 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 60 57 L 4 57 L 3 57 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="m 26,16 -4,4 h 4 z m 0,4 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 4 v -4 z m 4,0 h 4 v -4 h -4 z m 4,0 v 4 h 3 v -4 z m 0,4 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z m -8,0 h -4 v 4 h 4 z m -4,0 v -4 h -4 v 4 z m -4,0 h -4 v 4 h 4 z m -4,0 v -4 h -4 v 4 z m -4,0 H 6 v 4 h 4 z M 6,24 V 20 H 3 v 4 z"
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="M 32 27 C 29.23 27 27 29.23 27 32 L 27 33 L 28 33 L 28 32 C 28 29.6 29.9 28 32 28 C 34 28 36 29.6 36 32 L 36 37 L 28 37 L 27 37 L 24 37 L 24 38 L 24 47 L 25.75 47 L 38.25 47 L 40 47 L 40 37 L 38.25 37 L 37 37 L 37 32 C 37 29.23 34.77 27 32 27 z M 25 38 L 39 38 L 39 46 L 25 46 L 25 38 z "
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
     d="M 47.9 41 C 44.2 41 41.2 43.9 41 47.5 L 41 49 L 42 49 L 42 47.5 C 42.3 44.4 44.9 42 48 42 C 51.1 42 53.7 44.4 54 47.5 L 54 56 L 36 56 L 36 71 L 60 71 L 60 56 L 55 56 L 55 47.5 C 54.7 43.9 51.7 41 48 41 C 48 41 48 41 48 41 z M 37 57 L 59 57 L 59 70 L 37 70 L 37 57 z "
     class="ColorScheme-Text"
     />
  <path
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 39 24 L 35 28 L 35 29 L 40 29 L 40 24 L 39 24 z M 40 29 L 40 34 L 45 34 L 45 29 L 40 29 z M 45 29 L 50 29 L 50 24 L 45 24 L 45 29 z M 50 29 L 50 34 L 55 34 L 55 29 L 50 29 z M 55 29 L 60 29 L 60 24 L 55 24 L 55 29 z M 60 29 L 60 34 L 65 34 L 65 29 L 60 29 z M 65 29 L 70 29 L 70 24 L 65 24 L 65 29 z M 70 29 L 70 34 L 75 34 L 75 29 L 70 29 z M 75 29 L 80 29 L 80 24 L 75 24 L 75 29 z M 80 29 L 80 34 L 85 34 L 85 29 L 80 29 z M 85 29 L 90 29 L 90 24 L 85 24 L 85 29 z M 90 29 L 90 34 L 91 34 L 91 29 L 90 29 z M 90 34 L 85 34 L 85 39 L 90 39 L 90 34 z M 80 34 L 75 34 L 75 39 L 80 39 L 80 34 z M 70 34 L 65 34 L 65 39 L 70 39 L 70 34 z M 60 34 L 55 34 L 55 39 L 60 39 L 60 34 z M 50 34 L 45 34 L 45 39 L 50 39 L 50 34 z M 40 34 L 35 34 L 35 39 L 40 39 L 40 34 z M 35 34 L 35 29 L 34 29 L 33 30 L 30 30 L 30 34 L 35 34 z M 30 34 L 25 34 L 25 39 L 30 39 L 30 34 z M 25 34 L 25 30 L 20 30 L 20 34 L 25 34 z M 20 34 L 15 34 L 15 39 L 20 39 L 20 34 z M 15 34 L 15 30 L 10 30 L 10 34 L 15 34 z M 10 34 L 5 34 L 5 39 L 10 39 L 10 34 z "
     class="ColorScheme-Text"
     />
  <path
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="M 39 24 L 32 29 L 6 29 L 6 30 L 33 30 L 39 24 z M 5 86 L 5 87 L 91 87 L 91 86 L 5 86 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
