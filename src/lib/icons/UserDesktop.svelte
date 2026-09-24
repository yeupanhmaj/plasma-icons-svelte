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
        style="fill:currentColor" 
          d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 12 L 13 13 L 3 13 L 3 12 L 3 3 z M 4 11 L 4 12 L 12 12 L 12 11 L 4 11 z " 
          class="ColorScheme-Text"/>
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
			<path
       style="fill:currentColor"
       d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 5 16 L 5 17 L 17 17 L 17 16 L 5 16 z "
       class="ColorScheme-Text" />
		</svg>
	{:else if numericSize <= 40}
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
			<defs id="defs5455">
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4697" id="linearGradient4703" y1="503.07938" x1="418.16971" y2="531.45813" x2="384.57144" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.91666628 0 0 0.91666628 -340.52366 -455.81464)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4697">
   <stop style="stop-color:#4ce0c6" id="stop4699"/>
   <stop offset="1" style="stop-color:#3b85b5" id="stop4701"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4526" id="linearGradient4532" y1="521.63281" x1="404.0452" y2="528.35034" x2="430.73611" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.91666628 0 0 0.91666628 -340.52366 -455.81464)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4526">
   <stop style="stop-color:#cc4a5e" id="stop4528"/>
   <stop offset="1" style="stop-color:#aa478a" id="stop4530"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4474" y1="542.22382" x1="398.09201" y2="524.89966" x2="394.00299" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.91666628 0 0 0.91666628 -340.52366 -455.81464)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4468">
   <stop style="stop-color:#334545" id="stop4470"/>
   <stop offset="1" style="stop-color:#536161" id="stop4472"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4500" y1="568.79803" x1="431.57141" y2="562.79803" x2="439.57141" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1 0 0 1 839.14285 -40.00001)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4498" y1="581.87024" x1="406.53735" y2="572.67786" x2="423.31955" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.91666628 0 0 0.91666628 428.69029 -492.4813)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4496" y1="572.33411" x1="423.05438" y2="566.76562" x2="431.22452" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.91666628 0 0 0.91666628 448.69029 -492.4813)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4492" y1="577.10217" x1="431.3129" y2="571.44531" x2="440.63208" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.91666628 0 0 0.91666628 428.69029 -492.4813)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4490" y1="577.36243" x1="430.56738" y2="591.32782" x2="423.74994" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.91666628 0 0 0.91666628 428.69029 -492.4813)"/>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <g id="g4578" transform="matrix(0.66666636 0 0 0.85555436 128.19059 86.77142)">
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4703)" id="path4589" d="M 12,6 12,36 56,36 56,6 12,6 Z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4532);stroke-linecap:round;stroke-width:2" id="path4284" d="M 56,6 25.71875,23.482422 47.400391,36 56,36 56,6 Z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4474);stroke-linecap:round;stroke-width:2" id="path4284-5-6" d="M 25.75,23.416016 12,31.355469 12,36 47.605469,36 25.75,23.416016 Z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:transform-center-x="-5.5056915" inkscape:connector-curvature="0" style="fill:url(#linearGradient4500);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-2" d="m 407.82995,527.56606 -8.25852,-4.76806 0,9.53611 z"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4498);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-0" d="m 40.890625,32.15625 0,3.84375 6.65625,0 -6.65625,-3.84375 z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4496);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-6" d="m 53.320312,27.787109 0,8.212891 0.916016,0 6.654297,-3.841797 -7.570313,-4.371094 z" transform="matrix(1.0909096 0 0 1.0909096 349.66233 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4492);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-6-50" d="M 25.75,32.158203 25.75,36 32.404297,36 25.75,32.158203 Z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4490);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-0-6" d="M 40.890625,32.15625 34.234375,36 l 6.65625,0 0,-3.84375 z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:transform-center-x="5.5056789" inkscape:connector-curvature="0" style="fill:#aa478a;stroke-linecap:round;stroke-width:2" id="path4284-1" d="m 399.53737,522.87024 33.03408,-19.07223 -2e-5,9.31712 z"/>
  </g>
  <g id="g4783" transform="matrix(1 0 0 1 0 -0.00005)">
   <rect width="31.999952" x="384.57144" y="541.7981" height="3.999968" style="fill:#ffffff;fill-opacity:0.784314" id="rect4267-7"/>
   <circle cx="414.57144" cy="543.79797" style="fill:#4d4d4d" r="1" id="path4166"/>
   <path inkscape:connector-curvature="0" style="fill:#4d4d4d" id="rect4183" d="m 2,27 v 1 h 1 v -1 z m 1,1 v 1 h 1 v -1 z" transform="matrix(1 0 0 1 384.57143 515.798)"/>
  </g>
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
			<linearGradient id="a" x1="42.798412" x2="12.000011" y1="5.341264" y2="31.355107" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1abc9c" offset="0"/>
        <stop stop-color="#2980b9" offset="1"/>
    </linearGradient>
    <linearGradient id="b" x1="29.85095" x2="54.317608" y1="22.348567" y2="28.506301" gradientUnits="userSpaceOnUse">
        <stop stop-color="#cc4a5e" offset="0"/>
        <stop stop-color="#aa478a" offset="1"/>
    </linearGradient>
    <linearGradient id="c" x1="24.393862" x2="20.645595" y1="41.223652" y2="25.343179" gradientUnits="userSpaceOnUse" xlink:href="#d"/>
    <linearGradient id="d">
        <stop stop-color="#334545" offset="0"/>
        <stop stop-color="#536161" offset="1"/>
    </linearGradient>
    <linearGradient id="e" x1="431.57141" x2="439.57141" y1="568.79803" y2="562.79803" gradientTransform="matrix(-1 0 0 1 839.14285 -40.00001)" gradientUnits="userSpaceOnUse" xlink:href="#d"/>
    <linearGradient id="f" x1="406.53735" x2="423.31955" y1="581.87024" y2="572.67786" gradientTransform="matrix(-.91666628 0 0 .91666628 428.69029 -492.4813)" gradientUnits="userSpaceOnUse" xlink:href="#d"/>
    <linearGradient id="g" x1="423.05438" x2="431.22452" y1="572.33411" y2="566.76562" gradientTransform="matrix(-.91666628 0 0 .91666628 448.69029 -492.4813)" gradientUnits="userSpaceOnUse" xlink:href="#d"/>
    <linearGradient id="h" x1="431.3129" x2="440.63208" y1="577.10217" y2="571.44531" gradientTransform="matrix(-.91666628 0 0 .91666628 428.69029 -492.4813)" gradientUnits="userSpaceOnUse" xlink:href="#d"/>
    <linearGradient id="i" x1="430.56738" x2="423.74994" y1="577.36243" y2="591.32782" gradientTransform="matrix(-.91666628 0 0 .91666628 428.69029 -492.4813)" gradientUnits="userSpaceOnUse" xlink:href="#d"/>
    <g transform="matrix(.83653804 0 0 1.0999992 -317.70862 -548.17744)">
        <path transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)" d="m12 6v30l43.831392 3.4e-5v-30.000008z" fill="url(#a)"/>
        <g stroke-linecap="round" stroke-width="2">
            <path transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)" d="m55.831392 6.0000264-30.112642 17.482396 21.681641 12.517578 8.431001 3.4e-5z" fill="url(#b)"/>
            <path transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)" d="m25.75 23.416016-13.75 7.939453v4.644531h35.605469z" fill="url(#c)"/>
            <path d="m407.82995 527.56606-8.25852-4.76806v9.53611z" fill="url(#e)"/>
            <path transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)" d="m40.890625 32.15625v3.84375h6.65625z" fill="url(#f)"/>
            <path transform="matrix(1.0909096 0 0 1.0909096 349.66233 497.25255)" d="m53.320312 27.787109v8.212891h.916016l6.654297-3.841797z" fill="url(#g)"/>
            <path transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)" d="m25.75 32.158203v3.841797h6.654297z" fill="url(#h)"/>
            <path transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)" d="m40.890625 32.15625-6.65625 3.84375h6.65625z" fill="url(#i)"/>
            <path d="m399.53737 522.87024 32.85015-19.0722v9.35561z" fill="#aa478a"/>
        </g>
    </g>
    <g transform="matrix(.69230765 0 0 .69230765 -264.31867 -333.0909)">
        <path d="m387.57142 536.02022 1e-5 5.77778 57.77777-1e-5v-5.77777z" fill="#fff" fill-opacity=".784314" stroke-width="1.154701"/>
        <g fill="#4d4d4d" stroke-width="1.444445">
            <circle cx="442.46033" cy="538.90906" r="1.444445"/>
            <path d="m389.01588 537.46467v1.44444h1.44444v-1.44444zm1.44444 1.44444v1.44445h1.44445v-1.44445z"/>
        </g>
    </g>
		</svg>
	{:else if numericSize <= 80}
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
			<defs id="defs5455">
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4697" id="linearGradient4703" y1="503.07938" x1="418.16971" y2="531.45813" x2="384.57144" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.91666628 0 0 0.91666628 -340.52366 -455.81464)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4697">
   <stop style="stop-color:#1abc9c" id="stop4699"/>
   <stop offset="1" style="stop-color:#2980b9" id="stop4701"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4526" id="linearGradient4532" y1="521.63281" x1="404.0452" y2="528.35034" x2="430.73611" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.91666628 0 0 0.91666628 -340.52366 -455.81464)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4526">
   <stop style="stop-color:#cc4a5e" id="stop4528"/>
   <stop offset="1" style="stop-color:#aa478a" id="stop4530"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4474" y1="542.22382" x1="398.09201" y2="524.89966" x2="394.00299" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.91666628 0 0 0.91666628 -340.52366 -455.81464)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4468">
   <stop style="stop-color:#334545" id="stop4470"/>
   <stop offset="1" style="stop-color:#536161" id="stop4472"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4500" y1="568.79803" x1="431.57141" y2="562.79803" x2="439.57141" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1 0 0 1 839.14285 -40.00001)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4498" y1="581.87024" x1="406.53735" y2="572.67786" x2="423.31955" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.91666628 0 0 0.91666628 428.69029 -492.4813)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4496" y1="572.33411" x1="423.05438" y2="566.76562" x2="431.22452" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.91666628 0 0 0.91666628 448.69029 -492.4813)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4492" y1="577.10217" x1="431.3129" y2="571.44531" x2="440.63208" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.91666628 0 0 0.91666628 428.69029 -492.4813)"/>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4468" id="linearGradient4490" y1="577.36243" x1="430.56738" y2="591.32782" x2="423.74994" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.91666628 0 0 0.91666628 428.69029 -492.4813)"/>
 </defs>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -483.798)">
  <g id="g4578" transform="matrix(1.2083328 0 0 1.5888879 -77.11883 -310.68057)">
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4703)" id="path4589" d="M 12,6 12,36 56,36 56,6 12,6 Z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4532);stroke-linecap:round;stroke-width:2" id="path4284" d="M 56,6 25.71875,23.482422 47.400391,36 56,36 56,6 Z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4474);stroke-linecap:round;stroke-width:2" id="path4284-5-6" d="M 25.75,23.416016 12,31.355469 12,36 47.605469,36 25.75,23.416016 Z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:transform-center-x="-5.5056915" inkscape:connector-curvature="0" style="fill:url(#linearGradient4500);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-2" d="m 407.82995,527.56606 -8.25852,-4.76806 0,9.53611 z"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4498);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-0" d="m 40.890625,32.15625 0,3.84375 6.65625,0 -6.65625,-3.84375 z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4496);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-6" d="m 53.320312,27.787109 0,8.212891 0.916016,0 6.654297,-3.841797 -7.570313,-4.371094 z" transform="matrix(1.0909096 0 0 1.0909096 349.66233 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4492);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-6-50" d="M 25.75,32.158203 25.75,36 32.404297,36 25.75,32.158203 Z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4490);stroke-linecap:round;stroke-width:2" id="path4284-5-6-2-0-6" d="M 40.890625,32.15625 34.234375,36 l 6.65625,0 0,-3.84375 z" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/>
   <path inkscape:transform-center-x="5.5056789" inkscape:connector-curvature="0" style="fill:#aa478a;stroke-linecap:round;stroke-width:2" id="path4284-1" d="m 399.53737,522.87024 33.03408,-19.07223 -2e-5,9.31712 z"/>
  </g>
  <g id="g4255">
   <path inkscape:connector-curvature="0" style="fill:#ffffff;fill-opacity:0.784314" id="rect4128" d="m 387.57143,537.798 0,3.2 0,0.8 1,0 56,0 1,0 0,-0.8 0,-3.2 -58,0 z"/>
   <g id="text4213" transform="matrix(0.64829823 0 0 0.64829823 155.63174 190.06072)">
    <path inkscape:connector-curvature="0" id="path4218" d="m 434.23853,537.83412 c -0.15893,0.11003 -0.36677,0.22414 -0.54201,0.30157 l 0.0734,0.28934 c 0.14264,-0.0448 0.27305,-0.12225 0.43198,-0.22414 l 0,2.60819 0.35455,0 0,-2.97496 -0.31787,0 z"/>
    <path inkscape:connector-curvature="0" id="path4220" d="m 435.20119,538.03381 0.11819,0.29749 c 0.16708,-0.17116 0.41568,-0.24452 0.66427,-0.24452 0.33825,0 0.52571,0.18747 0.52571,0.51757 l 0,0.0204 c -0.004,0.2323 -0.15486,0.46051 -0.38715,0.71726 l -1.02697,1.14108 0.0448,0.32602 1.74016,0 0.0245,-0.30565 -1.38153,0 0.83951,-0.89656 c 0.32603,-0.35048 0.52572,-0.63575 0.52979,-1.01067 l 0,-0.0122 c 0,-0.48904 -0.34232,-0.81098 -0.88434,-0.81098 -0.38715,0 -0.63982,0.10595 -0.80691,0.26082 z"/>
    <path inkscape:connector-curvature="0" id="path4222" d="m 437.42599,540.85799 0.4116,0 0,-0.46459 -0.4116,0 0,0.46459 z m 0,-1.82574 0.4116,0 0,-0.46051 -0.4116,0 0,0.46051 z"/>
    <path inkscape:connector-curvature="0" id="path4224" d="m 439.75394,539.98995 c 0,0.3627 -0.2649,0.56239 -0.65613,0.56239 -0.30157,0 -0.50941,-0.0978 -0.6602,-0.21599 l -0.1141,0.28934 c 0.11003,0.10596 0.39122,0.22822 0.77838,0.22822 0.57869,0 1.00252,-0.3301 1.00252,-0.85989 0,-0.41975 -0.23229,-0.68872 -0.59499,-0.77023 0.32195,-0.0978 0.52164,-0.3301 0.52164,-0.71317 0,-0.47681 -0.41161,-0.73763 -0.85174,-0.73763 -0.41161,0 -0.6765,0.0897 -0.85581,0.22821 l 0.1141,0.28935 c 0.15894,-0.12634 0.39123,-0.21192 0.66428,-0.21192 0.35047,0 0.54609,0.14671 0.54609,0.47681 0,0.46866 -0.43198,0.52164 -0.88842,0.52164 l 0,0.29342 c 0.55424,0 0.99438,0.0856 0.99438,0.61945 z"/>
    <path inkscape:connector-curvature="0" id="path4226" d="m 441.86538,538.2824 0,1.49971 -0.99437,0 0.99437,-1.49971 z m 0.67243,1.78905 0.0285,-0.28934 -0.36678,0 0,-1.94799 -0.37085,0 -1.30817,1.93169 0,0.30564 1.34484,0 0,0.73763 0.33418,0 0,-0.73763 0.33825,0 z"/>
   </g>
   <path inkscape:connector-curvature="0" style="color:#000000" id="path2994" d="m 391.07143,538.69839 a 0.16666666,0.16666666 0 0 0 -0.16667,0.16667 0.16666666,0.16666666 0 0 0 0.16667,0.16667 0.16666666,0.16666666 0 0 0 0.16666,-0.16667 0.16666666,0.16666666 0 0 0 -0.16666,-0.16667 z m 0.83333,0 -0.32292,0.26042 0.43229,0.53646 -0.40625,0.40625 0.29688,0.29687 0.66667,-0.66667 -0.66667,-0.83333 z m -1.08333,0.66667 a 0.25,0.25 0 0 0 -0.25,0.25 0.25,0.25 0 0 0 0.25,0.25 0.25,0.25 0 0 0 0.25,-0.25 0.25,0.25 0 0 0 -0.25,-0.25 z m 0.5,0.83333 a 0.25,0.25 0 0 0 -0.25,0.25 0.25,0.25 0 0 0 0.25,0.25 0.25,0.25 0 0 0 0.25,-0.25 0.25,0.25 0 0 0 -0.25,-0.25 z"/>
  </g>
 </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 96 96"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs id="defs5455">
        <linearGradient id="linearGradient4703" x1="418.16971" x2="384.57144" y1="503.07938" y2="531.45813" gradientTransform="matrix(.91666628 0 0 .91666628 -340.52366 -455.81464)" gradientUnits="userSpaceOnUse">
            <stop id="stop4699" stop-color="#1abc9c" offset="0"/>
            <stop id="stop4701" stop-color="#2980b9" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4532" x1="404.0452" x2="430.73611" y1="521.63281" y2="528.35034" gradientTransform="matrix(.91666628 0 0 .91666628 -340.52366 -455.81464)" gradientUnits="userSpaceOnUse">
            <stop id="stop4528" stop-color="#cc4a5e" offset="0"/>
            <stop id="stop4530" stop-color="#aa478a" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4474" x1="398.09201" x2="394.00299" y1="542.22382" y2="524.89966" gradientTransform="matrix(.91666628 0 0 .91666628 -340.52366 -455.81464)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4468"/>
        <linearGradient id="linearGradient4468">
            <stop id="stop4470" stop-color="#334545" offset="0"/>
            <stop id="stop4472" stop-color="#536161" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4500" x1="431.57141" x2="439.57141" y1="568.79803" y2="562.79803" gradientTransform="matrix(-1,0,0,1,839.14285,-40.00001)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4468"/>
        <linearGradient id="linearGradient4498" x1="406.53735" x2="423.31955" y1="581.87024" y2="572.67786" gradientTransform="matrix(-.91666628 0 0 .91666628 428.69029 -492.4813)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4468"/>
        <linearGradient id="linearGradient4496" x1="423.05438" x2="431.22452" y1="572.33411" y2="566.76562" gradientTransform="matrix(-.91666628 0 0 .91666628 448.69029 -492.4813)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4468"/>
        <linearGradient id="linearGradient4492" x1="431.3129" x2="440.63208" y1="577.10217" y2="571.44531" gradientTransform="matrix(-.91666628 0 0 .91666628 428.69029 -492.4813)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4468"/>
        <linearGradient id="linearGradient4490" x1="430.56738" x2="423.74994" y1="577.36243" y2="591.32782" gradientTransform="matrix(-.91666628 0 0 .91666628 428.69029 -492.4813)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4468"/>
    </defs>
    <g id="layer1" transform="translate(-384.57144,-483.798)">
        <g id="g4578" transform="matrix(1.8124989,0,0,2.3833315,-307.96387,-707.91969)">
            <path id="path4589" transform="matrix(1.0909096,0,0,1.0909096,371.48052,497.25255)" d="m12.252871 6.0000186v30h43.494259v-30z" fill="url(#linearGradient4703)"/>
            <g stroke-linecap="round" stroke-width="2">
                <path id="path4284" transform="matrix(1.0909096,0,0,1.0909096,371.48052,497.25255)" d="M 55.74713,6.0000095 25.75,23.416016 47.400391,36 l 8.346739,1.9e-5 z" fill="url(#linearGradient4532)"/>
                <path id="path4284-5-6" transform="matrix(1.0909096,0,0,1.0909096,371.48052,497.25255)" d="m25.75 23.416016-13.497129 7.939472v4.644531l35.352598-1.9e-5z" fill="url(#linearGradient4474)"/>
                <path id="path4284-5-6-2-2" d="m407.82995 527.56606-8.25852-4.76806v9.53611z" fill="url(#linearGradient4500)"/>
                <path id="path4284-5-6-2-0" transform="matrix(1.0909096,0,0,1.0909096,371.48052,497.25255)" d="m40.890625 32.15625v3.84375h6.65625z" fill="url(#linearGradient4498)"/>
                <path id="path4284-5-6-2-6" transform="matrix(1.0909096,0,0,1.0909096,349.66233,497.25255)" d="m53.320312 27.787109v8.212891h0.916016l6.654297-3.841797z" fill="url(#linearGradient4496)"/>
                <path id="path4284-5-6-2-6-50" transform="matrix(1.0909096,0,0,1.0909096,371.48052,497.25255)" d="m25.75 32.158203v3.841797h6.654297z" fill="url(#linearGradient4492)"/>
                <path id="path4284-5-6-2-0-6" transform="matrix(1.0909096,0,0,1.0909096,371.48052,497.25255)" d="m40.890625 32.15625-6.65625 3.84375h6.65625z" fill="url(#linearGradient4490)"/>
                <path id="path4284-1" d="m399.57143 522.798 32.72417-18.99998v9.23077z" fill="#aa478a"/>
            </g>
        </g>
        <g id="g4255" transform="matrix(1.4999998,0,0,1.4999998,-192.28564,-241.8989)">
            <path id="rect4128" transform="matrix(.66666676 0 0 .66666676 384.57144 483.798)" d="m 4.9999852,80.999992 v 6 L 91,87 v -6 z" fill="#fff" fill-opacity=".784314" stroke-width="1.5"/>
            <g id="text4213" transform="matrix(.64829823 0 0 .64829823 155.63174 190.06072)">
                <path id="path4218" d="m434.23853 537.83412c-0.15893 0.11003-0.36677 0.22414-0.54201 0.30157l0.0734 0.28934c0.14264-0.0448 0.27305-0.12225 0.43198-0.22414v2.60819h0.35455v-2.97496h-0.31787z"/>
                <path id="path4220" d="m435.20119 538.03381 0.11819 0.29749c0.16708-0.17116 0.41568-0.24452 0.66427-0.24452 0.33825 0 0.52571 0.18747 0.52571 0.51757v0.0204c-4e-3 0.2323-0.15486 0.46051-0.38715 0.71726l-1.02697 1.14108 0.0448 0.32602h1.74016l0.0245-0.30565h-1.38153l0.83951-0.89656c0.32603-0.35048 0.52572-0.63575 0.52979-1.01067v-0.0122c0-0.48904-0.34232-0.81098-0.88434-0.81098-0.38715 0-0.63982 0.10595-0.80691 0.26082z"/>
                <path id="path4222" d="m437.42599 540.85799h0.4116v-0.46459h-0.4116zm0-1.82574h0.4116v-0.46051h-0.4116z"/>
                <path id="path4224" d="m439.75394 539.98995c0 0.3627-0.2649 0.56239-0.65613 0.56239-0.30157 0-0.50941-0.0978-0.6602-0.21599l-0.1141 0.28934c0.11003 0.10596 0.39122 0.22822 0.77838 0.22822 0.57869 0 1.00252-0.3301 1.00252-0.85989 0-0.41975-0.23229-0.68872-0.59499-0.77023 0.32195-0.0978 0.52164-0.3301 0.52164-0.71317 0-0.47681-0.41161-0.73763-0.85174-0.73763-0.41161 0-0.6765 0.0897-0.85581 0.22821l0.1141 0.28935c0.15894-0.12634 0.39123-0.21192 0.66428-0.21192 0.35047 0 0.54609 0.14671 0.54609 0.47681 0 0.46866-0.43198 0.52164-0.88842 0.52164v0.29342c0.55424 0 0.99438 0.0856 0.99438 0.61945z"/>
                <path id="path4226" d="m441.86538 538.2824v1.49971h-0.99437zm0.67243 1.78905 0.0285-0.28934h-0.36678v-1.94799h-0.37085l-1.30817 1.93169v0.30564h1.34484v0.73763h0.33418v-0.73763h0.33825z"/>
            </g>
            <path id="path2994" d="m391.07143 538.69839a0.16666666 0.16666666 0 0 0-0.16667 0.16667 0.16666666 0.16666666 0 0 0 0.16667 0.16667 0.16666666 0.16666666 0 0 0 0.16666-0.16667 0.16666666 0.16666666 0 0 0-0.16666-0.16667zm0.83333 0-0.32292 0.26042 0.43229 0.53646-0.40625 0.40625 0.29688 0.29687 0.66667-0.66667zm-1.08333 0.66667a0.25 0.25 0 0 0-0.25 0.25 0.25 0.25 0 0 0 0.25 0.25 0.25 0.25 0 0 0 0.25-0.25 0.25 0.25 0 0 0-0.25-0.25zm0.5 0.83333a0.25 0.25 0 0 0-0.25 0.25 0.25 0.25 0 0 0 0.25 0.25 0.25 0.25 0 0 0 0.25-0.25 0.25 0.25 0 0 0-0.25-0.25z" color="#000000"/>
        </g>
    </g>
		</svg>
	{/if}
