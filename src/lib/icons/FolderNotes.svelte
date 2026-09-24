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
       d="M 3 2 C 2.446 2 2 2.446 2 3 L 2 13 C 2 13.554 2.446 14 3 14 L 11 14 C 11.554 14 12 13.554 12 13 L 13 13 C 13.554 13 14 12.554 14 12 L 14 10 C 14 9.814 13.935656 9.649 13.847656 9.5 C 13.935656 9.351 14 9.186 14 9 L 14 7 C 14 6.814 13.935656 6.649 13.847656 6.5 C 13.935656 6.351 14 6.186 14 6 L 14 4 C 14 3.446 13.554 3 13 3 L 12 3 C 12 2.446 11.554 2 11 2 L 3 2 z M 3 3 L 11 3 L 11 13 L 3 13 L 3 3 z M 4 4 L 4 6 L 10 6 L 10 4 L 4 4 z M 12 4 L 13 4 L 13 6 L 12 6 L 12 4 z M 4 7 L 4 8 L 10 8 L 10 7 L 4 7 z M 12 7 L 13 7 L 13 9 L 12 9 L 12 7 z M 4 9 L 4 10 L 10 10 L 10 9 L 4 9 z M 12 10 L 13 10 L 13 12 L 12 12 L 12 10 z M 4 11 L 4 12 L 10 12 L 10 11 L 4 11 z "
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
       d="M 4 3 C 3.4459904 3 3 3.4459904 3 4 L 3 18 C 3 18.55401 3.4459904 19 4 19 L 15 19 C 15.55401 19 16 18.55401 16 18 L 16 17 L 18 17 C 18.55401 17 19 16.55401 19 16 L 19 13 C 19 12.81363 18.935732 12.649055 18.847656 12.5 C 18.935732 12.350945 19 12.18637 19 12 L 19 9 C 19 8.8136299 18.935732 8.6490553 18.847656 8.5 C 18.935732 8.3509447 19 8.1863701 19 8 L 19 5 C 19 4.44599 18.55401 4 18 4 L 16 4 C 16 3.4459904 15.55401 3 15 3 L 4 3 z M 4 4 L 15 4 L 15 18 L 4 18 L 4 4 z M 5 5 L 5 8 L 14 8 L 14 5 L 5 5 z M 16 5 L 18 5 L 18 8 L 16 8 L 16 5 z M 16 9 L 18 9 L 18 12 L 16 12 L 16 9 z M 5 10 L 5 11 L 14 11 L 14 10 L 5 10 z M 5 12 L 5 13 L 14 13 L 14 12 L 5 12 z M 16 13 L 18 13 L 18 16 L 16 16 L 16 13 z M 5 14 L 5 15 L 14 15 L 14 14 L 5 14 z M 5 16 L 5 17 L 14 17 L 14 16 L 5 16 z "
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
     d="m 11,12 c -0.554,0 -1,0.446 -1,1 v 10 c 0,0.554 0.446,1 1,1 h 8 c 0.554,0 1,-0.446 1,-1 h 1 c 0.554,0 1,-0.446 1,-1 V 20 C 22,19.814 21.936,19.649 21.848,19.5 21.936,19.351 22,19.186 22,19 V 17 C 22,16.814 21.936,16.649 21.848,16.5 21.936,16.351 22,16.186 22,16 v -2 c 0,-0.554 -0.446,-1 -1,-1 h -1 c 0,-0.554 -0.446,-1 -1,-1 z m 0,1 h 8 v 10 h -8 z m 1,1 v 2 h 6 v -2 z m 8,0 h 1 v 2 h -1 z m -8,3 v 1 h 6 v -1 z m 8,0 h 1 v 2 h -1 z m -8,2 v 1 h 6 v -1 z m 8,1 h 1 v 2 h -1 z m -8,1 v 1 h 6 v -1 z"
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
     d="M 22 26 C 21.446 26 21 26.446 21 27 L 21 47 C 21 47.554 21.446 48 22 48 L 40 48 C 40.554 48 41 47.554 41 47 L 41 46 L 42 46 C 42.554 46 43 45.554 43 45 L 43 41 C 43 40.814 42.935656 40.649 42.847656 40.5 C 42.935656 40.351 43 40.186 43 40 L 43 36 C 43 35.814 42.935656 35.649 42.847656 35.5 C 42.935656 35.351 43 35.186 43 35 L 43 31 C 43 30.446 42.554 30 42 30 L 41 30 L 41 27 C 41 26.446 40.554 26 40 26 L 22 26 z M 22 27 L 40 27 L 40 47 L 22 47 L 22 27 z M 23 29 L 23 30 L 30 30 L 30 29 L 23 29 z M 32 29 L 32 30 L 39 30 L 39 29 L 32 29 z M 41 31 L 42 31 L 42 35 L 41 35 L 41 31 z M 23 32 L 23 33 L 30 33 L 30 32 L 23 32 z M 32 32 L 32 33 L 39 33 L 39 32 L 32 32 z M 23 35 L 23 36 L 30 36 L 30 35 L 23 35 z M 32 35 L 32 36 L 39 36 L 39 35 L 32 35 z M 41 36 L 42 36 L 42 40 L 41 40 L 41 36 z M 23 38 L 23 39 L 30 39 L 30 38 L 23 38 z M 32 38 L 32 39 L 39 39 L 39 38 L 32 38 z M 23 41 L 23 42 L 30 42 L 30 41 L 23 41 z M 32 41 L 32 42 L 39 42 L 39 41 L 32 41 z M 41 41 L 42 41 L 42 45 L 41 45 L 41 41 z M 23 44 L 23 45 L 30 45 L 30 44 L 23 44 z M 32 44 L 32 45 L 39 45 L 39 44 L 32 44 z "
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
    d="m35 41c-.552285 0-1 .447715-1 1v28c0 .552285.447715 1 1 1h23c.552285 0 1-.447715 1-1v-2h2c.552285 0 1-.447715 1-1v-4.035156c-.01816-.525163-.439681-.946684-.964844-.964844h-.035156v5h-2v-5h2c.552285 0 1-.447715 1-1v-4.035156c-.01816-.525163-.439681-.946684-.964844-.964844h-.035156v5h-2v-5h2c.552285 0 1-.447715 1-1v-5.035156c-.01816-.525163-.439681-.946684-.964844-.964844h-2.035156v-7.035156c-.01816-.525163-.439681-.946684-.964844-.964844zm0 1h23v28h-23zm3 3v1h7.5v-1zm9.5 0v1h7.5v-1zm-9.5 3v1h7.5v-1zm9.5 0v1h7.5v-1zm11.5 2h2v5h-2zm-21 3v1h7.5v-1zm9.5 0v1h7.5v-1zm-9.5 3v1h7.5v-1zm9.5 0v1h7.5v-1zm-9.5 3v1h7.5v-1z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
