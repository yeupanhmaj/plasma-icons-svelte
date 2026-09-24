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
			<path fill="#124c12" d="m2 2v12h12v-12h-11zm1 1h10v2h-10zm0 3h2v3h-2zm3 0h4v3h-4zm5 0h2v3h-2zm-8 4h2v3h-2zm3 0h4v3h-4zm5 0h2v3h-2z"/>
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
    <path style="fill:#124c12;stroke-width:2;fill-opacity:1" id="rect4376" d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 8 L 4 8 L 4 4 z M 4 9 L 8 9 L 8 13 L 4 13 L 4 9 z M 9 9 L 13 9 L 13 13 L 9 13 L 9 9 z M 14 9 L 18 9 L 18 13 L 14 13 L 14 9 z M 4 14 L 8 14 L 8 18 L 4 18 L 4 14 z M 9 14 L 13 14 L 13 18 L 9 18 L 9 14 z M 14 14 L 18 14 L 18 18 L 14 18 L 14 14 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <linearGradient id="a" y1="17" x1="47" y2="24" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="365.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#124c12" xlink:href="#c"/>
   <g fill="#ffffff">
    <path opacity=".1" d="m391.57 517.8v1.998h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2l-1-1h-2v-2l-1-1h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998zm1 2.998h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-12 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-15 3h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1z"/>
    <rect opacity=".5" x="389.57" y="-518.8" width="15" height="1" transform="scale(1-1)"/>
   </g>
   <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1" transform="scale(1-1)"/>
  </g>
  <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <g fill="#6ac76a" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <path d="m411.57 524.8l-7-7v7z"/>
   <path d="m394.57 526.8v12h12v-12h-11zm1 1h10v2h-10zm0 3h2v3h-2zm3 0h4v3h-4zm5 0h2v3h-2zm-8 4h2v3h-2zm3 0h4v3h-4zm5 0h2v3h-2z"/>
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
  <linearGradient id="a" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-45.675-337.95)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(2.325-5.585)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m12.325 55.42v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-2.325 5.585)">
  <use fill="#124c12" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <g fill="#ffffff">
    <path opacity=".1" d="m12.325-1.585v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-29zm3 1h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-24 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-27 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-30 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-33 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2z"/>
    <rect opacity=".5" x="12.325" y="1.585" width="30" height="1" transform="scale(1-1)"/>
   </g>
   <rect opacity=".25" x="12.325" y="-55.42" width="44" height="1" transform="scale(1-1)"/>
   <path fill="#6ac76a" d="m56.32 11.415l-14-14v14z"/>
  </g>
  <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m42.32 11.415l14 14v-14z"/>
  <path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m23.325 16.415v22h22v-22zm1 1h20v4h-20zm0 5h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5zm-15 4h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5zm-15 4h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5zm-15 4h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5z" color-interpolation="sRGB" text-rendering="auto" fill="#6ac76a" shape-rendering="auto"/>
  <use opacity=".7" fill="url(#a)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
