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
       d="m2 2v12h12v-12zm1 2h10v9h-10zm2.8 1.5 1.7 2.721-2.1 3.279h1.2l1.5-2.416 1.5 2.416h1.1l-2-3.279 1.7-2.721h-1.2l-1.1 1.857-1.1-1.857z"
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
       d="M 3,3 V 19 H 19 V 3 Z M 4,6 H 18 V 18 H 4 Z m 4.0644531,1 2.2851559,4.322266 -2.7929684,4.699218 h 1.5800782 l 2.0019532,-3.445312 2,3.445312 h 1.507812 c 0.0173,-0.0145 0.03674,-0.02837 0.05274,-0.04297 L 12,11.322266 14.21875,7 H 12.603516 L 11.136719,10.064453 9.6699219,7 Z"
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
     d="M 10,12 V 23 H 22 V 12 Z m 1,2 h 10 v 8 H 11 Z m 2.799,1 1.713,2.721 L 13.418,21 h 1.184 l 1.502,-2.416 1.5,2.416 h 1.131 c 0.013,-0.01 0.026,-0.019 0.039,-0.029 L 16.717,17.721 18.414,15 h -1.211 l -1.1,1.857 -1.1,-1.857 z"
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
     d="M 19,26 V 48 H 45 V 26 Z m 18,1 c 0.552,0 1,0.448 1,1 0,0.552 -0.448,1 -1,1 -0.552,0 -1,-0.448 -1,-1 0,-0.552 0.448,-1 1,-1 m 3,0 c 0.552,0 1,0.448 1,1 0,0.552 -0.448,1 -1,1 -0.552,0 -1,-0.448 -1,-1 0,-0.552 0.448,-1 1,-1 m 3,0 c 0.552,0 1,0.448 1,1 0,0.552 -0.448,1 -1,1 -0.552,0 -1,-0.448 -1,-1 0,-0.552 0.448,-1 1,-1 M 20,30 H 44 V 47 H 20 Z m 8.799,4 2.713,4.721 L 28.418,44 h 1.184 l 2.502,-4.416 2.5,4.416 h 1.131 c 0.013,-0.01 0.027,-0.019 0.039,-0.029 L 32.717,38.721 35.414,34 h -1.211 l -2.1,3.857 -2.1,-3.857 z"
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
    d="m32 43v26h32v-26zm23 2.5c0 1.999998-3 1.999998-3 0 0-2 3-2 3 0zm4 0c0 1.999998-3 1.999998-3 0 0-2 3-2 3 0zm4 0c0 1.999998-3 1.999998-3 0 0-2 3-2 3 0zm-30 2.5h30v20h-30zm9.3125 2 4.953125 8-4.953125 8h1.46875l4.21875-6.814453 4.21875 6.814453h1.46875l-4.953125-8 4.953125-8h-1.46875l-4.21875 6.814453-4.21875-6.814453z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
