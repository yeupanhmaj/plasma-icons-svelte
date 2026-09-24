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
			<path fill="#f9d24c" d="m7.966 1048.08l-3.757-3.757 3.757-3.754 1.253 1.25-2.507 2.504 1.253 1.253 3.757-3.757-3.274-3.271c-.266-.266-.701-.266-.967 0l-5.291 5.291c-.269.266-.269.701 0 .97l5.291 5.291c.266.266.701.266.967 0l5.291-5.291c.269-.269.269-.704 0-.97l-.767-.767zm0 0" transform="translate(0-1036.36)"/>
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
  
  <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path style="fill:#f9d24c;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 336.95365,550.32796 -5.01452,-5.01452 5.01452,-5.01021 1.67293,1.66863 -3.34588,3.34158 1.67295,1.67294 5.0145,-5.01452 -4.36942,-4.36512 c -0.3548,-0.35479 -0.93538,-0.35479 -1.29017,0 l -7.06161,7.06161 c -0.35909,0.3548 -0.35909,0.93537 0,1.29448 l 7.06161,7.06161 c 0.35479,0.35478 0.93537,0.35478 1.29017,0 l 7.0616,-7.06161 c 0.3591,-0.35911 0.3591,-0.93968 0,-1.29448 l -1.02353,-1.02354 z m 0,0" id="path11"/>
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
  <linearGradient id="a" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(268.33 166.62)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient xlink:href="#a" id="b" y1="392.36" y2="365.2" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(345.57 152.44)"/>
  <linearGradient xlink:href="#a" id="c" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(.5 0 0 .48276 377.57 355.9)"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <path fill="#f9d24c" d="m389.57 517.8v28h22v-28h-14z"/>
   <rect opacity=".25" x="389.57" y="544.8" width="22" height="1"/>
   <rect opacity=".5" x="389.57" y="517.8" width="22" fill="#ffffff" height="1"/>
  </g>
  <rect width="1" x="392.57" y="518.8" fill="#ffffff" height="26" fill-opacity=".252"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <rect x="393.57" y="518.8" fill-opacity=".059" width="1" height="26"/>
   <path fill="url(#b)" d="m369.57 517.8v28h22v-28h-17z"/>
  </g>
  <path opacity=".75" fill="#ffffff" d="m402.57 535.57l-3.772-3.773 3.772-3.769 1.258 1.255-2.517 2.514 1.258 1.259 3.772-3.773-3.287-3.284c-.267-.267-.704-.267-.971 0l-5.312 5.313c-.27.267-.27.704 0 .974l5.312 5.313c.267.267.704.267.971 0l5.312-5.313c.27-.27.27-.707 0-.974l-.77-.77zm0 0"/>
  <path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m389.57 517.8v28h22v-28h-7z" color-interpolation="sRGB" text-rendering="auto" fill="url(#c)" shape-rendering="auto"/>
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
  <linearGradient id="a" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(518 82)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" id="b" color-interpolation="sRGB" color="#000000" d="m542 417.36v58h44v-58h-14z"/>
 </defs>
 <g transform="translate(-532-414.36)">
  <use fill="#f9d24c" xlink:href="#b"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <rect opacity=".25" x="542" y="474.36" width="44" height="1"/>
   <rect opacity=".5" x="542" y="417.36" width="44" fill="#ffffff" height="1"/>
  </g>
  <rect width="1" x="548" y="418.36" fill="#ffffff" height="56" fill-opacity=".321"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <rect x="549" y="418.36" fill-opacity=".057" width="1" height="56"/>
   <path opacity=".75" fill="#ffffff" d="m566 453.28l-6.916-6.917 6.916-6.911 2.307 2.302-4.614 4.609 2.307 2.308 6.916-6.917-6.03-6.02c-.489-.489-1.29-.489-1.779 0l-9.739 9.74c-.495.489-.495 1.29 0 1.786l9.739 9.74c.489.489 1.29.489 1.779 0l9.739-9.74c.495-.495.495-1.296 0-1.786l-1.412-1.412zm0 0"/>
  </g>
  <use fill="url(#a)" xlink:href="#b"/>
 </g>
		</svg>
	{/if}
