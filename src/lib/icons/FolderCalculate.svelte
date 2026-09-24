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
       d="M 13.996094 3.6542969 L 6.9960938 3.6582031 L 4.5546875 10.349609 L 3 7.6542969 L 2 7.6542969 L 2 8.6542969 L 2.4277344 8.6542969 L 4.5605469 12.347656 L 7.5800781 4.6542969 L 14.001953 4.6542969 L 13.996094 3.6542969 z M 9.9960938 5.6542969 C 8.3340937 5.6542969 6.9960938 6.9922969 6.9960938 8.6542969 C 6.9960938 10.316297 8.3340938 11.654297 9.9960938 11.654297 C 10.769094 11.654297 11.465094 11.355906 11.996094 10.878906 L 11.996094 11.654297 L 12.996094 11.654297 L 12.996094 5.6542969 L 11.996094 5.6542969 L 11.996094 6.4296875 C 11.465094 5.9526875 10.769094 5.6542969 9.9960938 5.6542969 z M 9.9960938 6.6542969 C 11.104094 6.6542969 11.996094 7.5462969 11.996094 8.6542969 C 11.996094 9.7622969 11.104094 10.654297 9.9960938 10.654297 C 8.8880937 10.654297 7.9960938 9.7622969 7.9960938 8.6542969 C 7.9960938 7.5462969 8.8880937 6.6542969 9.9960938 6.6542969 z "
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
       d="M 19 5 L 9.6679688 5.0058594 L 6.5 14.5 L 4.3339844 11 L 3 11 L 3 12 L 4 12 L 6.5 17 L 10.441406 6 L 19 6 L 19 5 z M 14 8 C 11.790861 8 10 9.790861 10 12 C 10 14.209139 11.790861 16 14 16 C 15.149118 15.9982 16.241964 15.502302 17 14.638672 L 17 16 L 18 16 L 18 12 L 18 8 L 17 8 L 17 9.3613281 C 16.241964 8.4976979 15.149118 8.0017906 14 8 z M 14 9 C 15.656854 9 17 10.343146 17 12 C 17 13.656854 15.656854 15 14 15 C 12.343146 15 11 13.656854 11 12 C 11 10.343146 12.343146 9 14 9 z "
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
     d="M 22,14 15,14.004 12.559,20.695 11.004,18 h -1 v 1 h 0.428 l 2.133,3.693 3.02,-7.693 h 6.42 z m -4,2 c -1.662,0 -3,1.338 -3,3 0,1.662 1.338,3 3,3 0.773,0 1.469,-0.298 2,-0.775 V 22 h 1 v -6 h -1 v 0.775 C 19.469,16.298 18.773,16 18,16 m 0,1 c 1.108,0 2,0.892 2,2 0,1.108 -0.892,2 -2,2 -1.108,0 -2,-0.892 -2,-2 0,-1.108 0.892,-2 2,-2"
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
     d="M 40 30 L 32 30 L 27.56 37.7 L 26 35 L 24 35 L 24 36 L 25.431641 36 L 27.6 39.7 L 32.6 31 L 39 31 L 39 32 L 40 32 L 40 30 z M 35 33 C 33.338 33 32 34.3 32 36 C 32 37.7 33.338 39 35 39 C 35.773 39 36.5 38.7 37 38.2 L 37 39 L 38 39 L 38 33 L 37 33 L 37 33.8 C 36.469 33.3 35.773 33 35 33 z M 35 34 C 36.108 34 37 34.9 37 36 C 37 37.1 36.108 38 35 38 C 33.892 38 33 37.1 33 36 C 33 34.9 33.892 34 35 34 z M 23 41 C 23 41 23 41.223 23 41.5 C 23 41.777 23 42 23 42 L 41 42 C 41 42 41 41.777 41 41.5 C 41 41.223 41 41 41 41 L 23 41 z M 31 44 C 31 44 31 44.223 31 44.5 C 31 44.777 31 45 31 45 L 33 45 C 33 45 33 44.777 33 44.5 C 33 44.223 33 44 33 44 L 31 44 z "
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
    d="m48.46875 45-7.962891 13.035156-2.568359-4.277344c-.377879-.662587-.9375-.757812-1.4375-.757812h-2.5v1h2.5c.5 0 .5625.242188.5625.242188s2.288881 3.815235 3.433594 5.722656l8.535156-13.964844h11.96875v1.199219l1-.699219v-.5c0-.5-.5-1-1-1zm5.039062 4.486328c-2.500473 0-4.507812 2.154939-4.507812 4.763672s2.007339 4.763672 4.507812 4.763672c1.420081 0 2.675848-.69495 3.496094-1.773438.01796 1.052691.141034 1.482626.996094 1.910157l.5-.5c-.5-.5-.5-.500001-.5-1v-7.900391h-1v1.505859c-.820313-1.076025-2.074002-1.769531-3.492188-1.769531zm0 1c1.925391 0 3.591797 1.513674 3.591797 3.763672s-1.666406 3.763672-3.591797 3.763672c-1.925389 0-3.507812-1.662819-3.507812-3.763672s1.582423-3.763672 3.507812-3.763672zm-21.507812 12.513672v1h32v-1zm13.5 6v1h5v-1z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
