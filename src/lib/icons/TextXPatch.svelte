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
			<path fill="#6c7a89" d="M5.5 2A1.5 1.5 0 0 0 4 3.5 1.5 1.5 0 0 0 5 4.912109V11.09A1.499991 1.499991 0 0 0 4 12.5 1.499991 1.499991 0 0 0 5.5 14 1.499991 1.499991 0 0 0 7 12.5 1.499991 1.499991 0 0 0 6 11.08789V4.912A1.5 1.5 0 0 0 7 3.5 1.5 1.5 0 0 0 5.5 2M9 2L7 3.4 9 5V4H10C10.554 4 11 4.446 11 5V11.09A1.499991 1.499991 0 0 0 10 12.5 1.499991 1.499991 0 0 0 11.5 14 1.499991 1.499991 0 0 0 13 12.5 1.499991 1.499991 0 0 0 12 11.08789V5C12 3.892 11.11 3.055 10 3H9zM5.5 3A.5 .5 0 0 1 6 3.5 .5 .5 0 0 1 5.5 4 .5 .5 0 0 1 5 3.5 .5 .5 0 0 1 5.5 3M5.5 12A.499991 .499991 0 0 1 6 12.5 .499991 .499991 0 0 1 5.5 13 .499991 .499991 0 0 1 5 12.5 .499991 .499991 0 0 1 5.5 12M11.5 12A.499991 .499991 0 0 1 12 12.5 .499991 .499991 0 0 1 11.5 13 .499991 .499991 0 0 1 11 12.5 .499991 .499991 0 0 1 11.5 12"/>
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
  <g style="fill:#6c7a89" id="layer1-4" transform="matrix(1 0 0 1 -95.71429 8.57146)">
   <path id="path4144-8" d="m 428.21429,528.79074 a 1.500015,1.500015 0 0 0 -1.5,1.5 1.500015,1.500015 0 0 0 1,1.41211 l 0,9.08789 a 2,2 0 0 0 2,2 l 1,0 0,2 3,-2.5 -3,-2.5 0,2 -1,0 a 1,1 0 0 1 -1,-1 l 0,-9.08789 a 1.500015,1.500015 0 0 0 1,-1.41211 1.500015,1.500015 0 0 0 -1.5,-1.5 z m 0,1 a 0.5,0.5 0 0 1 0.5,0.5 0.5,0.5 0 0 1 -0.5,0.5 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 z"/>
   <path id="path4144-8-6" d="m 437.21429,544.79074 a 1.500015,1.500015 0 0 0 1.5,-1.5 1.500015,1.500015 0 0 0 -1,-1.41211 l 0,-9.08789 a 2,2 0 0 0 -2,-2 l -1,0 0,-2 -3,2.5 3,2.5 0,-2 1,0 a 1,1 0 0 1 1,1 l 0,9.08789 a 1.500015,1.500015 0 0 0 -1,1.41211 1.500015,1.500015 0 0 0 1.5,1.5 z m 0,-1 a 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 0.5,0.5 0 0 1 0.5,0.5 0.5,0.5 0 0 1 -0.5,0.5 z"/>
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
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
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
  <path fill="#fbfbfb" d="m397.57143 527.798a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1 1.41211v6.176a1.499991 1.499991 0 0 0 -1 1.41211 1.499991 1.499991 0 0 0 1.5 1.5 1.499991 1.499991 0 0 0 1.5 -1.5 1.499991 1.499991 0 0 0 -1 -1.41211v-6.176a1.5 1.5 0 0 0 1 -1.41211 1.5 1.5 0 0 0 -1.5 -1.5m3.5 0l-2 1.4 2 1.6v-1h1c.554 0 1 .446 1 1v6.088a1.499991 1.499991 0 0 0 -1 1.41211 1.499991 1.499991 0 0 0 1.5 1.5 1.499991 1.499991 0 0 0 1.5 -1.5 1.499991 1.499991 0 0 0 -1 -1.41211v-6.088c0-1.108-.893-1.945-2-2h-1zm-3.5 1a.5 .5 0 0 1 .5 .5 .5 .5 0 0 1 -.5 .5 .5 .5 0 0 1 -.5 -.5 .5 .5 0 0 1 .5 -.5m0 9a.499991 .499991 0 0 1 .5 .5 .499991 .499991 0 0 1 -.5 .5 .499991 .499991 0 0 1 -.5 -.5 .499991 .499991 0 0 1 .5 -.5m6 0a.499991 .499991 0 0 1 .5 .5 .499991 .499991 0 0 1 -.5 .5 .499991 .499991 0 0 1 -.5 -.5 .499991 .499991 0 0 1 .5 -.5"/>
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
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
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
 <path fill="#fbfbfb" d="m26 22a2 2 0 0 0 -2 2 2 2 0 0 0 1 1.728516v14.541A2 2 0 0 0 24 42a2 2 0 0 0 2 2 2 2 0 0 0 2 -2 2 2 0 0 0 -1 -1.728516V25.73A2 2 0 0 0 28 24 2 2 0 0 0 26 22m2 2l3 2.1V25h4c1.108 0 2 .892 2 2v13.27A2 2 0 0 0 36 42a2 2 0 0 0 2 2 2 2 0 0 0 2 -2 2 2 0 0 0 -1 -1.728516V26c0-1.662-1.338-2.967-3-3h-5v-1zm-2-1a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1m0 18a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1m12 0a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1 1 1 0 0 1 1 -1"/>
		</svg>
	{/if}
