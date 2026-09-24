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
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 5,6 V 16 H 4 V 42 H 44 V 13 H 43 V 9 H 24 L 21,6 Z"
     class="ColorScheme-Accent"
     />
  <path
     style="fill-opacity:0.33;fill-rule:evenodd"
     d="m 5,6 v 10 h 12 l 3,-3 H 43 V 9 H 24 L 21,6 Z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.2;fill-rule:evenodd"
     d="M 21 6 L 23 10 L 43 10 L 43 9 L 24 9 L 21 6 z M 20 13 L 17 16 L 4 16 L 4 17 L 18 17 L 20 13 z "
     />
  <path
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 20 13 L 16 15 L 5 15 L 5 16 L 17 16 L 20 13 z M 4 41 L 4 42 C 4 42 44 42 44 42 L 44 41 L 4 41 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none" 
     d="M 24 22 C 22.34 22 21 23.34 21 25 L 21 26 L 22 26 L 22 25 C 22 23.9 22.9 23 24 23 C 25.1 23 26 23.9 26 25 L 26 28 L 19 28 L 19 34 L 29 34 L 29 28 L 27 28 L 27 25 C 27 23.34 25.66 22 24 22 z M 20 29 L 28 29 L 28 33 L 20 33 L 20 29 z "
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
     d="M 32 27 C 29.23 27 27 29.23 27 32 L 27 33 L 28 33 L 28 32 C 28 29.57625 29.92251 28 32 28 C 34.0775 28 36 29.57625 36 32 L 36 37 L 28 37 L 27 37 L 24 37 L 24 38 L 24 47 L 25.75 47 L 38.25 47 L 40 47 L 40 37 L 38.25 37 L 37 37 L 37 32 C 37 29.23 34.77 27 32 27 z M 25 38 L 39 38 L 39 46 L 25 46 L 25 38 z "
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
     d="M 6 9 L 6 30 L 5 30 L 5 87 L 91 87 L 91 24 L 90 24 L 90 15 L 48 15 L 42 9 L 6 9 z "
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33"
     d="M 6 9 L 6 30 L 33 30 L 39 24 L 90 24 L 90 15 L 48 15 L 42 9 L 6 9 z "
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2"
     d="M 42 9 L 47 16 L 90 16 L 90 15 L 48 15 L 42 9 z M 39 24 L 33 30 L 5 30 L 5 31 L 34 31 L 39 24 z "
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 39 24 L 32 29 L 6 29 L 6 30 L 33 30 L 39 24 z M 5 86 L 5 87 L 91 87 L 91 86 L 5 86 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="M 47.9 41 C 44.2 41 41.3 43.9 41 47.5 L 41 49 L 42 49 L 42 47.5 C 42.26 44.4 44.9 42 48 42 C 51.1 42 53.75 44.4 54 47.5 L 54 56 L 36 56 L 36 71 L 60 71 L 60 56 L 55 56 L 55 47.5 C 54.75 43.9 51.7 41 48 41 C 48 41 48 41 47.9 41 z M 37 57 L 59 57 L 59 70 L 37 70 L 37 57 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
