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
			<path fill="#ec2411" d="m7.963672 2a6 2 0 0 0 -6 2v8a6 2 0 0 0 6 2 6 2 0 0 0 6 -2v-8A6 2 0 0 0 7.963672 2m0 1a5 1 0 0 1 5 1 5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1 5 1 0 0 1 5 -1m-5 2.10156a6 2 0 0 0 5 .89844 6 2 0 0 0 5 -.89648v2.896a5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1zm0 4a6 2 0 0 0 5 .89844 6 2 0 0 0 5 -.89648v2.896a5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1z"/>
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
			<defs
     id="defs3871" />
  
  <g
     id="layer1"
     transform="matrix(1 0 0 1 -326 -534.3622)">
    <path
       style="fill:#ec2411"
       d="m 337,537.3622 c -4.41828,0 -8.00001,1.19391 -8,2.66667 l 0,10.66666 c -10e-6,1.47276 3.58172,2.66667 8,2.66667 4.41828,0 8.00001,-1.19391 8,-2.66667 l 0,-10.66666 c 10e-6,-1.47276 -3.58172,-2.66667 -8,-2.66667 m -0.0233,0.98384 c 3.68191,0 6.68999,0.94645 6.68997,1.68283 -1e-5,0.73638 -2.98478,1.33333 -6.66667,1.33333 -3.68189,0 -6.66666,-0.59695 -6.66667,-1.33333 -2e-5,-0.73638 2.96146,-1.65953 6.64337,-1.65953 m -6.92296,2.98848 c 1.47853,0.74685 4.23853,1.24333 6.92296,1.24451 2.68293,-5.9e-4 5.55912,-0.37954 7.03946,-1.1254 l 0,3.86133 c -1e-5,0.73638 -3.35757,1.56632 -7.03946,1.56632 -3.68189,0 -6.92295,-0.94644 -6.92296,-1.68281 z m 0,5.37993 c 1.47853,0.74686 4.26183,1.28994 6.94626,1.29112 2.68294,-6e-4 5.55912,-0.44945 7.03946,-1.19531 l 0,3.86133 c 2e-5,0.73638 -3.40415,1.63623 -7.08606,1.63623 -3.68191,0 -6.89968,-0.99304 -6.89966,-1.72943 z"
       id="path4" />
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
   <stop stop-color="#e3200d"/>
   <stop offset="1" stop-color="#f22613"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#f87e72"/>
   <stop offset="1" stop-color="#fbaea7"/>
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
  <path opacity=".75" fill="#ffffff" d="m400.57143 526.798a6 2 0 0 0 -6 2v8a6 2 0 0 0 6 2 6 2 0 0 0 6 -2v-8a6 2 0 0 0 -6 -2m0 1a5 1 0 0 1 5 1 5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1 5 1 0 0 1 5 -1m-5 2.10156a6 2 0 0 0 5 .89844 6 2 0 0 0 5 -.89648v2.896a5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1zm0 4a6 2 0 0 0 5 .89844 6 2 0 0 0 5 -.89648v2.896a5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1z"/>
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
   <stop stop-color="#e3200d"/>
   <stop offset="1" stop-color="#f22613"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#f87e72"/>
   <stop offset="1" stop-color="#fbaea7"/>
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
 <path opacity=".75" fill="#ffffff" d="m32 22a11 3 0 0 0 -11 3v16a11 3 0 0 0 11 3 11 3 0 0 0 11 -3v-16A11 3 0 0 0 32 22m0 1A10 2 0 0 1 42 25 10 2 0 0 1 32 27 10 2 0 0 1 22 25 10 2 0 0 1 32 23M22 26.24219A11 3 0 0 0 32 28 11 3 0 0 0 42 26.24219V30A10 2 0 0 1 32 32 10 2 0 0 1 22 30zm0 5A11 3 0 0 0 32 33 11 3 0 0 0 42 31.24219V36A10 2 0 0 1 32 38 10 2 0 0 1 22 36zm0 6A11 3 0 0 0 32 39 11 3 0 0 0 42 37.24219V41A10 2 0 0 1 32 43 10 2 0 0 1 22 41v-1z"/>
		</svg>
	{/if}
