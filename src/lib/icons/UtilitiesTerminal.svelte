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
     id="defs4232">
    <linearGradient
       id="c"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.39741182,0,0,0.39741182,-154.37173,836.21514)">
      <stop
         stop-color="#292c2f"
         id="stop17" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(0.39741182,0,0,0.39741182,-1.5390692,1034.8416)"
       id="b"
       y1="39.054199"
       y2="11.375102"
       x2="13.937858"
       gradientUnits="userSpaceOnUse"
       x1="34.068108">
      <stop
         stop-color="#536161"
         id="stop12"
         style="stop-color:#d9dfdf;stop-opacity:1" />
      <stop
         offset="1"
         stop-color="#f4f5f5"
         id="stop14"
         style="stop-color:#f7f7f7;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="a"
       y1="547.63354"
       y2="499.67896"
       x2="388.86475"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.39741182,0,0,0.39741182,-154.37173,836.21514)"
       x1="428.81628">
      <stop
         stop-color="#2a2c2f"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#536161"
         id="stop9" />
    </linearGradient>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="22.4"
     inkscape:cx="14.902674"
     inkscape:cy="10.033905"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="true"
     units="px"
     inkscape:snap-bbox="true">
    <inkscape:grid
       type="xygrid"
       id="grid4818" />
  </sodipodi:namedview>
  <metadata
     id="metadata4235">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Livello 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-1036.3622)">
    <rect
       style="fill:url(#a)"
       id="rect23"
       height="16.000017"
       rx="1"
       y="1036.3622"
       x="0"
       width="16"
       ry="1.0000174" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#b);stroke:none;stroke-width:0.07948237;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="path27"
       d="m 6.573696,1040.4054 -0.5619403,0.5619 3.4121779,3.4121 -3.4121779,3.4123 0.5619403,0.5619 3.974119,-3.9742 -0.5619411,-0.5619 z" />
    <path
       d="m 6.5760804,1048.3536 3.8095896,3.8095 5.563766,0 0,-2.3844 -5.399238,-5.3993 z"
       id="path31"
       style="opacity:0.4;fill:url(#c);fill-rule:evenodd"
       inkscape:connector-curvature="0" />
    <path
       style="fill:#ffffff;color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="M 1 0 C 0.446 0 0 0.44599036 0 1 L 0 2 C 0 1.4459904 0.446 1 1 1 L 15 1 C 15.554 1 16 1.4459904 16 2 L 16 1 C 16 0.44599036 15.554 0 15 0 L 1 0 z "
       transform="translate(0,1036.3622)"
       id="rect4839" />
    <path
       id="path4862"
       d="m 1,1052.3622 c -0.554,0 -1,-0.446 -1,-1 l 0,-1 c 0,0.554 0.446,1 1,1 l 14,0 c 0.554,0 1,-0.446 1,-1 l 0,1 c 0,0.554 -0.446,1 -1,1 l -14,0 z"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;filter-blend-mode:normal;filter-gaussianBlur-deviation:0"
       inkscape:connector-curvature="0" />
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
     id="defs7121">
    <linearGradient
       id="c"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.44993251,0,0,0.44993251,-172.83028,805.68892)">
      <stop
         stop-color="#292c2f"
         id="stop17" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(0.44993251,0,0,0.44993251,0.20026998,1030.5652)"
       id="b"
       y1="41.268578"
       y2="4.5704951"
       x2="12.965569"
       gradientUnits="userSpaceOnUse"
       x1="32.80682">
      <stop
         stop-color="#536161"
         id="stop12"
         style="stop-color:#d7dbdb;stop-opacity:1" />
      <stop
         offset="1"
         stop-color="#f4f5f5"
         id="stop14"
         style="stop-color:#f7f7f7;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(0.44993251,0,0,0.44993251,0.20026998,1030.5652)"
       inkscape:collect="always"
       xlink:href="#linearGradient4175"
       id="linearGradient4181"
       x1="28.407476"
       y1="26.079958"
       x2="17.319328"
       y2="15.301996"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4175">
      <stop
         style="stop-color:#33383a;stop-opacity:1;"
         offset="0"
         id="stop4177" />
      <stop
         style="stop-color:#485052;stop-opacity:1"
         offset="1"
         id="stop4179" />
    </linearGradient>
    <linearGradient
       id="a"
       y1="547.63354"
       y2="499.67896"
       x2="388.86475"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.44993251,0,0,0.44993251,-172.83028,805.68892)"
       x1="428.81628">
      <stop
         stop-color="#2a2c2f"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#536161"
         id="stop9" />
    </linearGradient>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="11.313708"
     inkscape:cx="24.824579"
     inkscape:cy="9.5097589"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     units="px"
     inkscape:snap-bbox="true"
     inkscape:bbox-nodes="true"
     inkscape:object-nodes="true"
     inkscape:snap-global="false"
     showborder="false">
    <inkscape:grid
       type="xygrid"
       id="grid7707" />
  </sodipodi:namedview>
  <metadata
     id="metadata7124">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Livello 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-1030.3622)">
    <rect
       style="fill:url(#a)"
       id="rect23"
       height="17.997301"
       rx="0.99730492"
       y="1032.3649"
       x="2.0000036"
       width="17.997301"
       ry="0.99733186" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#b);stroke:url(#linearGradient4181);stroke-width:0.0899865;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="path27"
       d="m 9.3851922,1036.8642 -0.6362045,0.6362 3.8631203,3.8631 -3.8631203,3.8632 0.6362045,0.6362 4.4993248,-4.4994 -0.636204,-0.6362 z" />
    <path
       d="m 9.3878918,1045.8629 4.3130532,4.313 6.299055,0 0,-2.6996 -6.112783,-6.1128 z"
       id="path31"
       style="opacity:0.4;fill:url(#c);fill-rule:evenodd"
       inkscape:connector-curvature="0" />
    <path
       style="fill:#ffffff;color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="M 2.9980469 2.0019531 C 2.44554 2.0019531 2 2.4474782 2 3 L 2 4 C 2 3.4474782 2.44554 3.0019531 2.9980469 3.0019531 L 19 3.0019531 C 19.552507 3.0019531 19.998047 3.4474782 19.998047 4 L 19.998047 3 C 19.998047 2.4474782 19.552507 2.0019531 19 2.0019531 L 2.9980469 2.0019531 z "
       transform="translate(0,1030.3622)"
       id="rect7776" />
    <path
       id="path7790"
       d="M 2.9980469,1050.3622 C 2.44554,1050.3622 2,1049.9167 2,1049.3642 l 0,-1 c 0,0.5525 0.44554,0.998 0.9980469,0.998 l 16.0019531,0 c 0.552507,0 0.998047,-0.4455 0.998047,-0.998 l 0,1 c 0,0.5525 -0.44554,0.998 -0.998047,0.998 l -16.0019531,0 z"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;filter-blend-mode:normal;filter-gaussianBlur-deviation:0"
       inkscape:connector-curvature="0" />
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
     id="defs6331">
    <linearGradient
       id="c"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.6999997,0,0,0.6999997,-269.99888,669.70239)">
      <stop
         stop-color="#292c2f"
         id="stop17" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(0.6999997,0,0,0.6999997,-0.8000067,1019.5622)"
       id="b"
       y1="43.722721"
       y2="7.3077364"
       x2="9.343915"
       gradientUnits="userSpaceOnUse"
       x1="31.819818">
      <stop
         stop-color="#536161"
         id="stop12"
         style="stop-color:#dce1e1;stop-opacity:1" />
      <stop
         offset="1"
         stop-color="#f4f5f5"
         id="stop14"
         style="stop-color:#fbfbfb;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(0.6999997,0,0,0.6999997,-0.8000067,1019.5622)"
       inkscape:collect="always"
       xlink:href="#linearGradient4175"
       id="linearGradient4181"
       x1="28.407476"
       y1="26.079958"
       x2="17.319328"
       y2="15.301996"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4175">
      <stop
         style="stop-color:#33383a;stop-opacity:1;"
         offset="0"
         id="stop4177" />
      <stop
         style="stop-color:#485052;stop-opacity:1"
         offset="1"
         id="stop4179" />
    </linearGradient>
    <linearGradient
       id="a"
       y1="547.63354"
       y2="499.67896"
       x2="388.86475"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.6999997,0,0,0.6999997,-269.99888,669.70239)"
       x1="428.81628">
      <stop
         stop-color="#2a2c2f"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#536161"
         id="stop9" />
    </linearGradient>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="11.313708"
     inkscape:cx="25.244003"
     inkscape:cy="18.675192"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     units="px"
     inkscape:snap-bbox="true"
     inkscape:bbox-nodes="true">
    <inkscape:grid
       type="xygrid"
       id="grid6877" />
  </sodipodi:namedview>
  <metadata
     id="metadata6334">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Livello 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-1020.3622)">
    <rect
       style="fill:url(#a)"
       id="rect23"
       height="27.999989"
       rx="0.99998665"
       y="1022.3622"
       x="1.9999981"
       width="27.999989"
       ry="1.0000174" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#b);stroke:url(#linearGradient4181);stroke-width:0.13999994;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="path27"
       d="m 13.489787,1029.3622 -0.9898,0.9898 6.010198,6.0102 -6.010198,6.0102 0.9898,0.9898 6.999997,-7 -0.9898,-0.9898 z" />
    <path
       d="m 13.493987,1043.3622 6.710197,6.7102 9.799996,0 0,-4.2 -9.510196,-9.5102 z"
       id="path31"
       style="opacity:0.4;fill:url(#c);fill-rule:evenodd"
       inkscape:connector-curvature="0" />
    <path
       style="fill:#ffffff;color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="M 3 2 C 2.4460074 2 2 2.4459904 2 3 L 2 4 C 2 3.4459904 2.4460074 3 3 3 L 29 3 C 29.553993 3 30 3.4459904 30 4 L 30 3 C 30 2.4459904 29.553993 2 29 2 L 3 2 z "
       transform="translate(0,1020.3622)"
       id="rect7042" />
    <path
       id="path7077"
       d="m 3,1050.3622 c -0.553993,0 -1,-0.446 -1,-1 l 0,-1 c 0,0.554 0.446007,1 1,1 l 26,0 c 0.553993,0 1,-0.446 1,-1 l 0,1 c 0,0.554 -0.446007,1 -1,1 l -26,0 z"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;filter-blend-mode:normal;filter-gaussianBlur-deviation:0"
       inkscape:connector-curvature="0" />
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
			<defs>
  <linearGradient id="a" y1="547.634" y2="499.679" x2="388.865" gradientUnits="userSpaceOnUse" gradientTransform="translate(-384.57,-499.8)" x1="428.816">
   <stop stop-color="#2a2c2f"/>
   <stop offset="1" stop-color="#536161"/>
  </linearGradient>
  <linearGradient id="b" y1="44" y2="12" x2="14" gradientUnits="userSpaceOnUse" x1="36">
   <stop stop-color="#536161" style="stop-color:#bfc9c9;stop-opacity:1"/>
   <stop offset="1" stop-color="#f4f5f5" style="stop-color:#fbfbfb;stop-opacity:1"/>
  </linearGradient>
  <linearGradient id="c" y1="527.014" x1="406.501" y2="539.825" x2="419.974" gradientUnits="userSpaceOnUse" gradientTransform="translate(-384.57,-499.8)">
   <stop stop-color="#292c2f"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <rect style="fill:url(#a)" height="40" rx="1" y="4" x="4" width="40" ry="1"/>
 <path style="fill:#000000;fill-opacity:1;opacity:0.3" d="M 4 42 L 4 43 C 4 43.554007 4.4459958 44 5 44 L 43 44 C 43.554004 44 44 43.554007 44 43 L 44 42 C 44 42.554007 43.554004 43 43 43 L 5 43 C 4.4459958 43 4 42.554007 4 42 z"/>
 <path style="fill:url(#b);stroke:none;stroke-opacity:1;stroke-width:0.2;stroke-miterlimit:4;stroke-dasharray:none" d="M 20.414,14 19,15.414 27.586,24 19,32.586 20.414,34 30.414,24 29,22.586 Z"/>
 <path d="m 20.42,34 9.586,9.586 14,0 0,-6 L 30.42,24 Z" style="opacity:0.4;fill:url(#c);fill-rule:evenodd"/>
 <path d="M 4,6 4,5 C 4,4.445993 4.445996,4 5,4 l 38,0 c 0.554004,0 1,0.445993 1,1 l 0,1 C 44,5.445993 43.554004,5 43,5 L 5,5 C 4.445996,5 4,5.445993 4,6 Z" style="opacity:0.3;fill:#ffffff;fill-opacity:1"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64.000002"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs
     id="defs4880">
    <linearGradient
       id="c"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-386.72845,506.21259)">
      <stop
         stop-color="#292c2f"
         id="stop17" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19" />
    </linearGradient>
    <linearGradient
       gradientTransform="translate(-2.1584511,1006.0126)"
       id="b"
       y1="34"
       y2="14"
       x2="0"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#536161"
         id="stop12"
         style="stop-color:#bfc9c9;stop-opacity:1" />
      <stop
         offset="1"
         stop-color="#f4f5f5"
         id="stop14"
         style="stop-color:#fafafa;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="a"
       y1="547.63354"
       y2="499.67896"
       x2="388.86475"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-386.72845,506.21259)"
       x1="428.81628">
      <stop
         stop-color="#2a2c2f"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#536161"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="c-7"
       y1="527.01447"
       x1="406.50085"
       y2="539.82538"
       x2="419.97357"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.299805,0,0,1.299805,-499.06524,339.52825)">
      <stop
         stop-color="#292c2f"
         id="stop17-5" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop19-3" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1.299805,0,0,1.299805,0.8007798,989.17075)"
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
       id="a-9"
       y1="547.63354"
       y2="499.67896"
       x2="388.86475"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1.299805,0,0,1.299805,-499.06524,339.52825)"
       x1="428.81628">
      <stop
         stop-color="#2a2c2f"
         id="stop7-1" />
      <stop
         offset="1"
         stop-color="#536161"
         id="stop9-2" />
    </linearGradient>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1"
     inkscape:cx="33.71152"
     inkscape:cy="38.934322"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     units="px"
     inkscape:snap-bbox="true"
     inkscape:bbox-nodes="true">
    <inkscape:grid
       type="xygrid"
       id="grid6138" />
  </sodipodi:namedview>
  <metadata
     id="metadata4883">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Livello 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-988.3622)">
    <rect
       style="fill:url(#a-9)"
       id="rect23"
       height="51.992203"
       rx="0.9922142"
       y="994.37"
       x="6.00001"
       width="51.992203"
       ry="0.9922049" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#b-5);stroke:none;stroke-width:0.25996101;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="path27"
       d="m 27.335,1007.368 -1.837925,1.838 11.160126,11.1601 -11.160126,11.1601 1.837925,1.8379 12.99805,-12.998 -1.837924,-1.8379 z" />
    <path
       d="m 27.342799,1033.3641 12.459931,12.46 18.19727,0 0,-7.7988 -17.659151,-17.6592 z"
       id="path31"
       style="opacity:0.4;fill:url(#c-7);fill-rule:evenodd"
       inkscape:connector-curvature="0" />
    <path
       style="fill:#ffffff;color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="M 6.9921875 6.0078125 C 6.4425008 6.0078125 6 6.4503185 6 7 L 6 8 C 6 7.4503185 6.4425008 7.0078125 6.9921875 7.0078125 L 57 7.0078125 C 57.549687 7.0078125 57.992188 7.4503185 57.992188 8 L 57.992188 7 C 57.992188 6.4503185 57.549687 6.0078125 57 6.0078125 L 6.9921875 6.0078125 z "
       transform="translate(0,988.3622)"
       id="rect6261" />
    <path
       id="path6284"
       d="M 6.992188,1046.3622 C 6.442501,1046.3622 6,1045.9197 6,1045.37 l 0,-1 c 0,0.5497 0.442501,0.9922 0.992188,0.9922 l 50.007812,0 c 0.549687,0 0.992188,-0.4425 0.992188,-0.9922 l 0,1 c 0,0.5497 -0.442501,0.9922 -0.992188,0.9922 l -50.007812,0 z"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.3;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;filter-blend-mode:normal;filter-gaussianBlur-deviation:0"
       inkscape:connector-curvature="0" />
  </g>
		</svg>
	{/if}
