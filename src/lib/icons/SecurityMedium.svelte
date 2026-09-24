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
        style="fill:currentColor;fill-opacity:1;stroke:none" 
          d="M 8,2 C 8,2 6.5,3.9931393 2,4.4931642 2,4.4931642 2,11.493575 8,14 14,11.493575 14,4.4931642 14,4.4931642 9.5,3.9931393 8,2 8,2 Z m 0,1.0327148 c 1.1902463,1.0085887 2.90787,1.681332 5.134277,2.02002 -0.120944,1.0839 -0.236906,1.899588 -0.517089,2.687988 C 12.02837,9.3975478 11.341831,10.405496 10.726074,11.130371 9.7719035,12.253605 8.905394,12.708268 8,13.160644 7.094606,12.708268 6.2280957,12.253605 5.2739255,11.130371 4.6581687,10.405496 3.97163,9.3975478 3.3828125,7.7407227 3.102629,6.9523228 2.986667,6.1366347 2.8657228,5.0527347 5.09213,4.7140467 6.8097538,4.0413035 8,3.0327148 Z M 8,3.932129 C 6.6923817,4.839833 5.2233868,5.299538 3.7490232,5.6123045 4.4471577,9.5737835 5.9510862,11.267823 8,12.328613 L 8,3.932129 Z"
          class="ColorScheme-Text"/>
		</svg>
	{:else if numericSize <= 43}
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
			<g
     transform="translate(0,-1030.3622)">
    <path
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
       d="M 11 3 C 11 3 9 5.6575188 3 6.3242188 C 3 6.3242188 3 15.6581 11 19 C 19 15.6581 19 6.3242188 19 6.3242188 C 13 5.6575188 11 3 11 3 z M 11 4.3769531 C 12.586995 5.7217384 14.87716 6.6187292 17.845703 7.0703125 C 17.684444 8.5155125 17.529828 9.6030967 17.15625 10.654297 C 16.37116 12.863397 15.455775 14.207328 14.634766 15.173828 C 13.362538 16.671474 12.207192 17.277691 11 17.880859 C 9.7928082 17.277691 8.6374611 16.671474 7.3652344 15.173828 C 6.544225 14.207328 5.6288398 12.863397 4.84375 10.654297 C 4.4701723 9.6030967 4.3155563 8.5155125 4.1542969 7.0703125 C 7.1228397 6.6187292 9.4130046 5.7217384 11 4.3769531 z M 11 5.5761719 C 9.2565091 6.786444 7.2978494 7.3993841 5.3320312 7.8164062 C 6.2628766 13.098378 8.2681151 15.357097 11 16.771484 L 11 5.5761719 z "
       transform="translate(0,1030.3622)"
       class="ColorScheme-Text"
       id="path4943-9-4-1" />
    <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NeutralText"
       d="m 15.5,1041.3602 0.0039,0 a 0.5,0.5 0 0 1 0.439453,0.2695 l 0.0039,0 3.986328,6.9746 -0.002,0 a 0.5,0.5 0 0 1 0.06836,0.252 0.5,0.5 0 0 1 -0.5,0.5 l -8,0 a 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.06836,-0.252 l -0.002,0 3.986328,-6.9727 0.002,0 a 0.5,0.5 0 0 1 0.002,0 0.5,0.5 0 0 1 0.443359,-0.2715 l 0,0 z"
       id="path4250" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none"
       d="M 15 13 L 15 16 L 16 16 L 16 13 L 15 13 z M 15 17 L 15 18 L 16 18 L 16 17 L 15 17 z "
       transform="translate(0,1030.3622)"
       id="rect4241" />
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
			<defs id="defs3811">
  <linearGradient id="linearGradient4155">
   <stop style="stop-color:#fcd994" id="stop4157"/>
   <stop offset="1" style="stop-color:#fff6e1" id="stop4159"/>
  </linearGradient>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient id="linearGradient4191-1-7" xlink:href="#linearGradient4227" y1="9" y2="23" x1="9.00001" gradientUnits="userSpaceOnUse" x2="23.00004" gradientTransform="matrix(2 0 0 2 735.85719 158.93361)"/>
  <linearGradient id="linearGradient4143-6">
   <stop style="stop-color:#faae2a" id="stop4145-8"/>
   <stop offset="1" style="stop-color:#ffc35a" id="stop4147-0"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4143-6" id="linearGradient4181" y1="6" x1="32" y2="57" x2="31" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4155" id="linearGradient4190" y1="17" y2="41" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata3814"/>
 <g id="layer1" transform="matrix(1 0 0 1 -736.85718 -157.93361)">
  <path style="fill:url(#linearGradient4181);stroke-linecap:square;stroke-width:2" id="rect4186-2-1" d="M 32 6 C 25.66667 9.35447 19.33333 10.72491 13 12 L 13 37 C 13 44 23.26331 53.561337 32 57.998047 C 40.73669 53.561337 51 44 51 37 L 51 12 C 44.66667 10.72491 38.33333 9.35447 32 6 z " transform="matrix(1 0 0 1 736.85718 157.93361)"/>
  <path style="fill:url(#linearGradient4191-1-7);opacity:0.2;fill-rule:evenodd" id="path4184-5" d="m 769.85718,174.93361 -2,0 0,20 2,2 -2,2 16,17 11,0 0,-18 z"/>
  <path style="fill:url(#linearGradient4190);stroke-linecap:square;stroke-width:2" id="rect4179" d="M 31 17 L 31 37 L 33 37 L 33 17 L 31 17 z M 31 39 L 31 41 L 33 41 L 33 39 L 31 39 z " transform="matrix(1 0 0 1 736.85718 157.93361)"/>
  <path style="fill:#e59305;stroke-linecap:square;stroke-width:2" id="rect4186-2-1-5" d="M 13 35 L 13 37 C 13 44 23.26331 53.561337 32 57.998047 C 40.73669 53.561337 51 44 51 37 L 51 35 C 51 42 40.73669 51.561337 32 55.998047 C 23.26331 51.561337 13 42 13 35 z " transform="matrix(1 0 0 1 736.85718 157.93361)"/>
 </g>
		</svg>
	{/if}
