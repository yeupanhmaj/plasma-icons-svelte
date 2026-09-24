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
     d="M 16 13 A 2.5 2.5 0 0 0 13.5 15.5 A 2.5 2.5 0 0 0 16 18 A 2.5 2.5 0 0 0 18.5 15.5 A 2.5 2.5 0 0 0 16 13 z M 16 14 A 1.5 1.5 0 0 1 17.5 15.5 A 1.5 1.5 0 0 1 16 17 A 1.5 1.5 0 0 1 14.5 15.5 A 1.5 1.5 0 0 1 16 14 z M 16 19 A 5 4.5 0 0 0 11 23 L 12 23 A 4 3.5 0 0 1 16 20 A 4 3.5 0 0 1 20 23 L 21 23 A 5 4.5 0 0 0 16 19 z "
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
     d="M 24 22 A 3 3 0 0 0 21 25 A 3 3 0 0 0 24 28 A 3 3 0 0 0 27 25 A 3 3 0 0 0 24 22 z M 24 23 A 2 2 0 0 1 26 25 A 2 2 0 0 1 24 27 A 2 2 0 0 1 22 25 A 2 2 0 0 1 24 23 z M 24 29 A 5 4.5 0 0 0 19 33.5 A 5 4.5 0 0 0 19 34 L 29 34 A 5 4.5 0 0 0 29 33.5 A 5 4.5 0 0 0 24 29 z M 24 30 A 4 3.5 0 0 1 28 33 L 20 33 A 4 3.5 0 0 1 24 30 z "
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
     d="M 32 27 A 5 5 0 0 0 27 32 A 5 5 0 0 0 32 37 A 5 5 0 0 0 37 32 A 5 5 0 0 0 32 27 z M 32 28 A 4 4 0 0 1 36 32 A 4 4 0 0 1 32 36 A 4 4 0 0 1 28 32 A 4 4 0 0 1 32 28 z M 32 38 A 10 10 0 0 0 22 47 L 23 47 L 41 47 L 42 47 A 10 10 0 0 0 32 38 z M 32 39 A 9 9 0 0 1 40.8 46 L 23.2 46 A 9 9 0 0 1 32 39 z "
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
     d="M 47.9 41 C 44 41 41 44.2 41 48 C 41 51.9 44.1 55 48 55 C 51.9 55 55 51.9 55 48 C 55 44.1 51.9 41 48 41 C 48 41 47.9375 41 47.9 41 z M 48 42 C 51.3 42 54 44.7 54 48 C 54 51.3 51.3 54 48 54 C 44.7 54 42 51.3 42 48 C 42 44.7 44.7 42 48 42 z M 47.9 58 C 40.4 58 34.1 63.6 33.1 71 L 62.9 71 C 61.9 63.5 55.5 58 48 58 C 48 58 48 58 48 58 z M 48 59 C 47.9 59 48 59 48 59 C 54.6 59 60.3 63.6 61.7 70 L 34.3 70 C 35.7 63.6 41.3 59.1 47.8 59 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
