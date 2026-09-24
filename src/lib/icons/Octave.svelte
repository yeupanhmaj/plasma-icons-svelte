<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 48,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 48 48"
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
       y1="543.8"
       y2="503.8"
       x2="0"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#197cf1"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#20bcfa"
         id="stop9" />
    </linearGradient>
    <linearGradient
       xlink:href="#a"
       id="linearGradient4265"
       x1="26"
       y1="44"
       x2="26"
       y2="4"
       gradientUnits="userSpaceOnUse" />
  </defs>
  <path
     d="M 11.014243,8.1546145 C 4.8134807,14.893117 6.3162577,27.450886 14.369,36.201964 22.421743,44.953054 33.975496,46.584087 40.176271,39.845585 46.377046,33.107084 44.878543,20.548803 36.825787,11.797724 28.773043,3.0466214 17.215018,1.4161017 11.014243,8.1546145 Z m 5.622737,2.7991775 c 4.872164,-5.2946676 13.830418,-4.1429435 20.01038,2.572944 6.179974,6.715911 7.239782,16.451038 2.367616,21.745705 -4.872164,5.294656 -13.832769,4.145534 -20.012744,-2.570377 -6.179974,-6.715909 -7.237418,-16.45358 -2.365252,-21.748272 z"
     id="path5874"
     style="fill:url(#linearGradient4265);fill-opacity:1;stroke:none" />
  <rect
     width="5.0033531"
     height="5.0033531"
     rx="0.88520879"
     ry="0.88520879"
     x="33.498325"
     y="10.498323"
     id="rect5876"
     style="fill:#f4754e;fill-opacity:1;fill-rule:nonzero;stroke:#35383b;stroke-width:0.99664694;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  <rect
     width="12.009134"
     height="12.009134"
     rx="2.1246936"
     ry="2.1246936"
     x="4.4954329"
     y="17.495434"
     id="rect5878"
     style="fill:#f4754e;fill-opacity:1;fill-rule:nonzero;stroke:#35383b;stroke-width:0.99086577;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  <rect
     width="7.0021687"
     height="7.0021687"
     rx="1.2388453"
     ry="1.2388453"
     x="36.498917"
     y="33.498917"
     id="rect5880"
     style="fill:#f4754e;fill-opacity:1;fill-rule:nonzero;stroke:#35383b;stroke-width:0.9978314;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
</svg>
