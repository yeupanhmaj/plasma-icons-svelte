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
			<path fill="#6c7a89" d="m0 1040.36v8h2v-5.174l2 2 2-2v5.174h2v-8h-2l-1.998 1.998-1.998-1.998zm12 0v4h-2l3 4 3-4h-2v-4z" transform="translate(0-1036.36)"/>
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
			<defs id="defs3871"/>
 <metadata id="metadata3874"/>
 <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path style="fill:#6c7a89" id="path3367" d="m 0,5 0,12.1 22,0 L 22,5 Z m 1,1 20,0 0,10.1 -20,0 z" transform="matrix(1 0 0 1 326 534.3622)"/>
  <path style="fill:#6c7a89" id="path3373" d="m 328,541.3622 0,0.82617 0,7.17383 2,0 0,-5.17383 2,2 2,-2 0,5.17383 2,0 0,-7.17383 0,-0.82617 -2.00195,0 -1.99805,1.99805 -1.99805,-1.99805 -2.00195,0 z m 13,0 0,4 -3,0 4,4 4,-4 -3,0 0,-4 -2,0 z"/>
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
  <linearGradient id="a" y1="392.36" y2="365.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="47" y2="24" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#cccccc" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".6" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".6" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m392.57 528.8v8h2v-5.174l2 2 2-2v5.174h2v-8h-2l-1.998 1.998-1.998-1.998zm12 0v4h-2l3 4 3-4h-2v-4z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
  <use fill="url(#a)" xlink:href="#c"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#cccccc" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
  <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
  <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".6" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#a)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".6" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m19 26v16h26v-16zm1 1h24v14h-24zm1 1v12h2v-9.174l4 4 4-4v9.174h2v-12h-2l-3.998 3.998-3.998-3.998h-.002zm17 0v8h-3l4 4 4-4h-3v-8z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
