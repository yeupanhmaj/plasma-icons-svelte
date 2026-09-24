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
			<path fill="#f59e16" d="m8 2c-1.662 0-3 1.338-3 3v1h1v-1c0-1.454.754-2 2-2 1.246 0 2 .546 2 2v3h-7v6h10v-6h-2v-3c0-1.662-1.338-3-3-3m-4 7h8v4h-8z"/>
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
    <path style="fill:#f59e16;fill-opacity:1" id="rect4136" d="m 337,537.3622 c -2.216,0 -4,1.784 -4,4 l 0,1 1,0 0,-0.5 c 0,-1.939 1.338,-3.5 3,-3.5 1.662,0 3,1.561 3,3.5 l 0,3.5 -5,0 -1,0 -1,0 -1,0 -1,0 0,1 0,7 1,0 10,0 1,0 0,-8 -1,0 -1,0 0,-4 c 0,-2.216 -1.784,-4 -4,-4 z m -5,9 10,0 0,6 -10,0 0,-6 z"/>
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
   <stop stop-color="#f39c12"/>
   <stop offset="1" stop-color="#f9a11f"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fddda3"/>
   <stop offset="1" stop-color="#fde3a7"/>
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
  <path fill="#fddda3" d="m400.57 527.8c-1.662 0-3 1.338-3 3v1h1v-1c0-1.454.754-2 2-2 1.247 0 2 .546 2 2v3h-7v6h10v-6h-2v-3c0-1.662-1.338-3-3-3m-4 7h8v4h-8z"/>
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
  <linearGradient id="a" y1="3" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#f39c12"/>
   <stop offset="1" stop-color="#f89406"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#fddda3"/>
   <stop offset="1" stop-color="#fde3a7"/>
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
 <path fill="#fddda3" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" d="m32 22c-2.77 0-5 2.23-5 5h1c0-2.216 1.784-4 4-4 2.216 0 4 1.784 4 4v6h-12v11h16v-11h-3v-6c0-2.77-2.23-5-5-5m-7 12h14v9h-14z"/>
		</svg>
	{/if}
