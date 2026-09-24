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
          d="M 8,2 C 8,2 6.5,3.9931391 2,4.4931641 2,4.4931641 2,11.493575 8,14 14,11.493575 14,4.4931641 14,4.4931641 9.5,3.9931391 8,2 8,2 Z m 0,1.0327148 c 1.190246,1.008525 2.90787,1.6813196 5.134277,2.0200196 -0.120944,1.0839 -0.236906,1.8995883 -0.517089,2.6879883 C 12.02837,9.3975477 11.341831,10.405496 10.726074,11.130371 9.771904,12.253646 8.905394,12.708244 8,13.160644 7.094606,12.708244 6.228096,12.253646 5.2739258,11.130371 4.658169,10.405496 3.97163,9.3975478 3.3828125,7.7407227 3.102629,6.9523227 2.9866669,6.1366344 2.8657227,5.0527344 5.0921299,4.7140344 6.8097538,4.0412398 8,3.0327148 Z"
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 3 C 11 3 9 5.6575188 3 6.3242188 C 3 6.3242188 3 15.6581 11 19 C 19 15.6581 19 6.3242188 19 6.3242188 C 13 5.6575188 11 3 11 3 z M 11 4.3769531 C 12.586995 5.7216531 14.87716 6.6187125 17.845703 7.0703125 C 17.684444 8.5155125 17.529828 9.6030969 17.15625 10.654297 C 16.37116 12.863397 15.455775 14.207328 14.634766 15.173828 C 13.362538 16.671528 12.207192 17.277659 11 17.880859 C 9.792808 17.277659 8.6374614 16.671528 7.3652344 15.173828 C 6.5442254 14.207328 5.62884 12.863397 4.84375 10.654297 C 4.470172 9.6030969 4.3155559 8.5155125 4.1542969 7.0703125 C 7.1228399 6.6187125 9.413005 5.7216531 11 4.3769531 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 12 11 C 11.445981 11 11 11.446 11 12 L 11 18 C 11 18.5541 11.445981 19 12 19 L 18 19 C 18.554019 19 19 18.5541 19 18 L 19 12 C 19 11.446 18.554019 11 18 11 L 12 11 z "
     class="ColorScheme-NegativeText"
     />
  <path
     style="fill:#ffffff"
     d="M 13 12 L 12 13 L 14 15 L 12 17 L 13 18 L 15 16 L 17 18 L 18 17 L 16 15 L 18 13 L 17 12 L 15 14 L 13 12 z "
     id="path4141" />
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
  <linearGradient inkscape:collect="always" id="linearGradient4344">
   <stop style="stop-color:#ed868d" id="stop4346"/>
   <stop offset="1" style="stop-color:#fbe6e8" id="stop4348"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4435">
   <stop style="stop-color:#c61423" id="stop4437"/>
   <stop offset="1" style="stop-color:#dc2b41" id="stop4439"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" id="linearGradient4179" xlink:href="#linearGradient4344" y1="201.93361" y2="177.93361" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 0.000002 -2.999999)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4435" id="linearGradient4424" y1="58" y2="6" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata3814"/>
 <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -736.85718 -157.93361)">
  <path style="fill:url(#linearGradient4424);stroke-linecap:square;stroke-width:2" id="rect4186-2-1" d="M 32 6 C 25.66667 9.35447 19.33333 10.72491 13 12 L 13 37 C 13 44 23.26331 53.561337 32 57.998047 C 40.73669 53.561337 51 44 51 37 L 51 12 C 44.66667 10.72491 38.33333 9.35447 32 6 z " transform="matrix(1 0 0 1 736.85718 157.93361)"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4191-1-7);opacity:0.2;fill-rule:evenodd" id="path4184-5" d="m 779.62257,175.16823 -8.76539,9.76538 -2,2 -10,10 -1.35192,1.11731 17.0391,17.88269 20.31282,0 0,-25.53077 z"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4179)" id="rect4168" d="m 779.44312,174.93361 1.41406,1.41406 -10.58594,10.58594 10.58594,10.58594 -1.41406,1.41406 -10.58594,-10.58594 -10.58594,10.58594 -1.41406,-1.41406 10.58594,-10.58594 -10.58594,-10.58594 1.41406,-1.41406 10.58594,10.58594 10.58594,-10.58594 z"/>
  <path inkscape:connector-curvature="0" style="fill:#aa111e;stroke-linecap:square;stroke-width:2" id="rect4186-2-1-5" d="m 749.85718,192.93361 0,2 c 0,7 10.26331,16.56134 19,20.99805 8.73669,-4.43671 19,-13.99805 19,-20.99805 l 0,-2 c 0,7 -10.26331,16.56134 -19,20.99805 -8.73669,-4.43671 -19,-13.99805 -19,-20.99805 z"/>
 </g>
		</svg>
	{/if}
