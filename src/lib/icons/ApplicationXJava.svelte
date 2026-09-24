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
			<path fill="#f27935" d="m7 2v3h1v-3zm-2 1v2h1v-2zm4 0v2h1v-2zm-6 1v1h1v-1zm-1 2v4c0 1.813 1.01 3 3 3h-2v1h8v-1h-2c1.572 0 2.507-.727 3-2h1c1 0 1-.003 1-1.094v-1.094c0-1.818 0-1.813-1-1.813h-1v-1zm1 1h8v3c0 1.511-1.338 2-3 2h-2c-1.662 0-3-.489-3-2zm9 1h1v2h-1z"/>
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
  <linearGradient inkscape:collect="always" id="linearGradient4300-8">
   <stop style="stop-color:#f27935" id="stop4302-5"/>
   <stop offset="1" style="stop-color:#f2784b" id="stop4304-7"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4357" xlink:href="#linearGradient4351" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0"/>
  <linearGradient inkscape:collect="always" id="linearGradient4410">
   <stop style="stop-color:#383e51" id="stop4412"/>
   <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4427" xlink:href="#linearGradient4410" y1="31" y2="17" x1="54" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 -14 78)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4306" xlink:href="#linearGradient4300-8" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0"/>
  <linearGradient inkscape:collect="always" id="linearGradient4351">
   <stop style="stop-color:#f7ab89" id="stop4353"/>
   <stop offset="1" style="stop-color:#f9bda3" id="stop4355"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4410" id="linearGradient3444" y1="31" x1="54" y2="17" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 503.93261 656.69754)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4351" id="linearGradient3447" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4300-8" id="linearGradient3452" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
 </defs>
 <metadata id="metadata3874"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path style="fill:#f27935;stroke-width:6" id="rect5505" d="M 8 3 L 8 7 L 9 7 L 9 3 L 8 3 z M 10 4 L 10 7 L 11 7 L 11 4 L 10 4 z M 6 5 L 6 7 L 7 7 L 7 5 L 6 5 z M 12 5 L 12 7 L 13 7 L 13 5 L 12 5 z M 4 6 L 4 7 L 5 7 L 5 6 L 4 6 z M 14 6 L 14 7 L 15 7 L 15 6 L 14 6 z M 3 8 L 3 9 L 3 14 A 4 3.9893909 0 0 0 3 14.009766 A 4 3.9893909 0 0 0 7 18 L 4 18 L 4 19 L 15 19 L 15 18 L 12 18 A 4 3.9893909 0 0 0 16 14.009766 A 4 3.9893909 0 0 0 16 14 L 18 14 C 18.55401 14 19 13.55401 19 13 L 19 10 C 19 9.44599 18.55401 9 18 9 L 16 9 L 16 8 L 3 8 z M 4 9 L 15 9 L 15 10 L 15 13 L 15 14 A 3 3 0 0 1 12 17 L 7 17 A 3 3 0 0 1 4 14 L 4 9 z M 16 10 L 18 10 L 18 13 L 16 13 L 16 10 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <linearGradient id="a" y1="17" y2="24" x1="47" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="365.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#ff8b23" isolation="auto" solid-opacity="1" mix-blend-mode="normal" xlink:href="#c" solid-color="#000000"/>
   <g transform="scale(1-1)">
    <rect mix-blend-mode="normal" solid-color="#000000" opacity=".5" x="389.57" y="-518.8" width="15" isolation="auto" solid-opacity="1" fill="#ffffff" height="1"/>
    <rect width="22" x="389.57" opacity=".25" y="-545.8" isolation="auto" solid-opacity="1" height="1" mix-blend-mode="normal" solid-color="#000000"/>
   </g>
   <path opacity=".6" isolation="auto" solid-opacity="1" mix-blend-mode="normal" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z" solid-color="#000000"/>
  </g>
  <path opacity=".1" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".7" d="m399.57 526.8v3h1v-3zm-2 1v2h1v-2zm4 0v2h1v-2zm-6 1v1h1v-1zm-1 2v4c0 1.813 1.01 3 3 3h-2v1h8v-1h-2c1.572 0 2.507-.727 3-2h1c1 0 1-.003 1-1.094v-1.094c0-1.818 0-1.813-1-1.813h-1v-1zm1 1h8v3c0 1.511-1.338 2-3 2h-2c-1.662 0-3-.489-3-2zm9 1h1v2h-1z"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(292 1084.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(244 752)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m302 1145.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-292-1084.36)">
  <use fill="#ff8b23" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="302" y="-1088.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="302" y="-1145.36" width="44" height="1"/>
  </g>
  <path opacity=".6" fill-rule="evenodd" d="m346 1101.36l-14-14v14z"/>
  <path opacity=".7" d="m322 1106.36v6h1v-6zm4 2v3h1v-3zm-8 1v4h1v-4zm-3 5v7c0 3.324 2.676 6 6 6h-5v1h14v-1h-5c2.621 0 4.831-1.667 5.652-4h1.848c1.385 0 2.5-1.115 2.5-2.5v-2c0-1.385-1.115-2.5-2.5-2.5h-1.5v-2zm1 1h14v6c0 2.77-2.23 5-5 5h-4c-2.77 0-5-2.23-5-5zm15 2h1.672c.736 0 1.328.592 1.328 1.328v2.344c0 .736-.592 1.328-1.328 1.328h-1.762c.054-.326.09-.658.09-1z"/>
  <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m332 1101.36l14 14v-14z"/>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
