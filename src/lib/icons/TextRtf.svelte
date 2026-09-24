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
			<path fill="#0c2d63" color="#000000" stroke-width="1.4" d="m2 2v1h6v-1zm0 3v1h12v-1zm0 3v1h6v-1zm0 2v1h12v-1zm0 3v1h9v-1z"/>
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
    <rect
       width="8"
       x="329"
       y="537.36218"
       height="1.00002"
       style="fill:#0c2d63;fill-opacity:1"
       id="rect4279" />
    <rect
       width="16"
       x="329"
       y="541.36218"
       height="1"
       style="fill:#0c2d63;fill-opacity:1"
       id="rect4281" />
    <rect
       width="16"
       x="329"
       y="548.36218"
       height="1"
       style="fill:#0c2d63;fill-opacity:1"
       id="rect4283" />
    <rect
       width="8"
       x="329"
       y="545.36218"
       height="1"
       style="fill:#0c2d63;fill-opacity:1"
       id="rect4285" />
    <rect
       width="12"
       x="329"
       y="552.36218"
       height="0.999983"
       style="fill:#0c2d63;fill-opacity:1"
       id="rect4287" />
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
   <stop offset="1" stop-color="#ffffff" stop-opacity=".1"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#0c2d63" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path fill="#1d70f7" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path fill="#1d70f7" color="#000000" stroke-width="1.4" d="m394.57 526.8v1h6v-1zm0 3v1h12v-1zm0 3v1h6v-1zm0 2v1h12v-1zm0 3v1h9v-1z"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".1"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <use fill="#0c2d63" xlink:href="#c"/>
  <g transform="scale(1-1)">
   <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
  </g>
  <path fill="#1d70f7" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <path fill="#1d70f7" d="m21 22v1h22v-1zm0 3v1h22v-1zm0 3v1h11v-1zm0 4v1h22v-1zm0 3v1h19v-1zm0 2v1h11v-1zm0 3v1h22v-1zm0 3v1h16v-1z"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
