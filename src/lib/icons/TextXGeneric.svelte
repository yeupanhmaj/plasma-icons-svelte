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
			<path fill="#6c7a89" color="#000000" stroke-width="1.4" d="m2 2v1h6v-1zm0 3v1h12v-1zm0 3v1h6v-1zm0 2v1h12v-1zm0 3v1h9v-1z"/>
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
  <rect width="8" x="329" y="537.36218" height="1.00002" style="fill:#6c7a89" id="rect4279"/>
  <rect width="16" x="329" y="541.36218" height="1" style="fill:#6c7a89" id="rect4281"/>
  <rect width="16" x="329" y="548.36218" height="1" style="fill:#6c7a89" id="rect4283"/>
  <rect width="8" x="329" y="545.36218" height="1" style="fill:#6c7a89" id="rect4285"/>
  <rect width="12" x="329" y="552.36218" height="0.999983" style="fill:#6c7a89" id="rect4287"/>
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
   <use fill="#eeeeee" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".6" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".15" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".6" d="m394.57 537.8v-1h6v1zm0-2v-1h12v1zm0-3v-1h8v1zm0-2v-1h12v1zm0-2v-1h12v1z"/>
  </g>
  <use fill="url(#a)" xlink:href="#c"/>
  <path opacity=".1" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
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
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#eeeeee" xlink:href="#c"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" opacity=".6" y="-4" fill="#ffffff" height="1"/>
  <rect width="44" x="10" opacity=".15" y="-61" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" d="m54 17l-14-14v14z"/>
  <path opacity=".1" fill="url(#a)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".6" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m21 22v1h22v-1zm0 3v1h22v-1zm0 3v1h11v-1zm0 4v1h22v-1zm0 3v1h19v-1zm0 2v1h11v-1zm0 3v1h22v-1zm0 3v1h16v-1z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
