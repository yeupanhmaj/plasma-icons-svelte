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
			<path style="fill:currentColor"
       d="M 5 2 A 1 1 0 0 0 4 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 6 3 A 1 1 0 0 0 5 2 z M 10 2 L 8.5 3.5 L 11 6 L 8.5 8.5 L 10 10 L 14 6 L 10 2 z M 3.25 6.5 A 1.25 1.25 0 0 0 2 7.75 A 1.25 1.25 0 0 0 3.25 9 A 1.25 1.25 0 0 0 4.5 7.75 A 1.25 1.25 0 0 0 3.25 6.5 z M 6.5 11 A 1.5 1.5 0 0 0 5 12.5 A 1.5 1.5 0 0 0 6.5 14 A 1.5 1.5 0 0 0 8 12.5 A 1.5 1.5 0 0 0 6.5 11 z "
       class="ColorScheme-Text"
       />
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
       d="M 7 3 C 6.4 3 6 3.4 6 4 C 6 4.5 6.4 5 7 5 C 7.5 5 8 4.5 8 4 C 8 3.4 7.8 3 7 3 z M 14 3 L 12 5 L 15 8 L 12 11 L 14 13 L 17 10 L 19 8 L 14 3 z M 4.5 9 C 3.7 9 3 9.7 3 10.5 C 3 11.3 3.7 12 4.5 12 C 5.3 12 6 11.3 6 10.5 C 6 9.7 5.3 9 4.5 9 z M 9 15 C 7.9 15 7 15.9 7 17 C 7 18.1 7.9 19 9 19 C 10.1 19 11 18.1 11 17 C 11 15.9 10.1 15 9 15 z "
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
     d="M 18 13 L 17 14 L 19 16 L 17 18 L 18 19 L 21 16 L 18 13 z M 14 14 A 1 1 0 0 0 13 15 A 1 1 0 0 0 14 16 A 1 1 0 0 0 15 15 A 1 1 0 0 0 14 14 z M 12 17 A 1 1 0 0 0 11 18 A 1 1 0 0 0 12 19 A 1 1 0 0 0 13 18 A 1 1 0 0 0 12 17 z M 14.55 19.9 A 1.55 1.55 0 0 0 13 21.4 A 1.55 1.55 0 0 0 14.55 23 A 1.55 1.55 0 0 0 16 21.4 A 1.55 1.55 0 0 0 14.55 19.9 z "
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
     d="M 21 22 A 1 1 0 0 0 20 23 A 1 1 0 0 0 21 24 A 1 1 0 0 0 22 23 A 1 1 0 0 0 21 22 z M 26 22 L 24.5 23.5 L 27 26 L 24.5 28.5 L 26 30 L 30 26 L 26 22 z M 19.25 26.5 A 1.25 1.25 0 0 0 18 27.75 A 1.25 1.25 0 0 0 19.25 29 A 1.25 1.25 0 0 0 20.5 27.75 A 1.25 1.25 0 0 0 19.25 26.5 z M 22.5 31 A 1.5 1.5 0 0 0 21 32.5 A 1.5 1.5 0 0 0 22.5 34 A 1.5 1.5 0 0 0 24 32.5 A 1.5 1.5 0 0 0 22.5 31 z "
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
     d="M 26.5 27 A 1.5 1.5 0 0 0 25 28.5 A 1.5 1.5 0 0 0 26.5 30 A 1.5 1.5 0 0 0 28 28.5 A 1.5 1.5 0 0 0 26.5 27 z M 35 27 L 32.1 29.8 L 36.5 34.2 L 32 39.4 L 35 42 L 42 34 L 35 27 z M 24.5 34 A 2.5 2.5 0 0 0 22 36.5 A 2.5 2.5 0 0 0 24.5 39 A 2.5 2.5 0 0 0 27 36.5 A 2.5 2.5 0 0 0 24.5 34 z M 29 41 A 3 3 0 0 0 26 44 A 3 3 0 0 0 29 47 A 3 3 0 0 0 32 44 A 3 3 0 0 0 29 41 z "
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
     d="M 53 41 L 49.4 44.5 L 56 51 L 49.4 57.5 L 53 61 L 63 51 L 53 41 z M 40 42 A 2 2 0 0 0 38 44 A 2 2 0 0 0 40 46 A 2 2 0 0 0 42 44 A 2 2 0 0 0 40 42 A 2 2 0 0 0 40 42 z M 35.5 53 A 2.5 2.5 0 0 0 33 55.5 A 2.5 2.5 0 0 0 35.5 58 A 2.5 2.5 0 0 0 38 55.5 A 2.5 2.5 0 0 0 35.5 53 z M 45 63 A 4 4 0 0 0 41 67 A 4 4 0 0 0 45 71 A 4 4 0 0 0 49 67 A 4 4 0 0 0 45 63 A 4 4 0 0 0 45 63 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
