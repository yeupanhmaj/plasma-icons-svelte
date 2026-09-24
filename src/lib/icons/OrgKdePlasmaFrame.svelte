<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 256,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 256 256"
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
       xlink:href="#linearGradient4697"
       id="linearGradient4703"
       y1="503.07938"
       x1="418.16971"
       y2="531.45813"
       x2="384.57144"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.2083329,0,0,1.588888,-77.118855,-310.68061)" />
    <linearGradient
       id="linearGradient4697">
      <stop
         style="stop-color:#1abc9c"
         id="stop4699" />
      <stop
         offset="1"
         style="stop-color:#2980b9"
         id="stop4701" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4526"
       id="linearGradient4532"
       y1="521.63281"
       x1="404.0452"
       y2="528.35034"
       x2="430.73611"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.2083329,0,0,1.588888,-77.118855,-310.68061)" />
    <linearGradient
       id="linearGradient4526">
      <stop
         style="stop-color:#cc4a5e"
         id="stop4528" />
      <stop
         offset="1"
         style="stop-color:#aa478a"
         id="stop4530" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4474"
       y1="542.22382"
       x1="398.09201"
       y2="524.89966"
       x2="394.00299"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.2083329,0,0,1.588888,-77.118855,-310.68061)" />
    <linearGradient
       id="linearGradient4468">
      <stop
         style="stop-color:#334545"
         id="stop4470" />
      <stop
         offset="1"
         style="stop-color:#536161"
         id="stop4472" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4500"
       y1="568.79803"
       x1="431.57141"
       y2="562.79803"
       x2="439.57141"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.2083328,0,0,1.5888879,936.845,-374.2361)" />
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4496"
       y1="572.33411"
       x1="423.05438"
       y2="566.76562"
       x2="431.22452"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-1.2083329,0,0,1.588888,936.84505,-374.23615)" />
  </defs>
  <path
     style="fill:currentColor;fill-opacity:0.5;stroke:none"
     d="m 16,10 224,0 c 3.324,0 6,2.676 6,6 l 0,224 c 0,3.324 -2.676,6 -6,6 l -224,0 c -3.324,0 -6,-2.676 -6,-6 L 10,16 c 0,-3.324 2.676,-6 6,-6 z"
     class="ColorScheme-ButtonText"
     id="rect4240" />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 16,12 224,0 c 2.216,0 4,1.784 4,4 l 0,224 c 0,2.216 -1.784,4 -4,4 l -224,0 c -2.216,0 -4,-1.784 -4,-4 L 12,16 c 0,-2.216 1.784,-4 4,-4 z"
     class="ColorScheme-Background"
     id="rect4238" />
  <g
     transform="matrix(2.8275857,0,0,3.1538467,-1049.8915,-1498.7478)"
     id="g4181">
    <path
       style="fill:url(#linearGradient4703)"
       id="path4589"
       d="m 387.57145,489.79799 0,51.99999 58.00001,0 0,-51.99999 -58.00001,0 z" />
    <path
       style="fill:url(#linearGradient4532);stroke-width:2;stroke-linecap:round"
       id="path4284"
       d="m 445.57146,489.79799 -39.9162,30.30286 28.58035,21.69713 11.33585,0 0,-51.99999 z" />
    <path
       style="fill:url(#linearGradient4474);stroke-width:2;stroke-linecap:round"
       id="path4284-5-6"
       d="m 405.69645,519.98575 -18.125,13.76171 0,8.05052 46.93449,0 -28.80949,-21.81223 z" />
    <path
       style="fill:url(#linearGradient4500);stroke-width:2;stroke-linecap:round"
       id="path4284-5-6-2-2"
       d="m 415.67548,527.56276 -9.97905,-7.57591 0,15.15181 z" />
    <path
       style="fill:url(#linearGradient4496);stroke-width:2;stroke-linecap:round"
       id="path4284-5-6-2-6"
       d="m 415.6755,527.56231 0,14.23567 1.20748,0 8.77157,-6.65911 -9.97905,-7.57656 z" />
    <path
       style="fill:#aa478a;stroke-width:2;stroke-linecap:round"
       id="path4284-1"
       d="m 405.65528,520.10163 39.91616,-30.30364 -2e-5,14.80386 z" />
  </g>
</svg>
