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
       style="fill:#ff8b23"
       d="M 7 2 L 7 5 L 8 5 L 8 2 L 7 2 z M 5 3 L 5 5 L 6 5 L 6 3 L 5 3 z M 9 3 L 9 5 L 10 5 L 10 3 L 9 3 z M 3 4 L 3 5 L 4 5 L 4 4 L 3 4 z M 12 6 L 2 6 L 2 10 C 2 11.813 3.01 13 5 13 L 3 13 L 3 14 L 11 14 L 11 13 L 9 13 C 10.572 13 11.507 12.273 12 11 L 13 11 C 14 11 14 11 14 9.90625 L 14 8.8125 C 14 6.9945 14 7 13 7 L 12 7 L 12 6 z M 3 7 L 11 7 L 11 10 C 11 11.511 9.662 12 8 12 L 6 12 C 4.338 12 3 11.511 3 10 L 3 7 z M 12 8 L 13 8 L 13 10 L 12 10 L 12 8 z "
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
       style="fill:#ff8b23"
       d="M 8 3 L 8 7 L 9 7 L 9 3 L 8 3 z M 10 4 L 10 7 L 11 7 L 11 4 L 10 4 z M 6 5 L 6 7 L 7 7 L 7 5 L 6 5 z M 12 5 L 12 7 L 13 7 L 13 5 L 12 5 z M 4 6 L 4 7 L 5 7 L 5 6 L 4 6 z M 14 6 L 14 7 L 15 7 L 15 6 L 14 6 z M 3 8 L 3 9 L 3 14 A 4 4 0 0 0 3 14 A 4 4 0 0 0 7 18 L 4 18 L 4 19 L 15 19 L 15 18 L 12 18 A 4 4 0 0 0 16 14 A 4 4 0 0 0 16 14 L 18 14 C 18.5 14 19 13.5 19 13 L 19 10 C 19 9.5 18.5 9 18 9 L 16 9 L 16 8 L 3 8 z M 4 9 L 15 9 L 15 10 L 15 13 L 15 14 A 3 3 0 0 1 12 17 L 7 17 A 3 3 0 0 1 4 14 L 4 9 z M 16 10 L 18 10 L 18 13 L 16 13 L 16 10 z "
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
     style="fill:#ff8b23" 
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
     d="m 15,12 v 3 h 1 v -3 z m -2,1 v 2 h 1 v -2 z m 4,0 v 2 h 1 v -2 z m -6,1 v 1 h 1 v -1 z m -1,2 v 4 c 0,1.813 1.01,3 3,3 h -2 v 1 h 8 v -1 h -2 c 1.572,0 2.507,-0.727 3,-2 h 1 c 1,0 1,-0. 1,-1.1 v -1.1 c 0,-1.8 0,-1.8 -1,-1.813 h -1 v -1 z m 1,1 h 8 v 3 c 0,1.5 -1.3,2 -3,2 h -2 c -1.662,0 -3,-0.489 -3,-2 z m 9,1 h 1 v 2 h -1 z"
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
     style="fill:#ff8b23" 
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
     d="m 30,26 v 6 h 1 v -6 z m 4,2 v 3 h 1 v -3 z m -8,1 v 4 h 1 v -4 z m -3,5 v 7 c 0,3.324 2.676,6 6,6 h -5 v 1 h 14 v -1 h -5 c 2.621,0 4.831,-1.667 5.652,-4 H 40.5 c 1.385,0 2.5,-1.115 2.5,-2.5 v -2 C 43,37.115 41.885,36 40.5,36 H 39 v -2 z m 1,1 h 14 v 6 c 0,2.77 -2.23,5 -5,5 h -4 c -2.77,0 -5,-2.23 -5,-5 z m 15,2 h 1.672 C 41.408,37 42,37.592 42,38.328 v 2.344 C 42,41.408 41.408,42 40.672,42 H 38.91 C 38.964,41.674 39,41.342 39,41 Z"
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
    fill="#ff8b23"
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

  <!-- coffee cup -->
  <path
    d="m47.5 41.5v7.5h1v-7.5zm6.833984 3.876953-1.224609 4.220703.966797.25586.96875-3.339844zm-12.664062.01367-.710938 1.138672.964844 3.326172.966797-.257813zm-4.669922 5.609377v6.5c0 6.497795 1.009414 11.496656 11 11.5 6.904533 0 9.517895-2.384773 10.474609-6h1.525391c3.999972 0 4-3.000008 4-4.5s-.000028-4.5-4-4.5h-1v-3zm11 18h-9.5v1h19v-1zm-10-17h20v5.5c0 3.198699-.287508 5.851869-1.558594 7.599609-1.271082 1.747745-3.608103 2.900391-8.441406 2.900391s-7.170324-1.152646-8.441406-2.900391c-1.271086-1.74774-1.558594-4.40091-1.558594-7.599609zm21 3h1c1.749998 0 3 .250003 3 3.5s-1.263735 3.48052-3 3.5h-1.306641c.244249-1.372708.306641-2.890078.306641-4.5z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
