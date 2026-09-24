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
			<path fill="#f27935" stroke-width="2" d="m7.380859 1038.3136a.5 .5 0 0 0 -.345703 .1464 .5 .5 0 0 0 0 .7071l3.205 3.205A4 4 0 0 0 10 1042.3622h-7.5a.5 .5 0 0 0 -.5 .5 .5 .5 0 0 0 .5 .5h4.793l-5.146 5.147a.500012 .5 0 0 0 0 .7071 .500012 .5 0 0 0 .707032 0l3.164-3.164A4 4 0 0 0 6 1046.3622a4 4 0 0 0 4 4 4 4 0 0 0 4 -4 4 4 0 0 0 -.960938 -2.5957l.006-.01-.135-.135a4 4 0 0 0 -.203165 -.2031l-4.965-4.965a.5 .5 0 0 0 -.361329 -.1464zM10 1043.3643a3 3 0 0 1 1.996094 .7637l.227.227A3 3 0 0 1 13 1046.3643a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3m0 2a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1 -1 1 1 0 0 0 -1 -1" transform="translate(0-1036.36)"/>
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
  <path style="fill:#f27935;stroke-linecap:square;stroke-width:2" id="path4155" d="M 10.492188 3 A 0.5 0.5 0 0 0 10.146484 3.1464844 A 0.5 0.5 0 0 0 10.146484 3.8535156 L 14.363281 8.0703125 A 5.5 5.5 0 0 0 13.5 8 L 3.5 8 A 0.5 0.5 0 0 0 3 8.5 A 0.5 0.5 0 0 0 3.5 9 L 10.34375 9 A 5.5 5.5 0 0 0 9.140625 10.154297 L 3.1464844 16.146484 A 0.50002409 0.5 0 0 0 3.1464844 16.853516 A 0.50002409 0.5 0 0 0 3.8535156 16.853516 L 8.0703125 12.638672 A 5.5 5.5 0 0 0 8 13.5 A 5.5 5.5 0 0 0 13.5 19 A 5.5 5.5 0 0 0 19 13.5 A 5.5 5.5 0 0 0 16.841797 9.1367188 L 10.853516 3.1464844 A 0.5 0.5 0 0 0 10.492188 3 z M 13.5 9 A 4.5 4.5 0 0 1 18 13.5 A 4.5 4.5 0 0 1 13.5 18 A 4.5 4.5 0 0 1 9 13.5 A 4.5 4.5 0 0 1 13.5 9 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <circle cx="339.5" cy="547.86218" style="fill:#f27935;stroke-linecap:square;stroke-width:2" id="path4160" r="1.5"/>
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
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="546.08" x1="400.12" y2="517.9" x2="399.68" gradientUnits="userSpaceOnUse">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <use fill="#ff8b23" xlink:href="#c"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" opacity=".5" y="-518.8" fill="#ffffff" height="1"/>
   <rect width="22" x="389.57" opacity=".25" y="-545.8" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".4" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#a)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path opacity=".4" stroke-width="2" d="m399.95229 527.74722a.5 .5 0 0 0 -.3457 .14648 .5 .5 0 0 0 0 .70703l3.205 3.205a4 4 0 0 0 -.24023 -.008h-7.5a.5 .5 0 0 0 -.5 .5 .5 .5 0 0 0 .5 .5h4.793l-5.146 5.146a.500012 .5 0 0 0 0 .70704 .500012 .5 0 0 0 .70704 0l3.164-3.164a4 4 0 0 0 -.0176 .31055 4 4 0 0 0 4 4 4 4 0 0 0 4 -4 4 4 0 0 0 -.96094 -2.5957l.006-.006-.135-.135a4 4 0 0 0 -.20313 -.20312l-4.965-4.965a.5 .5 0 0 0 -.36133 -.14648m2.61902 5.05111a3 3 0 0 1 1.99609 .76367l.227.227a3 3 0 0 1 .77734 2.00977 3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3m0 2a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1 -1 1 1 0 0 0 -1 -1"/>
  <use fill="url(#b)" xlink:href="#c"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(46 162.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2-170)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m56 223.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-46-162.36)">
  <use fill="#ff8b23" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="56" y="-166.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="56" y="-223.36" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".4" d="m100 179.36l-14-14v14z"/>
   <path opacity=".2" fill="url(#a)" d="m86 179.36l14 14v-14z"/>
  </g>
  <path opacity=".4" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m77.625 184.3622a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 .435547 1.05469l-.004.002L80 190.36h-11.5a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5h5.5l-6.432 6.434A1.5 1.5 0 0 0 67 200.97157a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.083984 -.46679c.004.003.005.003.01.006l3.418-3.416A8 8 0 0 0 81 206.3622a8 8 0 0 0 8 -8 8 8 0 0 0 -2.996094 -6.24023l-7.271-7.27a1.5 1.5 0 0 1 -.002 -.002A1.5 1.5 0 0 0 77.625 184.3622m3.375 9a5 5 0 0 1 3.033203 1.0332l.867.867.012-.012A5 5 0 0 1 86 198.3622a5 5 0 0 1 -5 5 5 5 0 0 1 -5 -5 5 5 0 0 1 5 -5m0 3a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2 -2 2 2 0 0 0 -2 -2" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
