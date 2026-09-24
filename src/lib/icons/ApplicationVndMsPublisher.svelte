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
			<path fill="#4bc94b" d="m6 2c-.554 0-1 .446-1 1v1h-2c-.554 0-1 .446-1 1v8c0 .554.446 1 1 1h8c.554 0 1-.446 1-1v-1h1c.554 0 1-.446 1-1v-8c0-.554-.446-1-1-1h-2zm0 1h7v8h-1v-6c0-.554-.446-1-1-1h-3.975c-.616-.265-1.051-.575-1.025-1m-3 2h8v8h-8zm1 1v2h6v-2zm0 3v1h6v-1zm0 2v1h6v-1z"/>
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
     inkscape:zoom="32.375"
     inkscape:cx="10.431699"
     inkscape:cy="10.91069"
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
       style="opacity:1;fill:#4bc94b;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 7 3 C 6.44599 3 6 3.44599 6 4 L 6 6 L 4 6 C 3.4459904 6 3 6.4459904 3 7 L 3 18 C 3 18.55401 3.4459904 19 4 19 L 15 19 C 15.55401 19 16 18.55401 16 18 L 16 16 L 18 16 C 18.55401 16 19 15.55401 19 15 L 19 4 C 19 3.44599 18.55401 3 18 3 L 7 3 z M 7 4 L 18 4 L 18 15 L 16 15 L 16 7 C 16 6.4459904 15.55401 6 15 6 C 12 6 7 5.6746762 7 4 z M 4 7 L 15 7 L 15 18 L 4 18 L 4 7 z M 5 8 L 5 10 L 14 10 L 14 8 L 5 8 z M 5 12 L 5 13 L 14 13 L 14 12 L 5 12 z M 5 14 L 5 15 L 14 15 L 14 14 L 5 14 z M 5 16 L 5 17 L 14 17 L 14 16 L 5 16 z "
       transform="translate(326,534.3622)"
       id="rect4153" />
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
  <linearGradient id="a" y1="17" y2="24" x1="47" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="365.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#4bc94b" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
  </g>
  <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <g fill="#ffffff">
   <path opacity=".5" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m411.57 524.8l-7-7v7z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
   <path opacity=".75" d="m14 11c-.554 0-1 .446-1 1v1h-2c-.554 0-1 .446-1 1v8c0 .554.446 1 1 1h8c.554 0 1-.446 1-1v-1h1c.554 0 1-.446 1-1v-8c0-.554-.446-1-1-1h-2zm0 1h7v8h-1v-6c0-.554-.446-1-1-1h-3.975c-.616-.265-1.051-.575-1.025-1m-3 2h8v8h-8zm1 1v2h6v-2zm0 3v1h6v-1zm0 2v1h6v-1z" transform="translate(384.57 515.8)"/>
  </g>
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
     inkscape:cx="45.214441"
     inkscape:cy="31.011312"
     inkscape:current-layer="svg2">
    <inkscape:grid
       type="xygrid"
       id="grid4221" />
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
       y1="61"
       y2="3"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,-1,0,64)">
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
       d="m10 61v-58h30l14 14v44h-14z" />
    <linearGradient
       gradientTransform="translate(110,296.36)"
       x2="54"
       gradientUnits="userSpaceOnUse"
       y2="31"
       x1="40"
       y1="17"
       id="a-3">
      <stop
         id="stop4170"
         stop-color="#060606" />
      <stop
         id="stop4172"
         stop-opacity="0"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="translate(62,-36)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="336.36"
       y1="392.36"
       id="b-6">
      <stop
         id="stop4175"
         stop-opacity="0"
         stop-color="#ffffff" />
      <stop
         id="stop4177"
         stop-opacity=".2"
         stop-color="#ffffff"
         offset="1" />
    </linearGradient>
    <path
       d="m120 357.36v-58h30l14 14v44h-14z"
       id="c-7" />
  </defs>
  <use
     height="100%"
     width="100%"
     y="0"
     x="0"
     style="fill:#4bc94b;fill-opacity:1"
     xlink:href="#c-7"
     id="use4182"
     transform="translate(-110,-296.36)" />
  <path
     opacity=".75"
     fill="#ffffff"
     d="m35 21c-.554 0-1 .446-1 1v2h-12c-.554 0-1 .446-1 1v17c0 .554.446 1 1 1h17c.554 0 1-.446 1-1v-4h2c.554 0 1-.446 1-1v-15c0-.554-.446-1-1-1h-2zm0 1h7v15h-2v-12c0-.554-.446-1-1-1-1.556-.611-4.061-.985-4-2m-13 3h17v17h-17zm1 2v4h15v-4zm0 6v1h7v-1zm8 0v1h7v-1zm-8 3v1h7v-1zm8 0v1h7v-1zm-8 3v1h7v-1zm8 0v1h7v-1z"
     id="path31"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.9;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
  <g
     style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     transform="matrix(1,0,0,-1,-110,-296.36)"
     id="g4184">
    <rect
       style="opacity:0.5;fill:#ffffff"
       x="120"
       y="-300.35999"
       width="30"
       height="1"
       id="rect4186" />
    <rect
       style="opacity:0.25"
       x="120"
       y="-357.35999"
       width="44"
       height="1"
       id="rect4188" />
  </g>
  <g
     style="fill-rule:evenodd"
     id="g4190"
     transform="translate(-110,-296.36)">
    <path
       style="opacity:0.5;fill:#ffffff"
       inkscape:connector-curvature="0"
       d="m 164,313.36 -14,-14 0,14 z"
       id="path4192" />
    <path
       inkscape:connector-curvature="0"
       d="m 150,313.36 14,14 0,-14 z"
       id="path4194"
       style="opacity:0.2;fill:url(#a-3)" />
  </g>
  <use
     height="100%"
     width="100%"
     y="0"
     x="0"
     xlink:href="#c-7"
     id="use4198"
     style="fill:url(#b-6)"
     transform="translate(-110,-296.36)" />
		</svg>
	{/if}
