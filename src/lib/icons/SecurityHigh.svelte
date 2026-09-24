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
			<path 
        style="fill:currentColor;fill-opacity:1;stroke:none" 
          d="M 8,2 C 8,2 6.5,3.9931391 2,4.4931641 2,4.4931641 2,11.493575 8,14 14,11.493575 14,4.4931641 14,4.4931641 9.5,3.9931391 8,2 8,2 Z m 0,1.0327148 c 1.1902463,1.008525 2.90787,1.6813196 5.134277,2.0200196 C 13.013333,6.1366343 12.897371,6.9523225 12.617188,7.7407227 12.02837,9.3975477 11.341831,10.405496 10.726074,11.130371 9.7719035,12.253646 8.905394,12.708244 8,13.160644 7.094606,12.708244 6.2280961,12.253646 5.2739258,11.130371 4.658169,10.405496 3.97163,9.3975477 3.3828125,7.7407227 3.102629,6.9523225 2.9866669,6.1366343 2.8657227,5.0527344 5.0921299,4.7140344 6.8097538,4.0412398 8,3.0327148 Z M 8,3.9321289 C 6.6923817,4.8398539 5.2233869,5.2995548 3.7490234,5.6123046 4.4471579,9.5738045 5.9510862,11.267813 8,12.328613 10.048914,11.267813 11.552843,9.5738045 12.250977,5.6123046 10.776613,5.2995547 9.3076183,4.8398539 8,3.9321289 Z"
          class="ColorScheme-Text"/>
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
			<g
     transform="translate(0,-1030.3622)">
    <path
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
       d="M 11 3 C 11 3 9 5.6575188 3 6.3242188 C 3 6.3242188 3 15.6581 11 19 C 19 15.6581 19 6.3242188 19 6.3242188 C 13 5.6575188 11 3 11 3 z M 11 4.3769531 C 12.586995 5.7216531 14.87716 6.6187125 17.845703 7.0703125 C 17.684444 8.5155125 17.529828 9.6030967 17.15625 10.654297 C 16.37116 12.863397 15.455775 14.207328 14.634766 15.173828 C 13.362538 16.671528 12.207192 17.277659 11 17.880859 C 9.792808 17.277659 8.6374614 16.671528 7.3652344 15.173828 C 6.5442254 14.207328 5.62884 12.863397 4.84375 10.654297 C 4.470172 9.6030967 4.3155559 8.5155125 4.1542969 7.0703125 C 7.1228399 6.6187125 9.413005 5.7216531 11 4.3769531 z M 11 5.5761719 C 9.256509 6.7864719 7.2978492 7.3994064 5.3320312 7.8164062 C 6.2628772 13.098406 8.268115 15.357084 11 16.771484 C 13.731885 15.357084 15.737124 13.098406 16.667969 7.8164062 C 14.702151 7.3994063 12.743491 6.7864719 11 5.5761719 z "
       transform="translate(0,1030.3622)"
       class="ColorScheme-Text"
       id="path4943-7" />
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
    d="m 15,1041.3622 c 2.216,0 4,1.784 4,4 0,2.216 -1.784,4 -4,4 -2.216,0 -4,-1.784 -4,-4 0,-2.216 1.784,-4 4,-4 z"
       id="rect4153" />
    <path
       style="fill:#ffffff"
       d="M 17 13 L 14 16 L 13 15 L 12 16 L 13 17 L 14 18 L 18 14 L 17 13 z "
       transform="translate(0,1030.3622)"
       id="path4142" />
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
			<defs id="defs3811">
  <linearGradient inkscape:collect="always" id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4191-1-7" xlink:href="#linearGradient4227" y1="9" y2="23" x1="9.00001" gradientUnits="userSpaceOnUse" x2="23.00004" gradientTransform="matrix(2 0 0 2 735.85719 158.93361)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4298" id="linearGradient4181" y1="6" x1="32" y2="57" x2="31" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4374">
   <stop style="stop-color:#bcfd93" id="stop4376"/>
   <stop offset="1" style="stop-color:#fafff5" id="stop4378"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4298">
   <stop style="stop-color:#42a603" id="stop4300"/>
   <stop offset="1" style="stop-color:#78da06" id="stop4302"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4374" id="linearGradient4189" y1="199.93361" y2="175.93361" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata3814"/>
 <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -736.85718 -157.93361)">
  <path style="fill:url(#linearGradient4181);stroke-linecap:square;stroke-width:2" id="rect4186-2-1" d="M 32 6 C 25.66667 9.35447 19.33333 10.72491 13 12 L 13 37 C 13 44 23.26331 53.561337 32 57.998047 C 40.73669 53.561337 51 44 51 37 L 51 12 C 44.66667 10.72491 38.33333 9.35447 32 6 z " transform="matrix(1 0 0 1 736.85718 157.93361)"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4191-1-7);opacity:0.2;fill-rule:evenodd" id="path4184-5" d="m 779.85718,175.93361 -8,14 -7,8 -7,-3 8,8 12,13 17,0 0,-27 z"/>
  <path inkscape:connector-curvature="0" style="shape-rendering:auto;color-interpolation-filters:linearRGB;fill:url(#linearGradient4189);image-rendering:auto;text-rendering:auto;color:#000000;fill-rule:evenodd;stroke-width:2;color-rendering:auto;color-interpolation:sRGB" id="path4179" d="m 779.01953,175.38672 -14.42969,22.12695 -6.15234,-4.39453 -1.16211,1.62891 7.84961,5.60547 15.57031,-23.87305 -1.67578,-1.09375 z"/>
  <path inkscape:connector-curvature="0" style="fill:#368902;stroke-linecap:square;stroke-width:2" id="rect4186-2-1-5" d="m 749.85718,192.93361 0,2 c 0,7 10.26331,16.56134 19,20.99805 8.73669,-4.43671 19,-13.99805 19,-20.99805 l 0,-2 c 0,7 -10.26331,16.56134 -19,20.99805 -8.73669,-4.43671 -19,-13.99805 -19,-20.99805 z"/>
 </g>
		</svg>
	{/if}
