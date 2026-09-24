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
			<path fill="#04896a" d="m2 2v12h7v-1h-3v-3h3v-1h-3v-3h4v2h1v-2h2v2h1v-6h-11zm1 1h10v2h-10zm0 3h2v3h-2zm8.5 3c-.831 0-1.5.638-1.5 1.43 0 .763.623 1.376 1.412 1.42.057.262.087.528.088.795-.002.463-.089.922-.258 1.355 1.1-.734 1.756-1.933 1.758-3.213v-.357c0-.792-.669-1.43-1.5-1.43m-8.5 1h2v3h-2z"/>
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
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path style="fill:#04896a;stroke-width:2" id="rect4376" d="M 3 3 L 3 19 L 14 19 L 14 18 L 14 14 L 14 13 L 14 9 L 18 9 L 18 13 L 19 13 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 8 L 4 8 L 4 4 z M 4 9 L 8 9 L 8 13 L 4 13 L 4 9 z M 9 9 L 13 9 L 13 13 L 9 13 L 9 9 z M 4 14 L 8 14 L 8 18 L 4 18 L 4 14 z M 9 14 L 13 14 L 13 18 L 9 18 L 9 14 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <path inkscape:connector-curvature="0" style="fill:#04896a" id="rect4031" d="m 342.5,548.3622 c -0.83101,0 -1.5,0.63799 -1.5,1.42969 0,0.7634 0.62316,1.37632 1.41211,1.41992 0.0575,0.2617 0.0869,0.52812 0.0879,0.79492 -0.002,0.4631 -0.0888,0.92207 -0.25781,1.35547 1.1,-0.7343 1.75582,-1.93289 1.75781,-3.21289 l 0,-0.35742 c 0,-0.7918 -0.669,-1.42969 -1.5,-1.42969 z"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#26c281"/>
   <stop offset="1" stop-color="#3fc380"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#036b53"/>
   <stop offset="1" stop-color="#036b53"/>
  </linearGradient>
  <linearGradient id="c" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" y="-518.8" fill="#ffffff" height="1" fill-opacity=".412"/>
   <rect width="22" x="389.57" y="-545.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  </g>
  <g fill-rule="evenodd">
   <path fill="url(#b)" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#c)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path fill="#036b53" d="m394.57 527.8v12h7v-1h-3v-3h3v-1h-3v-3h4v2h1v-2h2v2h1v-6h-11zm1 1h10v2h-10zm0 3h2v3h-2zm8.5 3c-.831 0-1.5.638-1.5 1.43 0 .763.623 1.376 1.412 1.42.058.262.087.528.088.795-.002.463-.089.922-.258 1.355 1.1-.734 1.756-1.933 1.758-3.213v-.357c0-.792-.669-1.43-1.5-1.43m-8.5 1h2v3h-2z"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#26c281"/>
   <stop offset="1" stop-color="#3fc380"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#036b53"/>
   <stop offset="1" stop-color="#036b53"/>
  </linearGradient>
  <linearGradient id="c" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m10 61v-58h30l14 14v44h-14z"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" y="-4" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="44" x="10" y="-61" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path fill="url(#b)" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#c)" d="m40 17l14 14v-14z"/>
 </g>
 <path fill="#036b53" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" d="m21 22v22h14v-1h-7v-3h7v-1h-7v-3h15v-14zm1 1h20v4h-20zm0 5h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5zm-15 4h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5zm-15 4h5v3h-5zm18 1c-1.108 0-2 .892-2 2 0 1.068.831 1.927 1.883 1.988.077.366.116.738.117 1.111-.002.647-.118 1.289-.344 1.896 1.467-1.028 2.341-2.705 2.344-4.496v-.5c0-1.108-.892-2-2-2m-18 3h5v3h-5z"/>
		</svg>
	{/if}
