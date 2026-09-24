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
       style="fill:#eb0a42"
       d="M 1.8378906 2.0683594 L 1.8378906 14.068359 L 13.837891 14.068359 L 13.837891 2.0683594 L 1.8378906 2.0683594 z M 2.8378906 3.0683594 L 12.837891 3.0683594 L 12.837891 13.068359 L 2.8378906 13.068359 L 2.8378906 3.0683594 z M 3.8378906 5.0683594 L 3.8378906 7.0683594 L 5.8378906 7.0683594 L 5.8378906 5.0683594 L 3.8378906 5.0683594 z M 9.8378906 5.0683594 L 9.8378906 7.0683594 L 11.837891 7.0683594 L 11.837891 5.0683594 L 9.8378906 5.0683594 z M 5.8378906 9.0683594 L 5.8378906 10.068359 L 9.8378906 10.068359 L 9.8378906 9.0683594 L 5.8378906 9.0683594 z M 9.8378906 10.068359 L 9.8378906 11.068359 L 10.837891 11.068359 L 10.837891 10.068359 L 9.8378906 10.068359 z M 10.837891 11.068359 L 10.837891 12.068359 L 11.837891 12.068359 L 11.837891 11.068359 L 10.837891 11.068359 z M 5.8378906 10.068359 L 4.8378906 10.068359 L 4.8378906 11.068359 L 5.8378906 11.068359 L 5.8378906 10.068359 z M 4.8378906 11.068359 L 3.8378906 11.068359 L 3.8378906 12.068359 L 4.8378906 12.068359 L 4.8378906 11.068359 z "
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
       style="fill:#eb0a42"
       d="M 3 3 L 3 19 L 4 19 L 19 19 L 19 18 L 19 3 L 18 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 5 5 L 5 6 L 6 6 L 6 5 L 5 5 z M 6 6 L 6 8 L 8 8 L 8 6 L 6 6 z M 8 6 L 9 6 L 9 5 L 8 5 L 8 6 z M 8 8 L 8 9 L 9 9 L 9 8 L 8 8 z M 6 8 L 5 8 L 5 9 L 6 9 L 6 8 z M 13 5 L 13 6 L 14 6 L 14 5 L 13 5 z M 14 6 L 14 8 L 16 8 L 16 6 L 14 6 z M 16 6 L 17 6 L 17 5 L 16 5 L 16 6 z M 16 8 L 16 9 L 17 9 L 17 8 L 16 8 z M 14 8 L 13 8 L 13 9 L 14 9 L 14 8 z M 9 11 L 9 13 L 13 13 L 13 11 L 9 11 z M 13 13 L 13 15 L 15 15 L 15 13 L 13 13 z M 15 15 L 15 17 L 17 17 L 17 15 L 15 15 z M 9 13 L 7 13 L 7 15 L 9 15 L 9 13 z M 7 15 L 5 15 L 5 17 L 7 17 L 7 15 z "
       />
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
     style="fill:#eb0a42" 
     d="M 2 3 L 2 10 L 1 10 L 1 29 L 12 29 L 13 29 L 31 29 L 31 8 L 30 8 L 30 5 L 16 5 L 14 3 L 2 3 z "
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
     d="M 10,13 V 25 H 22 V 13 Z m 1,1 H 21 V 24 H 11 Z m 1,2 v 2 h 2 v -2 z m 6,0 v 2 h 2 v -2 z m -4,4 v 1 h 4 v -1 z m 4,1 v 1 h 1 v -1 z m 1,1 v 1 h 1 v -1 z m -5,-1 h -1 v 1 h 1 z m -1,1 h -1 v 1 h 1 z"
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
     style="fill:#eb0a42" 
     d="M 4 6 L 4 11 L 4 20 L 3 20 L 3 21 L 3 21 C 3 21 3 21 3 21 L 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 61 21 L 61 21 L 61 16 L 60 16 L 60 11 C 60 11 60 11 60 11 L 60 11 L 60 10 L 32 10 L 28 6 L 4 6 z "
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
     d="M 21,26 V 48 H 43 V 26 H 22 Z m 1,1 H 42 V 47 H 22 Z m 2,3 v 1 h 1 v -1 z m 1,1 v 2 h 2 v -2 z m 2,0 h 1 v -1 h -1 z m 0,2 v 1 h 1 v -1 z m -2,0 h -1 v 1 h 1 z m 11,-3 v 1 h 1 v -1 z m 1,1 v 2 h 2 v -2 z m 2,0 h 1 v -1 h -1 z m 0,2 v 1 h 1 v -1 z m -2,0 h -1 v 1 h 1 z m -8,5 v 2 h 6 v -2 z m 6,2 v 2 h 2 v -2 z m 2,2 v 2 h 2 v -2 z m -8,-2 h -2 v 2 h 2 z m -2,2 h -2 v 2 h 2 z"
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
    fill="#eb0a42"
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

  <!-- drkonqi -->
  <path
    d="m34 42v28h28v-28zm1 1h26v26h-26zm4 6v1h1v-1zm1 1v3h3v-3zm3 0h1v-1h-1zm0 3v1h1v-1zm-3 0h-1v1h1zm12-4v1h1v-1zm1 1v3h3v-3zm3 0h1v-1h-1zm0 3v1h1v-1zm-3 0h-1v1h1zm-9 7v1.5h8v-1.5zm8 1.5v1.5h2v-1.5zm2 1.5v2h2v-2zm-10-1.5h-2v1.5h2zm-2 1.5h-2v2h2z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
