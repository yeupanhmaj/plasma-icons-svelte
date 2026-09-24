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
			<path fill="#7fcc74" color="#4d4d4d" d="m7.5 3c-3.038 0-5.5 2.462-5.5 5.5 0 3.038 2.462 5.5 5.5 5.5 3.038 0 5.5-2.462 5.5-5.5 0-3.038-2.462-5.5-5.5-5.5m0 1c2.485 0 4.5 2.01 4.5 4.5 0 2.485-2.01 4.5-4.5 4.5-2.485 0-4.5-2.01-4.5-4.5 0-2.485 2.01-4.5 4.5-4.5m-.5 1v1h1v-1zm0 2v5h1v-5z" transform="matrix(1 0 0 1 0 0)"/>
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
  <g style="fill:#7fcc74" id="layer1-6" transform="matrix(1 0 0 1 326 -496)">
   <rect width="2" x="10" y="1036.3622" height="2" style="color:#4d4d4d" id="rect4120"/>
   <rect width="2" x="10" y="1039.3622" height="7" style="color:#4d4d4d" id="rect4124"/>
   <path style="color:#4d4d4d" id="rect4129" d="m 11,3 c -4.432,0 -8,3.568 -8,8 0,4.432 3.568,8 8,8 4.432,0 8,-3.568 8,-8 0,-4.432 -3.568,-8 -8,-8 z m 0,1 c 3.878,0 7,3.122 7,7 0,3.878 -3.122,7 -7,7 C 7.122,18 4,14.878 4,11 4,7.122 7.122,4 11,4 Z" transform="matrix(1 0 0 1 0 1030.3622)"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#7fcc74"/>
   <stop offset="1" stop-color="#87d37c"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#ade2a1"/>
   <stop offset="1" stop-color="#cfeec9"/>
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
  <path fill="#e3f5df" stroke-width="2" d="m400.57143 527.798a6 6 0 0 0 -6 6 6 6 0 0 0 6 6 6 6 0 0 0 6 -6 6 6 0 0 0 -6 -6m0 1a5 5 0 0 1 5 5 5 5 0 0 1 -5 5 5 5 0 0 1 -5 -5 5 5 0 0 1 5 -5m-.5 1v1h1v-1zm0 2v6h1v-6z"/>
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
  <linearGradient id="a" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#51db51" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
  <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
  <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
 </g>
 <g fill="#ffffff">
  <path opacity=".5" fill-rule="evenodd" d="m54 17l-14-14v14z"/>
  <path opacity=".75" stroke-width="2" d="M32 22A11 11 0 0 0 21 33 11 11 0 0 0 32 44 11 11 0 0 0 43 33 11 11 0 0 0 32 22m0 1A10 10 0 0 1 42 33 10 10 0 0 1 32 43 10 10 0 0 1 22 33 10 10 0 0 1 32 23m-1 2v2h2v-2zm0 4v12h2v-12z"/>
 </g>
 <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <use fill="url(#a)" xlink:href="#c"/>
		</svg>
	{/if}
