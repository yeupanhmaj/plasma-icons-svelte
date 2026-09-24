<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

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
	<defs
     id="defs39">
    <linearGradient
       id="linearGradient1279"
       gradientUnits="userSpaceOnUse"
       x1="8.2082129"
       x2="19.360508"
       xlink:href="#c"
       y1="6.4030333"
       y2="18.837368" />
    <linearGradient
       id="linearGradient1283"
       gradientUnits="userSpaceOnUse"
       x1="5.3750029"
       x2="14.75002"
       y1="7.0000119"
       y2="16.37501">
      <stop
         offset="0"
         id="stop8-3" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop10-6" />
    </linearGradient>
    <linearGradient
       xlink:href="#c"
       id="linearGradient1287"
       gradientUnits="userSpaceOnUse"
       x1="8.2082129"
       y1="6.4030333"
       x2="19.360508"
       y2="18.837368"
       gradientTransform="translate(-0.99999995,-6)" />
  </defs>
  
  <linearGradient
     id="a"
     gradientUnits="userSpaceOnUse"
     x1="8.2082129"
     x2="19.360508"
     xlink:href="#c"
     y1="6.4030333"
     y2="18.837368" />
  <linearGradient
     id="b"
     gradientTransform="matrix(.41666692 0 0 .40833269 -159.23827 -203.25094)"
     gradientUnits="userSpaceOnUse"
     x2="0"
     y1="543.79797"
     y2="502.65509">
    <stop
       offset="0"
       stop-color="#c6cdd1"
       id="stop3" />
    <stop
       offset="1"
       stop-color="#e0e5e7"
       id="stop5" />
  </linearGradient>
  <linearGradient
     id="c"
     gradientUnits="userSpaceOnUse"
     x1="5.375003"
     x2="14.75002"
     y1="7.000012"
     y2="16.375009">
    <stop
       offset="0"
       id="stop8" />
    <stop
       offset="1"
       stop-opacity="0"
       id="stop10" />
  </linearGradient>
  <path
     d="m1.000006 2h19.999994v18h-19.999994z"
     fill="url(#b)"
     stroke-width=".633866"
     id="path13" />
  <path
     d="m2 18 18-11 1 1v12h-17z"
     fill="url(#c)"
     fill-rule="evenodd"
     opacity=".2"
     stroke-width=".625"
     id="path15" />
  <path
     d="m1 2h20.000002v3h-20.000002z"
     fill="#566069"
     stroke-width=".684653"
     id="path17" />
  <path
     d="m1.000027 5h19.999973v1h-19.999973z"
     fill="#3daee9"
     stroke-width=".790569"
     id="path19" />
  <path
     d="m2 7h18v10.999999h-18z"
     fill="#fff"
     stroke-width=".574456"
     id="path21" />
  <rect
     fill="#eff0f1"
     height="1.5"
     rx=".75"
     stroke-width=".75"
     width="1.5"
     x="18.75"
     y="2.75"
     id="rect23" />
  <path
     id="path25"
     style="opacity:0.3;fill:url(#a)"
     d="m 16,14 -1,2 2,2 h 3 z" />
  <path
     id="path25-7"
     style="opacity:0.3;fill:url(#linearGradient1287)"
     d="M 15,8 14,10 20,16 v -3 z" />
  <path
     style="fill:#4a525a"
     d="m 15,8 -1,2 h 2 z m 0,3.5 c -0.277,0 -0.5,0.223 -0.5,0.5 0,0.28 0.223,0.5 0.5,0.5 0.277,0 0.5,-0.223 0.5,-0.5 0,-0.277 -0.223,-0.5 -0.5,-0.5 z M 14,14 15,16 16,14 Z"
     id="path214" />
</svg>
