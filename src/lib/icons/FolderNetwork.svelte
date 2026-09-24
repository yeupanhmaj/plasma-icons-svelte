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
        d="M 8 2 C 4.7 2 2 4.7 2 8 C 2 11.3 4.7 14 8 14 C 11.3 14 14 11.3 14 8 C 14 4.7 11.3 2 8 2 z M 8 3 C 11 3 13 5 13 8 C 13 11 11 13 8 13 C 5 13 3 11 3 8 C 3 5 5 3 8 3 z M 9.5 5 A 1 1 0 0 0 8.5 6 A 1 1 0 0 0 9.5 7 A 1 1 0 0 0 10.5 6 A 1 1 0 0 0 9.5 5 z M 7.5 6.5 A 0.5 0.5 0 0 0 7 7 A 0.5 0.5 0 0 0 7.5 7.5 A 0.5 0.5 0 0 0 8 7 A 0.5 0.5 0 0 0 7.5 6.5 z M 5.5 7 A 1 1 0 0 0 4.5 8 A 1 1 0 0 0 5.5 9 A 1 1 0 0 0 6.5 8 A 1 1 0 0 0 5.5 7 z M 7.5 8.5 A 0.5 0.5 0 0 0 7 9 A 0.5 0.5 0 0 0 7.5 9.5 A 0.5 0.5 0 0 0 8 9 A 0.5 0.5 0 0 0 7.5 8.5 z M 9.5 9 A 1 1 0 0 0 8.5 10 A 1 1 0 0 0 9.5 11 A 1 1 0 0 0 10.5 10 A 1 1 0 0 0 9.5 9 z " 
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
       d="M 11 3 A 8 8 0 0 0 3 11 A 8 8 0 0 0 11 19 A 8 8 0 0 0 19 11 A 8 8 0 0 0 11 3 z M 11 4 A 7 7 0 0 1 18 11 A 7 7 0 0 1 11 18 A 7 7 0 0 1 4 11 A 7 7 0 0 1 11 4 z M 13 7 A 1 1 0 0 0 12 8 A 1 1 0 0 0 13 9 A 1 1 0 0 0 14 8 A 1 1 0 0 0 13 7 z M 10.5 9 A 0.5 0.5 0 0 0 10 9.5 A 0.5 0.5 0 0 0 10.5 10 A 0.5 0.5 0 0 0 11 9.5 A 0.5 0.5 0 0 0 10.5 9 z M 8 10 A 1 1 0 0 0 7 11 A 1 1 0 0 0 8 12 A 1 1 0 0 0 9 11 A 1 1 0 0 0 8 10 z M 10.5 12 A 0.5 0.5 0 0 0 10 12.5 A 0.5 0.5 0 0 0 10.5 13 A 0.5 0.5 0 0 0 11 12.5 A 0.5 0.5 0 0 0 10.5 12 z M 13 13 A 1 1 0 0 0 12 14 A 1 1 0 0 0 13 15 A 1 1 0 0 0 14 14 A 1 1 0 0 0 13 13 z "
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
     d="M 20 13 A 1 1 0 0 0 19 14 A 1 1 0 0 0 20 15 A 1 1 0 0 0 21 14 A 1 1 0 0 0 20 13 z M 16.5 15 A 0.5 0.5 0 0 0 16 15.5 A 0.5 0.5 0 0 0 16.5 16 A 0.5 0.5 0 0 0 17 15.5 A 0.5 0.5 0 0 0 16.5 15 z M 14.5 16 A 0.5 0.5 0 0 0 14 16.5 A 0.5 0.5 0 0 0 14.5 17 A 0.5 0.5 0 0 0 15 16.5 A 0.5 0.5 0 0 0 14.5 16 z M 12 17 A 1 1 0 0 0 11 18 A 1 1 0 0 0 12 19 A 1 1 0 0 0 13 18 A 1 1 0 0 0 12 17 z M 14.5 19 A 0.5 0.5 0 0 0 14 19.5 A 0.5 0.5 0 0 0 14.5 20 A 0.5 0.5 0 0 0 15 19.5 A 0.5 0.5 0 0 0 14.5 19 z M 16.5 20 A 0.5 0.5 0 0 0 16 20.5 A 0.5 0.5 0 0 0 16.5 21 A 0.5 0.5 0 0 0 17 20.5 A 0.5 0.5 0 0 0 16.5 20 z M 20 21 A 1 1 0 0 0 19 22 A 1 1 0 0 0 20 23 A 1 1 0 0 0 21 22 A 1 1 0 0 0 20 21 z "
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
     style="fill:currentColor" 
     d="M 5,6 V 16 H 4 V 42 H 44 V 13 H 43 V 9 H 24 L 21,6 Z"
     class="ColorScheme-Accent"
     />
  <path
     style="fill-opacity:0.33"
     d="m 5,6 v 10 h 12 l 3,-3 H 43 V 9 H 24 L 21,6 Z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.2"
     d="M 21 6 L 23 10 L 43 10 L 43 9 L 24 9 L 21 6 z M 20 13 L 17 16 L 4 16 L 4 17 L 18 17 L 20 13 z "
     />
  <path
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 20 13 L 16 15 L 5 15 L 5 16 L 17 16 L 20 13 z M 4 41 L 4 42 C 4 42 44 42 44 42 L 44 41 L 4 41 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="M 27.5 22.5 C 26.7 22.5 26 23.2 26 24 C 26 24.8 26.7 25.5 27.5 25.5 C 28.3 25.5 29 24.8 29 24 C 29 23.2 28.3 22.5 27.5 22.5 z M 24.5 25 C 24.2 25 24 25.2 24 25.5 C 24 25.8 24.2 26 24.5 26 C 24.8 26 25 25.8 25 25.5 C 25 25.2 24.8 25 24.5 25 z M 22.5 26 C 22.2 26 22 26.2 22 26.5 C 22 26.8 22.2 27 22.5 27 C 22.8 27 23 26.8 23 26.5 C 23 26.2 22.8 26 22.5 26 z M 19.5 27 C 18.7 27 18 27.7 18 28.5 C 18 29.3 18.7 30 19.5 30 C 20.3 30 21 29.3 21 28.5 C 21 27.7 20.3 27 19.5 27 z M 22.5 30 C 22.2 30 22 30.2 22 30.5 C 22 30.8 22.2 31 22.5 31 C 22.8 31 23 30.8 23 30.5 C 23 30.2 22.8 30 22.5 30 z M 24.5 31 C 24.2 31 24 31.2 24 31.5 C 24 31.8 24.2 32 24.5 32 C 24.8 32 25 31.8 25 31.5 C 25 31.2 24.8 31 24.5 31 z M 27.5 31.5 C 26.7 31.5 26 32.2 26 33 C 26 33.8 26.7 34.5 27.5 34.5 C 28.3 34.5 29 33.8 29 33 C 29 32.2 28.3 31.5 27.5 31.5 z "
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
     d="M 38.9 27 A 2 2 0 0 0 36.9 29 A 2 2 0 0 0 38.9 31 A 2 2 0 0 0 40.9 29 A 2 2 0 0 0 38.9 27 z M 35.4 30 A 0.5 0.5 0 0 0 34.9 30.5 A 0.5 0.5 0 0 0 35.4 31 A 0.5 0.5 0 0 0 35.9 30.5 A 0.5 0.5 0 0 0 35.4 30 z M 32.4 32 A 0.5 0.5 0 0 0 31.9 32.5 A 0.5 0.5 0 0 0 32.4 33 A 0.5 0.5 0 0 0 32.9 32.5 A 0.5 0.5 0 0 0 32.4 32 z M 29.4 34 A 0.5 0.5 0 0 0 28.9 34.5 A 0.5 0.5 0 0 0 29.4 35 A 0.5 0.5 0 0 0 29.9 34.5 A 0.5 0.5 0 0 0 29.4 34 z M 24.9 35 A 2 2 0 0 0 22.9 37 A 2 2 0 0 0 24.9 39 A 2 2 0 0 0 26.9 37 A 2 2 0 0 0 24.9 35 z M 29.4 39 A 0.5 0.5 0 0 0 28.9 39.5 A 0.5 0.5 0 0 0 29.4 40 A 0.5 0.5 0 0 0 29.9 39.5 A 0.5 0.5 0 0 0 29.4 39 z M 32.4 41 A 0.5 0.5 0 0 0 31.9 41.5 A 0.5 0.5 0 0 0 32.4 42 A 0.5 0.5 0 0 0 32.9 41.5 A 0.5 0.5 0 0 0 32.4 41 z M 35.4 43 A 0.5 0.5 0 0 0 34.9 43.5 A 0.5 0.5 0 0 0 35.4 44 A 0.5 0.5 0 0 0 35.9 43.5 A 0.5 0.5 0 0 0 35.4 43 z M 38.9 43 A 2 2 0 0 0 36.9 45 A 2 2 0 0 0 38.9 47 A 2 2 0 0 0 40.9 45 A 2 2 0 0 0 38.9 43 z "
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
     d="M 57.9 41 A 3 3 0 0 0 55 44 A 3 3 0 0 0 58 47 A 3 3 0 0 0 61 44 A 3 3 0 0 0 58 41 A 3 3 0 0 0 57.9 41 z M 53 46 A 1 1 0 0 0 52 47 A 1 1 0 0 0 53 48 A 1 1 0 0 0 54 47 A 1 1 0 0 0 53 46 z M 47.5 49 A 1 1 0 0 0 46.5 50 A 1 1 0 0 0 47.5 51 A 1 1 0 0 0 48.5 50 A 1 1 0 0 0 47.5 49 z M 42 52 A 1 1 0 0 0 41 53 A 1 1 0 0 0 42 54 A 1 1 0 0 0 43 53 A 1 1 0 0 0 42 52 z M 36.9 53 A 3 3 0 0 0 34 56 A 3 3 0 0 0 37 59 A 3 3 0 0 0 40 56 A 3 3 0 0 0 37 53 A 3 3 0 0 0 36.9 53 z M 42 58 A 1 1 0 0 0 41 59 A 1 1 0 0 0 42 60 A 1 1 0 0 0 43 59 A 1 1 0 0 0 42 58 z M 47.5 61 A 1 1 0 0 0 46.5 62 A 1 1 0 0 0 47.5 63 A 1 1 0 0 0 48.5 62 A 1 1 0 0 0 47.5 61 z M 53 64 A 1 1 0 0 0 52 65 A 1 1 0 0 0 53 66 A 1 1 0 0 0 54 65 A 1 1 0 0 0 53 64 z M 58 65 A 3 3 0 0 0 55 68 A 3 3 0 0 0 58 71 A 3 3 0 0 0 61 68 A 3 3 0 0 0 58 65 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
