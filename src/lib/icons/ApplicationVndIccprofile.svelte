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
			<path fill="#fdd285" color="#000000" d="m8 1038.36c-1.072 3.818-4 6.073-4 8.182 0 2.109 1.791 3.818 4 3.818 2.209 0 4-1.709 4-3.818 0-2.109-2.928-4.364-4-8.182m2.75 6.2333a3.428571 3.272727 0 0 1 .678571 1.9485 3.428571 3.272727 0 0 1 -3.428571 3.2727 3.428571 3.272727 0 0 1 -2.037946 -.6456 4 3.818182 0 0 0 .895089 .1002 4 3.818182 0 0 0 4 -3.8182 4 3.818182 0 0 0 -.107143 -.8576" transform="translate(0-1036.36)"/>
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
  <path style="fill:#fdd285" id="rect4108" d="M 11,3 C 10.027093,6.4050342 7.6455537,9.3322765 6.5957031,11.675781 6.2282987,12.372552 6,13.15458 6,14 c 0,2.770002 2.2299982,5 5,5 2.770002,0 5,-2.229998 5,-5 0,-0.84542 -0.228299,-1.627448 -0.595703,-2.324219 C 14.354447,9.3322765 11.972897,6.4050342 11,3 Z m 2.283203,7.716797 C 14.3209,11.438005 15,12.635082 15,14 15,16.216002 13.216002,18 11,18 9.6350429,18 8.4379979,17.320951 7.7167969,16.283203 8.363845,16.732907 9.148916,17 10,17 c 2.216002,0 4,-1.783998 4,-4 0,-0.851084 -0.267093,-1.636155 -0.716797,-2.283203 z" transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#f9d24c" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m400.57 526.8c-1.072 3.818-4 6.073-4 8.182 0 2.109 1.791 3.818 4 3.818 2.209 0 4-1.71 4-3.818 0-2.109-2.928-4.364-4-8.182m2.75 6.2333a3.428571 3.272727 0 0 1 .67857 1.9485 3.428571 3.272727 0 0 1 -3.42857 3.2727 3.428571 3.272727 0 0 1 -2.03795 -.6456 4 3.818182 0 0 0 .89509 .1002 4 3.818182 0 0 0 4 -3.8182 4 3.818182 0 0 0 -.10714 -.8576" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
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
			<defs
     id="defs4">
    <linearGradient
       id="a"
       y1="3"
       y2="61"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1 0 0-1 0 64)">
      <stop
         stop-color="#f39c12"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#f89406"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="61"
       y2="47"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1 0 0-1 0 64)">
      <stop
         stop-color="#fddda3"
         id="stop12" />
      <stop
         offset="1"
         stop-color="#fde3a7"
         id="stop14" />
    </linearGradient>
    <linearGradient
       id="c"
       y1="17"
       x1="40"
       y2="31"
       x2="54"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#383e51"
         id="stop17" />
      <stop
         offset="1"
         stop-color="#655c6f"
         stop-opacity="0"
         id="stop19" />
    </linearGradient>
    <linearGradient
       gradientTransform="translate(0,-1)"
       x2="54"
       gradientUnits="userSpaceOnUse"
       y2="31"
       x1="40"
       y1="17"
       id="a-3">
      <stop
         id="stop4172"
         stop-color="#060606" />
      <stop
         id="stop4174"
         stop-opacity="0"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="translate(254,-36)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="336.36"
       y1="392.36"
       id="b-6">
      <stop
         id="stop4177"
         stop-opacity="0"
         stop-color="#ffffff" />
      <stop
         id="stop4179"
         stop-opacity=".2"
         stop-color="#ffffff"
         offset="1" />
    </linearGradient>
    <path
       d="m312 357.36v-58h30l14 14v44h-14z"
       id="c-7" />
    <linearGradient
       gradientTransform="translate(254,-36)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="336.36"
       y1="392.36"
       id="b-6-3">
      <stop
         id="stop4177-6"
         stop-opacity="0"
         stop-color="#ffffff" />
      <stop
         id="stop4179-7"
         stop-opacity=".2"
         stop-color="#ffffff"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="translate(254,-36)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="336.36"
       y1="392.36"
       id="linearGradient4168">
      <stop
         id="stop4170"
         stop-opacity="0"
         stop-color="#ffffff" />
      <stop
         id="stop4172-5"
         stop-opacity=".2"
         stop-color="#ffffff"
         offset="1" />
    </linearGradient>
  </defs>
  <use
     id="use4186"
     xlink:href="#c-7"
     style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#f9d24c;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;fill-opacity:1"
     x="0"
     y="0"
     width="100%"
     height="100%"
     transform="translate(-302,-297.36)" />
  <g
     style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     id="g4188"
     transform="matrix(1,0,0,-1,-302,-297.36)">
    <rect
       id="rect4190"
       height="1"
       width="30"
       y="-300.35999"
       x="312"
       style="opacity:0.5;fill:#ffffff" />
    <rect
       id="rect4192"
       height="1"
       width="44"
       y="-357.35999"
       x="312"
       style="opacity:0.25" />
  </g>
  <path
     id="path4196"
     d="M 54,16 40,2 40,16 Z"
     style="opacity:0.5;fill:#ffffff;fill-rule:evenodd" />
  <path
     style="opacity:0.1;fill:url(#a-3);fill-rule:evenodd"
     id="path4198"
     d="M 40,16 54,30 54,16 Z" />
  <path
     d="m 32,21 c -1.876,7 -7,11.134 -7,15 0,3.866 3.134,7 7,7 3.866,0 7,-3.134 7,-7 0,-3.866 -5.124,-8 -7,-15 m 4.8125,11.427734 C 37.581303,33.460266 37.997636,34.712687 38,36 c 0,3.313708 -2.686292,6 -6,6 -1.284867,-0.0025 -2.535,-0.417376 -3.566406,-1.183594 C 28.947146,40.936416 29.472616,40.998005 30,41 c 3.865993,0 7,-3.134007 7,-7 -0.0028,-0.529493 -0.06574,-1.056956 -0.1875,-1.572266"
     id="path35"
     style="color:#4d4d4d;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.9;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
  <use
     height="100%"
     width="100%"
     y="0"
     x="0"
     xlink:href="#c-7"
     id="use4202"
     style="fill:url(#b-6)"
     transform="translate(-302,-297.36)" />
		</svg>
	{/if}
