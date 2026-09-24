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
        d="M 6.5 2 C 5.1 2 4 3.1 4 4.5 C 4 5.9 5.1 7 6.5 7 C 7.9 7 9 5.9 9 4.5 C 9 3.1 7.9 2 6.5 2 z M 6.5 3 C 7.3 3 8 3.7 8 4.5 C 8 5.3 7.3 6 6.5 6 C 5.7 6 5 5.3 5 4.5 C 5 3.7 5.7 3 6.5 3 z M 12 4 C 10.9 4 10 4.9 10 6 C 10 7.1 10.9 8 12 8 C 13.1 8 14 7.1 14 6 C 14 4.9 13.1 4 12 4 z M 12 5 C 12.5 5 13 5.4 13 6 C 13 6.5 12.5 7 12 7 C 11.4 7 11 6.5 11 6 C 11 5.4 11.4 5 12 5 z M 6.5 8 C 4 8 2 10 2 12.5 L 2 13 L 2 14 L 2.3 14 L 3 14 L 3.3 14 L 9.7 14 L 10.7 14 L 11 14 L 11 13 L 11 12.5 C 11 10 9 8 6.5 8 z M 6.5 9 C 8.4 9 10 10.6 10 12.5 L 10 13 L 3 13 L 3 12.5 C 3 10.6 4.6 9 6.5 9 z M 12 9 C 11.4 9 10.9 9.1 10.5 9.4 C 10.7 9.7 11 10 11.1 10.2 C 11.4 10.1 11.7 10 12 10 C 13.1 10 14 10.9 14 12 L 11.9 12 C 12 12.3 12 12.7 12 13 L 13.7 13 L 14.8 13 L 15 13 L 15 12 C 15 10.3 13.7 9 12 9 z " 
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
       d="M 14 3 C 12.3 3 11 4.3 11 6 C 11 7.7 12.3 9 14 9 C 15.7 9 17 7.7 17 6 C 17 4.3 15.7 3 14 3 z M 14 4 A 2 2 0 0 1 16 6 A 2 2 0 0 1 14 8 A 2 2 0 0 1 12 6 A 2 2 0 0 1 14 4 z M 8 6 C 6.3 6 5 7.3 5 9 C 5 10.7 6.3 12 8 12 C 9.7 12 11 10.7 11 9 C 11 7.3 9.7 6 8 6 z M 8 7 A 2 2 0 0 1 10 9 A 2 2 0 0 1 8 11 A 2 2 0 0 1 6 9 A 2 2 0 0 1 8 7 z M 14 10 C 13.4 10 12.7 10.1 12.2 10.4 L 12.6 11.3 C 13 11.1 13.5 11 14 11 C 16.2 11 18 12.8 18 15 L 14.5 15 L 15 16 L 19 16 L 19 15 C 19 12.2 16.8 10 14 10 z M 8 13 C 5.2 13 3 15.2 3 18 L 3 19 L 13 19 L 13 18 C 13 15.2 10.8 13 8 13 z M 8 14 C 10.2 14 12 15.8 12 18 L 4 18 C 4 15.8 5.8 14 8 14 z "
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
     d="M 18 13 C 16.9 13 16 13.9 16 15 C 16 16.1 16.9 17 18 17 C 19.1 17 20 16.1 20 15 C 20 13.9 19.1 13 18 13 z M 14 14 C 12.9 14 12 14.9 12 16 C 12 17.1 12.9 18 14 18 C 15.1 18 16 17.1 16 16 C 16 14.9 15.1 14 14 14 z M 18 18 C 17.7 18 17.4 18 17.1 18.1 C 17.4 18.3 17.7 18.7 17.992188 19 L 18 19 C 19.7 19 21 19.9 21 21 L 18.9 21 C 19 21.3 19 21.7 19 22 L 20.6 22 L 21.8 22 L 22 22 L 22 21 C 22 19.3 20.2 18 18 18 z M 14 19 C 11.8 19 10 20.34314 10 22 L 10 23 L 10.2 23 L 11.4 23 L 16.6 23 L 17.8 23 L 18 23 L 18 22 C 18 20.3 16.2 19 14 19 z M 14 20 C 15.7 20 17 20.9 17 22 L 11 22 C 11 20.9 12.3 20 14 20 z "
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
     d="M 22.5 22 C 21.1 22 20 23.1 20 24.5 C 20 25.9 21.1 27 22.5 27 C 23.9 27 25 25.9 25 24.5 C 25 23.1 23.9 22 22.5 22 z M 22.5 23 C 23.3 23 24 23.67 24 24.5 C 24 25.3 23.3 26 22.5 26 C 21.67 26 21 25.3 21 24.5 C 21 23.67 21.67 23 22.5 23 z M 28 24 C 26.9 24 26 24.9 26 26 C 26 27.1 26.9 28 28 28 C 29.1 28 30 27.1 30 26 C 30 24.9 29.1 24 28 24 z M 28 25 C 28.5 25 29 25.45 29 26 C 29 26.5 28.5 27 28 27 C 27.45 27 27 26.5 27 26 C 27 25.45 27.45 25 28 25 z M 22.5 28 C 20 28 18 30 18 32.5 L 18 34 L 27 34 L 27 32.5 C 27 30 25 28 22.5 28 z M 22.5 29 C 24.4 29 26 30.56 26 32.5 L 26 33 L 19 33 L 19 32.5 C 19 30.56 20.56 29 22.5 29 z M 28 29 C 27.4 29 26.9 29.16 26.5 29.4 C 26.7 29.66 26.9 29.9 27.14 30.2 C 27.4 30.08 27.7 30 28 30 C 29.1 30 30 30.9 30 32 L 27.9 32 C 28 32.3 28 32.65717 28 33 L 31 33 L 31 32 C 31 30.338 29.662 29 28 29 z "
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
     d="M 29 27 C 26.8 27 25 28.8 25 31 C 25 33.2 26.8 35 29 35 C 31.2 35 33 33.2 33 31 C 33 28.8 31.2 27 29 27 z M 29 28 C 30.7 28 32 29.3 32 31 C 32 32.7 30.7 34 29 34 C 27.3 34 26 32.7 26 31 C 26 29.3 27.3 28 29 28 z M 38 28 C 36.3 28 35 29.3 35 31 C 35 32.7 36.3 34 38 34 C 39.7 34 41 32.7 41 31 C 41 29.3 39.7 28 38 28 z M 38 29 C 39.1 29 40 29.9 40 31 C 40 32.1 39.1 33 38 33 C 36.9 33 36 32.1 36 31 C 36 29.9 36.9 29 38 29 z M 38 35 C 36.9 35 35.9 35.4 35.2 36.2 L 35.9 36.9 C 36.4 36.3 37.169 36 38 36 C 39.7 36 41 37.3 41 39 L 41 42 L 38 42 L 38 43 L 42 43 L 42 39 C 42 36.8 40.2 35 38 35 z M 29 36 C 25.1 36 22 39.1 22 43 L 22 47 L 36 47 L 36 43 C 36 39.1 32.9 36 29 36 z M 29 37 C 32.3 37 35 39.7 35 43 L 35 46 L 23 46 L 23 43 C 23 39.7 25.7 37 29 37 z "
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
     d="M 43.5 41 C 40.5 41 38 43.5 38 46.5 C 38 49.5 40.5 52 43.5 52 C 46.5 52 49 49.5 49 46.5 C 49 43.5 46.5 41 43.5 41 z M 43.5 42 C 46 42 48 44 48 46.5 C 48 49 46 51 43.5 51 C 41 51 39 49 39 46.5 C 39 44 41 42 43.5 42 z M 57 43 C 54.8 43 53 44.8 53 47 C 53 49.2 54.8 51 57 51 C 59.2 51 61 49.2 61 47 C 61 44.8 59.2 43 57 43 z M 57 44 C 58.7 44 60 45.3 60 47 C 60 48.7 58.7 50 57 50 C 55.3 50 54 48.7 54 47 C 54 45.3 55.3431 44 57 44 z M 57 53 C 55.3 53 53.8 53.7 52.7 54.8 C 53 55 53.2 55.2 53.5 55.5 C 54.4 54.6 55.6 54 57 54 C 59.8 54 62 56.2 62 59 L 62 64 L 57 64 C 57 64 57 65 57 65 L 63 65 L 63 59 C 63 55.7 60.3 53 57 53 z M 43.5 55 C 37.7 55 33 59.701 33 65.5 L 33 71 L 54 71 L 54 65.5 C 54 59.701 49.299 55 43.5 55 z M 43.5 56 C 48.7 56 53 60.2 53 65.5 L 53 70 L 34 70 L 34 65.5 C 34 60.2 38.2 56 43.5 56 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
