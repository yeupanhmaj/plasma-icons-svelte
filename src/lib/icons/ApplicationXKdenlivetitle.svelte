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
			<path fill="#6c7a89" d="m2 1038.36v12h12v-12zm3 1h6v4h-6zm-2 1h1v1h-1zm9 0h1v1h-1zm-9 3.5h1v1h-1zm9 0h1v1h-1zm-7 1.5h6v4h-6zm-2 2h1v1h-1zm9 0h1v1h-1z" transform="translate(0-1036.36)"/>
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
  <path style="fill:#6c7a89" id="rect3009" d="m 3,4 0,15 1,0 2,0 10,0 2,0 1,0 L 19,4 18,4 16,4 6,4 4,4 3,4 Z M 4,5 5,5 5,6 4,6 4,5 Z m 2,0 10,0 0,5.5 -10,0 L 6,5 Z m 11,0 1,0 0,1 -1,0 0,-1 z M 4,8 5,8 5,9 4,9 4,8 Z m 13,0 1,0 0,1 -1,0 0,-1 z m -13,3 1,0 0,1 -1,0 0,-1 z m 13,0 1,0 0,1 -1,0 0,-1 z m -11,1.5 10,0 0,5.5 -10,0 0,-5.5 z m -2,1.5 1,0 0,1 -1,0 0,-1 z m 13,0 1,0 0,1 -1,0 0,-1 z m -13,3 1,0 0,1 -1,0 0,-1 z m 13,0 1,0 0,1 -1,0 0,-1 z" transform="matrix(1 0 0 1 326 533.8622)"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0-.5-.48276 0 416.02 547.8)">
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="542.8" x1="386.57" y2="520.8" x2="414.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="c" y1="27" x1="2" y2="5" x2="30" gradientUnits="userSpaceOnUse" gradientTransform="translate(384.57 515.8)">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m414.57 542.8h-28v-22h28v7z"/>
  <rect width="28" x="386.57" y="541.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  <rect width="28" x="386.57" y="520.8" fill="#ffffff" height="1" fill-opacity=".41"/>
  <path fill="#fbfbfb" d="m400.57143 525.79806a6 6 0 0 0 -6 6 6 6 0 0 0 6 6 6 6 0 0 0 6 -6 6 6 0 0 0 -6 -6m0 1a5 5 0 0 1 5 5 5 5 0 0 1 -5 5 5 5 0 0 1 -5 -5 5 5 0 0 1 5 -5m-2 2v6l5-3z"/>
  <path fill="url(#b)" fill-rule="evenodd" d="m413.57 542.8l-2-2 2-2-2-2 2-2-2-2 2-2-2-2 2-2-2-2 2-2h1v20z"/>
  <path fill="url(#c)" d="m387.57 522.8v2h2v-2zm24 0v2h2v-2zm-24 4v2h2v-2zm24 0v2h2v-2zm-24 4v2h2v-2zm24 0v2h2v-2zm-24 4v2h2v-2zm24 0v2h2v-2zm-24 4v2h2v-2zm24 0v2h2v-2z"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.31818 0 0 .75862-10.182 7.724)">
   <stop stop-color="#6c7a89"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="54" x1="3" y2="10" x2="61" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="c" y1="54" y2="10" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#ececec"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m3 10v44h58v-44h-18.455z"/>
 <rect width="58" x="3" y="53" fill="#2e3132" height="1" fill-opacity=".294"/>
 <rect width="58" x="3" y="10" fill="#ffffff" height="1" fill-opacity=".41"/>
 <path fill="#ececec" d="M32 21A11 11 0 0 0 21 32 11 11 0 0 0 32 43 11 11 0 0 0 43 32 11 11 0 0 0 32 21m.144531.951172a10 10 0 0 1 10 10 10 10 0 0 1 -10 10 10 10 0 0 1 -10 -10 10 10 0 0 1 10 -10"/>
 <g fill-rule="evenodd">
  <path fill="#edeef8" d="m38 31.462l-10 7.538v-14z"/>
  <path fill="url(#b)" d="m57 54l-2-2 2-4-2-2 2-4-2-2 2-4-2-2 2-4-2-2 2-4-2-2 2-4-2-2 4-4 2 2v40z"/>
 </g>
 <path fill="url(#c)" d="m5 12v4h4v-4zm50 0v4h4v-4zm-50 6v4h4v-4zm50 0v4h4v-4zm-50 6v4h4v-4zm50 0v4h4v-4zm-50 6v4h4v-4zm50 0v4h4v-4zm-50 6v4h4v-4zm50 0v4h4v-4zm-50 6v4h4v-4zm50 0v4h4v-4zm-50 6v4h4v-4zm50 0v4h4v-4z"/>
		</svg>
	{/if}
