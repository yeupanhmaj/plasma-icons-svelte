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
			<g transform="matrix(.0069056 0 0 .0069056 -.85174 -.83882)">
  <path d="m350 2062 98-6c199-13 197-12 207-168 9-148-2.337-1306.8-9-1330-10.975-38.27-52.156-60.281-175-60.25l-121-0.75v-217h1860v831l-219-3.25c-2-2-8-60.75-12-114.75-23-254-80-400.14-190-457.14-58-30-148.56-38.842-438.65-38.93l-270.35 0.072v623h48c81-1 184-20 218-41 44-27 81-105 94-199 9.8-68.603 17.362-119.93 17.362-119.93l212.64-0.067v990h-220v-39c0-64-30-213-51-258-33-69-89-93-248-108l-73-7 4 321c3 305 5 322 24 348 24 32 50 38 209 50l106.73 5.077-0.727 217.92h-1071z" fill="#9264be"/>
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
			<g transform="matrix(.0094949 0 0 .009495 -1.1713 -1.1526)">
  <path d="m350 2062 98-6c199-13 197-12 207-168 9-148-2.337-1306.8-9-1330-10.975-38.27-52.156-60.281-175-60.25l-121-0.75v-217h1860v831l-219-3.25c-2-2-8-60.75-12-114.75-23-254-80-400.14-190-457.14-58-30-148.56-38.842-438.65-38.93l-270.35 0.072v623h48c81-1 184-20 218-41 44-27 81-105 94-199 9.8-68.603 17.362-119.93 17.362-119.93l212.64-0.067v990h-220v-39c0-64-30-213-51-258-33-69-89-93-248-108l-73-7 4 321c3 305 5 322 24 348 24 32 50 38 209 50l106.73 5.077-0.727 217.92h-1071z" fill="#9264be"/>
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
   <stop stop-color="#734f96"/>
   <stop offset="1" stop-color="#9263b2"/>
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
 <path d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)"/>
 <g transform="scale(1-1)">
  <rect x="10" y="-4" width="30" height="1" fill="#fff" fill-opacity=".412"/>
  <rect x="10" y="-61" width="44" height="1" fill="#2e3132" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path d="m54 17-14-14v14z" fill="url(#b)"/>
  <path d="m40 17 14 14v-14z" fill="url(#c)" opacity=".2"/>
 </g>
 <g transform="matrix(.011306 0 0 .011306 17.043 19.664)">
  <path fill="#e8d9eb" d="m350 2062 98-6c199-13 197-12 207-168 9-148-2.337-1306.8-9-1330-10.975-38.27-52.156-60.281-175-60.25l-121-.75v-217h1860v831l-219-3.25c-2-2-8-60.75-12-114.75-23-254-80-400.14-190-457.14-58-30-148.56-38.842-438.65-38.93l-270.35.072v623h48c81-1 184-20 218-41 44-27 81-105 94-199 9.8-68.603 17.362-119.93 17.362-119.93l212.64-.067v990h-220v-39c0-64-30-213-51-258-33-69-89-93-248-108l-73-7 4 321c3 305 5 322 24 348 24 32 50 38 209 50l106.73 5.077-.727 217.92h-1071z"/>
 </g>
		</svg>
	{/if}
