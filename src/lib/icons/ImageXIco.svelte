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
			<path fill="#22a7f0" d="m2 2v12h12v-12zm1 1h10v8h-10zm2 1v2h2v-2zm4 0v2h2v-2zm-4 4v2h2v-2zm4 0v2h2v-2zm-6 4h10v1h-10z"/>
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
  <path style="fill:#22a7f0" id="rect4112" d="M 3 3 L 3 17 L 3 18 L 3 19 L 19 19 L 19 18 L 19 17 L 19 3 L 3 3 z M 4 4 L 17 4 L 18 4 L 18 16 L 17 16 L 4 16 L 4 4 z M 4 17 L 18 17 L 18 18 L 4 18 L 4 17 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <path style="fill:#22a7f0;stroke-width:2" id="rect5258-8" d="M 6 5 L 6 9 L 10 9 L 10 5 L 6 5 z M 12 5 L 12 9 L 16 9 L 16 5 L 12 5 z M 6 11 L 6 15 L 10 15 L 10 11 L 6 11 z M 12 11 L 12 15 L 16 15 L 16 11 L 12 11 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.63636 0 0 .48276 380.21 516.35)">
   <stop stop-color="#22a7f0"/>
   <stop offset="1" stop-color="#19b5fe"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m386.57 517.8v28h28v-28h-8.909z"/>
  <rect width="28" x="386.57" y="544.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  <g fill="#ffffff">
   <rect width="28" x="386.57" y="517.8" height="1" fill-opacity=".412"/>
   <path d="m394.57 524.8v12h12v-12zm1 1h10v8h-10zm2 1v2h2v-2zm4 0v2h2v-2zm-4 4v2h2v-2zm4 0v2h2v-2zm-6 4h10v1h-10z"/>
  </g>
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
  <linearGradient id="a" y1="57" y2="7" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#22a7f0"/>
   <stop offset="1" stop-color="#19b5fe"/>
  </linearGradient>
 </defs>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <path fill="url(#a)" d="m4 57v-50h56v50z"/>
  <rect opacity=".25" x="4" y="56" width="56" height="1"/>
  <g fill="#ffffff">
   <rect opacity=".5" x="4" y="7" width="56" height="1"/>
   <path stroke-width="2" d="m8 11v42h48v-42h-1zm1 1h46v38h-46zm0 39h1v1h-1zm43 0h1v1h-1zm2 0h1v1h-1z"/>
  </g>
 </g>
 <path fill="#ffffff" d="m25 26v6h6v-6zm7 0v6h6v-6zm-7 7v6h6v-6zm7 0v6h6v-6z"/>
		</svg>
	{/if}
