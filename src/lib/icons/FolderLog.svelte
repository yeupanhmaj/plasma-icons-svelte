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
       d="M 2 2 L 2 3 L 14 3 L 14 2 L 2 2 z M 2.5 4 C 2.223 4 2 4.223 2 4.5 C 2 4.777 2.223 5 2.5 5 C 2.777 5 3 4.777 3 4.5 C 3 4.223 2.777 4 2.5 4 z M 4 4 L 4 5 L 13 5 L 13 4 L 4 4 z M 4 6 L 4 7 L 8 7 L 8 6 L 4 6 z M 2.5 9 C 2.223 9 2 9.223 2 9.5 C 2 9.777 2.223 10 2.5 10 C 2.777 10 3 9.777 3 9.5 C 3 9.223 2.777 9 2.5 9 z M 4 9 L 4 10 L 13 10 L 13 9 L 4 9 z M 4 11 L 4 12 L 12 12 L 12 11 L 4 11 z M 2 13 L 2 14 L 14 14 L 14 13 L 2 13 z "
       class="ColorScheme-Text" />
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
       d="M 3 3 L 3 4 L 19 4 L 19 3 L 3 3 z M 3.5 6 A 0.5 0.5 0 0 0 3 6.5 A 0.5 0.5 0 0 0 3.5 7 A 0.5 0.5 0 0 0 4 6.5 A 0.5 0.5 0 0 0 3.5 6 z M 6 6 L 6 7 L 17 7 L 17 6 L 6 6 z M 6 9 L 6 10 L 11 10 L 11 9 L 6 9 z M 3.5 12 A 0.5 0.5 0 0 0 3 12.5 A 0.5 0.5 0 0 0 3.5 13 A 0.5 0.5 0 0 0 4 12.5 A 0.5 0.5 0 0 0 3.5 12 z M 6 12 L 6 13 L 17 13 L 17 12 L 6 12 z M 6 15 L 6 16 L 11 16 L 11 15 L 6 15 z M 3 18 L 3 19 L 19 19 L 19 18 L 3 18 z "
       class="ColorScheme-Text" />
		</svg>
	{:else if numericSize <= 48}
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
     d="m 10,12 v 1 h 12 v -1 z m 0.5,2 C 10.223,14 10,14.223 10,14.5 10,14.777 10.223,15 10.5,15 10.777,15 11,14.777 11,14.5 11,14.223 10.777,14 10.5,14 m 1.5,0 v 1 h 9 v -1 z m 0,2 v 1 h 4 v -1 z m -1.5,3 C 10.223,19 10,19.223 10,19.5 10,19.777 10.223,20 10.5,20 10.777,20 11,19.777 11,19.5 11,19.223 10.777,19 10.5,19 m 1.5,0 v 1 h 9 v -1 z m 0,2 v 1 h 8 v -1 z m -2,2 v 1 h 12 v -1 z"
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
     d="M 21 26 L 21 27 L 43 27 L 43 26 L 21 26 z M 21 28 L 21 29 L 22 29 L 22 28 L 21 28 z M 25 31 C 24.4 31 24 31.4 24 32 C 24 32.55 24.4 33 25 33 C 25.55 33 26 32.55 26 32 C 26 31.4 25.55 31 25 31 z M 28 31 L 28 32 L 39 32 L 39 31 L 28 31 z M 28 33 L 28 34 L 32 34 L 32 33 L 28 33 z M 25 39 C 24.4 39 24 39.4 24 40 C 24 40.55 24.4 41 25 41 C 25.55 41 26 40.55 26 40 C 26 39.4 25.55 39 25 39 z M 28 39 L 28 40 L 33 40 L 33 39 L 28 39 z M 28 41 L 28 42 L 35 42 L 35 41 L 28 41 z M 28 43 L 28 44 L 42 44 L 42 43 L 28 43 z M 21 45 L 21 46 L 22 46 L 22 45 L 21 45 z M 21 47 L 21 48 L 43 48 L 43 47 L 21 47 z "
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
    class="ColorScheme-Accent"
    d="m6 9v21h-1v57h86v-63h-1v-9h-42l-6-6z" />

  
  <path
    d="m6 9v21h27l6-6h51v-9h-42l-6-6z"
    fill-opacity=".33" />

  
  <path
    d="m42 9 5 7h43v-1h-42zm-3 15-6 6h-28v1h29z"
    fill="#fff"
    fill-opacity=".2" />

  
  <path
    d="m39 24-7 5h-26v1h27zm-34 62v1h86v-1z"
    fill-opacity=".2" />

  
  <path
    d="m33 42v1h30v-1zm5.5 5.75a1.75 1.75 0 0 0 -1.75 1.75 1.75 1.75 0 0 0 1.75 1.75 1.75 1.75 0 0 0 1.75-1.75 1.75 1.75 0 0 0 -1.75-1.75zm3.5.25v2h15v-2zm0 3v2h6v-2zm-3.5 6.75a1.75 1.75 0 0 0 -1.75 1.75 1.75 1.75 0 0 0 1.75 1.75 1.75 1.75 0 0 0 1.75-1.75 1.75 1.75 0 0 0 -1.75-1.75zm3.5.25v2h8v-2zm0 4v2h17v-2zm-9 7v1h30v-1z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
