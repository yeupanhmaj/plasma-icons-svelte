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
        d="M 6 2 L 6 3 L 6 6 L 7 6 L 7 3 L 9 3 L 9 6 L 10 6 L 10 3 L 10 2 L 6 2 z M 3.7 6 L 3 6.7 L 6.3 10 L 8 11.7 L 9.7 10 L 13 6.7 L 12.3 6 L 9 9.3 L 8 10.3 L 7 9.3 L 3.7 6 z M 2 12 L 2 14 L 3 14 L 14 14 L 14 13 L 14 12 L 13 12 L 13 13 L 3 13 L 3 12 L 2 12 z " 
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
       d="M 8 3 L 8 9 L 9 9 L 9 4 L 13 4 L 13 9 L 14 9 L 14 3 L 13 3 L 9 3 L 8 3 z M 5.8 10 L 5 10.8 L 11 17 L 17 10.8 L 16.2 10 L 11 15.4 L 5.8 10 z M 4 17 L 4 19 L 5 19 L 17 19 L 18 19 L 18 17 L 17 17 L 17 18 L 5 18 L 5 17 L 4 17 z "
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
     d="M 14 13 L 14 14 L 14 17 L 15 17 L 15 14 L 17 14 L 17 17 L 18 17 L 18 13 L 14 13 z M 13.2 16.8 L 12.5 17.5 L 15 20 L 15.8 20.8 L 16 21 L 16.2 20.8 L 17 20 L 19.5 17.5 L 18.8 16.8 L 17 18.6 L 16 19.6 L 15 18.6 L 13.2 16.8 z M 11 21 L 11 22 L 11 23 L 12 23 L 21 23 L 21 22 L 21 21 L 20 21 L 20 22 L 12 22 L 12 21 L 11 21 z "
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
     d="M 22 22 L 22 26 L 23 26 L 23 23 L 25 23 L 25 26 L 26 26 L 26 22 L 22 22 z M 19.7 26 L 19 26.7 L 24 31.7 L 29 26.7 L 28.3 26 L 24 30.3 L 19.7 26 z M 18 32 L 18 34 L 30 34 L 30 32 L 29 32 L 29 33 L 19 33 L 19 32 L 18 32 z "
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
     d="M 29 27 L 29 28 L 29 34 L 30 34 L 30 28 L 34 28 L 34 34 L 35 34 L 35 27 L 29 27 z M 25.7 34.3 L 25 35 L 29.3 39.3 L 29.3 39.3 L 32 42 L 34.7 39.3 L 39 35 L 38.3 34.3 L 34 38.6 L 32 40.6 L 30 38.6 L 25.7 34.3 z M 22 44 L 22 46 L 22 47 L 23 47 L 42 47 L 42 46 L 42 44 L 41 44 L 41 46 L 23 46 L 23 44 L 22 44 z "
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
     d="M 44 41 L 44 51 L 45 51 L 45 42 L 51 42 L 51 51 L 52 51 L 52 41 L 44 41 z M 38.4 51.6 L 37.6 52.4 L 48 62.7 L 58.4 52.4 L 57.6 51.6 L 48 61.3 L 38.4 51.6 z M 33 67 L 33 71 L 63 71 L 63 67 L 62 67 L 62 70 L 34 70 L 34 67 L 33 67 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
