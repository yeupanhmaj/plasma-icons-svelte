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
       d="M 3 2 C 2.446 2 2 2.446 2 3 L 2 13 C 2 13.554 2.446 14 3 14 L 13 14 C 13.554 14 14 13.554 14 13 L 14 3 C 14 2.446 13.554 2 13 2 L 3 2 z M 3 3 L 13 3 L 13 13 L 3 13 L 3 3 z M 9 4 L 9 7 L 12 7 A 3 3 0 0 0 9 4 z M 8 5 A 3 3 0 0 0 5 8 A 3 3 0 0 0 8 11 A 3 3 0 0 0 11 8 L 8 8 L 8 5 z "
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
       d="M 4.3339844 3 C 3.5953178 3 3 3.5953844 3 4.3339844 L 3 17.666016 C 3 18.404616 3.5953178 19 4.3339844 19 L 17.666016 19 C 18.404682 19 19 18.404616 19 17.666016 L 19 4.3339844 C 19 3.5953844 18.404682 3 17.666016 3 L 4.3339844 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 12 5 L 12 10 L 17 10 A 5 5 0 0 0 12 5 z M 11 6 A 5 5 0 0 0 6 11 A 5 5 0 0 0 11 16 A 5 5 0 0 0 16 11 L 15 11 L 11 11 L 11 7 L 11 6 z M 10 7.1308594 L 10 12 L 11 12 L 14.867188 12 A 4 4 0 0 1 11 15 A 4 4 0 0 1 7 11 A 4 4 0 0 1 10 7.1308594 z "
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
     d="M 11 12 C 10.446 12 10 12.446 10 13 L 10 23 C 10 23.554 10.446 24 11 24 L 21 24 C 21.554 24 22 23.554 22 23 L 22 13 C 22 12.446 21.554 12 21 12 L 11 12 z M 11 13 L 21 13 L 21 23 L 11 23 L 11 13 z M 17 14 L 17 17 L 20 17 A 3 3 0 0 0 17 14 z M 16 15 A 3 3 0 0 0 13 18 A 3 3 0 0 0 16 21 A 3 3 0 0 0 19 18 L 16 18 L 16 15 z "
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
     d="M 22 26 C 21.446 26 21 26.446 21 27 L 21 47 C 21 47.554 21.446 48 22 48 L 42 48 C 42.554 48 43 47.554 43 47 L 43 27 C 43 26.446 42.554 26 42 26 L 22 26 z M 22 27 L 42 27 L 42 47 L 22 47 L 22 27 z M 34 29 L 34 33 L 38 33 C 38 30.8 36.2 29 34 29 z M 32 30 A 5 5 0 0 0 27 35 A 5 5 0 0 0 32 40 A 5 5 0 0 0 37 35 A 5 5 0 0 0 36.9 34 L 33 34 L 33 30.1 A 5 5 0 0 0 32 30 z M 32 31 L 32 35 L 36 35 A 4 4 0 0 1 32 39 A 4 4 0 0 1 28 35 A 4 4 0 0 1 32 31 z M 24 42 L 24 43 L 40 43 L 40 42 L 24 42 z M 24 44 L 24 45 L 40 45 L 40 44 L 24 44 z "
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
    d="m34 42v30h28v-30zm1 1h26v28h-26zm15 3.072266v.427734.585938 3.914062 1h4.914062.585938.427734c-.443508-3.071429-2.856305-5.484226-5.927734-5.927734zm-2 .927734c-3.865993 0-7 3.134007-7 7s3.134007 7 7 7 7-3.134007 7-7c-.000155-.334632-.02431-.668822-.07227-1h-.42773-.585938-4.914062v-4.914062-.585938-.427734c-.331178-.04796-.665368-.072111-1-.072266zm3 .353516c1.702494.604517 3.041967 1.94399 3.646484 3.646484h-3.646484zm-3 .646484v6h1 5c0 3.313708-2.686292 6-6 6s-6-2.686292-6-6 2.686292-6 6-6zm-10 16v1h20v-1zm0 3v1h20v-1z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
