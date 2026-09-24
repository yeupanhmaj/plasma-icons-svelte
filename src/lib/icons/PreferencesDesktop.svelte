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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="6.375003" x2="15.75002" y1="8.000012" y2="17.37501"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="7" x2="7" y1="14" y2="6"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#fcfcfc"/></linearGradient><linearGradient id="c" gradientTransform="matrix(1 0 0 1.0285724 -.00001 -14.394733)" gradientUnits="userSpaceOnUse" x1="418.16971" x2="384.57144" y1="503.07938" y2="531.45813"><stop offset="0" stop-color="#1abc9c"/><stop offset="1" stop-color="#2980b9"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="29.85095" x2="54.317608" y1="22.348567" y2="28.506301"><stop offset="0" stop-color="#cc4a5e"/><stop offset="1" stop-color="#aa478a"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="24.393862" x2="20.645595" xlink:href="#f" y1="41.223652" y2="25.343179"/><linearGradient id="f"><stop offset="0" stop-color="#334545"/><stop offset="1" stop-color="#536161"/></linearGradient><linearGradient id="g" gradientTransform="matrix(-1 0 0 1 839.14285 -40.00001)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#f" y1="569.97992" y2="562.49939"/><linearGradient id="h" gradientTransform="matrix(-.41666647 0 0 .53472146 190.40467 -283.78051)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#f" y1="569.97992" y2="562.49939"/><linearGradient id="i" gradientTransform="matrix(-.41666647 0 0 .53472146 194.40467 -286.3305)" gradientUnits="userSpaceOnUse" x1="430.57141" x2="440.17142" xlink:href="#f" y1="569.97992" y2="562.49939"/><g transform="matrix(.41666647 0 0 .53472146 -159.23802 -267.39164)"><path d="m384.57144 503.79801v33.66238h48.00002v-33.66238z" fill="url(#c)" stroke-width="1.10638"/><g stroke-linecap="round"><g stroke-width="2"><path d="m56 6-29.700005 17.142932 24.2 13.714298h5.5z" fill="url(#d)" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/><path d="m26.299995 23.142932-14.299995 8.382865v5.331433h38.499995z" fill="url(#e)" transform="matrix(1.0909096 0 0 1.0909096 371.48052 497.25255)"/><path d="m408.57144 527.26823-8.4-4.76883-1.2.71065v8.64001h1.2z" fill="url(#g)"/></g><path d="m11 14.549998v5.45h.499999l3.500001-2.55z" fill="url(#i)" stroke-width=".944035" transform="matrix(2.4000011 0 0 1.8701325 382.17143 500.05781)"/><path d="m7 17v3h4v-.449219l-3.5-2.550781z" fill="url(#h)" stroke-width=".944035" transform="matrix(2.4000011 0 0 1.8701325 382.17143 500.05781)"/><path d="m400.17144 522.4994 32.40001-18.70139-.00002 10.94034z" fill="#aa478a" stroke-width="2"/></g></g><g transform="matrix(.62499999 0 0 .62499999 -239.35714 -321.62379)"><path d="m384.57144 541.7981h31.999952v4.8h-31.999952z" fill="#fff" fill-opacity=".784314" stroke-width="1.09545"/><path d="m19.5 17.75a.75000002.75000002 0 0 0 -.75.75.75000002.75000002 0 0 0 .75.75.75000002.75000002 0 0 0 .75-.75.75000002.75000002 0 0 0 -.75-.75zm-17.5.25v1h1v-1z" fill="#4d4d4d" stroke-width=".75" transform="matrix(1.6 0 0 1.6 382.97143 514.59807)"/></g><path d="m15 7-8 1 4 4h-4v1l4 4h10v-4z" fill="url(#a)" opacity=".2"/><path d="m12.5 6c-.634185.00172-1.198763.4020819-1.410156 1h-4.089844v1h4.089844c.211393.597918.775971.998284 1.410156 1 .634185-.0017 1.198763-.402082 1.410156-1h1.089844v-1h-1.085938c-.211872-.5992672-.778443-.9999358-1.414062-1zm-3 5c-.6341848.0017-1.1987629.402082-1.4101562 1h-1.0898438v1h1.0898438c.2113933.597918.7759714.998284 1.4101562 1 .634185-.0017 1.198763-.402082 1.410156-1h4.089844v-1h-4.085938c-.211872-.599267-.778443-.999936-1.414062-1zm-.5 1h1v1h-1z" fill="url(#b)"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32.000001"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs
     id="defs4322">
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4697"
       id="linearGradient4703"
       y1="503.07938"
       x1="418.16971"
       y2="531.45813"
       x2="384.57144"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.66666639,0,0,0.85555439,-256.38083,591.33561)" />
    <linearGradient
       inkscape:collect="always"
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
       inkscape:collect="always"
       xlink:href="#linearGradient4526"
       id="linearGradient4532"
       y1="521.63281"
       x1="404.0452"
       y2="528.35034"
       x2="430.73611"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.66666639,0,0,0.85555439,-256.38083,591.33561)" />
    <linearGradient
       inkscape:collect="always"
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
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient4474"
       y1="542.22382"
       x1="398.09201"
       y2="524.89966"
       x2="394.00299"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.66666639,0,0,0.85555439,-256.38083,591.33561)" />
    <linearGradient
       inkscape:collect="always"
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
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient4500"
       y1="568.79803"
       x1="431.57141"
       y2="562.79803"
       x2="439.57141"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.66666636,0,0,0.85555436,303.04748,557.11344)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient4498"
       y1="581.87024"
       x1="406.53735"
       y2="572.67786"
       x2="423.31955"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.66666639,0,0,0.85555439,303.0475,557.11343)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient4496"
       y1="572.33411"
       x1="423.05438"
       y2="566.76562"
       x2="431.22452"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.66666639,0,0,0.85555439,303.04749,557.11343)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient4492"
       y1="577.10217"
       x1="431.3129"
       y2="571.44531"
       x2="440.63208"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.66666639,0,0,0.85555439,303.0475,557.11343)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4468"
       id="linearGradient4490"
       y1="577.36243"
       x1="430.56738"
       y2="591.32782"
       x2="423.74994"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.66666639,0,0,0.85555439,303.0475,557.11343)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4410"
       id="linearGradient4473"
       y1="7.9997292"
       x1="9"
       y2="21.999729"
       x2="23"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-3e-5,1020.3622)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4410">
      <stop
         style="stop-color:#383e51"
         id="stop4412" />
      <stop
         offset="1"
         style="stop-color:#655c6f;stop-opacity:0"
         id="stop4414" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4219"
       id="linearGradient4463"
       y1="21.999729"
       y2="8"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-3e-5,1020.3622)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4219">
      <stop
         style="stop-color:#eff0f1"
         id="stop4221" />
      <stop
         offset="1"
         style="stop-color:#fcfcfc"
         id="stop4223" />
    </linearGradient>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="4.64"
     inkscape:cx="-31.366379"
     inkscape:cy="33.625"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     units="px"
     inkscape:window-width="1535"
     inkscape:window-height="876"
     inkscape:window-x="65"
     inkscape:window-y="24"
     inkscape:window-maximized="1" />
  <metadata
     id="metadata4325">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-1020.3622)">
    <path
       d="m 1e-5,1022.3622 0,28 32,0 0,-28 -32,0 z"
       id="path4589"
       style="fill:url(#linearGradient4703)"
       inkscape:connector-curvature="0" />
    <path
       d="m 32.00001,1022.3622 -22.02272,16.3169 15.76846,11.6831 6.25426,0 0,-28 z"
       id="path4284"
       style="fill:url(#linearGradient4532);stroke-width:2;stroke-linecap:round"
       inkscape:connector-curvature="0" />
    <path
       d="m 10.00001,1038.6171 -10,7.4102 0,4.3349 25.89489,0 -15.89489,-11.7451 z"
       id="path4284-5-6"
       style="fill:url(#linearGradient4474);stroke-width:2;stroke-linecap:round"
       inkscape:connector-curvature="0" />
    <path
       d="M 15.50568,1042.6971 10,1038.6177 l 0,8.1587 z"
       id="path4284-5-6-2-2"
       style="fill:url(#linearGradient4500);stroke-width:2;stroke-linecap:round"
       inkscape:connector-curvature="0"
       inkscape:transform-center-x="-5.5056915" />
    <path
       d="m 21.01138,1046.7747 0,3.5875 4.84091,0 -4.84091,-3.5875 z"
       id="path4284-5-6-2-0"
       style="fill:url(#linearGradient4498);stroke-width:2;stroke-linecap:round"
       inkscape:connector-curvature="0" />
    <path
       d="m 15.50569,1042.6968 0,7.6654 0.66619,0 4.83949,-3.5857 -5.50568,-4.0797 z"
       id="path4284-5-6-2-6"
       style="fill:url(#linearGradient4496);stroke-width:2;stroke-linecap:round"
       inkscape:connector-curvature="0" />
    <path
       d="m 10.00001,1046.7765 0,3.5857 4.83949,0 -4.83949,-3.5857 z"
       id="path4284-5-6-2-6-50"
       style="fill:url(#linearGradient4492);stroke-width:2;stroke-linecap:round"
       inkscape:connector-curvature="0" />
    <path
       d="m 21.01138,1046.7747 -4.84091,3.5875 4.84091,0 0,-3.5875 z"
       id="path4284-5-6-2-0-6"
       style="fill:url(#linearGradient4490);stroke-width:2;stroke-linecap:round"
       inkscape:connector-curvature="0" />
    <path
       d="M 9.97729,1038.6795 32,1022.3622 l -10e-6,7.9713 z"
       id="path4284-1"
       style="fill:#aa478a;stroke-width:2;stroke-linecap:round"
       inkscape:connector-curvature="0"
       inkscape:transform-center-x="5.5056789" />
    <rect
       id="rect4267-7"
       style="fill:#ffffff;fill-opacity:0.78431396"
       height="3.9999681"
       y="1046.3622"
       x="-1.8349609e-05"
       width="31.999952" />
    <circle
       id="path4166"
       r="1"
       style="fill:#4d4d4d"
       cy="1048.3621"
       cx="29.999981" />
    <path
       d="m 1.99997,1047.3622 0,1 1,0 0,-1 -1,0 z m 1,1 0,1 1,0 0,-1 -1,0 z"
       id="rect4183"
       style="fill:#4d4d4d"
       inkscape:connector-curvature="0" />
    <path
       inkscape:connector-curvature="0"
       style="opacity:0.2;fill:url(#linearGradient4473);fill-rule:evenodd"
       id="path4463"
       d="m 22.99997,1030.3622 0,1 -14,0 9,9 -4,0 -1,1 -1,0 -1,1 8,8 9,0 4,0 0,-11 -9,-9 z" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#linearGradient4463)"
       id="rect4437"
       d="m 17.49997,1028.3622 c -1.21386,0 -2.21902,0.8559 -2.44922,2 l -6.05078,0 0,1 6.05078,0 c 0.2302,1.1441 1.23536,2 2.44922,2 1.21387,0 2.21902,-0.8559 2.44922,-2 l 3.05078,0 0,-1 -3.05078,0 c -0.2302,-1.1441 -1.23535,-2 -2.44922,-2 z m -6,9 c -1.38499,0 -2.5,1.115 -2.5,2.5 0,1.385 1.11501,2.5 2.5,2.5 1.21385,0 2.21902,-0.8559 2.44922,-2 l 9.05078,0 0,-1 -9.05078,0 c -0.2302,-1.1441 -1.23537,-2 -2.44922,-2 z m 0,1 c 0.83099,0 1.5,0.669 1.5,1.5 0,0.831 -0.66901,1.5 -1.5,1.5 -0.83099,0 -1.5,-0.669 -1.5,-1.5 0,-0.831 0.66901,-1.5 1.5,-1.5 z" />
  </g>
		</svg>
	{/if}
