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
			<g fill="#22a7f0" transform="translate(0-1036.36)">
  <path d="m8 1038.36c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5"/>
  <g transform="translate(.5 1036.36)">
   <rect width="1" x="7" y="6" height="6"/>
   <rect width="1" x="7" y="4" height="1"/>
  </g>
 </g>
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
  <rect width="2" x="336" y="540.36218" height="2" style="fill:#22a7f0" id="rect4120"/>
  <rect width="2" x="336" y="543.36218" height="7" style="fill:#22a7f0" id="rect4124"/>
  <path style="fill:#22a7f0" id="rect4129" d="m 337,537.3622 c -4.432,0 -8,3.568 -8,8 0,4.432 3.568,8 8,8 4.432,0 8,-3.568 8,-8 0,-4.432 -3.568,-8 -8,-8 z m 0,1 c 3.878,0 7,3.122 7,7 0,3.878 -3.122,7 -7,7 -3.878,0 -7,-3.122 -7,-7 0,-3.878 3.122,-7 7,-7 z"/>
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
  <path fill="#ffffff" d="m400.57 527.8c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5m-.5 1v1h1v-1zm0 2v6h1v-6z"/>
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
 <path fill="#ffffff" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" d="m32 22c-6.094 0-11 4.906-11 11 0 6.094 4.906 11 11 11 6.094 0 11-4.906 11-11 0-6.094-4.906-11-11-11m0 1c5.54 0 10 4.46 10 10 0 5.54-4.46 10-10 10-5.54 0-10-4.46-10-10 0-5.54 4.46-10 10-10m-1 3v2h2v-2zm0 4v10h2v-10z"/>
		</svg>
	{/if}
