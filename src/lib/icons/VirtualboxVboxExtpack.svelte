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
			<path fill="#7fcc74" stroke-width="2" d="m2 1038.36v12h12v-12zm1 1h10v1h-10zm6 2h3v1h-3zm-6 2h10v2h-10zm6 3h3v1h-3zm-6 2h10v1h-10z" transform="translate(0-1036.36)"/>
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
  <path style="fill:#7fcc74;stroke-linecap:square;stroke-width:2" id="rect4153" d="m 329,537.3622 0,16 16,0 0,-16 -16,0 z m 1,1 14,0 0,2 -14,0 0,-2 z m 0,3 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 2,0 0,1 -2,0 0,-1 z m -12,3 14,0 0,2 -14,0 0,-2 z m 0,3 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 2,0 0,1 -2,0 0,-1 z m -12,3 12,0 2,0 0,2 -14,0 0,-2 z"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0 .48276 384.57 516.35)">
   <stop stop-color="#7fcc74"/>
   <stop offset="1" stop-color="#87d37c"/>
  </linearGradient>
  <linearGradient id="b" y1="545.56" y2="538.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#ade2a1"/>
   <stop offset="1" stop-color="#cfeec9"/>
  </linearGradient>
  <linearGradient id="c" y1="538.8" x1="404.57" y2="545.8" x2="397.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m389.57 517.8v28h15l7-7v-21h-7z"/>
  <rect width="15" x="389.57" y="544.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  <rect width="22" x="389.57" y="517.8" fill="#ffffff" height="1" fill-opacity=".412"/>
  <g fill-rule="evenodd">
   <path fill="url(#b)" d="m411.57 538.8l-7 7v-7z"/>
   <path opacity=".2" fill="url(#c)" d="m397.57 545.8l7-7v7z"/>
  </g>
  <path fill="#e3f5df" stroke-width="2" d="m394.57 524.8v12h12v-12zm1 1h10v1h-10zm6 2h3v1h-3zm-6 2h10v2h-10zm6 3h3v1h-3zm-6 2h10v1h-10z"/>
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
   <stop stop-color="#7fcc74"/>
   <stop offset="1" stop-color="#87d37c"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#ade2a1"/>
   <stop offset="1" stop-color="#cfeec9"/>
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
 <path fill="#e3f5df" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" d="m21 22v22h22v-22zm1 1h20v2h-20zm0 3h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 1h4v1h-4zm-16 4h20v4h-20zm0 5h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 1h4v1h-4zm-16 4h20v2h-20z"/>
		</svg>
	{/if}
