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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m2 2v12h12v-12zm1 2h10v9h-10zm4 1v4h2v-4zm0 5v2h2v-2z" />
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
			<path transform="matrix(1 0 0 1 -326 -534.3622)" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m 329,537.3622 0,16 16,0 0,-16 z m 1,3 14,0 0,12 -14,0 z m 6,2 0,6 2,0 0,-6 z m 0,6.9444 0,1.0556 2,0.0556 0,-1.0556 z" />
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
  <linearGradient id="a" y1="392.36" y2="365.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" y2="24" x1="47" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#555555" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".4" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".35" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".4" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <path fill="#343434" d="m395.57 528.8v11h12v-11zm1 2h10v8h-10zm4 1v4h2v-4zm0 5v1h2v-1z"/>
   <path fill="#e0e0e0" d="m10 12v11h12v-11zm1 2h10v8h-10zm4 1v4h2v-4zm0 5v1h2v-1z" transform="translate(384.57 515.8)"/>
  </g>
  <use fill="url(#a)" xlink:href="#c"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(616 532.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(568 200)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m626 593.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-616-532.36)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#555555" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".4" x="626" y="-536.36" width="30" fill="#ffffff" height="1"/>
    <rect opacity=".35" x="626" y="-593.36" width="44" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m670 549.36l-14-14v14z"/>
  </g>
  <path opacity=".4" fill="url(#a)" fill-rule="evenodd" d="m656 549.36l14 14v-14z"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <path fill="#343434" d="m636 556.36v22h26v-22zm18 1c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m3 0c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m3 0c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m-23 3h24v17h-24zm11 2v9h2v-9zm0 11v2h2v-2z"/>
   <path fill="#e0e0e0" d="m635 555.36v22h26v-22zm18 1c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m3 0c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m3 0c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m-23 3h24v17h-24zm11 2v9h2v-9zm0 11v2h2v-2z"/>
  </g>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
