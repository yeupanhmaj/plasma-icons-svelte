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
     id="defs8" />
  
  <path
     style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#cf74e0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;fill-opacity:1"
     d="M 6,2 C 4.835,2.411 4,3.507 4,4.814 L 4,5.195 C 4,5.935 3.596,6.573 3,6.918 l 0,2.166 c 0.596,0.345 1,0.981 1,1.721 l 0,0.381 C 4,12.493 4.835,13.589 6,14 L 6,12.908 C 5.404,12.563 5,11.925 5,11.185 L 5,10.804 C 5,9.504 4.174,8.416 3.02,7.999 4.174,7.582 5,6.494 5,5.194 L 5,4.813 C 5,4.073 5.404,3.435 6,3.09 Z m 4,0 0,1.092 c 0.596,0.345 1,0.983 1,1.723 l 0,0.381 c 0,1.299 0.827,2.388 1.98,2.805 C 11.826,8.417 11,9.506 11,10.806 l 0,0.381 c 0,0.74 -0.404,1.378 -1,1.723 l 0,1.092 c 1.165,-0.411 2,-1.507 2,-2.814 l 0,-0.381 c 0,-0.74 0.404,-1.376 1,-1.721 L 13,6.92 C 12.404,6.575 12,5.937 12,5.197 L 12,4.816 C 12,3.509 11.165,2.413 10,2.002"
     id="path4-3" />
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
    <path style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:oxygen;-inkscape-font-specification:oxygen;letter-spacing:0px;word-spacing:0px;fill:#cf74e0;fill-opacity:1;stroke:none" d="m 336.04492,537.3622 c -1.77683,0 -2.52148,0.70637 -2.52148,2.50977 l 0,2.4414 c 0,1.1138 -0.0342,2.4043 -1.01563,2.4043 l -0.50781,0 0,1.28906 0.50781,0 c 0.98148,0 1.01563,1.2905 1.01563,2.4043 l 0,2.4414 c 0,1.8034 0.74465,2.50977 2.52148,2.50977 l 0,-1.18359 c -1.18455,0 -1.20117,-0.47834 -1.20117,-2.21094 l 0,-2.01563 c 0,-0.8309 -0.20471,-2.06737 -1.20313,-2.58007 0.99842,-0.5127 1.20313,-1.75104 1.20313,-2.58204 l 0,-2.0332 c 0,-1.7326 0.0166,-2.21094 1.20117,-2.21094 z m 1.89453,0 0,1.18359 c 1.18456,0 1.2168,0.47834 1.2168,2.21094 l 0,2.0332 c 0,0.831 0.2047,2.06934 1.20312,2.58204 -0.99842,0.5127 -1.20312,1.74917 -1.20312,2.58007 l 0,2.01563 c 0,1.7326 -0.0322,2.21094 -1.2168,2.21094 l 0,1.18359 c 1.77684,0 2.53711,-0.70637 2.53711,-2.50977 l 0,-2.4414 c 0,-1.1138 0.0686,-2.4043 1.03321,-2.4043 l 0.49023,0 0,-1.28906 -0.49023,0 c -0.96457,0 -1.03321,-1.2905 -1.03321,-2.4043 l 0,-2.4414 c 0,-1.8034 -0.76027,-2.50977 -2.53711,-2.50977 z" id="path4121"/>
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
       x2="0"
       gradientUnits="userSpaceOnUse"
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
       y2="24"
       x1="47"
       x2="54"
       gradientUnits="userSpaceOnUse"
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
  </defs>
  <use
     xlink:href="#c"
     id="use21"
     style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#cf74e0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
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
     style="color:#000000;opacity:0.5;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ffffff;fill-rule:evenodd;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto" />
  <path
     style="opacity:0.1;fill:url(#b);fill-rule:evenodd"
     id="path31"
     d="m 20,9 7,7 0,-7 z" />
  <path
     style="color:#000000;opacity:0.75;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ffffff;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     d="m 14,10 c -1.165,0.411 -2,1.507 -2,2.814 l 0,0.381 c 0,0.74 -0.404,1.378 -1,1.723 l 0,2.166 c 0.596,0.345 1,0.981 1,1.721 l 0,0.381 c 0,1.307 0.835,2.403 2,2.814 l 0,-1.092 c -0.596,-0.345 -1,-0.983 -1,-1.723 l 0,-0.381 c 0,-1.3 -0.826,-2.388 -1.98,-2.805 C 12.174,15.582 13,14.494 13,13.194 l 0,-0.381 c 0,-0.74 0.404,-1.378 1,-1.723 z m 4,0 0,1.092 c 0.596,0.345 1,0.983 1,1.723 l 0,0.381 c 0,1.299 0.827,2.388 1.98,2.805 C 19.826,16.417 19,17.506 19,18.806 l 0,0.381 c 0,0.74 -0.404,1.378 -1,1.723 l 0,1.092 c 1.165,-0.411 2,-1.507 2,-2.814 l 0,-0.381 c 0,-0.74 0.404,-1.376 1,-1.721 l 0,-2.166 c -0.596,-0.345 -1,-0.983 -1,-1.723 l 0,-0.381 c 0,-1.307 -0.835,-2.403 -2,-2.814"
     id="path35" />
  <use
     height="100%"
     width="100%"
     y="0"
     x="0"
     style="fill:url(#a)"
     id="use35"
     xlink:href="#c"
     transform="translate(-384.57,-515.8)" />
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
			<defs
     id="defs4">
    <linearGradient
       id="a"
       y1="17"
       y2="31"
       x1="40"
       x2="54"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#060606"
         id="stop7" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="392.36"
       y2="336.36"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(384,822)">
      <stop
         stop-color="#ffffff"
         stop-opacity="0"
         id="stop12" />
      <stop
         offset="1"
         stop-color="#ffffff"
         stop-opacity=".2"
         id="stop14" />
    </linearGradient>
    <path
       id="c"
       d="m442 1215.36v-58h30l14 14v44h-14z" />
  </defs>
  <use
     height="100%"
     width="100%"
     y="0"
     x="0"
     style="fill:#cf74e0"
     id="use19"
     xlink:href="#c"
     transform="translate(-432,-1154.36)" />
  <rect
     x="10"
     y="-3.9999855"
     width="30"
     height="1"
     id="rect23"
     style="color:#000000;opacity:0.5;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ffffff;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     transform="scale(1,-1)" />
  <rect
     x="10"
     y="-60.999985"
     width="44"
     height="1"
     id="rect25"
     style="color:#000000;opacity:0.25;color-interpolation:sRGB;color-interpolation-filters:linearRGB;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     transform="scale(1,-1)" />
  <path
     d="M 54,17 40,3 40,17 Z"
     id="path29"
     style="opacity:0.5;fill:#ffffff;fill-rule:evenodd" />
  <path
     d="M 40,17 54,31 54,17 Z"
     id="path31"
     style="opacity:0.1;fill:url(#a);fill-rule:evenodd" />
  <path
     style="color:#000000;opacity:0.75;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ffffff;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     id="path33-6"
     d="m 29,22 c -2.216,0 -4,1.784 -4,4 l 0,3 c 0,1.662 -1.338,3 -3,3 l 0,1 c 2.216,0 4,-1.784 4,-4 l 0,-3 c 0,-1.662 1.338,-3 3,-3 z m -7,11 0,1 c 1.662,0 3,1.338 3,3 l 0,3 c 0,2.216 1.784,4 4,4 l 0,-1 c -1.662,0 -3,-1.338 -3,-3 l 0,-3 c 0,-2.216 -1.784,-4 -4,-4 m 13,-11 0,1 c 1.662,0 3,1.338 3,3 l 0,3 c 0,2.216 1.784,4 4,4 l 0,-1 c -1.662,0 -3,-1.338 -3,-3 l 0,-3 c 0,-2.216 -1.784,-4 -4,-4 m 7,11 c -2.216,0 -4,1.784 -4,4 l 0,3 c 0,1.662 -1.338,3 -3,3 l 0,1 c 2.216,0 4,-1.784 4,-4 l 0,-3 c 0,-1.662 1.338,-3 3,-3 z" />
  <use
     height="100%"
     width="100%"
     y="0"
     x="0"
     style="fill:url(#b)"
     id="use35"
     xlink:href="#c"
     transform="translate(-432,-1154.36)" />
		</svg>
	{/if}
