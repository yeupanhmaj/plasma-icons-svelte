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
			<path fill="#6c7a89" d="m3 2v3h-2v7.5c0 .831.669 1.5 1.5 1.5h12.5v-12h-11zm1 1h10v10h-10v-8zm1 1v1h8v-1zm-3 2h1v7h-.5c-.277 0-.5-.223-.5-.5v-.6zm3 0v4h4v-4zm5 0v1h3v-1zm0 3v1h3v-1zm-5 2v1h8v-1z"/>
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
			<defs id="defs3871">
  <linearGradient inkscape:collect="always" id="linearGradient4300-8">
   <stop style="stop-color:#f27935" id="stop4302-5"/>
   <stop offset="1" style="stop-color:#f2784b" id="stop4304-7"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4357" xlink:href="#linearGradient4351" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0"/>
  <linearGradient inkscape:collect="always" id="linearGradient4410">
   <stop style="stop-color:#383e51" id="stop4412"/>
   <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4427" xlink:href="#linearGradient4410" y1="31" y2="17" x1="54" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 -14 78)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4306" xlink:href="#linearGradient4300-8" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0"/>
  <linearGradient inkscape:collect="always" id="linearGradient4351">
   <stop style="stop-color:#f7ab89" id="stop4353"/>
   <stop offset="1" style="stop-color:#f9bda3" id="stop4355"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4410" id="linearGradient3444" y1="31" x1="54" y2="17" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 503.93261 656.69754)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4351" id="linearGradient3447" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4300-8" id="linearGradient3452" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
 </defs>
 <metadata id="metadata3874"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path style="fill:#6c7a89;stroke-width:2" id="rect5977" d="M 5 3 L 5 19 L 20 19 L 20 3 L 5 3 z M 6 4 L 19 4 L 19 18 L 6 18 L 6 4 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <rect width="5" x="333" y="543.36218" rx="0.000017" height="5" style="fill:#6c7a89;stroke-width:2" id="rect5982"/>
  <rect width="11" x="333" y="550.36218" rx="0.000017" height="1" style="fill:#6c7a89;stroke-width:2" id="rect5984"/>
  <rect width="5" x="339" y="547.36218" rx="0.000017" height="1" style="fill:#6c7a89;stroke-width:2" id="rect5986"/>
  <rect width="5" x="339" y="543.36218" rx="0.000017" height="1" style="fill:#6c7a89;stroke-width:2" id="rect5988"/>
  <rect width="11" x="333" y="540.36218" rx="0.000017" height="1" style="fill:#6c7a89;stroke-width:2" id="rect5990"/>
  <rect width="1" x="328" y="541.36218" rx="0.000016" height="9.00002" style="fill:#6c7a89;stroke-width:2" id="rect5992"/>
  <rect width="2" x="329" y="541.36218" rx="0.000017" height="1" style="fill:#6c7a89;stroke-width:2" id="rect5994"/>
  <path style="fill:#6c7a89;stroke-width:2" id="path5998" d="M 2 16 A 2.9999914 2.9999914 0 0 0 5 19 L 5 18 A 2 2 0 0 1 3 16 L 2 16 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
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
  <path fill="#fbfbfb" d="m395.57 527.8v3h-2v7.5c0 .831.669 1.5 1.5 1.5h12.5v-12h-11zm1 1h10v10h-10v-8zm1 1v1h8v-1zm-3 2h1v7h-.5c-.277 0-.5-.223-.5-.5v-.6zm3 0v4h4v-4zm5 0v1h3v-1zm0 3v1h3v-1zm-5 2v1h8v-1z"/>
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
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
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
 <path fill="#fbfbfb" d="m23 22v6h-4v13.5c0 1.385 1.115 2.5 2.5 2.5h21c1.385 0 2.5-1.115 2.5-2.5v-19.5zm1 1h20v18.5c0 .831-.669 1.5-1.5 1.5h-18.5v-15zm1 1v4h18v-4zm1 1h16v2h-16zm-6 4h3v14h-1.5c-.831 0-1.5-.669-1.5-1.5v-10.5zm5 1v9h10v-9zm11 0v1h7v-1zm-10 1h8v7h-8zm10 3v1h7v-1zm0 4v1h7v-1zm-11 3v1h18v-1z"/>
		</svg>
	{/if}
