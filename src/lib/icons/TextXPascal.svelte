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
			<path fill="#e00a5e" d="m7 2v12h1v-6.05c.635.648 1.517 1.053 2.5 1.053 1.939 0 3.5-1.561 3.5-3.5 0-1.939-1.561-3.5-3.5-3.5-.983 0-1.865.404-2.5 1.053v-1.053zm3.5 1c1.385 0 2.5 1.115 2.5 2.5 0 1.385-1.115 2.5-2.5 2.5-1.385 0-2.5-1.115-2.5-2.5 0-1.385 1.115-2.5 2.5-2.5m-7.5 4a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1 -1 1 1 0 0 0 -1 -1"/>
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
  <path style="fill:#e00a5e" id="path4139" d="M 9 3.9472656 L 9 7.4472656 L 9 8 L 9 18 L 10 18 L 10 15 L 10 10.638672 C 10.75804 11.502302 11.85088 11.99821 13 12 C 15.20914 12 17 10.20914 17 8 C 17 5.79086 15.20914 4 13 4 C 11.85088 4.002 10.75804 4.4976981 10 5.3613281 L 10 5 L 10 3.9472656 L 9 3.9472656 z M 13 5 C 14.65685 5 16 6.34315 16 8 C 16 9.65685 14.65685 11 13 11 C 11.34315 11 10 9.65685 10 8 C 10 6.34315 11.34315 5 13 5 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <circle cx="331" cy="544.36218" style="fill:#e00a5e;stroke-width:2" id="path4671" r="1"/>
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
  <path fill="#fffcf9" d="m399.57 528.8v12h1v-6.05c.635.648 1.517 1.053 2.5 1.053 1.939 0 3.5-1.561 3.5-3.5 0-1.939-1.561-3.5-3.5-3.5-.983 0-1.865.404-2.5 1.053v-1.053zm3.5 1c1.385 0 2.5 1.115 2.5 2.5 0 1.385-1.115 2.5-2.5 2.5-1.385 0-2.5-1.115-2.5-2.5 0-1.385 1.115-2.5 2.5-2.5m-7.5 4a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1 -1 1 1 0 0 0 -1 -1"/>
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
  <linearGradient id="a" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#f6265b" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <g transform="scale(1-1)">
   <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
  </g>
  <path opacity=".75" fill="#fffcf9" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <path fill="#fffcf9" d="m30 29v14h1v-6.695c.823 1.027 2.075 1.695 3.5 1.695 2.493 0 4.5-2.01 4.5-4.5 0-2.493-2.01-4.5-4.5-4.5-1.425 0-2.677.668-3.5 1.695v-1.695zm4.5 1c1.939 0 3.5 1.561 3.5 3.5 0 1.939-1.561 3.5-3.5 3.5-1.939 0-3.5-1.561-3.5-3.5 0-1.939 1.561-3.5 3.5-3.5m-8.5 5c-.554 0-1 .446-1 1 0 .554.446 1 1 1 .554 0 1-.446 1-1 0-.554-.446-1-1-1"/>
 <use fill="url(#a)" xlink:href="#c"/>
		</svg>
	{/if}
