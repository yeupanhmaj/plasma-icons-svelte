<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 16
	);
</script>

	{#if numericSize <= 24}
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
			<path style="fill:currentColor"
    d="m 3,2 0,1 0,3 -1,0 0,1 0,5 1,0 2,0 0,1 0,1 6,0 0,-1 0,-1 3,0 0,-1 0,-4 0,-1 -1,0 0,-3 0,-1 z m 1,1 8,0 0,3 -1,0 0,-1 -6,0 0,1 -1,0 z m 1,0 0,1 6,0 0,-1 z m -2,4 10,0 0,4 -1,0 0,-1 -8,0 0,1 -1,0 z m 7,1 0,1 2,0 0,-1 z m -4,4 4,0 0,1 -4,0 z" 
    class="ColorScheme-Text"
    />
		</svg>
	{:else if numericSize <= 40}
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
     d="M 12 13 L 12 14 L 12 16 L 11 16 L 11 17 L 11 20 L 11 21 L 12 21 L 13 21 L 13 22 L 13 23 L 18 23 L 19 23 L 19 21 L 21 21 L 21 20 L 21 16 L 20 16 L 20 13 L 12 13 z M 13 14 L 19 14 L 19 16 L 13 16 L 13 14 z M 12 17 L 18 17 L 18 18 L 19 18 L 19 17 L 20 17 L 20 20 L 19 20 L 19 19 L 13 19 L 13 20 L 12 20 L 12 17 z M 14 21 L 18 21 L 18 22 L 14 22 L 14 21 z "
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
     d="M 19 22 L 19 26 L 18 26 L 18 32 L 21 32 L 21 34 L 27 34 L 27 32 L 30 32 L 30 26 L 29 26 L 29 22 L 19 22 z M 20 23 L 21 23 L 21 24 L 27 24 L 27 23 L 28 23 L 28 26 L 27 26 L 27 25 L 21 25 L 21 26 L 20 26 L 20 23 z M 19 27 L 29 27 L 29 31 L 28 31 L 28 30 L 20 30 L 20 31 L 19 31 L 19 27 z M 26 28 L 26 29 L 28 29 L 28 28 L 26 28 z M 22 32 L 26 32 L 26 33 L 22 33 L 22 32 z "
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
     d="M 25 27 L 25 28 L 25 33 L 22 33 L 22 34.5 L 22 43 L 23 43 L 27 43 L 27 45.75 L 27 47 L 37 47 L 37 45.75 L 37 43 L 42 43 L 42 42 L 42 34.5 L 42 33 L 39 33 L 39 28 L 39 27 L 25 27 z M 26 28 L 38 28 L 38 33 L 37 33 L 27 33 L 26 33 L 26 28 z M 27 29 L 27 30 L 37 30 L 37 29 L 27 29 z M 27 31 L 27 32 L 37 32 L 37 31 L 27 31 z M 23 34 L 41 34 L 41 42 L 38 42 L 38 39 L 26 39 L 26 42 L 23 42 L 23 34 z M 36 36 L 36 37 L 39 37 L 39 36 L 36 36 z M 28 43 L 36 43 L 36 46 L 28 46 L 28 43 z "
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
     d="M 38 41 L 38 50 L 33 50 L 33 65 L 40 65 L 40 71 L 56 71 L 56 65 L 63 65 L 63 50 L 58 50 L 58 41 L 38 41 z M 39 42 L 57 42 L 57 50 L 39 50 L 39 42 z M 40 44 L 40 45 L 56 45 L 56 44 L 40 44 z M 40 47 L 40 48 L 56 48 L 56 47 L 40 47 z M 34 51 L 62 51 L 62 64 L 57 64 L 57 59 L 39 59 L 39 64 L 34 64 L 34 51 z M 54 55 L 54 56 L 58 56 L 58 55 L 54 55 z M 41 65 L 55 65 L 55 70 L 41 70 L 41 65 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
