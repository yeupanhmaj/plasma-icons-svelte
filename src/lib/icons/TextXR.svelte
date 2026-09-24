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
			<defs
     id="defs18" />
  
  <path
     style="opacity:1;fill:#13a4f7;fill-opacity:1;fill-rule:evenodd"
     id="path20"
     d="m 13.499459,13.997805 -3.6800719,0.0022 -2.5078901,-3.605693 c 0,0 -0.4037771,-0.6754531 -0.6520471,-0.8715798 C 6.452474,9.3594771 6.36399,9.3010394 6.1591589,9.3010394 l -0.465443,0 0.00108,4.6942456 -3.194796,0.0011 0,-11.9963895 6.9558382,0 c 0,0 2.8189049,0.5059325 2.8762809,3.2218164 C 12.395919,8.249596 9.6075841,9.1404512 9.6075841,9.1404512 9.9899101,9.2927579 13.065665,13.295897 13.5,13.995338 M 7.9849828,4.601635 5.72643,4.6005441 5.7253519,6.6404515 7.9849828,6.6399388 c 0,0 1.046705,-0.00327 1.046705,-1.0374239 0,-1.0551614 -1.046705,-0.9998872 -1.046705,-0.9998872" />
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
    <path style="opacity:1;fill:#209ae7;fill-opacity:1;fill-rule:evenodd" id="path20" d="m 344.27215,553.35942 -4.86602,0.003 -3.31609,-4.80759 c 0,0 -0.5339,-0.90062 -0.86217,-1.1621 -0.27368,-0.21767 -0.39068,-0.29556 -0.66152,-0.29556 l -0.61544,0 10e-4,6.25899 -4.22436,10e-4 0,-15.99519 9.19743,0 c 0,0 3.72735,0.67458 3.8032,4.29575 0.0844,4.03706 -3.60253,5.22487 -3.60253,5.22487 0.50554,0.20307 4.57249,5.54058 5.14679,6.4732 m -7.2923,-12.52495 -2.9864,-0.001 -9.9e-4,2.71988 2.98782,-6.8e-4 c 0,0 1.38402,-0.004 1.38402,-1.38325 0,-1.40688 -1.38402,-1.33317 -1.38402,-1.33317"/>
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
			<defs
     id="defs4">
    <linearGradient
       id="a"
       y1="392.36"
       y2="365.36"
       gradientUnits="userSpaceOnUse"
       x2="0"
       gradientTransform="translate(309.57,152.44)">
      <stop
         stop-color="#ffffff"
         stop-opacity="0"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#ffffff"
         stop-opacity=".2"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="17"
       x1="47"
       y2="24"
       gradientUnits="userSpaceOnUse"
       x2="54"
       gradientTransform="translate(-27,-8)">
      <stop
         stop-color="#060606"
         id="stop12" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop14" />
    </linearGradient>
    <path
       id="c"
       d="m389.57 545.8v-28h15l7 7v21h-14z" />
    <linearGradient
       gradientTransform="translate(-3.5810018,-18.949931)"
       id="b-3"
       y1="41"
       x1="41"
       y2="18.25"
       x2="21.129999"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#502ae3"
         id="stop12-6" />
      <stop
         offset="1"
         stop-color="#4db4f6"
         id="stop14-7" />
    </linearGradient>
  </defs>
  <use
     xlink:href="#c"
     id="use21"
     style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#13a4f7;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     x="0"
     y="0"
     width="100%"
     height="100%"
     transform="translate(-384.57,-515.8)" />
  <rect
     style="color:#000000;opacity:0.5;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ffffff;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     id="rect25"
     height="1"
     width="15"
     y="-2.9999878"
     x="5.0000072"
     transform="scale(1,-1)" />
  <rect
     style="color:#000000;opacity:0.25;color-interpolation:sRGB;color-interpolation-filters:linearRGB;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     id="rect27"
     height="1"
     width="22"
     y="-29.999989"
     x="5.0000072"
     transform="scale(1,-1)" />
  <path
     d="M 27,9 20,2 20,9 Z"
     id="path29"
     style="color:#000000;opacity:0.6;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill-rule:evenodd;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto" />
  <path
     style="opacity:0.1;fill:url(#b);fill-rule:evenodd"
     id="path31"
     d="m 20,9 7,7 0,-7 z" />
  <use
     height="100%"
     width="100%"
     y="0"
     x="0"
     style="fill:url(#a)"
     id="use33"
     xlink:href="#c"
     transform="translate(-384.57,-515.8)" />
  <path
     style="opacity:0.7;fill:#000000;fill-opacity:1;fill-rule:evenodd"
     id="path20"
     d="m 20.999512,21.498117 -3.345521,0.0019 -2.279905,-3.305355 c 0,0 -0.367067,-0.619186 -0.592766,-0.798966 -0.188164,-0.149656 -0.268598,-0.203208 -0.454812,-0.203208 l -0.423126,0 9.75e-4,4.303226 -2.904357,0.0014 0,-10.997131 6.323485,0 c 0,0 2.562641,0.463792 2.6148,2.953447 0.05801,2.77558 -2.476844,3.592237 -2.476844,3.592237 0.347567,0.139615 3.143707,3.80931 3.538559,4.450491 m -5.013649,-8.611232 -2.053232,-0.0014 -9.75e-4,1.86999 2.054207,-4.78e-4 c 0,0 0.951544,-0.0029 0.951544,-0.951013 0,-0.967269 -0.951544,-0.916587 -0.951544,-0.916587" />
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
			<defs id="defs43">
    <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54">
      <stop stop-color="#060606" id="stop46"/>
      <stop offset="1" stop-opacity="0" id="stop48"/>
    </linearGradient>
    <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(264,982)">
      <stop stop-color="#ffffff" stop-opacity="0" id="stop51"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity=".2" id="stop53"/>
    </linearGradient>
    <path id="c" d="m322 1375.36v-58h30l14 14v44h-14z"/>
  </defs>
  <use xlink:href="#c" id="use60" style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#13a4f7;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto" x="0" y="0" width="100%" height="100%" transform="translate(-312,-1314.36)"/>
  <rect style="color:#000000;opacity:0.5;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ffffff;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto" id="rect64" height="1" width="30" y="-3.9999855" x="10" transform="scale(1,-1)"/>
  <rect style="color:#000000;opacity:0.25;color-interpolation:sRGB;color-interpolation-filters:linearRGB;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto" id="rect66" height="1" width="44" y="-60.999985" x="10" transform="scale(1,-1)"/>
  <path d="M 54,17 40,3 40,17 Z" id="path70" style="opacity:0.6;fill-rule:evenodd"/>
  <path d="M 40,17 54,31 54,17 Z" id="path72" style="opacity:0.2;fill:url(#a);fill-rule:evenodd"/>
  <g transform="matrix(1.1874666,0,0,1.1874666,-368.17624,-615.59939)" id="layer1" style="opacity:0.7;fill:#000000;fill-opacity:1">
    <path d="m 344.27215,553.35942 -4.86602,0.003 -3.31609,-4.80759 c 0,0 -0.5339,-0.90062 -0.86217,-1.1621 -0.27368,-0.21767 -0.39068,-0.29556 -0.66152,-0.29556 l -0.93487,-0.0507 0,6.3299 -3.90393,-0.0192 0,-15.99519 9.19743,0 c 0,0 3.72735,0.67458 3.8032,4.29575 0.0844,4.03706 -3.60253,5.22487 -3.60253,5.22487 0.50554,0.20307 4.57249,5.54058 5.14679,6.4732 M 337,540.30942 l -3.36852,0 0,3.36852 3.36852,0 c 0,0 1.68425,0 1.64719,-1.57271 C 338.60487,540.30954 337,540.30942 337,540.30942" id="path20" style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:evenodd"/>
  </g>
  <use height="100%" width="100%" y="0" x="0" style="fill:url(#b)" id="use76" xlink:href="#c" transform="translate(-312,-1314.36)"/>
		</svg>
	{/if}
