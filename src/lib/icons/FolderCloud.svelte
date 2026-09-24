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
        d="M 7.5 2 A 4.5 4.5 0 0 0 3 6.5 A 4.5 4.5 0 0 0 3 7.1 A 3 3 0 0 0 1 10 A 3 3 0 0 0 4 13 L 11.5 13 A 3.5 3.5 0 0 0 15 9.5 A 3.5 3.5 0 0 0 12 6 A 4.5 4.5 0 0 0 7.5 2 z M 7.5 3 A 3.5 3.5 0 0 1 11 6.5 A 3.5 3.5 0 0 1 11 7 A 2.5 2.5 0 0 1 11.5 7 A 2.5 2.5 0 0 1 14 9.5 A 2.5 2.5 0 0 1 11.5 12 L 4 12 A 2 2 0 0 1 2 10 A 2 2 0 0 1 4 8 A 2 2 0 0 1 4.4 8 A 3.5 3.5 0 0 1 4 6.5 A 3.5 3.5 0 0 1 7.5 3 z " 
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
        d="M 11 4 A 6 6 0 0 0 5 10 A 6 6 0 0 0 5 10.1 A 4 4 0 0 0 2 14 A 4 4 0 0 0 6 18 L 15 18 A 5 5 0 0 0 20 13 A 5 5 0 0 0 16.8 8.3 A 6 6 0 0 0 11 4 z M 11 5 A 5 5 0 0 1 15.9 9.1 A 4 4 0 0 1 19 13 A 4 4 0 0 1 15 17 L 6 17 A 3 3 0 0 1 3 14 A 3 3 0 0 1 6 11 A 3 3 0 0 1 6.1 11 A 5 5 0 0 1 6 10 A 5 5 0 0 1 11 5 z " 
        class="ColorScheme-Text"/>
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
     d="M 16 13 A 4 4 0 0 0 12 17 A 4 4 0 0 0 12 17.2 A 3 3 0 0 0 10 20 A 3 3 0 0 0 13 23 L 18.5 23 A 3.5 3.5 0 0 0 22 19.5 A 3.5 3.5 0 0 0 20 16.3125 A 4 4 0 0 0 16 13 z M 16 14 A 3 3 0 0 1 19 17 A 3 3 0 0 1 19 17 A 2.5 2.5 0 0 1 21 19.5 A 2.5 2.5 0 0 1 18.5 22 L 13 22 A 2 2 0 0 1 11 20 A 2 2 0 0 1 13 18 A 2 2 0 0 1 13.2 18 A 3 3 0 0 1 13 17 A 3 3 0 0 1 16 14 z "
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
     d="M 23.5 23 A 4.5 4.5 0 0 0 19 27.5 A 4.5 4.5 0 0 0 19 28.1 A 3 3 0 0 0 17 31 A 3 3 0 0 0 20 34 L 27.5 34 A 3.5 3.5 0 0 0 31 30.5 A 3.5 3.5 0 0 0 28 27 A 4.5 4.5 0 0 0 23.5 23 z M 23.5 24 A 3.5 3.5 0 0 1 27 27.5 A 3.5 3.5 0 0 1 27 28 A 2.5 2.5 0 0 1 27.5 28 A 2.5 2.5 0 0 1 30 30.5 A 2.5 2.5 0 0 1 27.5 33 L 20 33 A 2 2 0 0 1 18 31 A 2 2 0 0 1 20 29 A 2 2 0 0 1 20.36 29 A 3.5 3.5 0 0 1 20 27.5 A 3.5 3.5 0 0 1 23.5 24 z "
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
     d="M 32 28 A 7 7 0 0 0 25 35 A 7 7 0 0 0 25.1 36 A 5 5 0 0 0 25 36 A 5 5 0 0 0 20 41 A 5 5 0 0 0 25 46 L 38 46 A 6 6 0 0 0 44 40 A 6 6 0 0 0 38.9 34.1 A 7 7 0 0 0 32 28 z M 32 29 A 6 6 0 0 1 32.6 29 A 6 6 0 0 1 35.4 30 A 6 6 0 0 1 35.4 30 A 6 6 0 0 1 36.7 31.3 A 6 6 0 0 1 36.7 31.3 A 6 6 0 0 1 37.9 34 A 6 6 0 0 1 38 35 A 5 5 0 0 1 39 35.1 A 5 5 0 0 1 39.5 35.2 A 5 5 0 0 1 39.5 35.2 A 5 5 0 0 1 39.9 35.4 A 5 5 0 0 1 40 35.4 A 5 5 0 0 1 40.4 35.6 A 5 5 0 0 1 40.4 35.6 A 5 5 0 0 1 40.8 35.9 A 5 5 0 0 1 40.8 35.9 A 5 5 0 0 1 41.2 36.2 A 5 5 0 0 1 41.2 36.2 A 5 5 0 0 1 41.6 36.5 A 5 5 0 0 1 41.6 36.5 A 5 5 0 0 1 42.2 37.3 A 5 5 0 0 1 42.2 37.3 A 5 5 0 0 1 42.5 37.7 A 5 5 0 0 1 42.5 37.7 A 5 5 0 0 1 42.7 38.2 A 5 5 0 0 1 42.7 38.2 A 5 5 0 0 1 42.8 38.7 A 5 5 0 0 1 42.8 38.7 A 5 5 0 0 1 42.9 39.2 A 5 5 0 0 1 42.9 39.1 A 5 5 0 0 1 43 39.6 A 5 5 0 0 1 43 40 A 5 5 0 0 1 38 45 L 25 45 A 4 4 0 0 1 21 41 A 4 4 0 0 1 21 40.6 A 4 4 0 0 1 25 37 A 4 4 0 0 1 25.3 37 A 4 4 0 0 1 25.3 37 A 4 4 0 0 1 26.5 37.3 A 6 6 0 0 1 26.1 36.1 A 6 6 0 0 1 26 35.6 A 6 6 0 0 1 26 35.5 A 6 6 0 0 1 26 35 A 6 6 0 0 1 26 34.4 A 6 6 0 0 1 32 29 z "
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
     d="M 48.5 45 C 43.2 45 39 49.2 39 54.5 C 39 55 39 55.5 39.1 56.1 C 38.9 56 38.7 56 38.5 56 C 35.5 56 33 58.5 33 61.5 C 33 64.5 35.5 67 38.5 67 L 55.5 67 C 59.6 67 63 63.6 63 59.5 C 63 56.2 60.8 53.3 57.7 52.4 C 56.8 48.1 53 45 48.5 45 z M 48.4 46 C 48.4 46 48.5 46 48.5 46 C 52.5 46 55.8 48.7 56.7 52.4 C 56.7 52.4 56.7 52.5 56.8 52.6 C 56.8 52.7 56.8 52.9 56.9 53.1 C 56.9 53.1 56.9 53.1 56.9 53.2 C 59.9 53.8 62 56.5 62 59.5 C 62 63.1 59.1 66 55.5 66 L 38.5 66 C 36 66 34 64 34 61.5 C 34 59 36 57 38.5 57 C 39.2 57 39.9 57.2 40.5 57.5 C 40.5 57.5 40.5 57.5 40.5 57.5 C 40.4 57.1 40.3 56.7 40.2 56.3 C 40.1 55.7 40 55.1 40 54.5 C 40 49.9 43.7 46.1 48.4 46 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
