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
			<path fill="#f27935" stroke-width="2" d="m2 1038.36v12h12v-12zm1 1h10v1h-10zm6 2h3v1h-3zm-6 2h10v2h-10zm6 3h3v1h-3zm-6 2h10v1h-10z" transform="translate(0-1036.36)"/>
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
  <path inkscape:connector-curvature="0" style="fill:#f27935;stroke-linecap:square;stroke-width:2" id="rect4153" d="m 329,537.3622 0,16 16,0 0,-16 -16,0 z m 1,1 14,0 0,2 -14,0 0,-2 z m 0,3 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 2,0 0,1 -2,0 0,-1 z m -12,3 14,0 0,2 -14,0 0,-2 z m 0,3 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 1,0 0,2 -1,0 0,-2 z m 2,0 2,0 0,1 -2,0 0,-1 z m -12,3 12,0 2,0 0,2 -14,0 0,-2 z"/>
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
   <stop stop-color="#f27935"/>
   <stop offset="1" stop-color="#f2784b"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#f7ab89"/>
   <stop offset="1" stop-color="#fbd2bf"/>
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
  <path fill="#fbd2bf" stroke-width="2" d="m394.57 527.8v12h12v-12zm1 1h10v1h-10zm6 2h3v1h-3zm-6 2h10v2h-10zm6 3h3v1h-3zm-6 2h10v1h-10z"/>
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
  <linearGradient id="a" y1="543.8" y2="512.8" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.35 0 0 1.3-519.57-646.94)">
   <stop stop-color="#f27935"/>
   <stop offset="1" stop-color="#f2784b"/>
  </linearGradient>
  <linearGradient xlink:href="#a" id="b" y1="512.8" y2="503.8" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.35 0 0 1.3-519.57-646.94)"/>
  <linearGradient id="c" y1="8" y2="25.527" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#f7ab89"/>
   <stop offset="1" stop-color="#fbd2bf"/>
  </linearGradient>
 </defs>
 <rect width="54" x="5" y="19" stroke-opacity=".55" fill="url(#a)" height="41" stroke-width="2.8"/>
 <path fill="url(#b)" fill-rule="evenodd" d="m5 19l8.1-11h39.15l6.75 11z"/>
 <path stroke-opacity=".55" fill="url(#c)" stroke-width="2.8" d="m28.1 8v17.495l1.3-.437 1.3.437 1.3-.437 1.3.437 1.3-.437 1.3.437v-17.495z"/>
 <path fill="#f7ab89" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" d="m9 32v22h22v-22zm1 1h20v2h-20zm0 3h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 1h4v1h-4zm-16 4h20v4h-20zm0 5h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 1h4v1h-4zm-16 4h20v2h-20z"/>
 <g transform="scale(1-1)">
  <rect width="54" x="5" y="-60" fill="#2e3132" height="1" fill-opacity=".294"/>
  <rect width="54" x="5" y="-20" fill="#ffffff" height="1" fill-opacity=".412"/>
 </g>
		</svg>
	{/if}
