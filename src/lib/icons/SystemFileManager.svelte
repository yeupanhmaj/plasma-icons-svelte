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
     id="defs8696">
    <linearGradient
       id="linearGradient4154">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop4156" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop4158" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4227"
       id="linearGradient4225"
       gradientUnits="userSpaceOnUse"
       x1="396.57144"
       y1="498.798"
       x2="426.57144"
       y2="511.798"
       gradientTransform="matrix(0.26437134,0,0,0.26378351,-102.28587,909.42679)" />
    <linearGradient
       id="linearGradient4227">
      <stop
         id="stop4229"
         offset="0"
         style="stop-color:#f5f5f5;stop-opacity:1" />
      <stop
         id="stop4231"
         offset="1"
         style="stop-color:#f9f9f9;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4154"
       id="linearGradient4160"
       x1="5"
       y1="1037.3622"
       x2="8"
       y2="1051.3622"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(3.017838e-7,0.036726)" />
    <linearGradient
       id="linearGradient919">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop915" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0;"
         offset="1"
         id="stop917" />
    </linearGradient>
    <linearGradient
       id="linearGradient39400">
      <stop
         style="stop-color:#000000;stop-opacity:1"
         offset="0"
         id="stop39396" />
      <stop
         style="stop-color:#147cdc;stop-opacity:0;"
         offset="1"
         id="stop39398" />
    </linearGradient>
    
    <linearGradient
       xlink:href="#linearGradient919"
       id="linearGradient1104"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-362.78026,602.43445)"
       x1="369.74591"
       y1="439.26642"
       x2="372.74539"
       y2="447.4592" />
    <linearGradient
       xlink:href="#linearGradient39400"
       id="linearGradient3292"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-344.12904,546.378)"
       x1="360.14905"
       y1="505.98233"
       x2="348.33896"
       y2="497.04388" />
    <linearGradient
       xlink:href="#linearGradient4154"
       id="linearGradient29516"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-336.23864,542.82229)"
       x1="341.13696"
       y1="495.72092"
       x2="349.40851"
       y2="512.0365" />
  </defs>
  
  
  <g
     id="layer1"
     transform="translate(0,-1036.3622)">
    <path
       style="fill:currentColor"
       id="rect4180"
       d="M 0.0713497,1044.991 16,1045.3622 l 0,-7 -7,0 -1,-2 -8,0 z"
       class="ColorScheme-Accent" />
    <path
       style="opacity:0.35;fill:url(#linearGradient29516);fill-opacity:1"
       id="path1052"
       d="m 0.071349,1044.991 15.92865,0.3712 v -7 H 9 l -1,-2 H 0 Z" />
    <rect
       ry="0.76202267"
       rx="0.69716454"
       y="1040.3622"
       x="0.22097087"
       height="5"
       width="15.580155"
       id="rect4223"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient4225);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
    <path
       style="fill:currentColor"
       d="M 0,1042.3622 -3.0178375e-7,1043.399 -7e-7,1051.3739 c 0,0.5051 0.50711147,0.986 1.0056359,0.986 l 13.9910928,0 c 0.504737,0.01 1.023268,-0.4589 1.023268,-0.9785 L 16,1042.3622 Z"
       id="rect4113"
       class="ColorScheme-Accent" />
    <path
       style="color:#3593e6;opacity:0.2;fill:url(#linearGradient1104);fill-opacity:1"
       d="m 4e-6,1042.3622 v 1.0368 l -1e-6,7.9749 c 0,0.5051 0.507112,0.986 1.005636,0.986 h 13.991093 c 0.504737,0.01 1.023268,-0.4589 1.023268,-0.9785 L 16,1042.3622 Z"
       id="path1044" />
    <path
       style="color:#3593e6;opacity:0.3;fill:url(#linearGradient3292);fill-opacity:1"
       d="m 1e-6,1042.3625 v 1.0368 L 0,1051.3742 c 0,0.5051 0.507112,0.986 1.005636,0.986 h 13.991093 c 0.504737,0.01 1.023268,-0.4589 1.023268,-0.9785 l -0.02,-9.0192 z"
       id="path1048" />
    <path
       style="opacity:0.181;fill:url(#linearGradient4160);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 3.017838e-7,1043.399 7.9999999982162,8 H 16 v -8 z"
       id="path4152" />
    <g
       id="g1042"
       transform="translate(3.3017838e-6,-3e-4)">
      <path
         style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
         id="path4224"
         d="M 0,1042.3622 -3.017838e-7,1043.399 16,1043.3622 v -1 z" />
      <path
         style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
         id="path4196"
         d="m 8,1036.3622 v 3 h 8 v -1 H 9 Z" />
      <path
         style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.2;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
         d="m 0,1050.3739 v 1 c 0,0.5051 0.50733495,0.9863 1.0058594,0.9863 H 14.996094 c 0.504737,0.01 1.023437,-0.4589 1.023437,-0.9785 l -0.002,-0.9902 c -0.0067,0.5156 -0.520024,0.9787 -1.021484,0.9687 H 1.0058124 C 0.50733495,1051.3602 0,1050.879 0,1050.3739 Z"
         id="path9304" />
    </g>
  </g>
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
			<defs
     id="defs7927">
    <linearGradient
       id="linearGradient4274">
      <stop
         id="stop4276"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
      <stop
         id="stop4278"
         offset="1"
         style="stop-color:#ffffff;stop-opacity:0.48760331" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4393"
       id="linearGradient4399"
       x1="419.4624"
       y1="499.23697"
       x2="432.57144"
       y2="523.79797"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.34616832,0,0,0.34616832,-141.20459,864.54108)" />
    <linearGradient
       id="linearGradient4393">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop4395" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop4397" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4227"
       id="linearGradient4225"
       gradientUnits="userSpaceOnUse"
       x1="396.57144"
       y1="498.798"
       x2="426.57144"
       y2="511.798"
       gradientTransform="matrix(0.34616832,0,0,0.34616832,-133.24271,864.50368)" />
    <linearGradient
       id="linearGradient4227">
      <stop
         id="stop4229"
         offset="0"
         style="stop-color:#f5f5f5;stop-opacity:1" />
      <stop
         id="stop4231"
         offset="1"
         style="stop-color:#f9f9f9;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4274"
       id="linearGradient8603"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.34616832,0,0,0.34616832,-133.24271,2893.0497)"
       x1="390.57144"
       y1="498.298"
       x2="442.57144"
       y2="498.298" />
    <linearGradient
       id="linearGradient919">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop915" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0;"
         offset="1"
         id="stop917" />
    </linearGradient>
    <linearGradient
       id="linearGradient39400">
      <stop
         style="stop-color:#000000;stop-opacity:1"
         offset="0"
         id="stop39396" />
      <stop
         style="stop-color:#147cdc;stop-opacity:0;"
         offset="1"
         id="stop39398" />
    </linearGradient>
    
    <linearGradient
       xlink:href="#linearGradient919"
       id="linearGradient1011"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-357.69068,599.43449)"
       x1="360.38882"
       y1="433.5701"
       x2="374.5213"
       y2="447.5524" />
    <linearGradient
       xlink:href="#linearGradient39400"
       id="linearGradient17980"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-339.14904,544.38705)"
       x1="360.17596"
       y1="506.59558"
       x2="346.14905"
       y2="494.97516" />
    <linearGradient
       xlink:href="#linearGradient4393"
       id="linearGradient21328"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-334.23864,538.8223)"
       x1="357.48947"
       y1="494.85211"
       x2="384.41882"
       y2="541.49512" />
  </defs>
  
  
  <g
     transform="translate(1,1)"
     id="g37">
    <g
       id="layer1"
       transform="translate(0,-1030.3622)">
      <g
         id="g1182"
         transform="translate(-0.95507612,-1.0029229)">
        <path
           style="fill:currentColor"
           id="rect4180"
           d="m 1,1042.3622 20,0.501 v -8.501 H 11 l -1.588488,-2.0013 H 1 Z"
           class="ColorScheme-Accent" />
        <path
           style="opacity:0.35;fill:url(#linearGradient21328);fill-opacity:1"
           id="path21324"
           d="m 1,1042.3622 20,0.501 v -8.501 H 11 l -1.588488,-2.0013 H 1 Z" />
        <rect
           ry="1.0000174"
           rx="0.9128685"
           y="1036.3622"
           x="2"
           height="5.0000172"
           width="18"
           id="rect4223"
           style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient4225);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
        <path
           style="fill:currentColor"
           d="m 9,1038.3622 -2,1 H 1 l -0.0895868,1.0011 -5e-7,9.5003 c 0,0.2699 0.244354,0.4954 0.4919395,0.4954 l 19.0105828,0.01 c 0.255387,0.01 0.500065,-0.1978 0.500065,-0.5 L 21,1038.3622 Z"
           id="rect4113"
           class="ColorScheme-Accent" />
        <path
           style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.85;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient8603);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
           d="m 2.9121094,1036.3622 c -0.5057292,0 -0.9121094,0.446 -0.9121094,1 v 1 c 0,-0.554 0.4063802,-1 0.9121094,-1 H 19 c 0.505729,0 0.912109,0.446 0.912109,1 v -1 c 0,-0.554 -0.40638,-1 -0.912109,-1 z"
           id="rect8607" />
        <path
           style="color:#3593e6;opacity:0.2;fill:url(#linearGradient1011);fill-opacity:1"
           d="m 9,1038.3622 -2,1 H 1 l -0.08959,1.0011 v 9.5003 c 0,0.2699 0.244354,0.4954 0.491939,0.4954 l 19.010583,0.01 c 0.255387,0.01 0.500065,-0.1978 0.500065,-0.5 l 0.087,-11.5068 z"
           id="path937" />
        <path
           style="color:#3593e6;opacity:0.3;fill:url(#linearGradient17980);fill-opacity:1"
           d="m 9.000003,1038.3622 -2,1 h -6 l -0.08959,1.0011 v 9.5003 c 0,0.2699 0.244354,0.4954 0.491939,0.4954 l 19.010588,0.01 c 0.25538,0.01 0.50006,-0.1978 0.50006,-0.5 L 21,1038.3622 Z"
           id="path941" />
        <path
           style="opacity:0.099;fill:url(#linearGradient4399);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
           d="M 0.9104137,1040.3622 H 8 l 1,-2 h 12 v 11.6563 H 10.614951 Z"
           id="path4383" />
        <g
           id="g858"
           transform="translate(-3e-6,9.41e-4)">
          <path
             style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
             id="path4224"
             d="m 1,1039.3622 -0.0895868,1.0011 H 8 l 1,-2 -2,0.9989 z" />
          <path
             style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
             id="path4196"
             d="m 9.411512,1032.3622 0.588488,3 h 11 v -1 H 11 Z" />
          <path
             style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
             d="m 20.992188,8 -0.08008,10.505859 c 0,0.3022 -0.244613,0.51 -0.5,0.5 l -19.0097652,-0.0098 c -0.2475856,0 -0.49218755,-0.224241 -0.49218755,-0.494141 v 1 c 0,0.2699 0.24460195,0.494141 0.49218755,0.494141 l 19.0097652,0.0098 c 0.255387,0.01 0.5,-0.1978 0.5,-0.5 L 21,8 Z"
             transform="translate(0,1030.3622)"
             id="path4164" />
        </g>
      </g>
    </g>
  </g>
		</svg>
	{:else if numericSize <= 40}
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
     id="defs6550">
    <linearGradient
       id="linearGradient4274">
      <stop
         id="stop4276"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
      <stop
         id="stop4278"
         offset="1"
         style="stop-color:#ffffff;stop-opacity:0.48760331" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4393"
       id="linearGradient4399"
       x1="430.51038"
       y1="501.60815"
       x2="452.87308"
       y2="527.82001"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.46149782,0,0,0.46149782,-186.79539,798.63114)" />
    <linearGradient
       id="linearGradient4393">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop4395" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop4397" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4227"
       id="linearGradient4225"
       gradientUnits="userSpaceOnUse"
       x1="396.57144"
       y1="498.798"
       x2="426.57144"
       y2="511.798"
       gradientTransform="matrix(0.46149782,0,0,0.46149782,-176.18094,798.24664)" />
    <linearGradient
       id="linearGradient4227">
      <stop
         id="stop4229"
         offset="0"
         style="stop-color:#f5f5f5;stop-opacity:1" />
      <stop
         id="stop4231"
         offset="1"
         style="stop-color:#f9f9f9;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4274"
       id="linearGradient7243"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.46149782,0,0,0.46149782,-178.18094,3145.014)"
       x1="390.57144"
       y1="498.298"
       x2="442.57144"
       y2="498.298" />
    <linearGradient
       xlink:href="#linearGradient919"
       id="linearGradient5977"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-286.50988,627.16296)"
       x1="364.69067"
       y1="439.92767"
       x2="384.76724"
       y2="460.43103" />
    <linearGradient
       id="linearGradient919">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop915" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0;"
         offset="1"
         id="stop917" />
    </linearGradient>
    <linearGradient
       id="linearGradient39400">
      <stop
         style="stop-color:#000000;stop-opacity:1"
         offset="0"
         id="stop39396" />
      <stop
         style="stop-color:#147cdc;stop-opacity:0;"
         offset="1"
         id="stop39398" />
    </linearGradient>
    
    <linearGradient
       xlink:href="#linearGradient39400"
       id="linearGradient985"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-329.14903,544.40065)"
       x1="360.17596"
       y1="506.59558"
       x2="337.53586"
       y2="487.11237" />
    <linearGradient
       xlink:href="#linearGradient919"
       id="linearGradient1106"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-351.69068,591.43456)"
       x1="356.78506"
       y1="432.49536"
       x2="379.39532"
       y2="455.02283" />
    <linearGradient
       xlink:href="#linearGradient4393"
       id="linearGradient12639"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-334.23865,528.82365)"
       x1="357.48947"
       y1="494.85211"
       x2="384.41882"
       y2="541.49512" />
  </defs>
  
  
  <g
     id="layer1"
     transform="translate(0,-1020.3622)">
    <path
       style="fill:currentColor"
       id="rect4180"
       d="m 1,1037.3622 30,0 0,-13 -15.000009,-10e-5 L 14,1022.3622 l -13,0 z"
       class="ColorScheme-Accent" />
    <path
       style="opacity:0.35;fill:url(#linearGradient12639);fill-opacity:1"
       id="path12635"
       d="m 1,1037.3622 h 30 v -13 L 15.999991,1024.3621 14,1022.3622 H 1 Z" />
    <rect
       ry="0.66667789"
       rx="0.66666633"
       y="1027.3622"
       x="2"
       height="7.9999828"
       width="28"
       id="rect4223"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient4225);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
    <path
       style="fill:currentColor"
       d="m 13,1031.3622 -2,1 -10,0 0,1 0.022321,15.992 c -0.011161,0.5272 0.4820034,1.0291 0.9683341,1.0287 L 30,1050.3622 c 0.541364,-2e-4 1,-0.4631 1,-1 l 0,-18 z"
       id="rect4113"
       class="ColorScheme-Accent" />
    <path
       style="opacity:0.099;fill:url(#linearGradient4399);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 1.000001,1033.3622 h 11 l 1,-2 h 18 v 18 h -14 z"
       id="path4383" />
    <path
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.85;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient7243);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="M 2.6660156,1027.3622 C 2.2966825,1027.3622 2,1027.6589 2,1028.0282 l 0,1 c 0,-0.3693 0.2966825,-0.666 0.6660156,-0.666 l 26.6679684,0 c 0.369334,0 0.666016,0.2967 0.666016,0.666 l 0,-1 c 0,-0.3693 -0.296682,-0.666 -0.666016,-0.666 z"
       id="rect7300" />
    <path
       style="color:#3593e6;opacity:0.1;fill:url(#linearGradient5977);fill-opacity:1"
       d="m 81.180798,1065.0906 -3,2 h -13 v 1 l -10e-7,18.9982 c 0,0.5398 0.488645,0.9906 0.983752,0.9907 l 38.016251,0.011 c 0.5107,0.016 1,-0.3955 1,-1 v -22 z"
       id="path1096"
       class="ColorScheme-Accent" />
    <path
       style="color:#3593e6;opacity:0.3;fill:url(#linearGradient985);fill-opacity:1"
       d="m 13.000001,1031.3622 -2,1 h -10 v 1 l 0.02232,15.992 c -0.01116,0.5272 0.482003,1.0291 0.968334,1.0287 L 30,1050.3619 c 0.541364,-2e-4 1,-0.4631 1,-1 v -18 z"
       id="path975" />
    <path
       style="color:#3593e6;opacity:0.2;fill:url(#linearGradient1106);fill-opacity:1"
       d="m 13,1031.3622 -2,1 H 1 v 1 l 0.02232,15.992 c -0.01116,0.5272 0.482003,1.0291 0.968334,1.0287 l 28.009345,-0.021 c 0.54136,-2e-4 1,-0.4631 1,-1 v -18 z"
       id="path979" />
    <g
       id="g896"
       transform="translate(0,-7.8413382e-4)">
      <path
         style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
         id="path4224"
         d="m 1,1032.3622 v 1 h 11 l 1,-2 -2,1 z" />
      <path
         style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
         id="path4196"
         d="M 13.999992,1022.3621 15,1025.3622 h 2 14 v -1 H 17 l -1.000009,-10e-5 z" />
      <path
         style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
         d="m 1.0214844,28.992188 c -0.011161,0.527199 0.4824194,1.029796 0.96875,1.029296 L 30,30 c 0.541364,-2e-4 1,-1 1,-1 v -1 c 0,0.5369 -0.458636,0.9998 -1,1 L 1.9902344,29.02148 c -0.4863306,5e-4 -0.979911,-0.502097 -0.96875,-1.029296 -0.0295408,-16.581894 -0.0274724,-14.334591 0,1 z"
         id="path7318"
         transform="translate(0,1020.3622)" />
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
			<defs
     id="defs32">
    <linearGradient
       xlink:href="#linearGradient4393"
       id="linearGradient4399"
       x1="424.441"
       y1="502.85"
       x2="440.878"
       y2="529.576"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.69224711,0,0,0.69224711,-280.19324,-329.59674)" />
    <linearGradient
       id="linearGradient4393">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop3" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop5" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4274"
       id="linearGradient4217"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.69224711,0,0,0.69224711,-264.27155,1667.4354)"
       x1="390.571"
       y1="498.298"
       x2="442.571"
       y2="498.298" />
    <linearGradient
       id="linearGradient4274">
      <stop
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;"
         id="stop9" />
      <stop
         offset="1"
         style="stop-color:#ffffff;stop-opacity:0.48760331"
         id="stop11" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4227"
       id="linearGradient4225"
       gradientUnits="userSpaceOnUse"
       x1="396.571"
       y1="498.798"
       x2="426.571"
       y2="511.798"
       gradientTransform="matrix(0.69224711,0,0,0.69224711,-264.27155,-332.67349)" />
    <linearGradient
       id="linearGradient4227">
      <stop
         offset="0"
         style="stop-color:#f5f5f5;stop-opacity:1"
         id="stop21" />
      <stop
         offset="1"
         style="stop-color:#f9f9f9;stop-opacity:1"
         id="stop23" />
    </linearGradient>
    <linearGradient
       id="linearGradient919">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop915" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0;"
         offset="1"
         id="stop917" />
    </linearGradient>
    <linearGradient
       id="linearGradient39400">
      <stop
         style="stop-color:#000000;stop-opacity:1"
         offset="0"
         id="stop39396" />
      <stop
         style="stop-color:#147cdc;stop-opacity:0;"
         offset="1"
         id="stop39398" />
    </linearGradient>
    
    <linearGradient
       xlink:href="#linearGradient919"
       id="linearGradient5977"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-347.69067,-418.92769)"
       x1="364.69067"
       y1="439.92767"
       x2="384.76724"
       y2="460.43103" />
    <linearGradient
       xlink:href="#linearGradient39400"
       id="linearGradient12348"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-316.14903,-463.98189)"
       x1="360.17596"
       y1="506.59558"
       x2="337.53586"
       y2="487.11237" />
    <linearGradient
       xlink:href="#linearGradient4393"
       id="linearGradient20243"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-331.23864,-487.53858)"
       x1="357.48947"
       y1="494.85211"
       x2="384.41882"
       y2="541.49512" />
  </defs>
  <path
     style="fill:currentColor"
     d="M 4,26 H 44 V 9 H 24 L 21,6 H 4 Z"
     id="path34"
     class="ColorScheme-Accent" />
  <path
     style="opacity:0.35;fill:url(#linearGradient20243);fill-opacity:1"
     d="M 4,26 H 43.999999 V 9 H 24 L 21,6 H 4 Z"
     id="path15862" />
  <rect
     ry="1"
     rx="1"
     y="12.997786"
     x="5"
     height="9"
     width="38"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient4225);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect36" />
  <path
     style="fill:currentColor"
     d="m 20,19 -3,2 H 4 v 1 l -1e-6,18.9982 c 0,0.5398 0.4886447,0.9906 0.9837517,0.9907 L 43,42 c 0.510707,0.016 1,-0.3955 1,-1 V 19 Z"
     id="path38"
     class="ColorScheme-Accent" />
  <path
     style="opacity:0.099;fill:url(#linearGradient4399);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
     d="m 4,22 h 14 l 2,-3 24,10e-5 0.17398,22.3079 H 23.406566 Z"
     id="path44" />
  <g
     id="g1092">
    <path
       style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
       d="m 4,21 v 1 h 14 l 2,-3 -3,2 z"
       id="path40" />
    <path
       style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
       d="m 21,6 2,4 h 2 19 V 9 H 25 24 Z"
       id="path42" />
    <path
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="m 4,39.998047 v 1 c 0,0.5398 0.489268,0.990134 0.984375,0.990234 L 43,42 c 0.510707,0.016 1,-0.3955 1,-1 v -1 c 0,0.6045 -0.489293,1.016 -1,1 L 4.984375,40.988281 C 4.489268,40.988181 4,40.537847 4,39.998047 Z"
       id="path46" />
  </g>
  <path
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.85;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient4217);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     d="m 6,13 c -0.554,0 -1,0.446 -1,1 v 1 c 0,-0.554 0.446,-1 1,-1 h 36 c 0.554,0 1,0.446 1,1 v -1 c 0,-0.554 -0.446,-1 -1,-1 z"
     id="path48" />
  <path
     style="opacity:0.1;fill:url(#linearGradient5977);fill-opacity:1"
     d="m 20,19 -3,2 H 4 v 1 l -1e-6,18.9982 c 0,0.5398 0.488645,0.9906 0.983752,0.9907 L 43,42 c 0.510707,0.016 1,-0.3955 1,-1 V 19 Z"
     id="path1096"
     class="ColorScheme-Accent" />
  <path
     style="opacity:0.3;fill:url(#linearGradient12348);fill-opacity:1"
     d="m 20,19 -3,2 H 3.9999997 v 1 l -1e-6,18.9982 c 0,0.5398 0.488645,0.9906 0.983752,0.9907 L 43,42 c 0.510707,0.016 1,-0.3955 1,-1 V 19 Z"
     id="path9452"
     class="ColorScheme-Accent" />
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
       id="linearGradient82546">
      <stop
         style="stop-color:#000000;stop-opacity:1"
         offset="0"
         id="stop82542" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop82544" />
    </linearGradient>
    <linearGradient
       id="linearGradient39400">
      <stop
         style="stop-color:#000000;stop-opacity:1"
         offset="0"
         id="stop39396" />
      <stop
         style="stop-color:#147cdc;stop-opacity:0;"
         offset="1"
         id="stop39398" />
    </linearGradient>
    <linearGradient
       id="linearGradient919">
      <stop
         style="stop-color:#ffffff;stop-opacity:1;"
         offset="0"
         id="stop915" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0;"
         offset="1"
         id="stop917" />
    </linearGradient>
    <linearGradient
       id="linearGradient4393">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop4395" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop4397" />
    </linearGradient>
    <linearGradient
       id="linearGradient4227">
      <stop
         id="stop4229"
         offset="0"
         style="stop-color:#f5f5f5;stop-opacity:1" />
      <stop
         id="stop4231"
         offset="1"
         style="stop-color:#f9f9f9;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="linearGradient4274">
      <stop
         id="stop4276"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
      <stop
         id="stop4278"
         offset="1"
         style="stop-color:#ffffff;stop-opacity:0.48760331" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient919"
       id="linearGradient921"
       x1="339.66766"
       y1="472.30182"
       x2="357.40253"
       y2="502.19492"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(66.903794,39.496194)" />
    <linearGradient
       xlink:href="#linearGradient39400"
       id="linearGradient39402"
       x1="376.81827"
       y1="549.95038"
       x2="337.81827"
       y2="519.95038"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(68.75316,-8.152382)" />
    <linearGradient
       xlink:href="#linearGradient4393"
       id="linearGradient49568"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-22.999995,4.999998)"
       x1="443.57144"
       y1="510.798"
       x2="443.57144"
       y2="526.79797" />
    <linearGradient
       xlink:href="#linearGradient4274"
       id="linearGradient76299"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-3e-6,3)"
       x1="390.57144"
       y1="498.298"
       x2="442.57144"
       y2="498.298" />
    <linearGradient
       xlink:href="#linearGradient4227"
       id="linearGradient76301"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-3e-6,1)"
       x1="396.57144"
       y1="498.798"
       x2="426.57144"
       y2="511.798" />
    <linearGradient
       xlink:href="#linearGradient82546"
       id="linearGradient82548"
       x1="357.48947"
       y1="494.85211"
       x2="384.41882"
       y2="541.49512"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(58.00001)" />
    
  </defs>
  
  <g
     id="layer1"
     transform="matrix(1 0 0 1 -384.57143 -483.798)">
    <path
       style="fill:currentColor"
       id="path76317"
       d="m 388.57143,489.79812 v 5 22 c 0,0.55373 0.446,1 1,1 h 54 c 0.55399,0 1,-0.44627 1,-1 v -21.99023 c 0,-0.003 -0.002,-0.006 -0.002,-0.01 h 0.002 v -1 h -28 l -4,-4 h -24 z"
       class="ColorScheme-Accent" />
    <path
       style="opacity:0.35;fill:url(#linearGradient82548);fill-opacity:1"
       id="path76289"
       d="m 388.57143,489.79812 v 5 22 c 0,0.55373 0.446,1 1,1 h 54 c 0.55399,0 1,-0.44627 1,-1 v -21.99023 c 0,-0.003 -0.002,-0.006 -0.002,-0.01 h 0.002 v -1 h -28 l -4,-4 h -24 z" />
    <rect
       ry="0.99999583"
       rx="1.0000117"
       y="498.798"
       x="390.57144"
       height="14.999973"
       width="52.000011"
       id="rect76291"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient76301);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
    <path
       style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
       id="path76293"
       d="m 387.57144,511.798 v 1 h 19.99999 l 3,-5 -4,4 z" />
    <path
       style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
       id="path76295"
       d="m 412.57143,489.798 3,5 h 2 27 v -1 h -27 -1 z" />
    <path
       id="path76297"
       d="m 391.57143,498.798 c -0.55401,0 -1,0.446 -1,1 v 1 c 0,-0.554 0.44599,-1 1,-1 h 50 c 0.55401,0 1,0.446 1,1 v -1 c 0,-0.554 -0.44599,-1 -1,-1 z"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.85;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient76299);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
    <path
       style="fill:currentColor"
       d="m 410.57144,507.79802 -4,4 h -19 v 1 h 0.002 c -5e-5,0.004 -0.002,0.008 -0.002,0.0117 v 26.98828 1 c 0,0.554 0.44599,1 1,1 h 56 c 0.55401,0 1,-0.446 1,-1 v -1 -26.98828 -0.0117 -5 z"
       id="path889"
       class="ColorScheme-Accent" />
    <path
       style="opacity:0.1;fill:url(#linearGradient921);fill-opacity:1"
       d="m 410.57144,507.79802 -4,4 h -19 v 1 h 0.002 c -5e-5,0.004 -0.002,0.008 -0.002,0.0117 v 26.98828 1 c 0,0.554 0.44599,1 1,1 h 56 c 0.55401,0 1,-0.446 1,-1 v -1 -26.98828 -0.0117 -5 z"
       id="path893" />
    <path
       style="opacity:0.3;fill:url(#linearGradient39402);fill-opacity:1"
       d="m 410.57144,507.79802 -4,4 h -19 v 1 h 0.002 c -5e-5,0.004 -0.002,0.008 -0.002,0.0117 v 26.98828 1 c 0,0.554 0.44599,1 1,1 h 56 c 0.55401,0 1,-0.446 1,-1 v -1 -26.98828 -0.0117 -5 z"
       id="path35453" />
    <path
       style="opacity:0.109;fill:url(#linearGradient49568);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 387.57144,512.798 h 20 l 3,-5 h 35 v 33 h -30 z"
       id="path49566" />
    <path
       style="opacity:0.3;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
       id="path49671"
       d="m 387.57145,511.79802 v 1 h 19.99999 l 3,-5 -4,4 z" />
    <path
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="m 388.57144,541.798 c -0.55401,0 -1,-0.446 -1,-1 v -1 c 0,0.554 0.44599,1 1,1 h 56 c 0.55401,0 1,-0.446 1,-1 v 1 c 0,0.554 -0.44599,1 -1,1 z"
       id="path49673" />
  </g>
		</svg>
	{/if}
