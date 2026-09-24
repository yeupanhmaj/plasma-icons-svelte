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
			<path fill="#22a7f0" d="m2 1038.36v1h12v-1zm4.268 2l.018.486 3.43 4.514-3.715 4.445v.555h8v-2.777h-.572c0 .555.15.9-.338 1.232-.534.365-1.238.434-1.857.434h-2.947l2.857-3.889-2.857-4.445h1.68c1.191 0 2.886-.107 3.357 1.285.081.238.085.688.105.938h.572v-2.777zm-4.268 1v1h4v-1zm0 2v1h5v-1zm0 3v1h5v-1zm0 2v1h4v-1z" transform="translate(0-1036.36)"/>
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
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4351" id="linearGradient4357" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4410">
   <stop style="stop-color:#383e51" id="stop4412"/>
   <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4410" id="linearGradient4427" y1="31" x1="54" y2="17" x2="40" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 -14 78)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4300-8" id="linearGradient4306" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4351">
   <stop style="stop-color:#f7ab89" id="stop4353"/>
   <stop offset="1" style="stop-color:#f9bda3" id="stop4355"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient3444" xlink:href="#linearGradient4410" y1="31" y2="17" x1="54" x2="40" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 503.93261 656.69754)"/>
  <linearGradient inkscape:collect="always" id="linearGradient3447" xlink:href="#linearGradient4351" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
  <linearGradient inkscape:collect="always" id="linearGradient3452" xlink:href="#linearGradient4300-8" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
 </defs>
 <metadata id="metadata3874"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path inkscape:label="Capa 1" inkscape:connector-curvature="0" style="fill:#22a7f0" id="rect4274" d="M 3,3 3,4 19,4 19,3 3,3 Z M 9,5.6660156 9,6.6914062 13.287109,12.333984 9,17.462891 9,19 l 10,0 0,-4 -0.564453,0 c 0,0.7404 0.0016,1.495983 -0.648438,1.939453 -0.71255,0.48653 -1.651312,0.578125 -2.476562,0.578125 l -3.929688,0 3.808594,-5.183594 -3.808594,-5.927734 2.238282,0 c 1.58788,0 3.848262,-0.1428494 4.476562,1.7128906 C 18.203113,8.4359406 18.273751,9.66706 18.300781,10 L 19,10 l 0,-4.3339844 -10,0 z M 3,7 3,8 8,8 8,7 3,7 Z m 0,3 0,1 7,0 0,-1 -7,0 z m 0,3 0,1 7,0 0,-1 -7,0 z m 0,3 0,1 5,0 0,-1 -5,0 z" transform="matrix(1 0 0 1 326 534.3622)"/>
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
   <stop stop-color="#22a7f0"/>
   <stop offset="1" stop-color="#19b5fe"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#c8e3fe"/>
   <stop offset="1" stop-color="#ffffff"/>
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
  <path fill="#ffffff" d="m394.57 527.8v1h12v-1zm4.268 2l.018.486 3.43 4.514-3.715 4.445v.555h8v-2.777h-.572c0 .555.15.9-.338 1.232-.534.365-1.238.434-1.857.434h-2.947l2.857-3.889-2.857-4.445h1.68c1.191 0 2.886-.107 3.357 1.285.081.238.085.688.105.938h.572v-2.777zm-4.268 1v1h4v-1zm0 2v1h5v-1zm0 3v1h5v-1zm0 2v1h4v-1z"/>
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
   <stop stop-color="#22a7f0"/>
   <stop offset="1" stop-color="#19b5fe"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#c8e3fe"/>
   <stop offset="1" stop-color="#ffffff"/>
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
 <path fill="#ffffff" d="m21 21v3h22v-3zm8.469 5l.031.875 6 8.125-6.5 8v1h14v-5h-1c0 1 .259 1.62-.594 2.219-.935.656-2.167.781-3.25.781h-5.156l5-7-5-8h2.938c2.084 0 5.05-.192 5.875 2.313.141.428.152 1.238.188 1.688h1v-5zm-8.469 1v1h7v-1zm0 3v1h9v-1zm0 3v1h11v-1zm0 3v1h11v-1zm0 3v1h9v-1zm0 3v1h6v-1z"/>
		</svg>
	{/if}
