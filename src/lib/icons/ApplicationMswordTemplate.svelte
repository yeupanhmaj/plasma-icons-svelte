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
			<path opacity=".75" fill="#0b0b64" d="m-1.861 136.16c-2.938 0-5.303-2.365-5.303-5.303v-53.03c0-2.938 2.365-5.303 5.303-5.303h47.73c2.938 0 5.303 2.365 5.303 5.303v53.03c0 2.938-2.365 5.303-5.303 5.303zm0-5.303h47.73v-53.03h-47.73zm5.303-10.607v-5.303h37.12v5.303zm0-10.607v-5.303h37.12v5.303zm0-10.607v-5.303h37.12v5.303zm0-10.607v-5.303h37.12v5.303z" transform="matrix(.18856 0 0 .18856 3.851-11.674)"/>
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
			<defs
     id="defs3871" />
  
  <g
     id="layer1"
     transform="matrix(1 0 0 1 -326 -534.3622)">
    <path
       style="opacity:1;fill:#0b0b64;fill-opacity:0.74901962;stroke:none;stroke-width:10;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 331,537.3622 c -0.554,0 -1,0.446 -1,1 l 0,14 c 0,0.554 0.446,1 1,1 l 12,0 c 0.554,0 1,-0.446 1,-1 l 0,-14 c 0,-0.554 -0.446,-1 -1,-1 l -12,0 z m 0,1 12,0 0,14 -12,0 0,-14 z m 1,2 0,1 10,0 0,-1 -10,0 z m 0,3 0,1 10,0 0,-1 -10,0 z m 0,3 0,1 10,0 0,-1 -10,0 z m 0,3 0,1 10,0 0,-1 -10,0 z"
       id="rect4151" />
  </g>
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
			<defs>
  <linearGradient id="a" y1="392.36" y2="365.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" y2="24" x1="47" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#0b0b64" xlink:href="#c"/>
   <g fill="#ffffff">
    <path opacity=".1" d="m391.57 517.8v1.998h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2l-1-1h-2v-2l-1-1h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998zm1 2.998h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-12 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-15 3h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1z"/>
    <rect opacity=".5" x="389.57" y="-518.8" width="15" height="1" transform="scale(1-1)"/>
   </g>
   <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1" transform="scale(1-1)"/>
  </g>
  <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m411.57 524.8l-7-7v7z" color-interpolation="sRGB" text-rendering="auto" fill="#8282dd" shape-rendering="auto"/>
  <use fill="url(#a)" xlink:href="#c"/>
  <path opacity=".75" fill="#8282dd" d="m395.57 538.8c-.554 0-1-.446-1-1v-10c0-.554.446-1 1-1h9c.554 0 1 .446 1 1v10c0 .554-.446 1-1 1zm0-1h9v-10h-9zm1-2v-1h7v1zm0-2v-1h7v1zm0-2v-1h7v1zm0-2v-1h7v1z"/>
 </g>
		</svg>
	{:else}
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
			<defs>
  <linearGradient id="a" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <use fill="#0b0b64" xlink:href="#c"/>
  <g fill="#ffffff">
   <path opacity=".1" d="m10 4v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-29zm3 1h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-24 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-27 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-30 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-33 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2z"/>
   <rect opacity=".5" x="10" y="-4" width="30" height="1" transform="scale(1-1)"/>
  </g>
  <rect opacity=".25" x="10" y="-61" width="44" height="1" transform="scale(1-1)"/>
  <path fill="#8282dd" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <use opacity=".7" fill="url(#a)" xlink:href="#c"/>
 <path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m22 22c-.554 0-1 .446-1 1v20c0 .554.446 1 1 1h20c.554 0 1-.446 1-1v-20c0-.554-.446-1-1-1zm0 1h20v20h-20v-19zm1 2v1h8v-1zm10 0v1h8v-1zm-9.949 3v1h7.949v-1zm9.949 0v1h8v-1zm-10 3v1h8v-1zm10 0v1h8v-1zm-9.949 3v1h7.949v-1zm9.949 0v1h8v-1zm-10 3v1h8v-1zm10 0v1h8v-1zm-9.949 3v1h7.949v-1zm9.949 0v1h8v-1z" color-interpolation="sRGB" text-rendering="auto" fill="#8282dd" shape-rendering="auto"/>
		</svg>
	{/if}
