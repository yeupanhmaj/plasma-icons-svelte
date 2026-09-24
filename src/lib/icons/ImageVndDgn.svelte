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
			<path fill="#22a7f0" fill-rule="evenodd" d="m7 2v2h2v-2zm-.131 2.357l-1.98.531.818.818 1.293-.348v-1zm2.131 0v1l3.057.82-3.057.818v7h.131l4.861-1.303.008.002v-7.04l-.008.002-4.861-1.303zm-5.689.953l-1.311.352v7.338l6 1v-7l-4.391-.732.52-.139zm9.689 1.652v4.432l-3-.805v-2.822zm-3 4.664l2.057.551-2.057.553z"/>
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
			<defs id="defs3871">
  <linearGradient id="linearGradient4300-8">
   <stop style="stop-color:#f27935" id="stop4302-5"/>
   <stop offset="1" style="stop-color:#f2784b" id="stop4304-7"/>
  </linearGradient>
  <linearGradient id="linearGradient4357" xlink:href="#linearGradient4351" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0"/>
  <linearGradient id="linearGradient4410">
   <stop style="stop-color:#383e51" id="stop4412"/>
   <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
  </linearGradient>
  <linearGradient id="linearGradient4427" xlink:href="#linearGradient4410" y1="31" y2="17" x1="54" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 -14 78)"/>
  <linearGradient id="linearGradient4306" xlink:href="#linearGradient4300-8" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0"/>
  <linearGradient id="linearGradient4351">
   <stop style="stop-color:#f7ab89" id="stop4353"/>
   <stop offset="1" style="stop-color:#f9bda3" id="stop4355"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4410" id="linearGradient3444" y1="31" x1="54" y2="17" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 503.93261 656.69754)"/>
  <linearGradient xlink:href="#linearGradient4351" id="linearGradient3447" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
  <linearGradient xlink:href="#linearGradient4300-8" id="linearGradient3452" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
 </defs>
 <metadata id="metadata3874"/>
 <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path style="fill:#22a7f0;fill-rule:evenodd" id="path5743" d="M 10 6.25 L 7 7 L 7.8242188 7.8242188 L 10 7.28125 L 10 6.25 z M 4.8671875 7.5332031 L 3 8 L 3 17 L 11 19 L 11 10 L 5.0625 8.515625 L 5.6914062 8.359375 L 4.8671875 7.5332031 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <path style="fill:#22a7f0;fill-rule:evenodd" id="path5743-8" d="M 13 6.5 L 13 7.53125 L 16.9375 8.515625 L 12 9.75 L 12 18.75 L 19 17 L 19 8 L 13 6.5 z M 18 9.28125 L 18 15.720703 L 13 14.470703 L 13 10.53125 L 18 9.28125 z M 13 15.5 L 16.941406 16.484375 L 13 17.470703 L 13 15.5 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <rect width="3" x="336" y="537.36218" rx="0.000017" height="3" style="fill:#22a7f0;stroke-width:2" id="rect5831"/>
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
   <path fill-rule="evenodd" d="m399.57 524.8v2h2v-2zm-.131 2.357l-1.98.531.818.818 1.293-.348v-1zm2.131 0v1l3.057.82-3.057.818v7h.131l4.861-1.303.008.002v-7.04l-.008.002-4.861-1.303zm-5.689.953l-1.311.352v7.338l6 1v-7l-4.391-.732.52-.139zm9.689 1.652v4.432l-3-.805v-2.822zm-3 4.664l2.057.551-2.057.553z"/>
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
   <path opacity=".75" stroke-width="2" d="m8 11v42h48v-42h-1zm1 1h46v40h-46z"/>
  </g>
 </g>
 <path fill="#ffffff" fill-rule="evenodd" d="m30 21v4h4v-4zm1 1h2v2h-2zm-1.664 1.258l-1.932.518.26.967 1.932-.518zm-3 1l-1.932.518.26.967 1.932-.518zm8.664.275v1.035l6.143 1.645-6.143 1.754v14.03h.029l7.971-2.277v-14.06zm-12 .4668a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1 -1 1 1 0 0 0 -1 -1m-2 2v14l12 2v-14zm21 1.01v11.303l-6-1.609v-7.979zm-6 10.729l5.322 1.426-5.322 1.52z"/>
		</svg>
	{/if}
