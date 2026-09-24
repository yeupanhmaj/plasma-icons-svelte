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
        d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 5 3 L 11 3 L 11 7 L 5 7 L 5 3 z M 3 4 L 4 4 L 4 5 L 3 5 L 3 4 z M 12 4 L 13 4 L 13 5 L 12 5 L 12 4 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 12 7.5 L 13 7.5 L 13 8.5 L 12 8.5 L 12 7.5 z M 5 9 L 11 9 L 11 13 L 5 13 L 5 9 z M 3 11 L 4 11 L 4 12 L 3 12 L 3 11 z M 12 11 L 13 11 L 13 12 L 12 12 L 12 11 z " 
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
       d="M 3 3.5 L 3 18.5 L 4 18.5 L 6 18.5 L 16 18.5 L 18 18.5 L 19 18.5 L 19 3.5 L 18 3.5 L 16 3.5 L 6 3.5 L 4 3.5 L 3 3.5 z M 4 4.5 L 5 4.5 L 5 5.5 L 4 5.5 L 4 4.5 z M 6 4.5 L 16 4.5 L 16 10 L 6 10 L 6 4.5 z M 17 4.5 L 18 4.5 L 18 5.5 L 17 5.5 L 17 4.5 z M 4 7.5 L 5 7.5 L 5 8.5 L 4 8.5 L 4 7.5 z M 17 7.5 L 18 7.5 L 18 8.5 L 17 8.5 L 17 7.5 z M 4 10.5 L 5 10.5 L 5 11.5 L 4 11.5 L 4 10.5 z M 17 10.5 L 18 10.5 L 18 11.5 L 17 11.5 L 17 10.5 z M 6 12 L 16 12 L 16 17.5 L 6 17.5 L 6 12 z M 4 13.5 L 5 13.5 L 5 14.5 L 4 14.5 L 4 13.5 z M 17 13.5 L 18 13.5 L 18 14.5 L 17 14.5 L 17 13.5 z M 4 16.5 L 5 16.5 L 5 17.5 L 4 17.5 L 4 16.5 z M 17 16.5 L 18 16.5 L 18 17.5 L 17 17.5 L 17 16.5 z "
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
     d="M 11 13 L 11 23 L 21 23 L 21 13 L 11 13 z M 12 14 L 13 14 L 13 15 L 12 15 L 12 14 z M 14 14 L 18 14 L 18 17 L 14 17 L 14 14 z M 19 14 L 20 14 L 20 15 L 19 15 L 19 14 z M 12 16 L 13 16 L 13 17 L 12 17 L 12 16 z M 19 16 L 20 16 L 20 17 L 19 17 L 19 16 z M 12 19 L 13 19 L 13 20 L 12 20 L 12 19 z M 14 19 L 18 19 L 18 22 L 14 22 L 14 19 z M 19 19 L 20 19 L 20 20 L 19 20 L 19 19 z M 12 21 L 13 21 L 13 22 L 12 22 L 12 21 z M 19 21 L 20 21 L 20 22 L 19 22 L 19 21 z "
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
     d="m 18,22 v 12 h 12 V 22 Z m 3,1 h 6 v 4 h -6 z m -2,1 h 1 v 1 h -1 z m 9,0 h 1 v 1 h -1 z m -9,3.5 h 1 v 1 h -1 z m 9,0 h 1 v 1 h -1 z m -7,1.5 h 6 v 4 h -6 z m -2,2 h 1 v 1 h -1 z m 9,0 h 1 v 1 h -1 z"
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
     d="M 22 27 L 22 47 L 42 47 L 42 27 L 22 27 z M 23 28 L 25 28 L 25 30 L 23 30 L 23 28 z M 39 28 L 41 28 L 41 30 L 39 30 L 39 28 z M 26 29 L 38 29 L 38 36 L 26 36 L 26 29 z M 23 32 L 25 32 L 25 34 L 23 34 L 23 32 z M 39 32 L 41 32 L 41 34 L 39 34 L 39 32 z M 23 36 L 25 36 L 25 38 L 23 38 L 23 36 z M 39 36 L 41 36 L 41 38 L 39 38 L 39 36 z M 26 38 L 38 38 L 38 45 L 26 45 L 26 38 z M 23 40 L 25 40 L 25 42 L 23 42 L 23 40 z M 39 40 L 41 40 L 41 42 L 39 42 L 39 40 z M 23 44 L 25 44 L 25 46 L 23 46 L 23 44 z M 39 44 L 41 44 L 41 46 L 39 46 L 39 44 z "
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
     d="M 33 41 L 33 71 L 63 71 L 63 41 L 33 41 z M 34 42 L 38 42 L 38 46 L 34 46 L 34 42 z M 58 42 L 62 42 L 62 46 L 58 46 L 58 42 z M 39 43 L 57 43 L 57 55 L 39 55 L 39 43 z M 34 48 L 38 48 L 38 52 L 34 52 L 34 48 z M 58 48 L 62 48 L 62 52 L 58 52 L 58 48 z M 34 54 L 38 54 L 38 58 L 34 58 L 34 54 z M 58 54 L 62 54 L 62 58 L 58 58 L 58 54 z M 39 57 L 57 57 L 57 69 L 39 69 L 39 57 z M 34 60 L 38 60 L 38 64 L 34 64 L 34 60 z M 58 60 L 62 60 L 62 64 L 58 64 L 58 60 z M 34 66 L 38 66 L 38 70 L 34 70 L 34 66 z M 58 66 L 62 66 L 62 70 L 58 70 L 58 66 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
