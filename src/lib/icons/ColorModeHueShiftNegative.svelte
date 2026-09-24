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
			<metadata id="metadata10">
  <rdf:RDF>
   <cc:Work rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:title/>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <defs id="defs8">
  <path id="H" d="m24 8c-8.864 0-16 7.136-16 16h16v-16" fill="url(#0)"/>
  <path id="I" d="m408.57 539.8c8.864 0 16-7.136 16-16h-16v16" fill="url(#3)"/>
  <path id="J" d="m408.57 539.8c-8.864 0-16-7.136-16-16h16v16" fill="url(#1)"/>
  <linearGradient id="3" x1="424.57" x2="408.57" y1="523.8" y2="539.8" gradientUnits="userSpaceOnUse">
   <stop id="stop3346" stop-color="#c1cc00" offset="0"/>
   <stop id="stop3348" stop-color="#dfcd00" offset=".312"/>
   <stop id="stop3350" stop-color="#f0cc00" offset=".562"/>
   <stop id="stop3352" stop-color="#fd8c08" offset=".75"/>
   <stop id="stop3354" stop-color="#f25c13" offset="1"/>
  </linearGradient>
  <linearGradient id="0" x1="8" x2="24" y1="24" y2="8" gradientUnits="userSpaceOnUse">
   <stop id="stop3357" stop-color="#e81877" offset="0"/>
   <stop id="stop3359" stop-color="#dd1d8c" offset=".312"/>
   <stop id="stop3361" stop-color="#6d57b1" offset=".562"/>
   <stop id="stop3363" stop-color="#2a78c1" offset=".75"/>
   <stop id="stop3365" stop-color="#018dcb" offset="1"/>
  </linearGradient>
  <linearGradient id="2" x1="424.57" x2="408.57" y1="523.8" y2="507.8" gradientUnits="userSpaceOnUse">
   <stop id="stop3368" stop-color="#bec900" offset="0"/>
   <stop id="stop3370" stop-color="#9ec80a" offset=".312"/>
   <stop id="stop3372" stop-color="#71b93d" offset=".562"/>
   <stop id="stop3374" stop-color="#35a48f" offset=".75"/>
   <stop id="stop3376" stop-color="#018fca" offset="1"/>
  </linearGradient>
  <linearGradient id="1" x1="392.57" x2="408.57" y1="523.8" y2="539.8" gradientUnits="userSpaceOnUse">
   <stop id="stop3379" stop-color="#e51561" offset="0"/>
   <stop id="stop3381" stop-color="#e4156c" offset=".312"/>
   <stop id="stop3383" stop-color="#e71e2c" offset=".562"/>
   <stop id="stop3385" stop-color="#e8301e" offset=".75"/>
   <stop id="stop3387" stop-color="#e6320e" offset="1"/>
  </linearGradient>
  <linearGradient id="linearGradient3480" x1="424.57" x2="408.57" y1="523.8" y2="507.8" gradientUnits="userSpaceOnUse" xlink:href="#2"/>
  <linearGradient id="linearGradient3484" x1="392.57" x2="408.57" y1="523.8" y2="539.8" gradientUnits="userSpaceOnUse" xlink:href="#1"/>
  
 </defs>
 <g id="g3389" transform="matrix(.78152 0 0 .78147 -.59691 -806.8)">
  <g id="g3391" transform="matrix(.38637 .10353 -.10353 .38637 -92.63 796.68)">
   <use id="use3393" transform="translate(384.57,499.8)" width="100%" height="100%" clip-path="url(#5)" xlink:href="#H"/>
   <use id="use3395" width="100%" height="100%" clip-path="url(#6)" xlink:href="#J"/>
   <path id="path3397" d="m408.57 507.8c8.864 0 16 7.136 16 16h-16v-16" clip-path="url(#7)" fill="url(#linearGradient3480)"/>
   <use id="use3399" width="100%" height="100%" clip-path="url(#8)" xlink:href="#I"/>
  </g>
  <g id="g3401" transform="matrix(.4 0 0 .4 -152.43 831.84)" opacity=".7">
   <use id="use3403" transform="translate(384.57,499.8)" width="100%" height="100%" clip-path="url(#9)" filter="url(#4)" xlink:href="#H"/>
   <use id="use3405" width="100%" height="100%" clip-path="url(#A)" filter="url(#4)" xlink:href="#J"/>
   <use id="use3407" width="100%" height="100%" clip-path="url(#B)" filter="url(#4)" xlink:href="#I"/>
   <path id="path3409" d="m408.57 507.8c8.864 0 16 7.136 16 16h-16v-16" clip-path="url(#C)" fill="url(#linearGradient3480)" filter="url(#4)"/>
  </g>
  <use id="use3411" transform="matrix(.28284 .28284 -.28284 .28284 11 1027.8)" width="100%" height="100%" clip-path="url(#9)" opacity=".35" xlink:href="#H"/>
  <path id="path3413" transform="matrix(.28284 .28284 -.28284 .28284 43.591 777.65)" d="m408.57 539.8c-8.864 0-16-7.136-16-16h16v16" clip-path="url(#A)" fill="url(#linearGradient3484)" opacity=".35"/>
  <use id="use3415" transform="matrix(.28284 .28284 -.28284 .28284 43.591 777.65)" width="100%" height="100%" clip-path="url(#B)" opacity=".35" xlink:href="#I"/>
  <path id="path3417" transform="matrix(.28284 .28284 -.28284 .28284 43.591 777.65)" d="m408.57 507.8c8.864 0 16 7.136 16 16h-16v-16" clip-path="url(#C)" fill="url(#linearGradient3480)" opacity=".35"/>
  <g id="g3419" transform="matrix(.10353 .38637 -.38637 .10353 171.08 829.27)">
   <use id="use3421" transform="translate(384.57,499.8)" width="100%" height="100%" clip-path="url(#D)" opacity=".3" xlink:href="#H"/>
   <use id="use3423" width="100%" height="100%" clip-path="url(#E)" opacity=".3" xlink:href="#J"/>
   <use id="use3425" width="100%" height="100%" clip-path="url(#F)" opacity=".3" xlink:href="#I"/>
   <path id="path3427" d="m408.57 507.8c8.864 0 16 7.136 16 16h-16v-16" clip-path="url(#G)" fill="url(#linearGradient3480)" opacity=".3"/>
  </g>
 </g>
 <path d="M 15 11.7078 L 12.5 14.2078 L 10 11.7078 L 10.707 11.0007 L 12 12.2937 L 12 6.99997 C 12 4.79083 10.2091 2.99997 8 2.99997 C 5.79086 2.99997 4 4.79083 4 6.99997 L 3 6.99997 C 3 4.23855 5.23857 1.99997 8 1.99997 C 10.7614 1.99997 13 4.23855 13 6.99997 L 13 12.2937 L 14.293 11.0007 L 15 11.7078 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none"/>
		</svg>
	{:else}
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
			<defs>
  <path fill="url(#0)" id="H" d="m24 8c-8.863992 0-16 7.136008-16 16h16v-16"/>
  <path fill="url(#3)" id="I" d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16v16"/>
  <path fill="url(#1)" id="J" d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16v16"/>
  <linearGradient id="3" y1="523.8" y2="539.8" x1="424.57" x2="408.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#c1cc00"/>
   <stop offset="0.312" stop-color="#dfcd00"/>
   <stop offset="0.562" stop-color="#f0cc00"/>
   <stop offset="0.75" stop-color="#fd8c08"/>
   <stop offset="1" stop-color="#f25c13"/>
  </linearGradient>
  <linearGradient id="0" y1="24" y2="8" x1="8" x2="24" gradientUnits="userSpaceOnUse">
   <stop stop-color="#e81877"/>
   <stop offset="0.312" stop-color="#dd1d8c"/>
   <stop offset="0.562" stop-color="#6d57b1"/>
   <stop offset="0.75" stop-color="#2a78c1"/>
   <stop offset="1" stop-color="#018dcb"/>
  </linearGradient>
  <linearGradient id="2" y1="523.8" y2="507.8" x1="424.57" x2="408.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#bec900"/>
   <stop offset="0.312" stop-color="#9ec80a"/>
   <stop offset="0.562" stop-color="#71b93d"/>
   <stop offset="0.75" stop-color="#35a48f"/>
   <stop offset="1" stop-color="#018fca"/>
  </linearGradient>
  <linearGradient id="1" y1="523.8" y2="539.8" x1="392.57" x2="408.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#e51561"/>
   <stop offset="0.312" stop-color="#e4156c"/>
   <stop offset="0.562" stop-color="#e71e2c"/>
   <stop offset="0.75" stop-color="#e8301e"/>
   <stop offset="1" stop-color="#e6320e"/>
  </linearGradient>
  
 </defs>
 <g transform="matrix(1.093343,0,0,1.0933518,-1.0272637,-1128.5694)">
  <g transform="matrix(0.38637 0.10353 -0.10353 0.38637 -92.63 796.68)">
   <use xlink:href="#H" clip-path="url(#5)" transform="matrix(1 0 0 1 384.57 499.8)"/>
   <use xlink:href="#J" clip-path="url(#6)"/>
   <path fill="url(#2)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16v-16" clip-path="url(#7)"/>
   <use xlink:href="#I" clip-path="url(#8)"/>
  </g>
  <g opacity="0.7" transform="matrix(0.4 0 0 0.4 -152.43 831.84)">
   <use filter="url(#4)" xlink:href="#H" clip-path="url(#9)" transform="matrix(1 0 0 1 384.57 499.8)"/>
   <use filter="url(#4)" xlink:href="#J" clip-path="url(#A)"/>
   <use filter="url(#4)" xlink:href="#I" clip-path="url(#B)"/>
   <path fill="url(#2)" filter="url(#4)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16v-16" clip-path="url(#C)"/>
  </g>
  <use opacity="0.35" xlink:href="#H" clip-path="url(#9)" transform="matrix(0.28284 0.28284 -0.28284 0.28284 11 1027.79)"/>
  <path opacity="0.35" fill="url(#1)" d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16v16" clip-path="url(#A)" transform="matrix(0.28284 0.28284 -0.28284 0.28284 43.591 777.65)"/>
  <use opacity="0.35" xlink:href="#I" clip-path="url(#B)" transform="matrix(0.28284 0.28284 -0.28284 0.28284 43.591 777.65)"/>
  <path opacity="0.35" fill="url(#2)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16v-16" clip-path="url(#C)" transform="matrix(0.28284 0.28284 -0.28284 0.28284 43.591 777.65)"/>
  <g transform="matrix(0.10353 0.38637 -0.38637 0.10353 171.08 829.27)">
   <use opacity="0.3" xlink:href="#H" clip-path="url(#D)" transform="matrix(1 0 0 1 384.57 499.8)"/>
   <use opacity="0.3" xlink:href="#J" clip-path="url(#E)"/>
   <use opacity="0.3" xlink:href="#I" clip-path="url(#F)"/>
   <path opacity="0.3" fill="url(#2)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16v-16" clip-path="url(#G)"/>
  </g>
 </g>
 <path d="M 21 15.7075 L 17.5 19.2075 L 14 15.7075 L 14.707 15.0005 L 17 17.2935 L 17 9.99997 C 17 6.68627 14.3137 3.99997 11 3.99997 C 7.68628 3.99997 5 6.68627 5 9.99997 L 4 9.99997 C 4 6.13397 7.134 2.99997 11 2.99997 C 14.866 2.99997 18 6.13397 18 9.99997 L 18 17.2935 L 20.293 15.0005 L 21 15.7075 Z" class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none"/>
		</svg>
	{/if}
