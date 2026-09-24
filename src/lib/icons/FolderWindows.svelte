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
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 11 L 3 11 L 3 3 z M 5 4 L 5 6 L 7 6 L 7 4 L 5 4 z M 9 4 L 9 6 L 11 6 L 11 4 L 9 4 z M 5 8 L 5 10 L 7 10 L 7 8 L 5 8 z M 9 8 L 9 10 L 11 10 L 11 8 L 9 8 z M 3 12 L 13 12 L 13 13 L 3 13 L 3 12 z "
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
       d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 6 L 18 6 L 18 18 L 4 18 L 4 6 z M 7 8 L 7 11.5 L 10.5 11.5 L 10.5 8 L 7 8 z M 11.5 8 L 11.5 11.5 L 15 11.5 L 15 8 L 11.5 8 z M 7 12.5 L 7 16 L 10.5 16 L 10.5 12.5 L 7 12.5 z M 11.5 12.5 L 11.5 16 L 15 16 L 15 12.5 L 11.5 12.5 z "
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
     d="M 10,12 V 23 H 22 V 12 Z m 1,2 h 10 v 8 H 11 Z m 2,1 v 2 h 2 v -2 z m 4,0 v 2 h 2 v -2 z m -4,4 v 2 h 2 v -2 z m 4,0 v 2 h 2 v -2 z"
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
     d="M 19 26 L 19 48 L 45 48 L 45 26 L 19 26 z M 37 27 C 37.552 27 38 27.448 38 28 C 38 28.552 37.552 29 37 29 C 36.448 29 36 28.552 36 28 C 36 27.448 36.448 27 37 27 z M 40 27 C 40.552 27 41 27.448 41 28 C 41 28.552 40.552 29 40 29 C 39.448 29 39 28.552 39 28 C 39 27.448 39.448 27 40 27 z M 43 27 C 43.552 27 44 27.448 44 28 C 44 28.552 43.552 29 43 29 C 42.448 29 42 28.552 42 28 C 42 27.448 42.448 27 43 27 z M 20 30 L 44 30 L 44 47 L 20 47 L 20 30 z M 26 33 L 26 38 L 31 38 L 31 33 L 26 33 z M 32 33 L 32 38 L 37 38 L 37 33 L 32 33 z M 26 39 L 26 44 L 31 44 L 31 39 L 26 39 z M 32 39 L 32 44 L 37 44 L 37 39 L 32 39 z "
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
			<!-- style definitions -->
  

  <!-- folder bg -->
  <path
    style="fill:currentColor"
    class="ColorScheme-Accent"
    d="m6 9v21h-1v57h86v-63h-1v-9h-42l-6-6z" />

  <!-- folder fg -->
  <path
    d="m6 9v21h27l6-6h51v-9h-42l-6-6z"
    fill-opacity=".33" />

  <!-- folder highlight -->
  <path
    d="m42 9 5 7h43v-1h-42zm-3 15-6 6h-28v1h29z"
    fill="#fff"
    fill-opacity=".2" />

  <!-- folder shadow -->
  <path
    d="m39 24-7 5h-26v1h27zm-34 62v1h86v-1z"
    fill-opacity=".2" />

  <!-- windows logo in a window -->
  <path
    d="m32 43v26h32v-26zm23 2.5c0 2-3 2-3 0s3-2 3 0zm4 0c0 2-3 2-3 0s3-2 3 0zm4 0c0 2-3 2-3 0s3-2 3 0zm-30 2.5h30v20h-30zm8 3v6h6v-6zm8 0v6h6v-6zm-8 8v6h6v-6zm8 0v6h6v-6z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
