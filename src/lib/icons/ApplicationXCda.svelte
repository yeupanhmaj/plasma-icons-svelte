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
			<path fill="#51db51" color="#000000" stroke-width=".1" d="m8 2c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5m0 1c-2.209 0-4 1.791-4 4h2c0-1.105.895-2 2-2zm0 3a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1 -1 1 1 0 0 0 -1 -1m2 1c0 1.105-.895 2-2 2v2c2.209 0 4-1.791 4-4z"/>
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
       id="path4150"
       class="ColorScheme-Text"
       d="m 337,537.3622 c -4.432,0 -8,3.568 -8,8 0,4.432 3.568,8 8,8 4.432,0 8,-3.568 8,-8 0,-4.432 -3.568,-8 -8,-8 z m 0,1 c 3.878,0 7,3.122 7,7 0,3.878 -3.122,7 -7,7 -3.878,0 -7,-3.122 -7,-7 0,-3.878 3.122,-7 7,-7 z m 0,1 c -3.324,0 -6,2.676 -6,6 l 3,0 c 0,-1.662 1.338,-3 3,-3 l 0,-3 z m 0,4 c -1.108,0 -2,0.892 -2,2 0,1.108 0.892,2 2,2 1.108,0 2,-0.892 2,-2 0,-1.108 -0.892,-2 -2,-2 z m 0,1 c 0.554,0 1,0.446 1,1 0,0.554 -0.446,1 -1,1 -0.554,0 -1,-0.446 -1,-1 0,-0.554 0.446,-1 1,-1 z m 3,1 c 0,1.662 -1.338,3 -3,3 l 0,3 c 3.324,0 6,-2.676 6,-6 l -3,0 z"
       style="color:#4d4d4d;fill:#51db51;fill-opacity:1;stroke:none" />
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
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#51db51" isolation="auto" solid-opacity="1" mix-blend-mode="normal" xlink:href="#c" solid-color="#000000"/>
   <g transform="scale(1-1)">
    <rect mix-blend-mode="normal" solid-color="#000000" opacity=".4" x="389.57" y="-518.8" width="15" isolation="auto" solid-opacity="1" fill="#ffffff" height="1"/>
    <rect width="22" x="389.57" opacity=".35" y="-545.8" isolation="auto" solid-opacity="1" height="1" mix-blend-mode="normal" solid-color="#000000"/>
   </g>
   <path opacity=".5" fill="#ffffff" isolation="auto" solid-opacity="1" mix-blend-mode="normal" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z" solid-color="#000000"/>
  </g>
  <path opacity=".4" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".75" fill="#ffffff" color="#000000" stroke-width=".1" d="m400.57 527.8c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5m0 1c-2.209 0-4 1.791-4 4h2c0-1.105.895-2 2-2zm0 3a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1 -1 1 1 0 0 0 -1 -1m2 1c0 1.105-.895 2-2 2v2c2.209 0 4-1.791 4-4z"/>
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
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#51db51" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <g transform="scale(1-1)">
   <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
  </g>
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <path opacity=".75" fill="#ffffff" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" d="m32 22.99998a11 11 0 0 0 -11 11 11 11 0 0 0 11 11 11 11 0 0 0 11 -11 11 11 0 0 0 -11 -11m0 1a10 10 0 0 1 10 10 10 10 0 0 1 -10 10 10 10 0 0 1 -10 -10 10 10 0 0 1 10 -10m0 2a8 8 0 0 0 -8 8h4a4 4 0 0 1 4 -4zm0 5a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 -3 3 3 0 0 0 -3 -3m0 1a2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2 2 2 0 0 1 2 -2m4 2a4 4 0 0 1 -4 4v4a8 8 0 0 0 8 -8z"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
