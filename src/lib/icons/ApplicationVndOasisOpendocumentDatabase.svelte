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
			<path fill="#8e44ad" d="M8 2A6 2 0 0 0 2 4V12A6 2 0 0 0 8 14 6 2 0 0 0 14 12V4A6 2 0 0 0 8 2M8 3A5 1 0 0 1 13 4 5 1 0 0 1 8 5 5 1 0 0 1 3 4 5 1 0 0 1 8 3M3 5.101563A6 2 0 0 0 8 6 6 2 0 0 0 13 5.103516V8A5 1 0 0 1 8 9 5 1 0 0 1 3 8zM3 9.101563A6 2 0 0 0 8 10 6 2 0 0 0 13 9.103516V12A5 1 0 0 1 8 13 5 1 0 0 1 3 12z"/>
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
  <path style="fill:#8e44ad;stroke-width:2" id="path4146" d="M 11 3 A 8 3.0000005 0 0 0 3 6 L 3 16 A 8 3.0000005 0 0 0 11 19 A 8 3.0000005 0 0 0 19 16 L 19 6 A 8 3.0000005 0 0 0 11 3 z M 11 4 A 7 2 0 0 1 18 6 A 7 2 0 0 1 11 8 A 7 2 0 0 1 4 6 A 7 2 0 0 1 11 4 z M 18 7.4453125 L 18 11 A 7 2 0 0 1 11 13 A 7 2 0 0 1 4 11 L 4 7.4511719 A 8 3.0000005 0 0 0 11 9 A 8 3.0000005 0 0 0 18 7.4453125 z M 18 12.445312 L 18 16 A 7 2 0 0 1 11 18 A 7 2 0 0 1 4 16 L 4 12.451172 A 8 3.0000005 0 0 0 11 14 A 8 3.0000005 0 0 0 18 12.445312 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <linearGradient id="a" y1="17" y2="24" x1="47" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="365.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#8542c2" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".2" fill="url(#a)" d="m404.57 524.8l7 7v-7z"/>
   <path opacity=".5" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m411.57 524.8l-7-7v7z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  </g>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#4d4d4d" image-rendering="auto" color-rendering="auto" d="m400.57143 526.798a6 2 0 0 0 -6 2v8a6 2 0 0 0 6 2 6 2 0 0 0 6 -2v-8a6 2 0 0 0 -6 -2m0 1a5 1 0 0 1 5 1 5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1 5 1 0 0 1 5 -1m-5 2.10156a6 2 0 0 0 5 .89844 6 2 0 0 0 5 -.89648v2.896a5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1zm0 4a6 2 0 0 0 5 .89844 6 2 0 0 0 5 -.89648v2.896a5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="2.978" y2="60.978" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 63.978)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 60.978v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#8542c2" xlink:href="#c"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" opacity=".5" y="-4" fill="#ffffff" height="1"/>
  <rect width="44" x="10" opacity=".25" y="-61" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#a)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".75" color-interpolation-filters="linearRGB" color="#4d4d4d" image-rendering="auto" color-rendering="auto" d="m32 21.99999a11 3 0 0 0 -11 3v16a11 3 0 0 0 11 3 11 3 0 0 0 11 -3v-16a11 3 0 0 0 -11 -3m0 1a10 2 0 0 1 10 2 10 2 0 0 1 -10 2 10 2 0 0 1 -10 -2 10 2 0 0 1 10 -2m-10 3.24219a11 3 0 0 0 10 1.75781 11 3 0 0 0 10 -1.75781v3.758a10 2 0 0 1 -10 2 10 2 0 0 1 -10 -2zm0 5a11 3 0 0 0 10 1.75781 11 3 0 0 0 10 -1.75781v4.758a10 2 0 0 1 -10 2 10 2 0 0 1 -10 -2zm0 6a11 3 0 0 0 10 1.75781 11 3 0 0 0 10 -1.75781v3.758a10 2 0 0 1 -10 2 10 2 0 0 1 -10 -2v-1z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
