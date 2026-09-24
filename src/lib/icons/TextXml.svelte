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
			<path fill="#cf74e0" color="#000000" stroke-width=".1" d="m9.09 2l-3.146 11.74.967.26 3.146-11.74zm-3.805 2l-2.961 3.145-.324.348.324.346 2.943 3.162.715-.695-2.621-2.813 2.639-2.797zm5.43 0l-.715.695 2.639 2.797-2.621 2.813.715.695 2.943-3.162.324-.346-.324-.348z"/>
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
			<defs id="defs3871">
    <linearGradient id="linearGradient4300-8">
      <stop style="stop-color:#f27935" id="stop4302-5"/>
      <stop offset="1" style="stop-color:#f2784b" id="stop4304-7"/>
    </linearGradient>
    <linearGradient id="linearGradient4357" xlink:href="#linearGradient4351" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0"/>
    <linearGradient id="linearGradient4410">
      <stop style="stop-color:#383e51" id="stop4412"/>
      <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
    </linearGradient>
    <linearGradient id="linearGradient4427" xlink:href="#linearGradient4410" y1="31" y2="17" x1="54" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 -14 78)"/>
    <linearGradient id="linearGradient4306" xlink:href="#linearGradient4300-8" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0"/>
    <linearGradient id="linearGradient4351">
      <stop style="stop-color:#f7ab89" id="stop4353"/>
      <stop offset="1" style="stop-color:#f9bda3" id="stop4355"/>
    </linearGradient>
    <linearGradient xlink:href="#linearGradient4410" id="linearGradient3444" y1="31" x1="54" y2="17" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 503.93261 656.69754)"/>
    <linearGradient xlink:href="#linearGradient4351" id="linearGradient3447" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
    <linearGradient xlink:href="#linearGradient4300-8" id="linearGradient3452" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
  </defs>
  
  <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <g style="fill:#cf74e0;fill-opacity:1" id="layer1-1" transform="matrix(1 0 0 1 -225.28572 -73.28571)">
      <path style="color:#000000;fill:#cf74e0;fill-opacity:1" id="path3454" d="m 563.78571,610.64791 -4,15.75384 1,0.24616 4,-15.75385 -1,-0.24615 z"/>
      <path style="color:#000000;fill:#cf74e0;fill-opacity:1" id="path4224" d="m 566.03107,613.64791 -0.74534,0.70967 3.66459,4.29032 -3.66459,4.29033 0.74534,0.70968 3.97515,-4.64516 0.27951,-0.35485 -0.27951,-0.35483 -3.97515,-4.64516 z"/>
      <path style="color:#000000;fill:#cf74e0;fill-opacity:1" id="path4224-7" d="m 558.54037,613.64791 0.74534,0.70967 -3.66459,4.29032 3.66459,4.29033 -0.74534,0.70968 -3.97515,-4.64516 -0.27951,-0.35485 0.27951,-0.35483 3.97515,-4.64516 z"/>
    </g>
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
   <use fill="#cf74e0" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m17.09 12l-2.947 11h1.039l2.982-10.992zm-4.512 2l-2.961 3.145-.324.348.324.346 2.943 3.162.715-.695-2.621-2.813 2.639-2.797zm7.465.283l-.715.695 2.639 2.797-2.621 2.813.715.695 2.943-3.162.324-.346-.324-.348z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto" transform="translate(384.57 515.8)"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(432 1154.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(384 822)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m442 1215.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-432-1154.36)">
  <use fill="#cf74e0" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="442" y="-1158.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="442" y="-1215.36" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m486 1171.36l-14-14v14z"/>
   <path opacity=".1" fill="url(#a)" d="m472 1171.36l14 14v-14z"/>
  </g>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m466.05 1179.04l-5.318 17.59h1.045l5.318-17.59zm-9.05 3.318l-6 6 6 6 .707-.707-5.293-5.293 5.293-5.293zm12.707.25l-.707.707 5.293 5.293-5.293 5.293.707.707 6-6-.707-.707z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
