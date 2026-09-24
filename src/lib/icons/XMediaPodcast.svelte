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
			<path fill="#8e44ad" d="m8 2c-1.662 0-3 1.338-3 3h2v1h-2v2h2v1h-1.818c.412 1.165 1.509 2 2.818 2 1.309 0 2.407-.835 2.818-2h-1.818v-1h2v-2h-2v-1h2c0-1.662-1.338-3-3-3m-4.9 7c.396 1.963 1.937 3.496 3.9 3.893v.107l-1 1h4l-1-1v-.107c1.963-.397 3.505-1.929 3.9-3.893h-1.039c-.444 1.726-1.993 3-3.861 3-1.869 0-3.418-1.274-3.861-3z"/>
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
 <path style="fill:#8e44ad;fill-rule:evenodd" id="path6169" d="M 11 3 A 4 4 0 0 0 7.1308594 6 L 10 6 L 10 8 L 7 8 L 7 10 L 10 10 L 10 12 L 7.1328125 12 A 4 4 0 0 0 11 15 A 4 4 0 0 0 14.869141 12 L 12 12 L 12 10 L 15 10 L 15 8 L 12 8 L 12 6 L 14.867188 6 A 4 4 0 0 0 11 3 z M 5 12 A 6 5 0 0 0 10 16.929688 L 10 17 L 8 19 L 14 19 L 12 17 L 12 16.923828 A 6 5 0 0 0 17 12 L 16 12 A 5 4 0 0 1 11 16 A 5 4 0 0 1 6 12 L 5 12 z "/>
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
   <stop stop-color="#8e44ad"/>
   <stop offset="1" stop-color="#9b59b6"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#d3bdd7"/>
   <stop offset="1" stop-color="#e8d9eb"/>
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
  <path fill="#e8d9eb" d="m400.47 527.8c-1.662 0-3 1.338-3 3h2v1h-2v2h2v1h-1.818c.412 1.165 1.509 2 2.818 2 1.309 0 2.407-.835 2.818-2h-1.818v-1h2v-2h-2v-1h2c0-1.662-1.338-3-3-3m-4.9 7c.396 1.963 1.937 3.496 3.9 3.893v.107l-1 1h4l-1-1v-.107c1.963-.397 3.505-1.929 3.9-3.893h-1.039c-.444 1.726-1.993 3-3.861 3-1.869 0-3.418-1.274-3.861-3z"/>
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
   <stop stop-color="#8e44ad"/>
   <stop offset="1" stop-color="#9b59b6"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#d3bdd7"/>
   <stop offset="1" stop-color="#e8d9eb"/>
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
 <path fill="#e8d9eb" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" d="m32 23c-2.77 0-5 2.23-5 5v5c0 2.77 2.23 5 5 5 2.77 0 5-2.23 5-5v-5c0-2.77-2.23-5-5-5m-4 4h3v1h-3zm5 0h3v1h-3zm-5 3h3v1h-3zm5 0h3v1h-3zm-5 3h3v1h-3zm5 0h3v1h-3zm-7.922 1c.437 3.072 2.851 5.485 5.922 5.922v1.078h.5v2h-1.5v1h4v-1h-1.5v-2h.5v-1.078c3.071-.437 5.485-2.85 5.922-5.922h-1.012c-.474 2.844-2.928 5-5.91 5-2.982 0-5.436-2.156-5.91-5z"/>
		</svg>
	{/if}
