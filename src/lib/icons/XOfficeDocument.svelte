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
			<path fill="#22a7f0" color="#000000" stroke-width="1.4" d="m2 2v1h6v-1zm0 3v1h12v-1zm0 3v1h5v-1zm6 0v6h6v-6zm1 1h4v4h-4zm-7 1v1h5v-1zm0 3v1h5v-1z"/>
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
  <g id="layer1-23">
   <path style="fill:#22a7f0;stroke-linecap:round;stroke-linejoin:round;stroke-width:2" id="rect4847" d="M 3 3 L 3 4 L 11 4 L 11 3 L 3 3 z M 3 7 L 3 8 L 19 8 L 19 7 L 3 7 z M 3 11 L 3 12 L 10 12 L 10 11 L 3 11 z M 11 11 L 11 19 L 19 19 L 19 11 L 11 11 z M 12 12 L 18 12 L 18 18 L 12 18 L 12 12 z M 3 14 L 3 15 L 10 15 L 10 14 L 3 14 z M 3 18 L 3 19 L 10 19 L 10 18 L 3 18 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
   <use fill="#1bb2fb" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <use fill="url(#a)" xlink:href="#c"/>
  <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".9" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m394.57 525.8v1h6v-1zm0 3v1h12v-1zm0 3v1h5v-1zm6 0v6h6v-6zm1 1h4v4h-4zm-7 1v1h5v-1zm0 3v1h5v-1z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(46 296.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-2-36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m56 357.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-46-296.36)">
  <use fill="#1bb2fb" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="56" y="-300.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="56" y="-357.36" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m100 313.36l-14-14v14z"/>
   <path opacity=".2" fill="url(#a)" d="m86 313.36l14 14v-14z"/>
  </g>
  <path opacity=".9" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m67 318.36v1h22v-1zm0 3v1h22v-1zm0 3v1h11v-1zm0 4v1h22v-1zm0 3v1h9v-1zm13 0v9h9v-9zm1 1h7v7h-7zm-14 1v1h5v-1zm0 3v1h10v-1zm0 3v1h6v-1z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
