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
			<path fill="#3a539b" color-rendering="auto" shape-rendering="auto" color-interpolation-filters="linearRGB" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" d="m12.5 2a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5 -1.5 1.5 1.5 0 0 0 -1.5 -1.5m-5 1A5.5 5.5 0 0 0 2 8.5 5.5 5.5 0 0 0 7.5 14 5.5 5.5 0 0 0 13 8.5 5.5 5.5 0 0 0 11.716797 4.976562 2 2 0 0 1 12 6 2 2 0 0 1 10 8 2 2 0 0 1 8 6a2 2 0 0 1 2 -2 2 2 0 0 1 1.052734 .302734A5.5 5.5 0 0 0 7.5 3"/>
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
   <stop stop-color="#3a539b"/>
   <stop offset="1" stop-color="#3f5aa9"/>
  </linearGradient>
  <linearGradient id="b" y1="2.241" y2="9" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#97aad8"/>
   <stop offset="1" stop-color="#c1cae7"/>
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
 <path fill="#c1cae7" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" d="M20.5 12A1.5 1.5 0 0 0 19 13.5 1.5 1.5 0 0 0 20.5 15 1.5 1.5 0 0 0 22 13.5 1.5 1.5 0 0 0 20.5 12m-5 1A5.5 5.5 0 0 0 10 18.5 5.5 5.5 0 0 0 15.5 24 5.5 5.5 0 0 0 21 18.5 5.5 5.5 0 0 0 19.716797 14.976562 2 2 0 0 1 20 16 2 2 0 0 1 18 18 2 2 0 0 1 16 16 2 2 0 0 1 18 14 2 2 0 0 1 19.05273 14.302734 5.5 5.5 0 0 0 15.5 13"/>
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
   <stop stop-color="#3a539b"/>
   <stop offset="1" stop-color="#3f5aa9"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#97aad8"/>
   <stop offset="1" stop-color="#c1cae7"/>
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
 <path fill="#c1cae7" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" d="m40 22a3 3 0 0 0 -3 3 3 3 0 0 0 .25195 1.19727A10 10 0 0 0 31 24 10 10 0 0 0 21 34 10 10 0 0 0 31 44 10 10 0 0 0 41 34 10 10 0 0 0 38.789062 27.742188 3 3 0 0 0 40 28 3 3 0 0 0 43 25 3 3 0 0 0 40 22m-9 3A9 9 0 0 1 35.11133 26.00391 4 4 0 0 0 35 26a4 4 0 0 0 -4 4 4 4 0 0 0 4 4 4 4 0 0 0 4 -4 4 4 0 0 0 -.0059 -.130859A9 9 0 0 1 40 34a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9m4 2a3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3"/>
		</svg>
	{/if}
