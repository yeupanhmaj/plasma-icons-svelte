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
			<path fill="#6c7a89" d="m2 2v12h12v-12zm1 1h10v8h-10zm1 1v3h3v-2h-1l-.9-1zm-1 8h1v1h-1zm2 0h4v1h-4zm5 0h1v1h-1zm2 0h1v1h-1z"/>
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
  <path style="fill:#6c7a89" id="rect4112" d="m 329,537.3622 0,14 16,0 0,-14 -16,0 z m 1,1 14,0 0,12 -14,0 0,-12 z m 1,1 0,4 2,0 2,-2 0,-2 -4,0 z m 8.5,1 c -1.93899,0 -3.5,1.561 -3.5,3.5 0,1.939 1.56101,3.5 3.5,3.5 1.93899,0 3.5,-1.561 3.5,-3.5 0,-1.939 -1.56101,-3.5 -3.5,-3.5 z m 0,1 c 1.385,0 2.5,1.115 2.5,2.5 0,1.385 -1.115,2.5 -2.5,2.5 -1.385,0 -2.5,-1.115 -2.5,-2.5 0,-1.385 1.115,-2.5 2.5,-2.5 z m -4.5,1 -1,1 1,0 0,-1 z m 4,0 0,2 1,0 1,0 0,-1 -1,0 0,-1 -1,0 z m -8,4 0,2 2,0 1,1 0,-1 0.23633,0 0,-2 -3.23633,0 z m -2,6 0,1 16,0 0,-1 -16,0 z"/>
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
  <linearGradient id="a" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="545.9" x1="397.98" y2="517.97" x2="397.74" gradientUnits="userSpaceOnUse">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <use fill="#555555" xlink:href="#c"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" opacity=".5" y="-518.8" fill="#ffffff" height="1"/>
   <rect width="22" x="389.57" opacity=".25" y="-545.8" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#a)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path fill="#343434" d="m395.57 528.8v12h12v-12zm1 1h10v8h-10zm1 1v3h3v-2h-1l-.9-1zm-1 8h1v1h-1zm2 0h4v1h-4zm5 0h1v1h-1zm2 0h1v1h-1z"/>
  <path fill="#e0e0e0" d="m394.57 527.8v12h12v-12zm1 1h10v8h-10zm1 1v3h3v-2h-1l-.9-1zm-1 8h1v1h-1zm2 0h4v1h-4zm5 0h1v1h-1zm2 0h1v1h-1z"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#555555" xlink:href="#c"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" y="-4" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="44" x="10" y="-61" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#a)" d="m40 17l14 14v-14z"/>
 </g>
 <path fill="#343434" d="m22 23v22h22v-22zm1 1h20v16h-20zm2 2v6h6v-5h-3l-1-1zm1 2h4v3h-4zm-3 13h20v3h-20z"/>
 <path fill="#e0e0e0" d="m21 22v22h22v-22zm1 1h20v16h-20zm2 2v6h6v-5h-3l-1-1zm1 2h4v3h-4zm-3 13h20v3h-20zm1 1v1h1v-1zm13 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1z"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
