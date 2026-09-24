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
			<path fill="#6c7a89" color="#4d4d4d" d="m8 2c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5m-1 1v5h5v-1h-4v-4z"/>
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
			<defs
     id="defs3871" />
  
  
  <g
     id="layer1"
     transform="translate(-326,-534.3622)">
    <path
       style="fill:#6c7a89;fill-opacity:1;stroke:none"
       d="m 337,537.3622 c -4.432,0 -8,3.568 -8,8 0,4.432 3.568,8 8,8 4.432,0 8,-3.568 8,-8 0,-4.432 -3.568,-8 -8,-8 m 0,1 c 3.878,0 7,3.122 7,7 0,3.878 -3.122,7 -7,7 -3.878,0 -7,-3.122 -7,-7 0,-3.878 3.122,-7 7,-7 m -1,1 0,7 1,0 5,0 0,-1 -5,0 0,-6 -1,0"
       class="ColorScheme-Text"
       id="path6" />
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
  <linearGradient id="a" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="3.421" y2="61.14" x1="6.508" x2="7.322" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="#cccccc" d="m389.57 517.8v27l2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2v-20l-7-7z"/>
  <g fill="#ffffff">
   <rect width="15" x="389.57" opacity=".5" y="-518.8" height="1" transform="scale(1-1)"/>
   <path opacity=".5" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m411.57 531.8l-7-7h7z"/>
  <path opacity=".5" d="m400.57 526.8c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5m-1 1v5h5v-1h-4v-4z"/>
  <path fill="url(#b)" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <path opacity=".25" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m7.75 27l-2.75 2v1l2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2v-1l-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto" transform="translate(384.57 515.8)"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-108-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44l-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2z"/>
 </defs>
 <use fill="#cccccc" xlink:href="#c"/>
 <g fill="#ffffff">
  <rect opacity=".5" color-interpolation-filters="linearRGB" x="10" y="-4" color="#000000" image-rendering="auto" color-rendering="auto" width="30" color-interpolation="sRGB" text-rendering="auto" height="1" shape-rendering="auto" transform="scale(1-1)"/>
  <path opacity=".5" fill-rule="evenodd" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB">
  <path opacity=".5" color="#4d4d4d" d="M32.14258 23A11 11 0 0 0 31.523438 23.0098 11 11 0 0 0 21.00391 34.31836 11 11 0 0 0 32.16016 44.998047 11 11 0 0 0 43 34L42.982 33.363A11 11 0 0 0 32.14258 23m-.576172 1.00977A10 10 0 0 1 41.98242 33.421875L42 34a10 10 0 0 1 -9.855469 9.998047 10 10 0 0 1 -10.140625 -9.708985 10 10 0 0 1 9.5625 -10.279296M31 26v9h8v-1h-7v-8z"/>
  <g color="#000000">
   <path opacity=".25" d="m12.75 58l-2.75 2v1l2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2 2.75-2 2.75 2v-1l-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2-2.75-2-2.75 2z"/>
   <use fill="url(#b)" xlink:href="#c"/>
  </g>
 </g>
		</svg>
	{/if}
