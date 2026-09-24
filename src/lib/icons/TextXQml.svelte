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
			<path fill="#52a743" d="m3 3c-.554 0-1 .446-1 1v8c0 .554.446 1 1 1h10c.554 0 1-.446 1-1v-8c0-.554-.446-1-1-1zm5.5 1c.277 0 .5.223.5.5 0 .277-.223.5-.5.5-.277 0-.5-.223-.5-.5 0-.277.223-.5.5-.5m2 0c.277 0 .5.223.5.5 0 .277-.223.5-.5.5-.277 0-.5-.223-.5-.5 0-.277.223-.5.5-.5m2 0c.277 0 .5.223.5.5 0 .277-.223.5-.5.5-.277 0-.5-.223-.5-.5 0-.277.223-.5.5-.5m-9.5 2h10v6h-10z"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1360" inkscape:window-height="708" id="namedview14" showgrid="true" inkscape:zoom="49.302134" inkscape:cx="8.5081667" inkscape:cy="11.96078" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="layer1" inkscape:object-nodes="true">
    <inkscape:grid type="xygrid" id="grid4142"/>
  </sodipodi:namedview>
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
    <path style="fill:#52a743;fill-opacity:1" d="M 3.8535156 4 C 3.3817456 4 3 4.39121 3 4.875 L 3 17.125 C 3 17.60878 3.3817456 18 3.8535156 18 L 18.146484 18 C 18.616654 18 19 17.60878 19 17.125 L 19 4.8730469 C 18.998 4.3909269 18.616321 4 18.144531 4 L 3.8535156 4 z M 13.478516 5 A 0.5 0.5 0 0 1 14 5.4707031 L 14 5.5 A 0.5 0.5 0 0 1 13.507812 6 A 0.5 0.5 0 0 1 13 5.5136719 A 0.5 0.5 0 0 1 13.478516 5 z M 15.478516 5 A 0.5 0.5 0 0 1 16 5.4707031 L 16 5.5 A 0.5 0.5 0 0 1 15.507812 6 A 0.5 0.5 0 0 1 15 5.5136719 A 0.5 0.5 0 0 1 15.478516 5 z M 17.478516 5 A 0.5 0.5 0 0 1 18 5.4707031 L 18 5.5 A 0.5 0.5 0 0 1 17.507812 6 A 0.5 0.5 0 0 1 17 5.5136719 A 0.5 0.5 0 0 1 17.478516 5 z M 4 7 L 18 7 L 18 17 L 4 17 L 4 7 z " transform="translate(326,534.3622)" id="path10"/>
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
  <linearGradient id="a" y1="68.42" y2="-3.454" x1="3.116" x2="61.689" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#66b036"/>
   <stop offset="1" stop-color="#239161"/>
  </linearGradient>
  <linearGradient id="b" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" opacity=".5" y="-518.8" fill="#ffffff" height="1"/>
   <rect width="22" x="389.57" y="-545.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#b)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path fill="#e3f5df" d="m406.84 527.79h-12.511c-.413 0-.747.334-.747.747v10.457c0 .413.334.747.747.747h12.512c.412 0 .747-.334.747-.747v-10.459c-.002-.412-.336-.746-.749-.746m-1.649.935c.326 0 .59.264.59.59 0 .326-.264.589-.59.589-.326 0-.59-.264-.59-.589 0-.326.264-.59.59-.59m-1.665 0c.326 0 .59.264.59.59 0 .326-.264.589-.59.589-.326 0-.59-.264-.59-.589 0-.326.264-.59.59-.59m-1.665 0c.326 0 .59.264.59.59 0 .326-.264.589-.59.589-.326 0-.59-.264-.59-.589 0-.326.264-.59.59-.59m4.233 9.522h-11.02v-7.594h11.02v7.594z"/>
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
     id="metadata34">
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
     inkscape:window-width="2048"
     inkscape:window-height="1095"
     id="namedview32"
     showgrid="false"
     inkscape:snap-bbox="true"
     inkscape:bbox-nodes="true"
     inkscape:zoom="8"
     inkscape:cx="59.415079"
     inkscape:cy="21.247326"
     inkscape:current-layer="svg2"
     inkscape:window-x="0"
     inkscape:window-y="30"
     inkscape:window-maximized="1">
    <inkscape:grid
       type="xygrid"
       id="grid4162" />
  </sodipodi:namedview>
  <defs
     id="defs4">
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient9654"
       id="linearGradient5654"
       gradientUnits="userSpaceOnUse"
       x1="40"
       y1="17"
       x2="54"
       y2="31" />
    <linearGradient
       id="linearGradient9654"
       inkscape:collect="always">
      <stop
         id="stop9656"
         offset="0"
         style="stop-color:#060606;stop-opacity:1" />
      <stop
         id="stop9658"
         offset="1"
         style="stop-color:#000000;stop-opacity:0" />
    </linearGradient>
    <linearGradient
       id="a-3"
       y1="68.419998"
       y2="-3.454"
       x1="3.1159999"
       x2="61.688999"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.5,0,0,-0.48276,-69.03301,54.17094)">
      <stop
         stop-color="#66b036"
         id="stop7-6" />
      <stop
         offset="1"
         stop-color="#239161"
         id="stop9-7" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#a-3"
       id="linearGradient4214"
       x1="17.336233"
       y1="3.0086219"
       x2="17.584002"
       y2="60.637825"
       gradientUnits="userSpaceOnUse" />
  </defs>
  <path
     inkscape:connector-curvature="0"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient4214);fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="path4949-6"
     d="m 10,61 0,-58 30,0 14,14 0,30 0,14 -14,0 -30,0 z"
     inkscape:export-xdpi="96"
     inkscape:export-ydpi="96" />
  <rect
     width="30"
     x="10"
     y="-3.9999831"
     height="1"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect4951-2"
     transform="scale(1,-1)"
     inkscape:export-xdpi="96"
     inkscape:export-ydpi="96" />
  <rect
     width="44"
     x="10"
     y="-60.999985"
     height="1"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#2e3132;fill-opacity:0.29411766;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect4953-9"
     transform="scale(1,-1)"
     inkscape:export-xdpi="96"
     inkscape:export-ydpi="96" />
  <path
     inkscape:connector-curvature="0"
     style="opacity:0.6;fill:#ffffff;fill-opacity:1;fill-rule:evenodd"
     id="path4955-1"
     d="M 54,17 40,3 40,17 Z"
     inkscape:export-xdpi="96"
     inkscape:export-ydpi="96" />
  <path
     inkscape:connector-curvature="0"
     style="opacity:0.2;fill:url(#linearGradient5654);fill-rule:evenodd"
     id="path4957-2"
     d="M 40,17 54,31 54,17 Z"
     inkscape:export-xdpi="96"
     inkscape:export-ydpi="96" />
  <path
     inkscape:connector-curvature="0"
     id="rect4168-7"
     d="m 20,22.9991 0,21 24,0 0,-21 -24,0 z m 18.5,1 a 0.5,0.5 0 0 1 0.5,0.5 0.5,0.5 0 0 1 -0.5,0.5 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 z m 2,0 a 0.5,0.5 0 0 1 0.5,0.5 0.5,0.5 0 0 1 -0.5,0.5 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 z m 2,0 a 0.5,0.5 0 0 1 0.5,0.5 0.5,0.5 0 0 1 -0.5,0.5 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 z m -21.5,2 22,0 0,2 -22,0 0,-2 z m 0,3 5,0 0,14 -5,0 0,-14 z m 6,0 16,0 0,14 -16,0 0,-14 z"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.7;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#e3f5df;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
		</svg>
	{/if}
