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
			<path fill="#cf000f" d="m1.837 2.069v12h12v-12zm1 1h10v10h-10zm1 2v2h2v-2zm6 0v2h2v-2zm-4 4v1h4v-1zm4 1v1h1v-1zm1 1v1h1v-1zm-5-1h-1v1h1zm-1 1h-1v1h1z"/>
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
			<path
     style="fill:#cf000f;fill-opacity:1;stroke:none"
     d="M 3 3 L 3 19 L 4 19 L 19 19 L 19 18 L 19 3 L 18 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 5 5 L 5 6 L 6 6 L 6 5 L 5 5 z M 6 6 L 6 8 L 8 8 L 8 6 L 6 6 z M 8 6 L 9 6 L 9 5 L 8 5 L 8 6 z M 8 8 L 8 9 L 9 9 L 9 8 L 8 8 z M 6 8 L 5 8 L 5 9 L 6 9 L 6 8 z M 13 5 L 13 6 L 14 6 L 14 5 L 13 5 z M 14 6 L 14 8 L 16 8 L 16 6 L 14 6 z M 16 6 L 17 6 L 17 5 L 16 5 L 16 6 z M 16 8 L 16 9 L 17 9 L 17 8 L 16 8 z M 14 8 L 13 8 L 13 9 L 14 9 L 14 8 z M 9 11 L 9 13 L 13 13 L 13 11 L 9 11 z M 13 13 L 13 15 L 15 15 L 15 13 L 13 13 z M 15 15 L 15 17 L 17 17 L 17 15 L 15 15 z M 9 13 L 7 13 L 7 15 L 9 15 L 9 13 z M 7 15 L 5 15 L 5 17 L 7 17 L 7 15 z "/>
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
   <stop stop-color="#cf000f"/>
   <stop offset="1" stop-color="#d91e18"/>
  </linearGradient>
  <linearGradient id="b" y1="2.241" y2="9" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fb7d80"/>
   <stop offset="1" stop-color="#fcbcbe"/>
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
 <path fill="#fcbcbe" d="m10 12v12h12v-12zm1 1h10v10h-10zm1 2v2h2v-2zm6 0v2h2v-2zm-4 4v1h4v-1zm4 1v1h1v-1zm1 1v1h1v-1zm-5-1h-1v1h1zm-1 1h-1v1h1z"/>
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
   <stop stop-color="#cf000f"/>
   <stop offset="1" stop-color="#d91e18"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#fb7d80"/>
   <stop offset="1" stop-color="#fb9fa2"/>
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
 <path fill="#fcbcbe" d="m21 22v22h22v-22h-21zm1 1h20v20h-20zm2 3v1h1v-1zm1 1v2h2v-2zm2 0h1v-1h-1zm0 2v1h1v-1zm-2 0h-1v1h1zm11-3v1h1v-1zm1 1v2h2v-2zm2 0h1v-1h-1zm0 2v1h1v-1zm-2 0h-1v1h1zm-8 5v2h6v-2zm6 2v2h2v-2zm2 2v2h2v-2zm-8-2h-2v2h2zm-2 2h-2v2h2z"/>
		</svg>
	{/if}
