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
			<path style="fill:currentColor"
       d="m 2,2 0,12 12,0 0,-10 -5,0 -2,-2 L 7,2 7,2 Z M 7,6 13,6 13,13 3,13 3,8 5,8 Z"
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
       d="M 3 3 L 3 4 L 3 19 L 4 19 L 19 19 L 19 18 L 19 5 L 12. 5 L 10. 3 L 10 3 L 10 3 L 4 3 L 3 3 z M 9 8 L 18 8 L 18 18 L 4 18 L 4 10 L 7 10 L 7 10 L 7 10 L 9 8 z "
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
     d="M 2 3 L 2 14 L 1 14 L 1 29 L 12 29 L 13 29 L 31 29 L 31 12 L 30 12 L 30 5 L 16 5 L 14 3 L 2 3 z "
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33;fill-rule:evenodd"
     d="M 2 3 L 2 14 L 11 14 L 13 12 L 30 12 L 30 5 L 16 5 L 14 3 L 2 3 z "
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2;fill-rule:evenodd"
     d="M 14 3 L 15 6 L 30 6 L 30 5 L 16 5 L 14 3 z M 13 12 L 11 14 L 1 14 L 1 15 L 12 15 L 13 12 z "
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 13 12 L 11 13 L 2 13 L 2 14 L 11 14 L 13 12 z M 1 28 L 1 29 L 31 29 L 31 28 L 1 28 z "
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
     d="M 5,6 V 22 H 4 V 42 H 44 V 19 H 43 V 9 H 24 L 21,6 Z"
     class="ColorScheme-Accent"
     />
  <path
     style="fill-opacity:0.33;fill-rule:evenodd"
     d="m 5,6 v 16 h 12 l 3,-3 H 43 V 9 H 24 L 21,6 Z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.2;fill-rule:evenodd"
     d="m 21,6 2,4 H 43 V 9 H 24 Z m -1,13 -3,3 H 4 v 1 h 14 z"
     />
  <path
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="m 20,19 -4,2 H 5 v 1 H 17 Z M 4,41 v 1 h 40 v -1 z"
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
     d="M 4 7 L 4 12 L 4 29 L 3 29 L 3 30 L 3 58 L 3 59 L 4 59 L 60 59 L 61 59 L 61 58 L 61 30 L 61 25 L 60 25 L 60 12 L 60 11 L 32 11 L 28 7 L 4 7 z "
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33"
     d="M 4 7 L 4 12 L 4 29 L 22 29 L 26 25 L 60 25 L 60 12 L 60 11 L 32 11 L 28 7 L 4 7 z "
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2"
     d="M 28 7 L 31 12 L 33 12 L 60 12 L 60 11 L 33 11 L 32 11 L 28 7 z M 26 25 L 22 29 L 3 29 L 3 30 L 23 30 L 26 25 z "
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 26 25 L 20 28 L 4 28 L 4 29 L 22 29 L 26 25 z M 3 58 L 3 59 L 4 59 L 60 59 L 61 59 L 61 58 L 60 58 L 4 58 L 3 58 z "
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
     d="M 6,9 V 42 H 5 V 87 H 91 V 36 H 90 V 15 H 48 L 42,9 Z"
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33"
     d="m 6,9 v 33 h 27 l 6,-6 H 90 V 15 H 48 L 42,9 Z"
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2"
     d="m 42,9 5,7 H 90 V 15 H 48 Z m -3,27 -6,6 H 5 v 1 h 29 z"
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="m 39,36 -7,5 H 6 v 1 H 33 Z M 5,86 v 1 h 86 v -1 z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
