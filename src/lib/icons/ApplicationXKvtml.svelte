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
			<path fill="#6c7a89" d="m2 2v12h12v-12zm1 1h10v10h-10zm1 1v2h8v-2zm0 3v1h3v-1zm5 0v1h3v-1zm-5 2v1h3v-1zm5 0v1h3v-1zm-5 2v1h3v-1zm5 0v1h3v-1z"/>
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
  <path style="fill:#6c7a89;stroke-width:2" id="rect5669" d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 10 4 L 11 4 L 12 4 L 18 4 L 18 18 L 4 18 L 4 4 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <rect width="10" x="332" y="540.36218" height="2" style="fill:#6c7a89" id="rect4151"/>
  <rect width="4" x="332" y="544.36218" height="1" style="fill:#6c7a89" id="rect4153"/>
  <rect width="4" x="338" y="544.36218" height="1" style="fill:#6c7a89" id="rect4153-4"/>
  <rect width="4" x="332" y="547.36218" height="1" style="fill:#6c7a89" id="rect4153-2"/>
  <rect width="4" x="338" y="547.36218" height="1" style="fill:#6c7a89" id="rect4153-4-4"/>
  <rect width="4" x="332" y="550.36218" height="1" style="fill:#6c7a89" id="rect4153-1"/>
  <rect width="4" x="338" y="550.36218" height="1" style="fill:#6c7a89" id="rect4153-4-9"/>
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
  <path fill="#fbfbfb" d="m394.57 527.8v12h12v-12zm1 1h10v10h-10zm1 1v2h8v-2zm0 3v1h3v-1zm5 0v1h3v-1zm-5 2v1h3v-1zm5 0v1h3v-1zm-5 2v1h3v-1zm5 0v1h3v-1z"/>
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
 <path fill="#fbfbfb" d="m21 22v22h22v-22zm1 1h20v20h-20zm2 3v2h16v-2zm0 4v1h7v-1zm9 0v1h7v-1zm-9 3v1h7v-1zm9 0v1h7v-1zm-9 3v1h7v-1zm9 0v1h7v-1zm-9 3v1h7v-1zm9 0v1h7v-1z"/>
		</svg>
	{/if}
