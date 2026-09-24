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

	{#if numericSize <= 27}
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
			<linearGradient id="a" gradientTransform="matrix(1 0 0 1.0285724 -.00001 -14.394733)" gradientUnits="userSpaceOnUse" x1="418.16971" x2="384.57144" y1="503.07938" y2="531.45813"><stop offset="0" stop-color="#1abc9c"/><stop offset="1" stop-color="#2980b9"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="29.85095" x2="54.317608" y1="22.348567" y2="28.506301"><stop offset="0" stop-color="#cc4a5e"/><stop offset="1" stop-color="#aa478a"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="24.393862" x2="20.645595" xlink:href="#d" y1="41.223652" y2="25.343179"/><linearGradient id="d"><stop offset="0" stop-color="#334545"/><stop offset="1" stop-color="#536161"/></linearGradient><linearGradient id="e" gradientTransform="matrix(-1 0 0 1 839.14285 -40.00001)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#d" y1="569.97992" y2="562.49939"/><linearGradient id="f" gradientTransform="matrix(-.41666647 0 0 .53472146 190.40467 -283.78051)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#d" y1="569.97992" y2="562.49939"/><linearGradient id="g" gradientTransform="matrix(-.41666647 0 0 .53472146 194.40467 -286.3305)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#d" y1="569.97992" y2="562.49939"/><g transform="matrix(.41666647 0 0 .53472146 -159.23802 -267.39164)"><path d="m384.57144 503.79801v33.66238h48.00002v-33.66238z" fill="url(#a)" stroke-width="1.10638"/><g stroke-linecap="round"><g stroke-width="2"><path d="m56 6-29.700005 17.142932 24.2 13.714298h5.5z" fill="url(#b)" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/><path d="m26.299995 23.142932-14.299995 8.382865v5.331433h38.499995z" fill="url(#c)" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/><path d="m408.57144 527.26823-8.4-4.76883-1.2.71065v8.64001h1.2z" fill="url(#e)"/></g><path d="m11 14.549998v5.45h.499999l3.500001-2.55z" fill="url(#g)" stroke-width=".944035" transform="matrix(2.4000011 0 0 1.8701325 382.17143 500.05781)"/><path d="m7 17v3h4v-.449219l-3.5-2.550781z" fill="url(#f)" stroke-width=".944035" transform="matrix(2.4000011 0 0 1.8701325 382.17143 500.05781)"/><path d="m400.17144 522.4994 32.40001-18.70139-.00002 10.94034z" fill="#aa478a" stroke-width="2"/></g></g><g transform="matrix(.62499999 0 0 .62499999 -239.35714 -321.62379)"><path d="m384.57144 541.7981h31.999952v4.8h-31.999952z" fill="#fff" fill-opacity=".784314" stroke-width="1.09545"/><path d="m19.5 17.75a.75000002.75000002 0 0 0 -.75.75.75000002.75000002 0 0 0 .75.75.75000002.75000002 0 0 0 .75-.75.75000002.75000002 0 0 0 -.75-.75zm-17.5.25v1h1v-1z" fill="#4d4d4d" stroke-width=".75" transform="matrix(1.6 0 0 1.6 382.97143 514.59807)"/></g><path d="m10.5 5a3.5 3.5 0 0 0 -3.5 3.5 3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 2.089844-.703125l3.05664 3.056641.707032-.707032-3.056641-3.05664a3.5 3.5 0 0 0 .703125-2.089844 3.5 3.5 0 0 0 -3.5-3.5zm0 1a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5 2.5 2.5 0 0 1 -2.5-2.5 2.5 2.5 0 0 1 2.5-2.5z" fill="#fff" opacity=".75" stroke-linejoin="round" stroke-width="2"/>
		</svg>
	{:else}
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
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <g id="g4578" transform="matrix(0.66666636 0 0 0.85555436 128.19059 86.77139)">
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
  <g id="g4783" transform="matrix(1 0 0 1 0 -0.000063)">
   <rect width="31.999952" x="384.57144" y="541.7981" height="3.999968" style="fill:#ffffff;fill-opacity:0.784314" id="rect4267"/>
   <circle cx="414.57144" cy="543.79797" style="fill:#4d4d4d" r="1" id="path4166"/>
   <path inkscape:connector-curvature="0" style="fill:#4d4d4d" id="rect4183" d="m 2,27 0,1 1,0 0,-1 -1,0 z m 1,1 0,1 1,0 0,-1 -1,0 z" transform="matrix(1 0 0 1 384.57143 515.798)"/>
  </g>
  <path style="fill:#ffffff;opacity:0.75;stroke-linecap:round" id="path4430" d="M 14.5 7 A 5.5 5.5 0 0 0 9 12.5 A 5.5 5.5 0 0 0 14.5 18 A 5.5 5.5 0 0 0 18.019531 16.724609 L 22.298828 21.003906 L 23.003906 20.296875 L 18.722656 16.015625 A 5.5 5.5 0 0 0 20 12.5 A 5.5 5.5 0 0 0 14.5 7 z M 14.5 8 A 4.5 4.5 0 0 1 19 12.5 A 4.5 4.5 0 0 1 14.5 17 A 4.5 4.5 0 0 1 10 12.5 A 4.5 4.5 0 0 1 14.5 8 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
