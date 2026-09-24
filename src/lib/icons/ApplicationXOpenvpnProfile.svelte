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
			<path class="ColorScheme-Text" d="m8 2s-1.5 1.9936-6 2.4936c0 0 0 7 6 9.5064 6-2.5064 6-9.5064 6-9.5064-4.5-0.50002-6-2.4936-6-2.4936zm0 3.5c0.82842 0 1.5 0.67155 1.5 1.5 0 0.6213-0.3835 1.1473-0.92188 1.375l0.42188 2.125h-2l0.42188-2.125c-0.53837-0.2277-0.92187-0.75368-0.92187-1.375 0-0.82845 0.67158-1.5 1.5-1.5z" color="#232629" fill="#cf000f"/>
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
			<g transform="translate(-326 -534.36)">
  <g transform="matrix(1.3342 0 0 1.3359 326.34 -849.79)">
   <path class="ColorScheme-Text" d="m7.9906 1038.4s-1.499 1.9897-5.996 2.4888c0 0 0 6.9865 5.996 9.4881 5.996-2.5016 5.996-9.4881 5.996-9.4881-4.497-0.4991-5.996-2.4888-5.996-2.4888zm0 3.4933c0.82787 0 1.499 0.6702 1.499 1.4971 0 0.6201-0.38325 1.1451-0.92126 1.3723l0.4216 2.1209h-1.9987l0.4216-2.1209c-0.53802-0.2272-0.92126-0.7522-0.92126-1.3723 0-0.8269 0.67113-1.4971 1.499-1.4971z" color="#232629" fill="#cf000f"/>
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
  <linearGradient id="a" x2="0" y1="61" y2="3" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)" gradientUnits="userSpaceOnUse">
   <stop stop-color="#d91e18" offset="0"/>
   <stop stop-color="#cf000f" offset="1"/>
  </linearGradient>
  <linearGradient id="b" x2="0" y1="518.04" y2="524.8" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fcbcbe" offset="0"/>
   <stop stop-color="#fb7d80" offset="1"/>
  </linearGradient>
  <linearGradient id="c" x1="404.57" x2="411.57" y1="524.8" y2="531.8" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51" offset="0"/>
   <stop stop-color="#655c6f" stop-opacity="0" offset="1"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57,-515.8)">
  <path d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#a)"/>
  <g transform="scale(1,-1)">
   <rect x="389.57" y="-518.8" width="15" height="1" fill="#fff" fill-opacity=".412"/>
   <rect x="389.57" y="-545.8" width="22" height="1" fill="#2e3132" fill-opacity=".294"/>
  </g>
  <g fill-rule="evenodd">
   <path d="m411.57 524.8-7-7v7z" fill="url(#b)"/>
   <path d="m411.57 531.8-7-7h7z" fill="url(#c)" opacity=".2"/>
  </g>
  <path class="ColorScheme-Text" d="m400.64 526.65s-1.5 1.9936-6 2.4936c0 0 0 7 6 9.5064 6-2.5064 6-9.5064 6-9.5064-4.5-0.50003-6-2.4936-6-2.4936zm0 3.5c0.82843 0 1.5 0.67155 1.5 1.5 0 0.6213-0.3835 1.1473-0.92188 1.375l0.42188 2.125h-2l0.42188-2.125c-0.53838-0.2277-0.92188-0.75368-0.92188-1.375 0-0.82845 0.67157-1.5 1.5-1.5z" color="#232629" fill="#fcbcbe"/>
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
  <linearGradient id="a" x2="0" y1="3" y2="61" gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse">
   <stop stop-color="#cf000f" offset="0"/>
   <stop stop-color="#d91e18" offset="1"/>
  </linearGradient>
  <linearGradient id="b" x2="0" y1="61" y2="47" gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fb9fa2" offset="0"/>
   <stop stop-color="#fb7d80" offset="1"/>
  </linearGradient>
  <linearGradient id="c" x1="40" x2="54" y1="17" y2="31" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51" offset="0"/>
   <stop stop-color="#655c6f" stop-opacity="0" offset="1"/>
  </linearGradient>
 </defs>
 <path d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)"/>
 <g transform="scale(1,-1)">
  <rect x="10" y="-4" width="30" height="1" fill="#fff" fill-opacity=".412"/>
  <rect x="10" y="-61" width="44" height="1" fill="#2e3132" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path d="m54 17-14-14v14z" fill="url(#b)"/>
  <path d="m40 17 14 14v-14z" fill="url(#c)" opacity=".2"/>
 </g>
 <path class="ColorScheme-Text" d="m32 21.333s-3.25 4.3194-13 5.4028c0 0 0 15.167 13 20.597 13-5.4306 13-20.597 13-20.597-9.75-1.0834-13-5.4028-13-5.4028zm0 7.5834c1.7949 0 3.25 1.455 3.25 3.25 0 1.3462-0.83092 2.4858-1.9974 2.9791l0.91406 4.6041h-4.3333l0.91406-4.6041c-1.1665-0.49335-1.9974-1.633-1.9974-2.9791 0-1.795 1.4551-3.25 3.25-3.25z" color="#232629" fill="#fcbcbe"/>
		</svg>
	{/if}
