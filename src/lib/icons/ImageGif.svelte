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
			<path fill="#32cab4" d="m2 2v8.992l-1 1v.008h1v2h12v-2.998h1v-.01l-1-1v-7.992zm1 1h10v5.992l-3.994-3.992h-.006v.002h-.006l-2.496 2.492-.494-.494h-.008l-2.996 2.994zm2 1c-.554 0-1 .446-1 1 0 .554.446 1 1 1 .554 0 1-.446 1-1 0-.554-.446-1-1-1m4 2.41l4 3.998v.592h-2.992l-2.801-2.797zm-3 2l2.59 2.59h-5.182zm-3 3.59h6.59l.002.002h1.408v-.002h2v1h-10z"/>
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
  <path style="fill:#32cab4;stroke-width:2" id="rect5669" d="M 3 3 L 3 15 L 1 17 L 3 17 L 3 19 L 19 19 L 19 17 L 21 17 L 19 14.714844 L 19 3 L 3 3 z M 4 4 L 9 4 L 10 4 L 11 4 L 14.539062 4 L 18 4 L 18 13.572266 L 14 9 L 10 13 L 9.5 13.5 L 9 13 L 7 11 L 4 14 L 4 4 z M 7 5 A 2 2 0 0 0 5 7 A 2 2 0 0 0 7 9 A 2 2 0 0 0 9 7 A 2 2 0 0 0 7 5 z M 13.951172 10.462891 L 19 16 L 12 16 L 11 15 L 10.207031 14.207031 L 11 13.416016 L 11 13.414062 L 13.951172 10.462891 z M 7 12.414062 L 9 14.414062 L 9 14.416016 L 10.583984 16 L 9 16 L 3.4140625 16 L 7 12.414062 z M 4 17 L 9 17 L 11 17 L 18 17 L 18 18 L 4 18 L 4 17 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <linearGradient id="a" y1="392.36" y2="320.48" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(.5 0 0 .42294 418.57 378.93)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" id="b" color-interpolation="sRGB" color="#000000" d="m386.57 520.8v25h28v-25z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <use fill="#59cfd3" xlink:href="#b"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <rect opacity=".25" x="386.57" y="544.8" width="28" height="1"/>
   <g fill="#ffffff">
    <rect opacity=".5" x="386.57" y="520.8" width="28" height="1"/>
    <path opacity=".5" fill-rule="evenodd" d="m3 7v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm-24 19v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2z" transform="translate(384.57 515.8)"/>
    <path opacity=".75" d="m396.07142 528.79803a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5 -1.5 1.5 1.5 0 0 0 -1.5 -1.5m0 1a.5 .5 0 0 1 .5 .5 .5 .5 0 0 1 -.5 .5 .5 .5 0 0 1 -.5 -.5 .5 .5 0 0 1 .5 -.5m9.5 1l-5.6 5.58-2.6-2.58-6 6h1.406l3.119-3.082 1.408-1.404 1.564 1.418 1.102 1.068 5.6-5.398 3.594 3.398h1.406z"/>
   </g>
  </g>
  <use fill="url(#a)" xlink:href="#b"/>
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
  <linearGradient id="a" y1="392.36" y2="320.48" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 .84587-44-272.73)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" id="b" color-interpolation="sRGB" color="#000000" d="m4 61v-50h56v50h-14z"/>
 </defs>
 <use fill="#59cfd3" xlink:href="#b"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <rect opacity=".25" x="4" y="60" width="56" height="1"/>
  <g fill="#ffffff">
   <rect opacity=".5" x="4" y="11" width="56" height="1"/>
   <path opacity=".75" d="m21.05 21.344v1.828h1v-1.828zm-2.793 1.156l-.707.707 1.293 1.293.707-.707zm6.586 0l-1.293 1.293.707.707 1.293-1.293zm-3.344 1.5c-1.381 0-2.5 1.119-2.5 2.5 0 1.381 1.119 2.5 2.5 2.5 1.381 0 2.5-1.119 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5m0 1c.828 0 1.5.672 1.5 1.5 0 .828-.672 1.5-1.5 1.5-.828 0-1.5-.672-1.5-1.5 0-.828.672-1.5 1.5-1.5m-5.105 1v1h1.828v-1zm8.484 0v1h1.828v-1zm14.12 5l-2 2h-.008l-8.592 8.58v.02l-4.6-4.6-9 9h1.406l6.119-6.082 1.409-1.404 1.564 1.418 3.102 3.068 4-4 2.951-2.936 3.648-3.462 3.637 3.515 7.957 7.883h1.406zm-20.16-2.5l-1.293 1.293.707.707 1.293-1.293zm5.414 0l-.707.707 1.293 1.293.707-.707zm-3.207 1.328v1.828h1v-1.828z"/>
  </g>
 </g>
 <use fill="url(#a)" xlink:href="#b"/>
 <path opacity=".5" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" fill-rule="evenodd" d="m6 13v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm-48 42v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
		</svg>
	{/if}
