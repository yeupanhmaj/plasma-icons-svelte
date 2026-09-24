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
			<path fill="#cf000f" d="M8 2A6 6.00001 0 0 0 2 8 6 6.00001 0 0 0 8 14 6 6.00001 0 0 0 14 8 6 6.00001 0 0 0 8 2M8 3A5 5.00001 0 0 1 13 8 5 5.00001 0 0 1 8 13 5 5.00001 0 0 1 3 8 5 5.00001 0 0 1 8 3M8 4A4 4 0 0 0 5.441406 4.927734L6.082 5.697A3 3 0 0 1 8 5 3 3 0 0 1 11 8H12A4 4 0 0 0 8 4M9 6L7.398 9.203A1 1 0 0 0 7 10 1 1 0 0 0 8 11 1 1 0 0 0 9 10 1 1 0 0 0 8.748047 9.339844zM4.53125 6.01758A4 4 0 0 0 4 8H5A3 3 0 0 1 5.398438 6.513672z"/>
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
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path style="fill:#cf000f;stroke-width:2" id="path6105" d="M 11 3 A 8 8 0 0 0 3 11 A 8 8 0 0 0 11 19 A 8 8 0 0 0 19 11 A 8 8 0 0 0 11 3 z M 11 4 A 7 7 0 0 1 18 11 A 7 7 0 0 1 11 18 A 7 7 0 0 1 4 11 A 7 7 0 0 1 11 4 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <path style="fill:#cf000f;stroke-width:2" id="path6110" d="M 11 6 A 5 5 0 0 0 7.6816406 7.2675781 L 8.390625 7.9765625 A 4 4 0 0 1 11 7 A 4 4 0 0 1 15 11 L 16 11 A 5 5 0 0 0 11 6 z M 6.4746094 8.8886719 A 5 5 0 0 0 6 11 L 7 11 A 4 4 0 0 1 7.2382812 9.6523438 L 6.4746094 8.8886719 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <path inkscape:transform-center-x="-0.12411808" inkscape:transform-center-y="-1.943762" inkscape:connector-curvature="0" style="fill:#cf000f;stroke-width:2" id="path6123" d="m 338.34439,542.52848 -2.14637,4.97663 c -0.1228,0.13979 -0.21208,0.31019 -0.2592,0.49473 -0.007,0.0298 -0.0135,0.0597 -0.0185,0.09 l -0.007,0.0141 0.006,0.001 c -0.09,0.56146 0.22081,1.08547 0.71863,1.21161 0.49878,0.12537 1.0215,-0.18951 1.20783,-0.72764 l 0.007,0.002 10e-4,-0.0298 c 0.008,-0.0247 0.0159,-0.0497 0.0228,-0.0748 0.0449,-0.18195 0.0475,-0.37119 0.007,-0.54997 z"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1025" id="namedview60" showgrid="false" inkscape:zoom="10.429825" inkscape:cx="6.0957664" inkscape:cy="11.658679" inkscape:window-x="0" inkscape:window-y="26" inkscape:window-maximized="1" inkscape:current-layer="layer1"/>
  <defs id="defs5455">
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient6251" id="linearGradient5849" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.48,0,0,0.40601922,362.65141,385.60546)" x1="58.166668" y1="394.54437" x2="58.166668" y2="335.43387"/>
    <linearGradient inkscape:collect="always" id="linearGradient6251">
      <stop style="stop-color:#ffffff;stop-opacity:0" offset="0" id="stop6253"/>
      <stop style="stop-color:#ffffff;stop-opacity:0.2" offset="1" id="stop6255"/>
    </linearGradient>
  </defs>
  <metadata id="metadata5458">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
    <rect y="521.79797" x="388.57144" height="23.999989" width="23.999989" id="rect5837" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#d81c17;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
    <rect width="24.000011" x="388.57144" y="544.79797" height="0.99997365" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.25;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" id="rect5839"/>
    <rect width="23.999989" x="388.57144" y="521.79797" height="1.0000263" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" id="rect5841"/>
    <path inkscape:connector-curvature="0" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.75;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:2;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 404.57142,522.79803 0,1 1,0 0,-1 -1,0 z m 1,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,1 1,0 0,-1 z m 0,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,1 1,0 0,-1 z m 0,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,0.56054 0,1.43946 2,0 0,-1 -1,0 0,-1 z" id="path5843"/>
    <path inkscape:label="Capa 1" inkscape:connector-curvature="0" style="fill:#fcbcbe" id="path4139" d="m 396.67143,531.798 a 6,6.0000086 0 0 0 -6,6 6,6.0000086 0 0 0 6,6 6,6.0000086 0 0 0 6,-6 6,6.0000086 0 0 0 -6,-6 z m 0,1 a 5.0000014,5.0000086 0 0 1 5,5 5.0000014,5.0000086 0 0 1 -5,5 5.0000014,5.0000086 0 0 1 -5,-5 5.0000014,5.0000086 0 0 1 5,-5 z m 0,1 a 4,4 0 0 0 -2.55859,0.92773 l 0.64062,0.76954 a 3,3 0 0 1 1.91797,-0.69727 3,3 0 0 1 3,3 l 1,0 a 4,4 0 0 0 -4,-4 z m 1,2 -1.60156,3.20312 a 1,1 0 0 0 -0.39844,0.79688 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -0.25195,-0.66016 l 0.25195,-3.33984 z m -4.46875,0.0176 a 4,4 0 0 0 -0.53125,1.98242 l 1,0 a 3,3 0 0 1 0.39844,-1.48633 l -0.86719,-0.49609 z"/>
    <rect style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient5849);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" id="rect5847" width="24" height="24" x="388.57144" y="521.79797"/>
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
			<sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1920"
     inkscape:window-height="1006"
     id="namedview48"
     showgrid="true"
     inkscape:zoom="5.2149125"
     inkscape:cx="4.1596351"
     inkscape:cy="25.606995"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg26"
     inkscape:snap-bbox="true"
     inkscape:bbox-nodes="true">
    <inkscape:grid
       type="xygrid"
       id="grid4150" />
  </sodipodi:namedview>
  <defs
     id="defs4">
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient6251"
       id="linearGradient5593"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,0.84587337,-47,-272.73458)"
       x1="58"
       y1="403.41098"
       x2="58"
       y2="323.82297" />
    <linearGradient
       id="linearGradient6251"
       inkscape:collect="always">
      <stop
         id="stop6253"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:0" />
      <stop
         id="stop6255"
         offset="1"
         style="stop-color:#ffffff;stop-opacity:0.2" />
    </linearGradient>
  </defs>
  <metadata
     id="metadata84">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <rect
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#db3333;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect5515"
     width="49.999977"
     height="49.999977"
     x="7"
     y="10.999992" />
  <rect
     id="rect5517"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.25;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     height="1.0000085"
     y="59.999992"
     x="7"
     width="50" />
  <rect
     id="rect5519"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     height="1.0000085"
     y="10.999992"
     x="7"
     width="50" />
  <rect
     y="10.999992"
     x="7"
     height="49.999977"
     width="49.999977"
     id="rect5525"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.55199998;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient5593);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
  <path
     inkscape:connector-curvature="0"
     id="path5715"
     d="m 24.44926,40.01241 c -6.06454,-0.35857 -11.27151,4.26702 -11.6301,10.33155 -0.0883,1.49354 0.12971,2.93519 0.59304,4.26509 l 0.94114,-0.33174 c -0.42068,-1.20841 -0.61616,-2.51738 -0.53592,-3.87433 0.32598,-5.51322 5.05959,-9.7183 10.57281,-9.39231 5.51322,0.32598 9.7183,5.05959 9.39232,10.57281 -0.0327,0.5528 -0.12047,1.08855 -0.23813,1.61181 l 0.97275,0.22577 c 0.1302,-0.57751 0.22755,-1.16829 0.26363,-1.77855 0.35858,-6.06454 -4.26701,-11.27152 -10.33154,-11.6301 z m -0.11805,1.99651 c -0.80769,-0.0448 -1.6177,0.0202 -2.40812,0.19218 l 0.18435,0.98526 c 0.71009,-0.15787 1.43838,-0.21814 2.16474,-0.17918 4.41058,0.26079 7.77465,4.04769 7.51386,8.45825 -0.0217,0.33379 -0.0654,0.66576 -0.12922,0.99411 l 1.00215,0.0593 c 0.0602,-0.32886 0.1021,-0.66081 0.12532,-0.99433 0.29339,-4.9619 -3.49118,-9.22215 -8.45308,-9.51554 z m -5.00045,1.18347 c -1.607,0.91844 -2.8917,2.31001 -3.67914,3.9851 l 0.86944,0.51707 c 0.68607,-1.5113 1.82521,-2.77181 3.25959,-3.60686 l -0.44989,-0.89531 z m -4.40448,6.35854 c -0.0523,0.30164 -0.0893,0.60569 -0.11061,0.91108 -0.0177,0.33372 -0.0176,0.66817 10e-4,1.00183 l 1.00996,0.0597 c -0.0254,-0.33357 -0.0297,-0.66839 -0.0131,-1.00252 0.0149,-0.2356 0.0408,-0.4704 0.0768,-0.70372 l -0.96448,-0.26638 z"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.75;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
  <path
     sodipodi:nodetypes="ccccccccccccccccsssss"
     inkscape:connector-curvature="0"
     d="m 33.71587,53.79424 -7.8019,-2.59393 7.2e-4,-0.0117 c -0.16965,-2.85418 -3.80404,-2.34333 -3.99303,-0.23611 -0.0652,1.10265 0.77582,2.04938 1.87846,2.11458 0.73849,0.0433 1.44055,-0.32461 1.82526,-0.95645 -0.008,0.0134 -0.0162,0.0265 -0.0239,0.0397 l 7.8001,2.59337 0.31463,-0.94983 z m -7.82099,-2.43658 c -0.005,0.0331 -0.0109,0.066 -0.0176,0.0987 0.007,-0.0327 0.0119,-0.0658 0.0176,-0.0987 z m -0.17266,0.57088 c -0.0163,0.0333 -0.033,0.0663 -0.0508,0.0987 0.0181,-0.0323 0.0348,-0.0654 0.0508,-0.0987 z M 24.91641,51.1296 c -0.0326,0.5513 -0.50595,0.97182 -1.05727,0.93922 -0.55133,-0.0326 -0.97184,-0.50595 -0.93924,-1.05727 0.0326,-0.55133 0.50596,-0.97184 1.05728,-0.93924 0.55133,0.0326 0.97183,0.50597 0.93923,1.05729 z"
     id="path5740"
     style="fill:#fcbcbe" />
  <path
     inkscape:connector-curvature="0"
     style="opacity:0.75;fill:#ffffff;fill-opacity:1"
     d="m 40,12 0,2 2,0 0,-2 -2,0 z m 2,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m 0,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m 0,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m -2,3 0,4 1,0 0,4 2,0 0,-4 1,0 0,-4 -4,0 z m 1,1 2,0 0,2 -2,0 0,-2 z"
     id="rect4173-3-3" />
		</svg>
	{/if}
