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
			<path fill="#6c7a89" d="m8 2c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5m0 2a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 2.396484 -1.201172l-.799-.6a2 2 0 0 1 -1.597656 .800781 2 2 0 0 1 -2 -2 2 2 0 0 1 2 -2 2 2 0 0 1 1.599609 .800781l.797-.6a3 3 0 0 0 -2.396484 -1.201172"/>
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
  <path style="fill:#6c7a89;stroke-width:2" id="path4245" d="M 11 3 A 8 7.9999919 0 0 0 3 11 A 8 7.9999919 0 0 0 11 19 A 8 7.9999919 0 0 0 19 11 A 8 7.9999919 0 0 0 11 3 z M 11 4 A 7 7 0 0 1 18 11 A 7 7 0 0 1 11 18 A 7 7 0 0 1 4 11 A 7 7 0 0 1 11 4 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <path style="fill:#6c7a89;stroke-width:2" id="path4290" d="M 11 6 A 5 5 0 0 0 6 11 A 5 5 0 0 0 11 16 A 5 5 0 0 0 14.533203 14.533203 L 13.826172 13.826172 A 4 4 0 0 1 11 15 A 4 4 0 0 1 7 11 A 4 4 0 0 1 11 7 A 4 4 0 0 1 13.826172 8.1738281 L 14.533203 7.4667969 A 5 5 0 0 0 11 6 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <path fill="#fbfbfb" d="m400.57 527.8c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5m0 2a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 2.11914 -.88086l-.705-.705a2 2 0 0 1 -1.41406 .58594 2 2 0 0 1 -2 -2 2 2 0 0 1 2 -2 2 2 0 0 1 1.41406 .58594l.705-.705a3 3 0 0 0 -2.11914 -.88086"/>
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
 <path fill="#fbfbfb" d="m32 22c-6.075 0-11 4.925-11 11 0 6.075 4.925 11 11 11 6.075 0 11-4.925 11-11 0-6.075-4.925-11-11-11m0 1c5.523 0 10 4.477 10 10 0 5.523-4.477 10-10 10-5.523 0-10-4.477-10-10 0-5.523 4.477-10 10-10m0 3a7 7 0 0 0 -7 7 7 7 0 0 0 7 7 7 7 0 0 0 4.947266 -2.052734l-.707-.707a6 6 0 0 1 -4.240234 1.759766 6 6 0 0 1 -6 -6 6 6 0 0 1 6 -6 6 6 0 0 1 4.240234 1.759766l.707-.707a7 7 0 0 0 -4.947266 -2.052734"/>
		</svg>
	{/if}
