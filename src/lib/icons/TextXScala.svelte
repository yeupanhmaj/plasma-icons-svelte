<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 16
	);
</script>

	{#if numericSize <= 24}
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
			<g fill="#96281b" color-rendering="auto" shape-rendering="auto" color-interpolation-filters="linearRGB" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d">
  <path id="a" d="m2 10c4 .064 8-.287 12-2v4c-4.761 1.786-8.275 1.737-12 2z"/>
  <use y="-6" xlink:href="#a"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 0 31.448)">
   <stop stop-color="#96281b"/>
   <stop offset="1" stop-color="#a5281b"/>
  </linearGradient>
  <linearGradient id="b" y1="2.241" y2="9" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#e87c73"/>
   <stop offset="1" stop-color="#f0aba4"/>
  </linearGradient>
  <linearGradient id="c" y1="9" x1="20" y2="16" x2="27" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m5 30v-28h15l7 7v21h-7z"/>
 <g transform="scale(1-1)">
  <rect width="15" x="5" y="-3" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="22" x="5" y="-30" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path fill="url(#b)" d="m27 9l-7-7v7z"/>
  <path opacity=".2" fill="url(#c)" d="m27 16l-7-7h7z"/>
 </g>
 <g fill="#f0aba4" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" transform="translate(-384.57-512.8)">
  <path id="d" d="m394.57 532.8c4 .064 8-.287 12-2v4c-4.761 1.786-8.275 1.737-12 2z"/>
  <use y="-6" xlink:href="#d"/>
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
   <stop stop-color="#96281b"/>
   <stop offset="1" stop-color="#a5281b"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#e87c73"/>
   <stop offset="1" stop-color="#f0aba4"/>
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
 <g fill="#f0aba4" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" transform="translate(0 1)">
  <path id="d" d="m43 32c-11.921 4.372-16.851 4.113-22 4v7c7.357-.629 14.73-.779 22-4v-6zm-1 1.369v4.924c-6.515 2.732-13.189 3.061-20 3.609v-4.895c4.615.097 9.78-.051 20-3.639"/>
  <use y="-11" xlink:href="#d"/>
 </g>
		</svg>
	{/if}
