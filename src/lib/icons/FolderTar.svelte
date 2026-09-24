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
        d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 7 3 L 7 4 L 8 4 L 8 3 L 13 3 L 13 13 L 3 13 L 3 3 z M 8 4 L 8 5 L 9 5 L 9 4 L 8 4 z M 8 5 L 7 5 L 7 6 L 8 6 L 8 5 z M 8 6 L 8 7 L 9 7 L 9 6 L 8 6 z M 8 7 L 7 7 L 7 8 L 8 8 L 8 7 z M 8 8 L 8 9 L 7 9 L 7 10 L 9 10 L 9 8 L 8 8 z "
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
       d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 10 4 L 10 5 L 11 5 L 11 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 11 5 L 11 6 L 12 6 L 12 5 L 11 5 z M 11 6 L 10 6 L 10 7 L 11 7 L 11 6 z M 11 7 L 11 8 L 12 8 L 12 7 L 11 7 z M 11 8 L 10 8 L 10 9 L 11 9 L 11 8 z M 11 9 L 11 10 L 12 10 L 12 9 L 11 9 z M 11 10 L 10 10 L 10 11 L 11 11 L 11 10 z M 11 11 L 11 12 L 12 12 L 12 11 L 11 11 z M 11 12 L 10 12 L 10 13 L 10 14 L 11 14 L 12 14 L 12 13 L 11 13 L 11 12 z "
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
     d="M 11 13 L 11 23 L 21 23 L 21 13 L 11 13 z M 12 14 L 15 14 L 15 15 L 16 15 L 16 14 L 20 14 L 20 22 L 12 22 L 12 14 z M 16 15 L 16 16 L 17 16 L 17 15 L 16 15 z M 16 16 L 15 16 L 15 17 L 16 17 L 16 16 z M 16 17 L 16 18 L 15 18 L 15 19 L 16 19 L 17 19 L 17 18 L 17 17 L 16 17 z "
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
     d="M 18 22 L 18 34 L 30 34 L 30 22 L 18 22 z M 19 23 L 23 23 L 23 24 L 24 24 L 24 23 L 29 23 L 29 33 L 19 33 L 19 23 z M 24 24 L 24 25 L 25 25 L 25 24 L 24 24 z M 24 25 L 23 25 L 23 26 L 24 26 L 24 25 z M 24 26 L 24 27 L 25 27 L 25 26 L 24 26 z M 24 27 L 23 27 L 23 28 L 24 28 L 24 27 z M 24 28 L 24 29 L 23 29 L 23 30 L 25 30 L 25 28 L 24 28 z "
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
     d="M 22 27 L 22 47 L 42 47 L 42 27 L 22 27 z M 23 28 L 30 28 L 30 30 L 32 30 L 32 28 L 41 28 L 41 46 L 23 46 L 23 28 z M 32 30 L 32 32 L 34 32 L 34 30 L 32 30 z M 32 32 L 30 32 L 30 34 L 32 34 L 32 32 z M 32 34 L 32 36 L 34 36 L 34 34 L 32 34 z M 32 36 L 30 36 L 30 38 L 32 38 L 32 36 z M 32 38 L 32 39 L 30 39 L 30 41 L 34 41 L 34 38 L 32 38 z "
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
     d="M 33 41 L 33 71 L 63 71 L 63 41 L 33 41 z M 34 42 L 45 42 L 45 44 L 48 44 L 48 42 L 62 42 L 62 70 L 34 70 L 34 42 z M 48 44 L 48 46 L 51 46 L 51 44 L 48 44 z M 48 46 L 45 46 L 45 48 L 48 48 L 48 46 z M 48 48 L 48 50 L 51 50 L 51 48 L 48 48 z M 48 50 L 45 50 L 45 52 L 48 52 L 48 50 z M 48 52 L 48 54 L 45 54 L 45 56 L 51 56 L 51 52 L 48 52 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
