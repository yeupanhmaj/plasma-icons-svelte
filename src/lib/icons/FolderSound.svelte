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
        d="M 5 2 L 5 4 L 5 10.3 C 4.705 10.1 4.4 10 4 10 C 2.9 10 2 10.9 2 12 C 2 13.1 2.9 14 4 14 C 5.1 14 6 13.1 6 12 L 6 6 L 13 6 L 13 8.3 C 12.705 8.1 12.4 8 12 8 C 10.9 8 10 8.9 10 10 C 10 11.1 10.9 12 12 12 C 13.1 12 14 11.1 14 10 L 14 2 L 5 2 z M 6 4 L 13 4 L 13 5 L 6 5 L 6 4 z " 
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
       d="M 7 3 L 7 4 L 7 14.5 A 2.5 2.5 0 0 0 5.5 14 A 2.5 2.5 0 0 0 3 16.5 A 2.5 2.5 0 0 0 5.5 19 A 2.5 2.5 0 0 0 8 16.5 L 8 7 L 18 7 L 18 12.5 A 2.5 2.5 0 0 0 16.5 12 A 2.5 2.5 0 0 0 14 14.5 A 2.5 2.5 0 0 0 16.5 17 A 2.5 2.5 0 0 0 19 14.5 L 19 4 L 19 3.5 L 19 3 L 8 3 L 7 3 z M 8 4 L 18 4 L 18 6 L 8 6 L 8 4 z "
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
     d="M 14 13 L 14 14 L 14 19.3 A 2 2 0 0 0 13 19 A 2 2 0 0 0 11 21 A 2 2 0 0 0 13 23 A 2 2 0 0 0 15 21 L 15 16 L 20 16 L 20 18.3 A 2 2 0 0 0 19 18 A 2 2 0 0 0 17 20 A 2 2 0 0 0 19 22 A 2 2 0 0 0 21 20 L 21 14 L 21 13 L 15 13 L 14 13 z M 15 14 L 20 14 L 20 15 L 15 15 L 15 14 z "
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
     d="M 21 22 L 21 30.3 C 20.7 30.1 20.4 30 20 30 C 18.9 30 18 30.9 18 32 C 18 33.1 18.9 34 20 34 C 21.1 34 22 33.1 22 32 L 22 26 L 29 26 L 29 28.3 C 28.7 28.1 28.4 28 28 28 C 26.9 28 26 28.9 26 30 C 26 31.1 26.9 32 28 32 C 29.1 32 30 31.1 30 30 L 30 22 L 21 22 z M 22 24 L 29 24 L 29 25 L 22 25 L 22 24 z "
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
     d="M 27 27 L 27 29 L 27 31 L 27 32 L 27 41.8 C 26.5 41.3 25.8 41 25 41 C 23.3 41 22 42.3 22 44 C 22 45.7 23.3 47 25 47 C 26.7 47 28 45.7 28 44 L 28 32 L 41 32 L 41 38.8 C 40.5 38.3 39.8 38 39 38 C 37.3 38 36 39.3 36 41 C 36 42.7 37.3 44 39 44 C 40.7 44 42 42.7 42 41 L 42 27 L 27 27 z M 28 29 L 41 29 L 41 31 L 28 31 L 28 29 z "
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
     d="M 41 41 L 41 63.7 A 4.5 4.5 0 0 0 37.5 62 A 4.5 4.5 0 0 0 33 66.5 A 4.5 4.5 0 0 0 37.5 71 A 4.5 4.5 0 0 0 42 66.5 A 4.5 4.5 0 0 0 42 66 L 42 66 L 42 48 L 62 48 L 62 59.7 A 4.5 4.5 0 0 0 58.5 58 A 4.5 4.5 0 0 0 54 62.5 A 4.5 4.5 0 0 0 58.5 67 A 4.5 4.5 0 0 0 63 62.5 A 4.5 4.5 0 0 0 63 62 L 63 62 L 63 41 L 41 41 z M 42 44 L 62 44 L 62 47 L 42 47 L 42 44 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
