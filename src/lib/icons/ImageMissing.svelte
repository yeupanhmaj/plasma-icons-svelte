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
			<g transform="translate(-326 -534.36)">
  <path class="ColorScheme-NegativeText" d="m328 536.36v12h12v-12zm1 1h10v10h-10z" fill="currentColor"/>
  <path d="m336.52 539.25a4 4 45 0 0-5.5367 0.48199 4 4 45 0 0 0.28865 5.5505 4 4 45 0 0 5.5574-0.0967l0.3646-0.41985a4 4 45 0 0-0.67396-5.516zm-0.39361 0.99022a3 3 45 0 1 0.31765 3.8532l-4.1404-4.1404a3 3 45 0 1 3.8228 0.28726zm-4.5299 0.41985 4.1018 4.1018a3 3 45 0 1-3.8228-0.28726 3 3 45 0 1-0.27897-3.8145z" class="ColorScheme-NegativeText" fill="currentColor"/>
 </g>
		</svg>
	{:else if numericSize <= 43}
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
			<g transform="translate(-326 -534.36)">
  <path transform="translate(326 534.36)" d="m3 5v13h16v-13zm1 1h14v11h-14zm6.4883 0.58398a5.0356 4.8826 0 0 0-4.498 5.1953 5.0356 4.8826 0 0 0 5.1973 4.541 5.0356 4.8826 0 0 0 4.8613-4.8809l-0.048828-0.67578a5.0356 4.8826 0 0 0-5.5117-4.1797zm0.09375 0.96289a4.013 3.9098 0 0 1 4.3926 3.3477l0.03906 0.54102a4.013 3.9098 0 0 1-0.93359 2.5059l-5.5195-5.5215a4.013 3.9098 0 0 1 2.0215-0.87305zm-2.7559 1.5527 5.5078 5.5098a4.013 3.9098 0 0 1-2.1953 0.73438 4.013 3.9098 0 0 1-4.1426-3.6367 4.013 3.9098 0 0 1 0.83008-2.6074z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"/>
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
  <linearGradient id="a" x2="0" y1="392.36" y2="336.36" gradientTransform="translate(-47.987-332.35)" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fff" stop-opacity="0" offset="0"/>
   <stop stop-color="#fff" stop-opacity=".2" offset="1"/>
  </linearGradient>
  <linearGradient id="b" x1="40" x2="54" y1="17" y2="31" gradientTransform="translate(.013.016)" gradientUnits="userSpaceOnUse">
   <stop stop-color="#060606" offset="0"/>
   <stop stop-opacity="0" offset="1"/>
  </linearGradient>
  <path id="c" d="m10.01 61.02v-58h30l14 14v44h-14z"/>
  <radialGradient id="radialGradient11997" cx="16.5" cy="26.5" r="11.5" gradientTransform="matrix(.9167 .91383 -.9167 .91383 41.189 -4.0389)" gradientUnits="userSpaceOnUse">
   <stop stop-color="#da4453" offset="0"/>
   <stop stop-color="#da4453" offset="1"/>
  </radialGradient>
 </defs>
 <use fill="#cccccc" xlink:href="#c"/>
 <g transform="scale(1-1)" color="#000000" color-rendering="auto" image-rendering="auto" shape-rendering="auto" text-rendering="auto">
  <rect x="10.01" y="-4.02" width="30" height="1" fill="#fff" opacity=".5"/>
  <rect x="10.01" y="-61.02" width="44" height="1" opacity=".25"/>
 </g>
 <g fill-rule="evenodd">
  <path d="m54.01 17.02-14-14v14z" fill="#fff" opacity=".5"/>
  <path d="m40.01 17.02 14 14v-14z" fill="url(#b)" opacity=".2"/>
 </g>
 <use fill="url(#a)" xlink:href="#c"/>
 <path d="m42.564 24.747a14.909 14.862 0 0 0-21.084 0 14.909 14.862 0 0 0 0 21.018 14.909 14.862 0 0 0 21.084 0 14.909 14.862 0 0 0 0-21.018zm-2.7125 2.8147a10.942 10.994 65.686 0 1 1.2264 13.98l-15.199-15.151a10.942 10.994 65.686 0 1 13.973 1.1708zm-16.724 1.5689 15.151 15.103a10.942 10.994 65.686 0 1-13.99-1.1566 10.942 10.994 65.686 0 1-1.1602-13.947z" fill="url(#radialGradient11997)" stroke-width="1.2944"/>
		</svg>
	{/if}
