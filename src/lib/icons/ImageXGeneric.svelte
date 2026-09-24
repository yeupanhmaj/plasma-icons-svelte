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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m2 2v12h12v-12h-11zm1 1h1.912c.057.16.087.33.088.5 0 .828-.672 1.5-1.5 1.5-.17-.001-.34-.03-.5-.088zm2.947 0h7.05v10h-10v-.783l1.326-1.299 1.408-1.404.564.418 1.102 1.068 2.6-2.398 4 3.891-1-2.492-3-3-2.6 2.6-1.6-1.6-2.801 2.801v-4.854c.164.034.332.052.5.053 1.381 0 2.5-1.119 2.5-2.5-.001-.168-.018-.336-.053-.5" color-interpolation="sRGB" text-rendering="auto" fill="#7fcc74" shape-rendering="auto"/>
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
  
  <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#7fcc74;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 329,539.3622 0,1 0,0.5 0,1.5 0,0.20508 0,0.29297 0,7.30273 0,0.19922 0,1 0,0.41992 0,0.58008 16,0 0,-0.6875 0,-0.3125 0,-12 -1,0 -11,0 -0.50391,0 -0.45703,0 -1.53906,0 -0.5,0 -1,0 z m 1,1 1.91211,0 a 1.500001,1.500001 0 0 1 0.0879,0.5 1.500001,1.500001 0 0 1 -1.5,1.5 1.500001,1.500001 0 0 1 -0.5,-0.0879 l 0,-1.91211 z m 2.94727,0 0.0527,0 11,0 0,11 -14,0 0,-0.0723 0,-0.0879 0,-0.62304 2.32617,-2.29883 1.4082,-1.4043 1.56446,1.41797 1.10156,1.06836 3.59961,-3.39844 3,2.89063 0,-1.49219 -3,-3 -3.59961,3.59961 -2.59961,-2.59961 -3.80078,3.80078 0,-5.85351 a 2.5000029,2.5000029 0 0 0 0.5,0.0527 2.5000029,2.5000029 0 0 0 2.5,-2.5 2.5000029,2.5000029 0 0 0 -0.0527,-0.5 z" id="path4251"/>
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
  <linearGradient id="a" y1="17" x1="47" y2="24" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(360.57 510.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="320.48" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(.5 0 0 .42294 378.57 378.93)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" id="c" color-interpolation="sRGB" color="#000000" d="m386.57 545.8v-25h21l7 7v18h-7z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <use fill="#87d37c" xlink:href="#c"/>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m414.57 527.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#a)" d="m407.57 527.8l7 7v-7z"/>
  </g>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <rect opacity=".25" x="386.57" y="544.8" width="28" height="1"/>
   <g fill="#ffffff">
    <rect opacity=".5" x="386.57" y="520.8" width="21" height="1"/>
    <path opacity=".75" stroke-width="2" d="m396.07143 528.798a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5 -1.5 1.5 1.5 0 0 0 -1.5 -1.5m0 1a.5 .5 0 0 1 .5 .5 .5 .5 0 0 1 -.5 .5 .5 .5 0 0 1 -.5 -.5 .5 .5 0 0 1 .5 -.5m9.5 1l-5.6 5.58-2.6-2.58-6 6h1.406l3.119-3.082 1.408-1.404 1.564 1.418 1.102 1.068 5.6-5.398 3.594 3.398h1.406z"/>
   </g>
  </g>
  <use fill="url(#b)" xlink:href="#c"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(6 8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="320.48" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 .84587-34-272.73)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" id="c" color-interpolation="sRGB" color="#000000" d="m4 61v-50h42l14 14v36h-14z"/>
 </defs>
 <use fill="#87d37c" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <rect opacity=".25" x="4" y="60" width="56" height="1"/>
  <rect opacity=".5" x="4" y="11" width="42" fill="#ffffff" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m60 25l-14-14v14z"/>
  <path opacity=".1" fill="url(#a)" d="m46 25l14 14v-14z"/>
 </g>
 <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" stroke-width="2" d="m21.05 21.344v1.828h1v-1.828zm-2.793 1.156l-.707.707 1.293 1.293.707-.707zm6.586 0l-1.293 1.293.707.707 1.293-1.293zm-3.344 1.5c-1.381 0-2.5 1.119-2.5 2.5 0 1.381 1.119 2.5 2.5 2.5 1.381 0 2.5-1.119 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5m0 1c.828 0 1.5.672 1.5 1.5 0 .828-.672 1.5-1.5 1.5-.828 0-1.5-.672-1.5-1.5 0-.828.672-1.5 1.5-1.5m-5.105 1v1h1.828v-1zm8.484 0v1h1.828v-1zm14.12 5l-2 2h-.008l-8.592 8.58v.02l-4.6-4.6-9 9h1.406l6.119-6.082 1.409-1.404 1.564 1.418 3.102 3.068 4-4 2.951-2.936 3.648-3.462 3.637 3.515 7.957 7.883h1.406zm-20.16-2.5l-1.293 1.293.707.707 1.293-1.293zm5.414 0l-.707.707 1.293 1.293.707-.707zm-3.207 1.328v1.828h1v-1.828z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
