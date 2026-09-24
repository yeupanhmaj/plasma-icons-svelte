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
			<path fill="#f62459" d="m3 1038.36v4h-1v6h3v2h6v-2h3v-6h-1v-4zm1 1h8v3h-1v-1h-6v1h-1zm1 0v1h6v-1zm-2 4h10v4h-1v-1h-8v1h-1zm7 1v1h2v-1zm-4 4h4v1h-4z" transform="translate(0-1036.36)"/>
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
  <path style="fill:#f62459" id="rect4145" d="m 5,3 0,1 0,4 -2,0 0,1 0,7 1,0 3,0 0,2 0,1 8,0 0,-1 0,-2 4,0 0,-1 L 19,9 19,8 17,8 17,4 17,3 5,3 Z M 6,4 16,4 16,8 15,8 15,7 7,7 7,8 6,8 6,4 Z m 1,1 0,1 8,0 0,-1 -8,0 z m -3,4 14,0 0,6 -2,0 0,-2 -10,0 0,2 -2,0 0,-6 z m 10,1 0,1 3,0 0,-1 -3,0 z m -6,6 6,0 0,2 -6,0 0,-2 z" transform="matrix(1 0 0 1 326 534.3622)"/>
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
   <stop stop-color="#f62459"/>
   <stop offset="1" stop-color="#f73768"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#ffd6af"/>
   <stop offset="1" stop-color="#fffcf9"/>
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
  <path fill="#fffcf9" d="m3 1038.36v4h-1v6h3v2h6v-2h3v-6h-1v-4zm1 1h8v3h-1v-1h-6v1h-1zm1 0v1h6v-1zm-2 4h10v4h-1v-1h-8v1h-1zm7 1v1h2v-1zm-4 4h4v1h-4z" transform="translate(392.57-510.56)"/>
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
   <stop stop-color="#f62459"/>
   <stop offset="1" stop-color="#f73768"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#ffd6af"/>
   <stop offset="1" stop-color="#fffcf9"/>
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
  <path fill="#fffcf9" d="m24 22v7h-3v11h6v4h10v-4h6v-11h-3v-7zm1 1h14v6h-2v-1h-10v1h-2zm2 2v1h10v-1zm-5 5h20v9h-3v-3h-14v3h-3zm14 2v1h4v-1zm-8 8h8v3h-8z"/>
 </g>
		</svg>
	{/if}
