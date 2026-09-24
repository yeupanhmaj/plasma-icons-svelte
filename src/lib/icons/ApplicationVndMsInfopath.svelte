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
			<path color-interpolation-filters="linearRGB" color="#4d4d4d" image-rendering="auto" color-rendering="auto" d="m10.5.5l-2.5 3h1v1h-5v8h-1l2.5 3 2.5-3h-1v-1h5v-8h1zm0 1.5l.5.5v8h-4v-1h3v-7zm-5.5 3.5h4v1h-3v7l-.5.5-.5-.5v-1zm2 2h2v1h-2z" color-interpolation="sRGB" text-rendering="auto" fill="#8542c2" shape-rendering="auto"/>
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
			<sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1360"
     inkscape:window-height="708"
     id="namedview14"
     showgrid="true"
     inkscape:zoom="11.313708"
     inkscape:cx="-1.9132954"
     inkscape:cy="15.19605"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1"
     inkscape:object-nodes="true">
    <inkscape:grid
       type="xygrid"
       id="grid4151" />
  </sodipodi:namedview>
  <defs
     id="defs3871" />
  <metadata
     id="metadata3874">
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
     inkscape:label="Capa 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="matrix(1 0 0 1 -326 -534.3622)">
    <path
       style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#8542c2;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="M 14 2 L 10 6 L 12 6 L 12 7 L 7 7 L 6 7 L 6 16 L 4 16 L 8 20 L 12 16 L 10 16 L 10 15 L 16 15 L 16 14 L 16 6 L 18 6 L 14 2 z M 14 3.4140625 L 15.585938 5 L 15 5 L 15 6 L 15 14 L 10 14 L 10 13 L 13 13 L 13 12 L 13 6 L 13 5 L 12.414062 5 L 14 3.4140625 z M 7 8 L 12 8 L 12 9 L 10 9 L 9 9 L 9 10 L 9 12 L 9 13 L 9 14 L 9 15 L 9 16 L 9 17 L 9.5859375 17 L 8 18.585938 L 6.4140625 17 L 7 17 L 7 16 L 7 8 z M 10 10 L 12 10 L 12 12 L 10 12 L 10 10 z "
       transform="translate(326,534.3622)"
       id="path4153" />
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
			<defs>
  <linearGradient id="a" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="3" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <use fill="#8542c2" xlink:href="#c"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" opacity=".5" y="-518.8" fill="#ffffff" height="1"/>
   <rect width="22" x="389.57" opacity=".25" y="-545.8" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#a)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#4d4d4d" image-rendering="auto" color-rendering="auto" d="m403.07 525.8l-2.5 3h1v1h-5v8h-1l2.5 3 2.5-3h-1v-1h5v-8h1zm0 1.5l.5.5v8h-4v-1h3v-7zm-5.5 3.5h4v1h-3v7l-.5.5-.5-.5v-1zm2 2h2v1h-2z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  <use fill="url(#b)" xlink:href="#c"/>
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
			<metadata
     id="metadata37">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="640"
     inkscape:window-height="480"
     id="namedview35"
     showgrid="false"
     inkscape:snap-bbox="true"
     inkscape:bbox-nodes="true"
     inkscape:zoom="1"
     inkscape:cx="41.123795"
     inkscape:cy="26.118387"
     inkscape:current-layer="svg2">
    <inkscape:grid
       type="xygrid"
       id="grid4208" />
  </sodipodi:namedview>
  <defs
     id="defs4">
    <linearGradient
       id="a"
       y1="17"
       x1="40"
       y2="31"
       x2="54"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#383e51"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#655c6f"
         stop-opacity="0"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="2.978"
       y2="60.978"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,-1,0,63.978)">
      <stop
         stop-color="#ffffff"
         stop-opacity="0"
         id="stop12" />
      <stop
         offset="1"
         stop-color="#ffffff"
         stop-opacity=".2"
         id="stop14" />
    </linearGradient>
    <path
       id="c"
       d="m10 60.978v-58h30l14 14v44h-14z" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient6251"
       id="linearGradient7153"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-47.999999,-332.36221)"
       x1="58"
       y1="392.36221"
       x2="58"
       y2="336.36221" />
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
       xlink:href="#linearGradient9654"
       id="linearGradient9940"
       gradientUnits="userSpaceOnUse"
       x1="40"
       y1="17"
       x2="54"
       y2="31" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient9654">
      <stop
         style="stop-color:#060606;stop-opacity:1"
         offset="0"
         id="stop9656" />
      <stop
         style="stop-color:#000000;stop-opacity:0"
         offset="1"
         id="stop9658" />
    </linearGradient>
  </defs>
  <g
     id="g4240">
    <path
       inkscape:export-ydpi="96"
       inkscape:export-xdpi="96"
       d="m 10.000001,61 0,-57.999999 30,0 L 54,17 l 0,30 0,14 -13.999999,0 -30,0 z"
       id="path6529"
       style="fill:#8542c2;fill-opacity:1"
       inkscape:connector-curvature="0" />
    <rect
       inkscape:export-ydpi="96"
       inkscape:export-xdpi="96"
       transform="scale(1,-1)"
       id="rect6531"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       height="1"
       y="-3.9999731"
       x="10"
       width="30" />
    <rect
       inkscape:export-ydpi="96"
       inkscape:export-xdpi="96"
       transform="scale(1,-1)"
       id="rect6533"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.25;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       height="1"
       y="-60.999973"
       x="10"
       width="44" />
    <path
       inkscape:export-ydpi="96"
       inkscape:export-xdpi="96"
       d="M 54,17 40.000001,3.000001 40.000001,17 Z"
       id="path6535"
       style="opacity:0.5;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
       inkscape:connector-curvature="0" />
    <path
       inkscape:export-ydpi="96"
       inkscape:export-xdpi="96"
       inkscape:connector-curvature="0"
       style="opacity:0.2;fill:url(#linearGradient9940);fill-rule:evenodd"
       id="path9852"
       d="M 40.000001,17 54,30.99999 54,17 Z" />
    <path
       style="color:#4d4d4d;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.75;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       id="path31"
       d="m36 20l-4 4.5-1.26 1.5h3.26v1h-8v11h-3.238l1.238 1.5 4 4.5 4-4.5 1.26-1.5h-3.26v-1h8v-11h3.238l-1.238-1.5zm0 1.504l3.107 3.496h-2.107v11h-7v-2h5v-9h-2.107zm-9 6.496h7v2h-5v9h2.107l-3.107 3.496-3.107-3.496h2.107v-1zm3 3h4v2h-4z"
       fill="#ffffff"
       opacity=".75" />
    <path
       inkscape:export-ydpi="96"
       inkscape:export-xdpi="96"
       inkscape:connector-curvature="0"
       style="fill:url(#linearGradient7153);fill-opacity:1"
       id="path6977"
       d="m 10.000001,61 0,-57.999999 L 40,3.000001 54,17 l 0,30 0,14 -14,0 -29.999999,0 z" />
  </g>
		</svg>
	{/if}
