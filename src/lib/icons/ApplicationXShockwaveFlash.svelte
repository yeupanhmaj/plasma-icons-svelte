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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m13 1038.37v2.414c-2.511.042-3.128 2.393-3.128 2.393h2.128v2.414h-3.17c-1.766 5.23-5.83 4.764-5.83 4.764v-2.414c0 0 2.579.459 3.894-4.15 1.645-5.766 6.106-5.421 6.106-5.421" color-interpolation="sRGB" text-rendering="auto" fill="#db3333" shape-rendering="auto" transform="translate(0-1036.36)"/>
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
    <path style="fill:#db3333;color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" id="path3727-6" d="m 17.40625,3 c -1.168622,0.017013 -5.961949,0.5052905 -7.8808594,7.232422 -1.7390464,6.09679 -5.1778387,5.532724 -5.1816406,5.535156 0,0 -0.3461321,-0.0249 -0.34375,-0.02733 L 4,19 4.3457032,18.998 c 0.1806437,-0.03613 5.4051554,0.608366 7.7597658,-6.365235 l 4.228515,0 0,-3.2187495 -2.83789,0 c 0,0 0.822402,-3.1334531 4.169922,-3.1894531 0,0 0.340733,-0.00407 0.333984,-0.00586 L 18,3 l -0.34375,0 0,0.00586 C 17.64955,3.0053621 17.56692,2.99766 17.40625,3 Z" transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <linearGradient id="a" y1="394.54" y2="325.98" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(.48276 0 0 .40835 384.64 384.68)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
 </defs>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="translate(-384.57-515.8)">
  <path fill="#db3333" d="m414.57 545.8h-28v-22h28v7z"/>
  <rect x="386.57" y="544.8" fill-opacity=".294" width="28" fill="#2e3132" height="1"/>
  <g fill="#ffffff">
   <rect x="386.57" y="523.8" fill-opacity=".41" width="28" height="1"/>
   <path opacity=".75" d="m387.57 525.8v2h2v-2zm24 0v2h2v-2zm-24 4v2h2v-2zm24 0v2h2v-2zm-24 4v2h2v-2zm24 0v2h2v-2zm-24 4v2h2v-2zm24 0v2h2v-2zm-24 4v2h2v-2zm24 0v2h2v-2z"/>
   <path opacity=".75" d="m405.55 527.8v2.821c-2.88.049-3.588 2.796-3.588 2.796h2.172v2.821h-3.368c-2.026 6.111-6.688 5.567-6.688 5.567v-2.821c0 0 2.958.537 4.467-4.849 1.887-6.737 7-6.334 7-6.334"/>
  </g>
  <path fill="url(#a)" d="m386.57 523.8v22h28v-22z"/>
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
  <linearGradient id="a" y1="392.36" y2="324.66" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 .84587 59-272.73)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" id="b" color-interpolation="sRGB" color="#000000" d="m63 17v44h58v-44h-18.455z"/>
 </defs>
 <g transform="translate(-60)">
  <use fill="#db3333" xlink:href="#b"/>
  <rect width="58" x="63" y="60" fill="#2e3132" height="1" fill-opacity=".294"/>
  <g fill="#ffffff">
   <rect width="58" x="63" y="17" height="1" fill-opacity=".41"/>
   <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
    <path opacity=".75" d="m115 19v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4z"/>
    <path opacity=".75" d="m65 19v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4zm0 6v4h4v-4z"/>
   </g>
  </g>
  <use fill="url(#a)" xlink:href="#b"/>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m100 29.01v4.426c-4.519.077-5.63 4.387-5.63 4.387h3.409v4.426h-5.285c-3.179 9.589-10.494 8.735-10.494 8.735v-4.426c0 0 4.642.842 7.01-7.609 2.961-10.571 10.991-9.938 10.991-9.938" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 </g>
		</svg>
	{/if}
