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
			<path fill="#8e44ad" d="M8 2A6 2 0 0 0 2 4V8A6 2 0 0 0 7 9.970703V12H5V11H2V14H5V13H11V14H14V11H11V12H9V9.971A6 2 0 0 0 14 8V4A6 2 0 0 0 8 2M8 3A5 1 0 0 1 13 4 5 1 0 0 1 8 5 5 1 0 0 1 3 4 5 1 0 0 1 8 3M3 5.101563A6 2 0 0 0 8 6 6 2 0 0 0 13 5.103516V8A5 1 0 0 1 8 9 5 1 0 0 1 3 8V6.896zM3 12H4V13H3zM12 12H13V13H12z"/>
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
  <g id="layer1-23">
   <path style="fill:#8e44ad;stroke-width:2" id="path4146" d="M 11 3 A 8 3.0000005 0 0 0 3 6 L 3 10 L 3 11 A 8 3.0000005 0 0 0 10 13.972656 L 10 16 L 7 16 L 7 15 L 3 15 L 3 19 L 7 19 L 7 18 L 15 18 L 15 19 L 19 19 L 19 15 L 15 15 L 15 16 L 12 16 L 12 13.972656 A 8 3.0000005 0 0 0 19 11 L 19 10 L 19 6 A 8 3.0000005 0 0 0 11 3 z M 11 4 A 7 2 0 0 1 18 6 A 7 2 0 0 1 11 8 A 7 2 0 0 1 4 6 A 7 2 0 0 1 11 4 z M 18 7.4453125 L 18 10 L 18 11 A 7 2 0 0 1 11 13 A 7 2 0 0 1 4 11 L 4 10 L 4 7.4511719 A 8 3.0000005 0 0 0 11 9 A 8 3.0000005 0 0 0 18 7.4453125 z M 4 16 L 6 16 L 6 18 L 4 18 L 4 16 z M 16 16 L 18 16 L 18 18 L 16 18 L 16 16 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  </g>
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
  <path fill="#e8d9eb" d="m400.57143 527.798a6 2 0 0 0 -6 2v4a6 2 0 0 0 5 1.9707v2.029h-2v-1h-3v3h3v-1h6v1h3v-3h-3v1h-2v-2.029a6 2 0 0 0 5 -1.9707v-4a6 2 0 0 0 -6 -2m0 1a5 1 0 0 1 5 1 5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1 5 1 0 0 1 5 -1m-5 2.10156a6 2 0 0 0 5 .89844 6 2 0 0 0 5 -.89648v2.896a5 1 0 0 1 -5 1 5 1 0 0 1 -5 -1v-1.104zm0 6.898h1v1h-1zm9 0h1v1h-1z"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="2.978" y2="60.978" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 63.978)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 60.978v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#8542c2" xlink:href="#c"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" opacity=".5" y="-4" fill="#ffffff" height="1"/>
  <rect width="44" x="10" opacity=".25" y="-61" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#a)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".75" fill="#ffffff" d="m32 22c-6.075 0-11 1.343-11 3v10a11 3 0 0 0 1 1.242188 11 3 0 0 0 .01172 .0059 11 3 0 0 0 .476562 .251953 11 3 0 0 0 .03125 .01367 11 3 0 0 0 .550781 .232422 11 3 0 0 0 .06445 .02344 11 3 0 0 0 .589843 .201172 11 3 0 0 0 .132813 .04102 11 3 0 0 0 .65039 .179687 11 3 0 0 0 .09961 .02539 11 3 0 0 0 .773437 .175781 11 3 0 0 0 .05273 .0098 11 3 0 0 0 .814453 .15039 11 3 0 0 0 .138672 .02344 11 3 0 0 0 .779297 .115234 11 3 0 0 0 .220703 .0293 11 3 0 0 0 .736328 .08203 11 3 0 0 0 .367187 .03711 11 3 0 0 0 .539063 .04492 11 3 0 0 0 .591797 .04102 11 3 0 0 0 .490234 .02539 11 3 0 0 0 .576172 .02344 11 3 0 0 0 .462891 .01367 11 3 0 0 0 .849617 .011633 11 3 0 0 0 .958984 -.01367 11 3 0 0 0 .414063 -.01367 11 3 0 0 0 .716797 -.0293 11 3 0 0 0 .345703 -.02148 11 3 0 0 0 .707031 -.04883 11 3 0 0 0 .31836 -.0293 11 3 0 0 0 .767578 -.07617 11 3 0 0 0 .179687 -.02148 11 3 0 0 0 .808594 -.107422 11 3 0 0 0 .212891 -.03516 11 3 0 0 0 .677734 -.111328 11 3 0 0 0 .3125 -.06055 11 3 0 0 0 .595703 -.125 11 3 0 0 0 .195313 -.04687 11 3 0 0 0 .662109 -.167969 11 3 0 0 0 .01367 -.0039 11 3 0 0 0 .02344 -.0078 11 3 0 0 0 .701172 -.21875 11 3 0 0 0 .636719 -.24414 11 3 0 0 0 .002 0 11 3 0 0 0 .0059 -.002 11 3 0 0 0 .535157 -.253906 11 3 0 0 0 .0059 -.0039 11 3 0 0 0 .202995 -.115217 11 3 0 0 0 1 -1.242188v-10c0-1.657-4.925-3-11-3m0 16h-1v3h1v1h-8v-1h-3v3h3v-1h16v1h3v-3h-3v1h-7v-1h1v-3zm0-15c5.523 0 10 .895 10 2 0 1.105-4.477 2-10 2-5.523 0-10-.895-10-2 0-1.105 4.477-2 10-2m-10 3.242c1.784 1.069 5.692 1.756 10 1.758 4.308-.001 8.216-.688 10-1.758v3.758c0 1.105-4.477 2-10 2-5.523 0-10-.895-10-2zm0 5c1.784 1.069 5.692 1.756 10 1.758 4.308-.001 8.216-.688 10-1.758v3.758a10 2 0 0 1 -10 2 10 2 0 0 1 -10 -2v-2zm10 7.758h1v1h-1zm-10 3h1v1h-1zm19 0h1v1h-1z"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
