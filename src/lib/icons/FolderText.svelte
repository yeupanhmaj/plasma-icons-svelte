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
        d="M 2 2 L 2 3 L 8 3 L 8 2 L 2 2 z M 2 4 L 2 5 L 14 5 L 14 4 L 2 4 z M 2 6 L 2 7 L 12 7 L 12 6 L 2 6 z M 2 9 L 2 10 L 8 10 L 8 9 L 2 9 z M 2 11 L 2 12 L 14 12 L 14 11 L 2 11 z M 2 13 L 2 14 L 11 14 L 11 13 L 2 13 z "
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
       d="M 3 3 L 3 4 L 11 4 L 11 3 L 3 3 z M 3 7 L 3 8 L 19 8 L 19 7 L 3 7 z M 3 11 L 3 12 L 11 12 L 11 11 L 3 11 z M 3 14 L 3 15 L 19 15 L 19 14 L 3 14 z M 3 18 L 3 19 L 15 19 L 15 18 L 3 18 z "
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
     d="M 11 14 L 11 15 L 21 15 L 21 14 L 11 14 z M 11 16 L 11 17 L 21 17 L 21 16 L 11 16 z M 11 18 L 11 19 L 16 19 L 16 18 L 11 18 z M 11 20 L 11 21 L 21 21 L 21 20 L 11 20 z M 11 22 L 11 23 L 21 23 L 21 22 L 11 22 z "
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
     d="M 18 22 L 18 23 L 24 23 L 24 22 L 18 22 z M 18 24 L 18 25 L 30 25 L 30 24 L 18 24 z M 18 26 L 18 27 L 28 27 L 28 26 L 18 26 z M 18 29 L 18 30 L 24 30 L 24 29 L 18 29 z M 18 31 L 18 32 L 30 32 L 30 31 L 18 31 z M 18 33 L 18 34 L 27 34 L 27 33 L 18 33 z "
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
     d="M 22 28 L 22 29 L 42 29 L 42 28 L 22 28 z M 22 30 L 22 31 L 35 31 L 35 30 L 22 30 z M 22 32 L 22 33 L 38 33 L 38 32 L 22 32 z M 22 34 L 22 35 L 42 35 L 42 34 L 22 34 z M 22 36 L 22 37 L 32 37 L 32 36 L 22 36 z M 22 38 L 22 39 L 42 39 L 42 38 L 22 38 z M 22 40 L 22 41 L 39 41 L 39 40 L 22 40 z M 22 42 L 22 43 L 32 43 L 32 42 L 22 42 z M 22 44 L 22 45 L 42 45 L 42 44 L 22 44 z M 22 46 L 22 47 L 36 47 L 36 46 L 22 46 z "
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
     d="M 33 42 L 33 43 L 63 43 L 63 42 L 33 42 z M 33 45 L 33 46 L 53 46 L 53 45 L 33 45 z M 33 48 L 33 49 L 57 49 L 57 48 L 33 48 z M 33 51 L 33 52 L 63 52 L 63 51 L 33 51 z M 33 54 L 33 55 L 48 55 L 48 54 L 33 54 z M 33 57 L 33 58 L 63 58 L 63 57 L 33 57 z M 33 60 L 33 61 L 59 61 L 59 60 L 33 60 z M 33 63 L 33 64 L 48 64 L 48 63 L 33 63 z M 33 66 L 33 67 L 63 67 L 63 66 L 33 66 z M 33 69 L 33 70 L 54 70 L 54 69 L 33 69 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
