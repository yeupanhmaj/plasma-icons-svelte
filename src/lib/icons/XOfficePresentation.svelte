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
			<path opacity=".9" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m2 1.5v2h-1v11h14v-11h-1v-2zm1 1h10v1h-10zm-1 2h12v9h-12zm4 2v5l4.61-2.475z" color-interpolation="sRGB" text-rendering="auto" fill="#ff8b23" shape-rendering="auto"/>
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
  
  <path style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ff8b23;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;fill-opacity:1" d="M 3,3 3,5 2,5 2,19 20,19 20,5 19,5 19,3 Z M 4,4 18,4 18,5 4,5 Z M 3,6 19,6 19,18 3,18 Z m 5,2 0,8 7,-4 z" id="path4"/>
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
   <use fill="#ff8b23" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".9" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m394.57 525.8v2h-1v11h14v-11h-1v-2zm1 1h10v1h-10zm-1 2h12v9h-12zm4 2v5l4.61-2.475z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(174 296.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(126-36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m184 357.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-174-296.36)">
  <use fill="#ff8b23" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="184" y="-300.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="184" y="-357.36" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m228 313.36l-14-14v14z"/>
   <path opacity=".2" fill="url(#a)" d="m214 313.36l14 14v-14z"/>
  </g>
  <use fill="url(#b)" xlink:href="#c"/>
  <path opacity=".9" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m195 318.36v2h-2v20h26v-20h-2v-2zm1 1h20v1h-20zm-2 2h24v18h-24zm10 5v8l5-4z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 </g>
		</svg>
	{/if}
