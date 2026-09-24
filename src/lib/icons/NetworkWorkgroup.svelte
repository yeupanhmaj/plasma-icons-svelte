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
        d="m 2,2 0,3 0,1 0,1 0,3 0,1 0,3 12,0 0,-3 0,-1 0,-3 0,-1 0,-1 0,-3 z m 9,1 2,0 0,1 -2,0 z M 3,6 13,6 13,7 3,7 Z m 8,2 2,0 0,1 -2,0 z m -8,2 10,0 0,1 -10,0 z m 8,2 2,0 0,1 -2,0 z"
        class="ColorScheme-Text"/>
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
       d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 14 4 L 18 4 L 18 5 L 14 5 L 14 4 z M 4 7 L 18 7 L 18 8 L 4 8 L 4 7 z M 14 10 L 18 10 L 18 11 L 14 11 L 14 10 z M 4 13 L 18 13 L 18 14 L 4 14 L 4 13 z M 14 16 L 18 16 L 18 17 L 14 17 L 14 16 z "
       class="ColorScheme-Text" />
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
     d="M 11 13 L 11 14 L 11 15 L 11 16 L 11 19 L 11 20 L 11 23 L 21 23 L 21 20 L 21 19 L 21 16 L 21 15 L 21 14 L 21 13 L 20 13 L 20 13 L 18 13 L 18 13 L 11 13 z M 12 15 L 20 15 L 20 16 L 12 16 L 12 15 z M 18 17 L 20 17 L 20 18 L 18 18 L 18 17 z M 12 19 L 20 19 L 20 20 L 12 20 L 12 19 z M 18 21 L 20 21 L 20 22 L 18 22 L 18 21 z "
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
     d="M 18 22 L 18 34 L 30 34 L 30 22 L 18 22 z M 27 23 L 29 23 L 29 24 L 27 24 L 27 23 z M 19 26 L 29 26 L 29 27 L 19 27 L 19 26 z M 27 28 L 29 28 L 29 29 L 27 29 L 27 28 z M 19 30 L 29 30 L 29 31 L 19 31 L 19 30 z M 27 32 L 29 32 L 29 33 L 27 33 L 27 32 z "
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
     d="M 22 27 L 22 47 L 42 47 L 42 27 L 22 27 z M 23 28 L 41 28 L 41 30 L 23 30 L 23 28 z M 24 31 L 25 31 L 25 35 L 24 35 L 24 31 z M 26 31 L 27 31 L 27 35 L 26 35 L 26 31 z M 28 31 L 29 31 L 29 35 L 28 35 L 28 31 z M 30 31 L 31 31 L 31 35 L 30 35 L 30 31 z M 32 31 L 33 31 L 33 35 L 32 35 L 32 31 z M 34 31 L 35 31 L 35 35 L 34 35 L 34 31 z M 36 31 L 37 31 L 37 35 L 36 35 L 36 31 z M 39 32 L 41 32 L 41 33 L 39 33 L 39 32 z M 23 36 L 41 36 L 41 38 L 23 38 L 23 36 z M 24 39 L 25 39 L 25 43 L 24 43 L 24 39 z M 26 39 L 27 39 L 27 43 L 26 43 L 26 39 z M 28 39 L 29 39 L 29 43 L 28 43 L 28 39 z M 30 39 L 31 39 L 31 43 L 30 43 L 30 39 z M 32 39 L 33 39 L 33 43 L 32 43 L 32 39 z M 34 39 L 35 39 L 35 43 L 34 43 L 34 39 z M 36 39 L 37 39 L 37 43 L 36 43 L 36 39 z M 39 40 L 41 40 L 41 41 L 39 41 L 39 40 z M 23 44 L 41 44 L 41 46 L 23 46 L 23 44 z "
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
     d="M 33 41 L 33 71 L 63 71 L 63 41 L 33 41 z M 34 42 L 62 42 L 62 46 L 34 46 L 34 42 z M 36 47 L 37 47 L 37 53 L 36 53 L 36 47 z M 39 47 L 40 47 L 40 53 L 39 53 L 39 47 z M 42 47 L 43 47 L 43 53 L 42 53 L 42 47 z M 45 47 L 46 47 L 46 53 L 45 53 L 45 47 z M 48 47 L 49 47 L 49 53 L 48 53 L 48 47 z M 51 47 L 52 47 L 52 53 L 51 53 L 51 47 z M 54 47 L 55 47 L 55 53 L 54 53 L 54 47 z M 59 49 L 62 49 L 62 50 L 59 50 L 59 49 z M 34 54 L 62 54 L 62 58 L 34 58 L 34 54 z M 36 59 L 37 59 L 37 65 L 36 65 L 36 59 z M 39 59 L 40 59 L 40 65 L 39 65 L 39 59 z M 42 59 L 43 59 L 43 65 L 42 65 L 42 59 z M 45 59 L 46 59 L 46 65 L 45 65 L 45 59 z M 48 59 L 49 59 L 49 65 L 48 65 L 48 59 z M 51 59 L 52 59 L 52 65 L 51 65 L 51 59 z M 54 59 L 55 59 L 55 65 L 54 65 L 54 59 z M 59 61 L 62 61 L 62 62 L 59 62 L 59 61 z M 34 66 L 62 66 L 62 70 L 34 70 L 34 66 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
