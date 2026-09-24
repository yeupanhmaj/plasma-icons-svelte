<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 64,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

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
       y1="61"
       y2="3"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1 0 0-1 0 64)">
      <stop
         stop-color="#26c281"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#3fc380"
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
         stop-color="#036b53"
         id="stop12" />
      <stop
         offset="1"
         stop-color="#036b53"
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
       gradientTransform="translate(-45.675,-337.95)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="336.36"
       y1="392.36"
       id="a-3">
      <stop
         id="stop4172"
         stop-opacity="0"
         stop-color="#ffffff" />
      <stop
         id="stop4174"
         stop-opacity=".2"
         stop-color="#ffffff"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="translate(0,-0.005)"
       x2="54"
       gradientUnits="userSpaceOnUse"
       y2="31"
       x1="40"
       y1="17"
       id="b-6">
      <stop
         id="stop4177"
         stop-color="#060606" />
      <stop
         id="stop4179"
         stop-opacity="0"
         offset="1" />
    </linearGradient>
    <path
       d="m12.325 55.42v-58h30l14 14v44h-14z"
       id="c-7" />
    <linearGradient
       xlink:href="#linearGradient6251"
       id="linearGradient7808"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-48,-332.36218)"
       x1="58"
       y1="392.36221"
       x2="58"
       y2="336.36221" />
    <linearGradient
       id="linearGradient6251">
      <stop
         style="stop-color:#ffffff;stop-opacity:0"
         offset="0"
         id="stop6253" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0.2"
         offset="1"
         id="stop6255" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient9654"
       id="linearGradient7802"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(0,1.9073486e-5)"
       x1="40"
       y1="17"
       x2="54"
       y2="31" />
    <linearGradient
       id="linearGradient9654">
      <stop
         style="stop-color:#060606;stop-opacity:1"
         offset="0"
         id="stop9656" />
      <stop
         style="stop-color:#000000;stop-opacity:0"
         offset="1"
         id="stop9658" />
    </linearGradient>
  </defs>
  <path
     style="fill:#4d4d4d;fill-opacity:1"
     id="path7156"
     d="M 10,61.000019 V 3.0000191 H 40 L 54,17.000019 v 30 14 H 40 Z" />
  <rect
     width="30"
     x="10"
     y="-4.0000029"
     height="1"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect7158"
     transform="scale(1,-1)" />
  <rect
     width="44"
     x="10"
     y="-61"
     height="1"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.25;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect7160"
     transform="scale(1,-1)" />
  <path
     style="opacity:0.6;fill:#000000;fill-opacity:1;fill-rule:evenodd"
     id="path7162"
     d="M 54,17.000019 40,3.0000191 V 17.000019 Z" />
  <path
     style="opacity:0.2;fill:url(#linearGradient7802);fill-rule:evenodd"
     id="path7514"
     d="m 40,17.000019 14,14 v -14 z" />
  <path
     d="M 10,61.000019 V 3.0000191 H 40 L 54,17.000019 v 30 14 H 40 Z"
     id="path7520"
     style="fill:url(#linearGradient7808);fill-opacity:1" />
  <g
     id="g971"
     style="opacity:1">
    <path
       id="path33"
       d="m 21,31.51334 c 7.042954,0 8.346401,8.961469 11.453204,8.989262 C 35.560008,40.527442 36.959752,31.491767 44,31.491767"
       style="fill:none;stroke:#1d99f3;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       id="path35-3"
       d="m 21,30.54459 c 7.042954,0 8.475301,-6.100795 11.484869,-6.094309 2.990432,0.0064 4.474883,7.041486 11.515131,7.041486"
       style="fill:none;stroke:#da4453;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       style="fill:none;stroke:#d6d6d6;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"
       d="m 21,30.54459 c 7.042954,0 7.46967,-10.014047 11.46967,-10.014047 4,0 4.490082,10.961224 11.53033,10.961224"
       id="path41" />
    <g
       id="g959"
       style="">
      <rect
         id="rect39"
         height="23"
         y="20"
         x="20"
         width="1"
         style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#d6d6d6;fill-opacity:1;stroke-width:1.10902882;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto" />
      <g
         id="g951"
         style="">
        <rect
           y="31"
           x="20"
           height="1"
           width="24"
           id="rect919"
           style="fill:#d6d6d6;fill-opacity:1;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none" />
        <rect
           y="30"
           x="26"
           height="3"
           width="1"
           id="rect937"
           style="fill:#d6d6d6;fill-opacity:1;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none" />
        <rect
           y="30"
           x="32"
           height="3"
           width="1"
           id="rect939"
           style="fill:#d6d6d6;fill-opacity:1;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none" />
        <rect
           y="30"
           x="38"
           height="3"
           width="1"
           id="rect941"
           style="fill:#d6d6d6;fill-opacity:1;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none" />
      </g>
    </g>
  </g>
</svg>
