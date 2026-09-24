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
			<path fill="#674172" d="m2 1038.36v12h12v-12zm1 1h4v1h1v-1h5v10h-10zm5 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v2h2v-1h-1z" transform="translate(0-1036.36)"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="709" inkscape:window-height="480" id="namedview14" showgrid="false" inkscape:zoom="10.727273" inkscape:cx="11" inkscape:cy="11" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="0" inkscape:current-layer="layer1"/>
  <defs id="defs3871"/>
  <metadata id="metadata3874">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path style="fill:#674172;stroke-width:2;fill-opacity:1" id="rect5669" d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 10 4 L 10 5 L 11 5 L 11 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 11 5 L 11 6 L 12 6 L 12 5 L 11 5 z M 11 6 L 10 6 L 10 7 L 11 7 L 11 6 z M 11 7 L 11 8 L 12 8 L 12 7 L 11 7 z M 11 8 L 10 8 L 10 9 L 11 9 L 11 8 z M 11 9 L 11 10 L 12 10 L 12 9 L 11 9 z M 11 10 L 10 10 L 10 11 L 11 11 L 11 10 z M 11 11 L 11 12 L 12 12 L 12 11 L 11 11 z M 11 12 L 10 12 L 10 13 L 10 14 L 11 14 L 12 14 L 12 13 L 11 13 L 11 12 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
			<defs id="defs5455">
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient6251" id="linearGradient5849" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.48,0,0,0.40601922,362.65139,385.60552)" y1="394.54437" x2="0" y2="335.43387"/>
  <linearGradient id="linearGradient6251" inkscape:collect="always">
   <stop id="stop6253" stop-color="#ffffff" stop-opacity="0"/>
   <stop id="stop6255" offset="1" stop-color="#ffffff" stop-opacity="0.2"/>
  </linearGradient>
 </defs>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect y="521.79797" x="388.57144" height="23.999989" width="23.999989" id="rect5837" mix-blend-mode="normal" solid-color="#000000" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" fill="#55287d" shape-rendering="auto"/>
  <rect width="24.00001" x="388.57144" y="544.79797" height="0.999974" id="rect5839" mix-blend-mode="normal" solid-color="#000000" opacity="0.25" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" shape-rendering="auto"/>
  <rect width="23.999989" x="388.57144" y="521.79797" height="1.00003" id="rect5841" mix-blend-mode="normal" solid-color="#000000" opacity="0.5" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" fill="#ffffff" shape-rendering="auto"/>
  <path inkscape:connector-curvature="0" d="m 399.57142,522.79809 0,1 1,0 0,-1 -1,0 z m 1,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,1 1,0 0,-1 z m 0,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,1 1,0 0,-1 z m 0,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,0.56054 0,1.43946 2,0 0,-1 -1,0 0,-1 z" id="path5843" mix-blend-mode="normal" solid-color="#000000" opacity="0.75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" stroke-width="2" isolation="auto" stroke-linecap="square" color-interpolation="sRGB" solid-opacity="1" fill="#ffffff" shape-rendering="auto"/>
  <rect id="rect5847" width="24" height="24" x="388.57144" y="521.79797" mix-blend-mode="normal" solid-color="#000000" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" fill="url(#linearGradient5849)" shape-rendering="auto"/>
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
     inkscape:window-height="1025"
     id="namedview24"
     showgrid="true"
     inkscape:zoom="3.6875"
     inkscape:cx="19.890283"
     inkscape:cy="38.979899"
     inkscape:window-x="0"
     inkscape:window-y="26"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2"
     inkscape:snap-bbox="true"
     inkscape:bbox-nodes="true">
    <inkscape:grid
       type="xygrid"
       id="grid4201" />
  </sodipodi:namedview>
  <defs
     id="defs4">
    <linearGradient
       id="linearGradient4300-2">
      <stop
         style="stop-color:#674172"
         id="stop4302-4" />
      <stop
         offset="1"
         style="stop-color:#714c7c"
         id="stop4304-1" />
    </linearGradient>
    <linearGradient
       id="linearGradient4300-2-6">
      <stop
         style="stop-color:#3a539b"
         id="stop4302-4-7" />
      <stop
         offset="1"
         style="stop-color:#3f5aa9"
         id="stop4304-1-5" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       x2="0"
       y2="512.79999"
       y1="543.79999"
       id="a">
      <stop
         id="stop4264"
         stop-color="#cea476" />
      <stop
         id="stop4266"
         stop-color="#dab58b"
         offset="1" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
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
       inkscape:collect="always"
       xlink:href="#linearGradient6251"
       id="linearGradient4850"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,0.84587337,-46.999997,-272.73456)"
       x1="58"
       y1="393.95328"
       x2="58"
       y2="324.65894" />
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
  <g
     id="g4264">
    <rect
       y="10.999992"
       x="7"
       height="49.999977"
       width="49.999977"
       id="rect4838"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#55287d;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;filter-blend-mode:normal;filter-gaussianBlur-deviation:0" />
    <rect
       width="50"
       x="7"
       y="59.999992"
       height="1.0000085"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.35;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;filter-blend-mode:normal;filter-gaussianBlur-deviation:0"
       id="rect4840" />
    <rect
       width="50"
       x="7"
       y="10.999992"
       height="1.0000085"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.4;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;filter-blend-mode:normal;filter-gaussianBlur-deviation:0"
       id="rect4842" />
    <path
       sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
       inkscape:connector-curvature="0"
       id="path4846"
       d="m 32.038673,12.22099 -2,-10e-6 0,2 2,10e-6 z m 0,1.99999 0,2 2,0 0,-2 z m 0,2 -2,0 0,2 2,0 z m 0,2 0,2 2,0 0,-2 z m 0,2 -2,0 0,2 2,0 z m 0,2 0,2 2,0 0,-2 z m 0,2 -2,0 0,2 2,0 z m 0,2 0,2 2,0 0,-2 z m 0,2 -2,0 0,2 2,0 z m 0,2 0,2 2,0 0,-2 z m 0,2 -2,0 0,2 0,1 4,0 0,-1 0,-1 -2,0 z"
       style="color:#4d4d4d;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.75;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;filter-blend-mode:normal;filter-gaussianBlur-deviation:0" />
    <rect
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.55199998;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient4850);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       id="rect4848"
       width="49.999977"
       height="49.999977"
       x="7"
       y="10.999992" />
  </g>
		</svg>
	{/if}
