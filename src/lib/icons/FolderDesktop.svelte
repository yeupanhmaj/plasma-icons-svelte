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
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 11 L 3 11 L 3 3 z M 4 4 L 4 7 L 7 7 L 7 5 L 6 5 L 5.1 4 L 4 4 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z M 5 12 L 9 12 L 9 13 L 5 13 L 5 12 z M 10 12 L 11 12 L 11 13 L 10 13 L 10 12 z M 12 12 L 13 12 L 13 13 L 12 13 L 12 12 z "
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
       d="M 3 3 L 3 17 L 19 17 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 16 L 4 16 L 4 4 z M 5 5 L 5 9 L 7 9 L 9 7 L 9 5 L 5 5 z M 13.5 6 C 11.56101 6 10 7.561 10 9.5 C 10 11.439 11.56101 13 13.5 13 C 15.43899 13 17 11.439 17 9.5 C 17 7.561 15.43899 6 13.5 6 z M 13.5 7 C 14.885 7 16 8.115 16 9.5 C 16 10.885 14.885 12 13.5 12 C 12.115 12 11 10.885 11 9.5 C 11 8.115 12.115 7 13.5 7 z M 9 8 L 8 9 L 9 9 L 9 8 z M 13 8 L 13 10 L 14 10 L 15 10 L 15 9 L 14 9 L 14 8 L 13 8 z M 5 12 L 5 14 L 7 14 L 8 15 L 8 14 L 8.2363281 14 L 8.2363281 12 L 5 12 z M 3 18 L 3 19 L 19 19 L 19 18 L 3 18 z "
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
     d="M 10,12 V 24 H 22 V 12 Z m 1,1 h 10 v 8 H 11 Z m 1,1 v 3 h 3 v -2 h -1 l -0.9,-1 z m -1,8 h 1 v 1 h -1 z m 2,0 h 4 v 1 h -4 z m 5,0 h 1 v 1 h -1 z m 2,0 h 1 v 1 h -1 z"
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
     d="M 21,26 V 48 H 43 V 26 Z m 1,1 H 42 V 43 H 22 Z m 2,2 v 6 h 6 v -5 h -3 l -1,-1 z m 1,2 h 4 v 3 h -4 z m -3,13 h 20 v 3 H 22 Z m 1,1 v 1 h 1 v -1 z m 13,0 v 1 h 1 v -1 z m 2,0 v 1 h 1 v -1 z m 2,0 v 1 h 1 v -1 z"
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

  <!-- desktop icon -->
  <path
    d="m34 42v28h28v-28zm1 1h26v21h-26zm2 2v7h7v-6h-3.5l-1-1zm1 2h5v4h-5zm-3 18h26v4h-26zm1 1v2h2v-2zm16 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
