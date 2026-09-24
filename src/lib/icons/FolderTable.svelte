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
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 3 2 L 2 2 z M 3 3 L 13 3 L 13 5 L 3 5 L 3 3 z M 3 6 L 5 6 L 5 9 L 3 9 L 3 6 z M 6 6 L 10 6 L 10 9 L 6 9 L 6 6 z M 11 6 L 13 6 L 13 9 L 11 9 L 11 6 z M 3 10 L 5 10 L 5 13 L 3 13 L 3 10 z M 6 10 L 10 10 L 10 13 L 6 13 L 6 10 z M 11 10 L 13 10 L 13 13 L 11 13 L 11 10 z "
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
       d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 8 L 4 8 L 4 4 z M 4 9 L 8 9 L 8 13 L 4 13 L 4 9 z M 9 9 L 13 9 L 13 13 L 9 13 L 9 9 z M 14 9 L 18 9 L 18 13 L 14 13 L 14 9 z M 4 14 L 8 14 L 8 18 L 4 18 L 4 14 z M 9 14 L 13 14 L 13 18 L 9 18 L 9 14 z M 14 14 L 18 14 L 18 18 L 14 18 L 14 14 z "
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
     d="m 11,12 c -0.554,0 -1,0.446 -1,1 v 10 c 0,0.554 0.446,1 1,1 h 10 c 0.554,0 1,-0.446 1,-1 V 13 c 0,-0.554 -0.446,-1 -1,-1 z m 0,1 H 21 V 23 H 11 Z m 1,1 v 1 h 2 v -1 z m 3,0.002 v 1 h 2 v -1 z m 3,0 v 1 h 2 v -1 z M 12,16 v 1 h 2 v -1 z m 3,0.002 v 1 h 2 v -1 z m 3,0 v 1 h 2 v -1 z M 12,18 v 1 h 2 v -1 z m 3,0.002 v 1 h 2 v -1 z m 3,0 v 1 h 2 v -1 z M 12,20 v 1 h 2 v -1 z m 3,0.002 v 1 h 2 v -1 z m 3,0 v 1 h 2 v -1 z"
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
     d="M 21 26 L 21 48 L 43 48 L 43 26 L 21 26 z M 22 27 L 42 27 L 42 31 L 22 31 L 22 27 z M 22 32 L 27 32 L 27 35 L 22 35 L 22 32 z M 28 32 L 36 32 L 36 35 L 28 35 L 28 32 z M 37 32 L 42 32 L 42 35 L 37 35 L 37 32 z M 22 36 L 27 36 L 27 39 L 22 39 L 22 36 z M 28 36 L 36 36 L 36 39 L 28 39 L 28 36 z M 37 36 L 42 36 L 42 39 L 37 39 L 37 36 z M 22 40 L 27 40 L 27 43 L 22 43 L 22 40 z M 28 40 L 36 40 L 36 43 L 28 43 L 28 40 z M 37 40 L 42 40 L 42 43 L 37 43 L 37 40 z M 22 44 L 27 44 L 27 47 L 22 47 L 22 44 z M 28 44 L 36 44 L 36 47 L 28 47 L 28 44 z M 37 44 L 42 44 L 42 47 L 37 47 L 37 44 z "
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
    d="m34 42v28h28v-28zm1 1h26v6h-26zm0 7h8v4h-8zm9 0h8v4h-8zm9 0h8v4h-8zm-18 5h8v4h-8zm9 0h8v4h-8zm9 0h8v4h-8zm-18 5h8v4h-8zm9 0h8v4h-8zm9 0h8v4h-8zm-18 5h8v4h-8zm9 0h8v4h-8zm9 0h8v4h-8z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
