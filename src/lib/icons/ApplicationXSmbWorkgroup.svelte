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
			<path fill="#3a539b" stroke-width="2" d="m2 1038.36v12h12v-12zm1 1h10v1h-10zm6 2h3v1h-3zm-6 2h10v2h-10zm6 3h3v1h-3zm-6 2h10v1h-10z" transform="translate(0-1036.36)"/>
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
 <path style="fill:#3a539b;stroke-linecap:square;stroke-width:2" id="rect4153" d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 6 L 4 6 L 4 4 z M 4 7 L 5 7 L 5 9 L 4 9 L 4 7 z M 6 7 L 7 7 L 7 9 L 6 9 L 6 7 z M 8 7 L 9 7 L 9 9 L 8 9 L 8 7 z M 10 7 L 11 7 L 11 9 L 10 9 L 10 7 z M 12 7 L 13 7 L 13 9 L 12 9 L 12 7 z M 14 7 L 15 7 L 15 9 L 14 9 L 14 7 z M 16 7 L 18 7 L 18 8 L 16 8 L 16 7 z M 4 10 L 18 10 L 18 12 L 4 12 L 4 10 z M 4 13 L 5 13 L 5 15 L 4 15 L 4 13 z M 6 13 L 7 13 L 7 15 L 6 15 L 6 13 z M 8 13 L 9 13 L 9 15 L 8 15 L 8 13 z M 10 13 L 11 13 L 11 15 L 10 15 L 10 13 z M 12 13 L 13 13 L 13 15 L 12 15 L 12 13 z M 14 13 L 15 13 L 15 15 L 14 15 L 14 13 z M 16 13 L 18 13 L 18 14 L 16 14 L 16 13 z M 4 16 L 16 16 L 18 16 L 18 18 L 4 18 L 4 16 z "/>
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
   <stop stop-color="#3a539b"/>
   <stop offset="1" stop-color="#3f5aa9"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#97aad8"/>
   <stop offset="1" stop-color="#c1cae7"/>
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
  <path fill="#c1cae7" stroke-width="2" d="m394.57 527.8v12h12v-12zm1 1h10v1h-10zm6 2h3v1h-3zm-6 2h10v2h-10zm6 3h3v1h-3zm-6 2h10v1h-10z"/>
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
 <path fill="#c1cae7" stroke-width="2" d="m21 22v22h22v-22zm1 1h20v3h-20zm0 4h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm3 1h3v1h-3zm-17 4h20v2h-20zm0 3h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm2 0h1v4h-1zm3 1h3v1h-3zm-17 4h20v3h-20z"/>
		</svg>
	{/if}
