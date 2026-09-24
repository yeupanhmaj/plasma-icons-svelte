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
       style="fill:#9bd916"
       d="M 2.4980469 1.9882812 A 0.50005 0.50005 0 0 0 2.1503906 2.8457031 L 3.4277344 4.1230469 A 5.999991 5.999991 0 0 0 2 8 L 2 14 L 14 14 L 14 8 A 5.999991 5.999991 0 0 0 12.582031 4.125 L 13.861328 2.8457031 A 0.50012 0.50005 0 0 0 13.498047 1.9882812 A 0.50012 0.50005 0 0 0 13.154297 2.1386719 L 11.869141 3.4238281 A 5.999991 5.999991 0 0 0 8 2 A 5.999991 5.999991 0 0 0 4.1308594 3.4121094 L 2.8574219 2.1386719 A 0.50005 0.50005 0 0 0 2.4980469 1.9882812 z M 8 3 A 5 5 0 0 1 13 8 L 3 8 A 5 5 0 0 1 8 3 z M 6 5 A 1 1 0 0 0 5 6 A 1 1 0 0 0 6 7 A 1 1 0 0 0 7 6 A 1 1 0 0 0 6 5 z M 10 5 A 1 1 0 0 0 9 6 A 1 1 0 0 0 10 7 A 1 1 0 0 0 11 6 A 1 1 0 0 0 10 5 z M 3 9 L 7 9 L 7 10 L 8 10 L 8 11 L 9 11 L 9 9 L 13 9 L 13 13 L 3 13 L 3 9 z M 8 11 L 7 11 L 7 12 L 8 12 L 8 11 z "
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
       style="fill:#9bd916"
       d="M 3.5 3 A 0.5 0.5 0 0 0 3.15 3.85 L 5 5.7 A 8 8 0 0 0 3 11 L 3 19 L 19 19 L 19 11 A 8 8 0 0 0 17 5.7 L 18.86 3.86 A 0.5 0.5 0 0 0 18.5 3 A 0.5 0.5 0 0 0 18.15 3.15 L 16.3 5 A 8 8 0 0 0 11 3 A 8 8 0 0 0 5.7 5 L 3.86 3.15 A 0.5 0.5 0 0 0 3.5 3 z M 10.9 4 A 7 7 0 0 1 11 4 A 7 7 0 0 1 15.6 5.7 A 7 7 0 0 1 16.3 6.4 A 7 7 0 0 1 18 11 L 4 11 A 7 7 0 0 1 5.7 6.4 A 7 7 0 0 1 6.4 5.8 A 7 7 0 0 1 6.4 5.7 A 7 7 0 0 1 10.9 4 z M 8 7 A 1 1 0 0 0 7 8 A 1 1 0 0 0 8 9 A 1 1 0 0 0 9 8 A 1 1 0 0 0 8 7 z M 14 7 A 1 1 0 0 0 13 8 A 1 1 0 0 0 14 9 A 1 1 0 0 0 15 8 A 1 1 0 0 0 14 7 z M 4 12 L 10 12 L 10 13 L 11 13 L 11 12 L 18 12 L 18 18 L 4 18 L 4 12 z M 11 13 L 11 14 L 12 14 L 12 13 L 11 13 z M 11 14 L 10 14 L 10 15 L 10 16 L 12 16 L 12 15 L 11 15 L 11 14 z "
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
     style="fill:#9bd916" 
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
     d="M 10.5 11.988281 A 0.5728 0.5 0 0 0 10.150391 12.845703 L 11.427734 14.123047 A 6 6 0 0 0 10 18 L 10 24 L 22 24 L 22 23 L 22 18 A 6 6 0 0 0 20.6 14.125 L 21.861328 12.845703 A 0.5 0.5 0 0 0 21.5 12 A 0.5 0.5 0 0 0 21.154297 12.138672 L 19.9 13.4 A 6 6 0 0 0 16 12 A 6 6 0 0 0 12.130859 13.412109 L 10.857422 12.138672 A 0.5728 0.5 0 0 0 10.5 12 z M 16 13 A 5. 5 0 0 1 21 18 L 21 19 L 21 23 L 11 23 L 11 19 L 11 18 A 5 5 0 0 1 16 13 z M 14 15 A 1. 1 0 0 0 13 16 A 1. 1 0 0 0 14 17 A 1. 1 0 0 0 15 16 A 1. 1 0 0 0 14 15 z M 18 15 A 1. 1 0 0 0 17 16 A 1. 1 0 0 0 18 17 A 1. 1 0 0 0 19 16 A 1. 1 0 0 0 18 15 z "
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
     style="fill:#9bd916" 
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
     d="m 31.5,28 c -3,7.5e-4 -5.8,1.2 -7.9,3.4 l -2.7,-2.7 c -0.1,-0.1 -0.2,-0.2 -0.4,-0.2 -0.4,9e-5 -0.7,0.5 -0.3,0.9 L 23,32.2 c -1.6,2 -2.4,4.4 -2.4,6.9 v 7 h 22 v -7 c -0,-2.5 -0.9,-4.9 -2.4,-6.9 l 2.8,-2.8 c 0.3,-0.3 0.1,-0.8 -0.3,-0.9 -0.1,0 -0.3,0 -0.4,0.2 l -2.7,2.7 C 37.3,29.2 34.5,28 31.5,28 Z m 0,1 c 5.5,0 10,4.47715 10,10 v 6 h -20 v -6 c 0,-5.5 4.47715,-10 10,-10 z M 27,34 c -0.8,0 -1.5,0.7 -1.5,1.5 0,0.8 0.7,1.5 1.5,1.5 0.8,0 1.5,-0.7 1.5,-1.5 C 28.5,34.7 27.8,34 27,34 Z m 9,0 c -0.8,0 -1.5,0.7 -1.5,1.5 0,0.8 0.7,1.5 1.5,1.5 0.8,0 1.5,-0.7 1.5,-1.5 C 37.5,34.7 36.8,34 36,34 Z"
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
    fill="#9bd916"
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
    d="m33.5 44c-.127809 0-.255582.04855-.353516.146484-.195868.195868-.195868.511163 0 .707032l4.138672 4.138672c-2.048738 2.434732-3.285156 5.576747-3.285156 9.007812v10h28v-10c0-3.431065-1.236418-6.57308-3.285156-9.007812l4.138672-4.138672c.195867-.195869.195867-.511164 0-.707032-.097934-.097934-.225707-.146484-.353516-.146484-.127808-.000001-.255586.048554-.353516.146484l-4.103515 4.103516c-2.544137-2.620154-6.102401-4.25-10.042969-4.25s-7.498832 1.629846-10.042969 4.25l-4.103515-4.103516c-.097935-.097934-.225708-.146485-.353516-.146484zm14.5 1c7.191525 0 13 5.808475 13 13v9h-26v-9c0-7.191525 5.808475-13 13-13zm-6 7a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm12 0a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
