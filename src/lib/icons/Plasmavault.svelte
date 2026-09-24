<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 32
	);
</script>

	{#if numericSize <= 40}
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
     id="defs5455">
    <linearGradient
       id="linearGradient4172-5">
      <stop
         id="stop4174-6"
         style="stop-color:#3e3e3e" />
      <stop
         id="stop4176-6"
         style="stop-color:#494949"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1,0,0,0.99967455,0,0.176455)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="499.78421"
       y1="541.79797"
       xlink:href="#linearGradient4172-5"
       id="linearGradient4178-3-3-1" />
    <linearGradient
       gradientTransform="matrix(1.3864587,0,0,1.3864587,-27.204389,7.4029791)"
       id="b-5"
       y1="45.538715"
       y2="11.687484"
       x2="17.84823"
       gradientUnits="userSpaceOnUse"
       x1="36.312538">
      <stop
         stop-color="#536161"
         id="stop12-6"
         style="stop-color:#bfc9c9;stop-opacity:1" />
      <stop
         offset="1"
         stop-color="#f4f5f5"
         id="stop14-2"
         style="stop-color:#fbfbfb;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="c-7"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.3864587,0,0,1.3864587,-540.60244,-686.30462)">
      <stop
         stop-color="#292c2f"
         id="stop17-5" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19-3" />
    </linearGradient>
    <linearGradient
       id="c-7-3"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.69327705,0,0,0.69327705,242.99325,110.88118)">
      <stop
         stop-color="#292c2f"
         id="stop17-5-6" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19-3-7" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4172-5"
       id="linearGradient4342"
       y1="29"
       y2="8"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(513.57142,455.798)" />
  </defs>
  
  <g
     id="g5881"
     transform="translate(-513.57143,-455.798)">
    <g
       id="g4209">
      <path
         d="m 515.57143,458.798 0,7 0,1 28,0 0,-6 -14.00001,0 -2,-2 z"
         id="path4308"
         style="fill:#2d2d2d;fill-rule:evenodd" />
      <path
         d="m 526.57142,463.798 -1.99999,1 -9,0 0,1 6.99999,0 3,0 z"
         id="path4306"
         style="fill-opacity:0.235294;fill-rule:evenodd" />
      <path
         d="m 526.57142,463.798 -2,2 -9,0 -1,0 0,19 11,0 1,0 18,0 0,-21 -18,0 z"
         id="rect4294"
         style="fill:url(#linearGradient4342)" />
      <path
         d="m 527.57142,458.798 1,3 15.00001,0 0,-1 -14.00001,0 z"
         id="path4310"
         style="fill:#ffffff;fill-opacity:0.235294;fill-rule:evenodd" />
      <rect
         id="rect4292"
         style="fill-opacity:0.235294"
         height="1"
         y="483.79797"
         x="514.57147"
         width="30" />
    </g>
    <g
       transform="matrix(0.49999992,0,0,0.49999992,321.28574,213.89906)"
       id="g4445-8-6-2">
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-2-9-6-5-8-0-0"
         width="4"
         height="4"
         x="391.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-61-4-1-4-1-2-8"
         width="4"
         height="4"
         x="399.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-8-7-5-7-0-8-6"
         width="4"
         height="4"
         x="407.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-7-8-5-4-3-3-2"
         width="4"
         height="4"
         x="415.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-9-4-4-4-0-8-4"
         width="4"
         height="4"
         x="423.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-20-5-7-3-4-0-7"
         width="4"
         height="4"
         x="431.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-2-0-6-0-4-4-9"
         width="4"
         height="4"
         x="439.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-7-3-5-7-4-0-3"
         width="3"
         height="4"
         x="388.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-5-6-6-8-4-9-9"
         width="4"
         height="4"
         x="395.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-9-1-9-6-7-1-2"
         width="4"
         height="4"
         x="403.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-2-0-3-8-6-9-8"
         width="4"
         height="4"
         x="411.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-2-6-7-8-3-6-3"
         width="4"
         height="4"
         x="419.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-8-3-4-4-1-2-0"
         width="4"
         height="4"
         x="427.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-9-2-5-3-7-5-1"
         width="4"
         height="4"
         x="435.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-7-7-0-2-1-5-4-7"
         width="2.9999826"
         height="4"
         x="443.57144"
         y="503.79797" />
      <path
         id="rect4179-5-6-8-7-5-7-2-2-9-1"
         d="m 407.57144,503.79797 4,-3.99987 0,-1.3e-4 0,4 z"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-7-8-5-4-0-1-3-5"
         width="4"
         height="4"
         x="415.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-9-4-4-4-6-7-6-4"
         width="4"
         height="4"
         x="423.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-20-5-7-3-8-8-0-9"
         width="4"
         height="4"
         x="431.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-2-0-6-0-9-5-5-2"
         width="4"
         height="4"
         x="439.57144"
         y="499.79797" />
      <rect
         y="511.79797"
         x="435.57144"
         height="4"
         width="4"
         id="rect4567"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         y="515.79797"
         x="431.57144"
         height="4"
         width="4"
         id="rect4569"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         y="511.79797"
         x="427.57144"
         height="4"
         width="4"
         id="rect4571"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4573"
         width="4"
         height="4"
         x="435.57144"
         y="519.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4575"
         width="4"
         height="4"
         x="439.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="395.57144"
         height="4"
         width="4"
         id="rect4577"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4579"
         width="4"
         height="4"
         x="399.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="403.57144"
         height="4"
         width="4"
         id="rect4581"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4619"
         width="4"
         height="4"
         x="407.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="419.57144"
         height="4"
         width="4"
         id="rect4621"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4623"
         width="4"
         height="4"
         x="403.57144"
         y="519.79797" />
    </g>
    <path
       d="m 523.76353,480.95241 3.64555,3.64559 12.70608,0 3.87527,-4.9097 -12.41845,-11.77068 1.87089,9.09832 z"
       id="path31"
       style="opacity:0.4;fill:url(#c-7-3);fill-rule:evenodd;stroke-width:1.06666672" />
    <path
       id="rect4136-9-5-3"
       d="m 529.57184,467.23206 c -2.38615,0 -4.00027,1.68167 -4.00027,4.13033 l 1.00007,0.031 c 0,-1.75973 1.49186,-3.09623 3.0002,-3.09623 1.50835,0 3.00021,1.3365 3.00021,3.09623 l 0,2.40415 -5.90436,0 -0.72604,0 -2.37022,0 0,1.72608 0,5.27438 12.00083,0 0,-7.00046 -1.46267,0 -0.53747,0 0,-2.40415 c 0,-2.32365 -1.61412,-4.16135 -4.00028,-4.16135 z"
       style="fill:#d1d8d8;fill-opacity:1;stroke-width:1" />
    <path
       d="m 526.57142,463.798 -2,2 -10,0 0,1 11,0 z"
       id="path4304"
       style="fill:#ffffff;fill-opacity:0.235294;fill-rule:evenodd" />
  </g>
		</svg>
	{:else if numericSize <= 56}
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
     id="defs5455">
    <linearGradient
       id="linearGradient4172-5">
      <stop
         id="stop4174-6"
         style="stop-color:#3e3e3e" />
      <stop
         id="stop4176-6"
         style="stop-color:#494949"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1,0,0,0.99967455,0,0.176455)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="499.78421"
       y1="541.79797"
       xlink:href="#linearGradient4172-5"
       id="linearGradient4178-3-3-1" />
    <linearGradient
       gradientTransform="matrix(1.3864587,0,0,1.3864587,-27.204389,7.4029791)"
       id="b-5"
       y1="45.538715"
       y2="11.687484"
       x2="17.84823"
       gradientUnits="userSpaceOnUse"
       x1="36.312538">
      <stop
         stop-color="#536161"
         id="stop12-6"
         style="stop-color:#bfc9c9;stop-opacity:1" />
      <stop
         offset="1"
         stop-color="#f4f5f5"
         id="stop14-2"
         style="stop-color:#fbfbfb;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="c-7"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.3864587,0,0,1.3864587,-540.60244,-686.30462)">
      <stop
         stop-color="#292c2f"
         id="stop17-5" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19-3" />
    </linearGradient>
    <linearGradient
       id="c-7-3"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.0039873,0,0,1.0039873,122.55512,-58.87445)">
      <stop
         stop-color="#292c2f"
         id="stop17-5-6" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19-3-7" />
    </linearGradient>
  </defs>
  
  <g
     id="g5881"
     transform="translate(-513.57143,-439.798)">
    <g
       transform="matrix(0.72413793,0,0,0.72413793,235.91626,90.461438)"
       id="g4154-5-3">
      <path
         style="fill:#2d2d2d"
         id="rect4180-6-6-1"
         d="m 388.57143,489.32203 0,5.4761 0,22 c 0,0.55372 0.446,1 1,1 l 54,0 c 0.55399,0 1,-0.44628 1,-1 l 0,-21.99023 c 0,-0.003 -0.002,-0.006 -0.002,-0.01 l 0.002,0 0,-1 -28,0 -4,-4.4761 -24,0 z" />
      <path
         style="fill:url(#linearGradient4178-3-3-1)"
         id="rect4113-7-6-4"
         d="m 410.57143,499.79813 -4,4 -19,0 0,1 0.002,0 c -5e-5,0.004 -0.002,0.008 -0.002,0.0117 l 0,35.98828 0,1 1,0 56,0 1,0 0,-1 0,-35.98828 0,-0.0117 0,-5 z" />
      <path
         style="fill-opacity:0.235294;fill-rule:evenodd"
         id="path4228-4-6"
         d="m 388.57143,502.79813 0,1 18,0 4,-4 -6,3 z" />
      <path
         style="fill-opacity:0.235294"
         id="path4151-2-5-0-9"
         d="m 387.57143,540.79811 0,1 1,0 56,0 1,0 0,-1 -1,0 -56,0 z" />
      <path
         style="fill:#ffffff;fill-opacity:0.235294;fill-rule:evenodd"
         id="path4196-3-0-4"
         d="m 412.57143,489.58382 3,5 2,0 27,0 0,-1 -27,0 -1,0 z" />
      <path
         style="fill:#ffffff;fill-opacity:0.235294;fill-rule:evenodd"
         id="path4224-4-2"
         d="m 387.57144,503.79813 0,1 19.99999,0 3,-5 -4,4 z" />
    </g>
    <g
       transform="matrix(0.72413793,0,0,0.72413793,235.19211,90.461459)"
       id="g4445-8-6-2">
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-2-9-6-5-8-0-0"
         width="4"
         height="4"
         x="391.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-61-4-1-4-1-2-8"
         width="4"
         height="4"
         x="399.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-8-7-5-7-0-8-6"
         width="4"
         height="4"
         x="407.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-7-8-5-4-3-3-2"
         width="4"
         height="4"
         x="415.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-9-4-4-4-0-8-4"
         width="4"
         height="4"
         x="423.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-20-5-7-3-4-0-7"
         width="4"
         height="4"
         x="431.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-2-0-6-0-4-4-9"
         width="4"
         height="4"
         x="439.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-7-3-5-7-4-0-3"
         width="3"
         height="4"
         x="388.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-5-6-6-8-4-9-9"
         width="4"
         height="4"
         x="395.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-9-1-9-6-7-1-2"
         width="4"
         height="4"
         x="403.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-2-0-3-8-6-9-8"
         width="4"
         height="4"
         x="411.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-2-6-7-8-3-6-3"
         width="4"
         height="4"
         x="419.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-8-3-4-4-1-2-0"
         width="4"
         height="4"
         x="427.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-9-2-5-3-7-5-1"
         width="4"
         height="4"
         x="435.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-7-7-0-2-1-5-4-7"
         width="2.9999826"
         height="4"
         x="443.57144"
         y="503.79797" />
      <path
         id="rect4179-5-6-8-7-5-7-2-2-9-1"
         d="m 407.57144,503.79797 4,-3.99987 0,-1.3e-4 0,4 z"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-7-8-5-4-0-1-3-5"
         width="4"
         height="4"
         x="415.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-9-4-4-4-6-7-6-4"
         width="4"
         height="4"
         x="423.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-20-5-7-3-8-8-0-9"
         width="4"
         height="4"
         x="431.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-2-0-6-0-9-5-5-2"
         width="4"
         height="4"
         x="439.57144"
         y="499.79797" />
      <rect
         y="511.79797"
         x="435.57144"
         height="4"
         width="4"
         id="rect4567"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         y="515.79797"
         x="431.57144"
         height="4"
         width="4"
         id="rect4569"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         y="511.79797"
         x="427.57144"
         height="4"
         width="4"
         id="rect4571"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4573"
         width="4"
         height="4"
         x="435.57144"
         y="519.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4575"
         width="4"
         height="4"
         x="439.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="395.57144"
         height="4"
         width="4"
         id="rect4577"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4579"
         width="4"
         height="4"
         x="399.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="403.57144"
         height="4"
         width="4"
         id="rect4581"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4619"
         width="4"
         height="4"
         x="407.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="419.57144"
         height="4"
         width="4"
         id="rect4621"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4623"
         width="4"
         height="4"
         x="403.57144"
         y="519.79797" />
    </g>
    <path
       d="m 529.15997,477.05391 5.2794,5.27945 18.40065,0 5.61206,-7.1101 -17.9841,-17.04603 2.70939,13.17598 z"
       id="path31"
       style="opacity:0.4;fill:url(#c-7-3);fill-rule:evenodd;stroke-width:1.06666672" />
    <path
       id="rect4136-9-5-3"
       d="m 537.26109,457.35892 c -3.45557,0 -5.7931,2.43535 -5.7931,5.98144 l 1.44827,0.0449 c 0,-2.54841 2.16049,-4.48389 4.34483,-4.48389 2.18435,0 4.34483,1.93548 4.34483,4.48389 l 0,3.48163 -8.55056,0 -1.05143,0 -3.4325,0 0,2.49966 0,7.43145 17,0 0,-9.93111 -1.73889,0 -0.77835,0 0,-3.48163 c 0,-3.36505 -2.33753,-6.02638 -5.7931,-6.02638 z"
       style="fill:#d1d8d8;fill-opacity:1;stroke-width:1" />
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
     id="defs5455">
    <linearGradient
       id="linearGradient4172-5">
      <stop
         id="stop4174-6"
         style="stop-color:#3e3e3e" />
      <stop
         id="stop4176-6"
         style="stop-color:#494949"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1,0,0,0.99967455,0,0.176455)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="499.78421"
       y1="541.79797"
       xlink:href="#linearGradient4172-5"
       id="linearGradient4178-3-3-1" />
    <linearGradient
       gradientTransform="matrix(1.3864587,0,0,1.3864587,-27.204389,7.4029791)"
       id="b-5"
       y1="45.538715"
       y2="11.687484"
       x2="17.84823"
       gradientUnits="userSpaceOnUse"
       x1="36.312538">
      <stop
         stop-color="#536161"
         id="stop12-6"
         style="stop-color:#bfc9c9;stop-opacity:1" />
      <stop
         offset="1"
         stop-color="#f4f5f5"
         id="stop14-2"
         style="stop-color:#fbfbfb;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="c-7"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.3864587,0,0,1.3864587,-540.60244,-686.30462)">
      <stop
         stop-color="#292c2f"
         id="stop17-5" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19-3" />
    </linearGradient>
    <linearGradient
       id="c-7-3"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.3864587,0,0,1.3864587,-27.546325,-266.22575)">
      <stop
         stop-color="#292c2f"
         id="stop17-5-6" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19-3-7" />
    </linearGradient>
  </defs>
  
  <g
     id="g5881"
     transform="translate(-513.57143,-423.798)">
    <g
       transform="translate(129,-60)"
       id="g4154-5-3">
      <path
         style="fill:#2d2d2d"
         id="rect4180-6-6-1"
         d="m 388.57143,489.79813 v 5 22 c 0,0.55372 0.446,1 1,1 h 54 c 0.55399,0 1,-0.44628 1,-1 V 494.8079 c 0,-0.003 -0.002,-0.006 -0.002,-0.01 h 0.002 v -1 h -28 l -4,-4 h -24 z" />
      <path
         style="fill:url(#linearGradient4178-3-3-1)"
         id="rect4113-7-6-4"
         d="m 410.57143,499.79813 -4,4 h -19 v 1 h 0.002 c -5e-5,0.004 -0.002,0.008 -0.002,0.0117 v 35.98828 1 h 1 56 1 v -1 -35.98828 -0.0117 -5 z" />
      <path
         style="fill-opacity:0.235294;fill-rule:evenodd"
         id="path4228-4-6"
         d="m 388.57143,502.79813 v 1 h 18 l 4,-4 -6,3 z" />
      <path
         style="fill-opacity:0.235294"
         id="path4151-2-5-0-9"
         d="m 387.57143,540.79811 v 1 h 1 56 1 v -1 h -1 -56 z" />
      <path
         style="fill:#ffffff;fill-opacity:0.235294;fill-rule:evenodd"
         id="path4196-3-0-4"
         d="m 412.57143,489.79801 3,5 h 2 27 v -1 h -27 -1 z" />
      <path
         style="fill:#ffffff;fill-opacity:0.235294;fill-rule:evenodd"
         id="path4224-4-2"
         d="m 387.57144,503.79813 v 1 h 19.99999 l 3,-5 -4,4 z" />
    </g>
    <g
       transform="translate(127.99999,-59.99997)"
       id="g4445-8-6-2">
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-2-9-6-5-8-0-0"
         width="4"
         height="4"
         x="391.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-61-4-1-4-1-2-8"
         width="4"
         height="4"
         x="399.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-8-7-5-7-0-8-6"
         width="4"
         height="4"
         x="407.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-7-8-5-4-3-3-2"
         width="4"
         height="4"
         x="415.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-9-4-4-4-0-8-4"
         width="4"
         height="4"
         x="423.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-20-5-7-3-4-0-7"
         width="4"
         height="4"
         x="431.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-2-0-6-0-4-4-9"
         width="4"
         height="4"
         x="439.57144"
         y="507.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-7-3-5-7-4-0-3"
         width="3"
         height="4"
         x="388.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-5-6-6-8-4-9-9"
         width="4"
         height="4"
         x="395.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-9-1-9-6-7-1-2"
         width="4"
         height="4"
         x="403.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-2-0-3-8-6-9-8"
         width="4"
         height="4"
         x="411.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-2-6-7-8-3-6-3"
         width="4"
         height="4"
         x="419.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-8-3-4-4-1-2-0"
         width="4"
         height="4"
         x="427.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-9-2-5-3-7-5-1"
         width="4"
         height="4"
         x="435.57144"
         y="503.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-7-7-0-2-1-5-4-7"
         width="2.9999826"
         height="4"
         x="443.57144"
         y="503.79797" />
      <path
         id="rect4179-5-6-8-7-5-7-2-2-9-1"
         d="m 407.57144,503.79797 4,-3.99987 v -1.3e-4 4 z"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-7-8-5-4-0-1-3-5"
         width="4"
         height="4"
         x="415.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-9-4-4-4-6-7-6-4"
         width="4"
         height="4"
         x="423.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-20-5-7-3-8-8-0-9"
         width="4"
         height="4"
         x="431.57144"
         y="499.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4179-5-6-2-9-1-2-2-0-6-0-9-5-5-2"
         width="4"
         height="4"
         x="439.57144"
         y="499.79797" />
      <rect
         y="511.79797"
         x="435.57144"
         height="4"
         width="4"
         id="rect4567"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         y="515.79797"
         x="431.57144"
         height="4"
         width="4"
         id="rect4569"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         y="511.79797"
         x="427.57144"
         height="4"
         width="4"
         id="rect4571"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4573"
         width="4"
         height="4"
         x="435.57144"
         y="519.79797" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4575"
         width="4"
         height="4"
         x="439.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="395.57144"
         height="4"
         width="4"
         id="rect4577"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4579"
         width="4"
         height="4"
         x="399.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="403.57144"
         height="4"
         width="4"
         id="rect4581"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4619"
         width="4"
         height="4"
         x="407.57144"
         y="515.79797" />
      <rect
         y="511.79797"
         x="419.57144"
         height="4"
         width="4"
         id="rect4621"
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <rect
         style="opacity:0.6;fill:#5f5f5f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="rect4623"
         width="4"
         height="4"
         x="403.57144"
         y="519.79797" />
    </g>
    <path
       d="m 533.95561,473.8658 7.29059,7.29067 h 25.41042 l 7.75,-9.81872 -24.83519,-23.53975 3.74153,18.1954 z"
       id="path31"
       style="opacity:0.4;fill:url(#c-7-3);fill-rule:evenodd;stroke-width:1.06666672" />
    <path
       id="rect4136-9-5-3"
       d="m 545.57143,446.66795 c -4.77198,0 -8,3.36311 -8,8.26009 l 2,0.062 c 0,-3.51923 2.98353,-6.19204 6,-6.19204 3.01648,0 6,2.67281 6,6.19204 l 0,4.80796 -11.80791,0 -1.45198,0 -4.74011,0 0,3.45192 0,10.54803 24,0 0,-13.99995 -2.92514,0 -1.07486,0 0,-4.80796 c 0,-4.64698 -3.22802,-8.32214 -8,-8.32214 z"
       style="fill:#d1d8d8;fill-opacity:1;stroke-width:1" />
  </g>
		</svg>
	{/if}
