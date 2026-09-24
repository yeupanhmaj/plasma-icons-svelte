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
			<path id="path1" class="ColorScheme-Text" d="m2 2v12h13v-12zm1 2h11v9h-11z" fill="currentColor"/>
 <rect id="rect1" x="5" y="5" width="3" height="3" fill="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
 <rect id="rect2" x="9" y="5" width="3" height="3" fill="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
 <rect id="rect3" x="5" y="9" width="3" height="3" fill="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
 <rect id="rect4" x="9" y="9" width="3" height="3" fill="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
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
			<path id="path1" class="ColorScheme-Text" d="m2 3v17h17v-17zm1 3h15v13h-15z" fill="currentColor"/>
 <rect id="rect1" x="11" y="8" width="4" height="4" fill="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
 <rect id="rect2" x="6" y="8" width="4" height="4" fill="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
 <rect id="rect3" x="11" y="13" width="4" height="4" fill="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
 <rect id="rect4" x="6" y="13" width="4" height="4" fill="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
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
			<defs id="defs4">
  <linearGradient id="a" x2="0" y1="392.36" y2="365.36" gradientTransform="translate(309.57,152.44)" gradientUnits="userSpaceOnUse">
   <stop id="stop1" stop-color="#fff" stop-opacity="0" offset="0"/>
   <stop id="stop2" stop-color="#fff" stop-opacity=".2" offset="1"/>
  </linearGradient>
  <linearGradient id="b" x1="47" x2="54" y1="17" y2="24" gradientTransform="translate(357.57 507.8)" gradientUnits="userSpaceOnUse">
   <stop id="stop3" stop-color="#060606" offset="0"/>
   <stop id="stop4" stop-opacity="0" offset="1"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g id="g9" transform="translate(-384.57-515.8)">
  <g id="g6" color="#000000" color-rendering="auto" image-rendering="auto" shape-rendering="auto" text-rendering="auto">
   <use id="use4" fill="#555555" xlink:href="#c"/>
   <g id="g5" transform="scale(1-1)">
    <rect id="rect4" x="389.57" y="-518.8" width="15" height="1" fill="#fff" opacity=".4"/>
    <rect id="rect5" x="389.57" y="-545.8" width="22" height="1" opacity=".35"/>
   </g>
   <path id="path5" d="m411.57 524.8-7-7v7z" fill="#fff" fill-rule="evenodd" opacity=".5"/>
  </g>
  <path id="path6" d="m404.57 524.8 7 7v-7z" fill="url(#b)" fill-rule="evenodd" opacity=".4"/>
  <g id="g8" color="#000000" color-rendering="auto" fill="#e0e0e0" image-rendering="auto" shape-rendering="auto" text-rendering="auto">
   <path id="path1" class="ColorScheme-Text" d="m393.57 527.8v12h13v-12zm1 2h11v9h-11z" color="#555555"/>
   <rect id="rect1" x="396.57" y="530.8" width="3" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
   <rect id="rect2" x="400.57" y="530.8" width="3" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
   <rect id="rect3" x="396.57" y="534.8" width="3" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
   <rect id="rect4-6" x="400.57" y="534.8" width="3" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
  <use id="use8" fill="url(#a)" xlink:href="#c"/>
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
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <use fill="#555555" xlink:href="#c"/>
  <g transform="scale(1-1)">
   <rect opacity=".4" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".35" x="10" y="-61" width="44" height="1"/>
  </g>
  <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".4" fill="url(#a)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <path fill="#343434" d="m20 24v22h26v-22zm18 1c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m3 0c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m3 0c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m-23 3h24v17h-24zm6 3v5h5v-5zm6 0v5h5v-5zm-6 6v5h5v-5zm6 0v5h5v-5z"/>
  <path fill="#e0e0e0" d="m19 23v22h26v-22zm18 1c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m3 0c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m3 0c.552 0 1 .448 1 1 0 .552-.448 1-1 1-.552 0-1-.448-1-1 0-.552.448-1 1-1m-23 3h24v17h-24zm6 3v5h5v-5zm6 0v5h5v-5zm-6 6v5h5v-5zm6 0v5h5v-5z"/>
 </g>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
