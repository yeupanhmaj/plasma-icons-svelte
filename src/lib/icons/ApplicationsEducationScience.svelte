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
			<path fill="url(#a)" d="M2 3h18v16H2z"/>
  <path stroke="#000" d="M2.5 3.5h17v15h-17z"/>
  <path stroke="url(#b)" d="M2.5 3.5h17v15h-17z"/>
  <path stroke="#AA7F41" d="M3.5 4.5h15v13h-15z" opacity=".5"/>
  <path fill="url(#c)" fill-rule="evenodd" d="M11.671 14.238c.316-.788.529-1.933.529-3.238s-.213-2.45-.529-3.238c-.158-.397-.327-.664-.474-.82a.62.62 0 0 0-.158-.128A.152.152 0 0 0 11 6.8l-.008.001a.152.152 0 0 0-.03.013.62.62 0 0 0-.16.129c-.146.155-.315.422-.473.819C10.013 8.55 9.8 9.695 9.8 11s.213 2.45.529 3.238c.158.397.327.664.474.82a.62.62 0 0 0 .158.128.154.154 0 0 0 .031.013L11 15.2l.008-.001a.154.154 0 0 0 .03-.013.62.62 0 0 0 .16-.129c.146-.155.315-.422.473-.819M11 16c1.105 0 2-2.239 2-5s-.895-5-2-5-2 2.239-2 5 .895 5 2 5" clip-rule="evenodd"/>
  <path fill="url(#d)" fill-rule="evenodd" d="M8.235 9.185c.335.78.994 1.74 1.917 2.663.922.923 1.882 1.582 2.663 1.917.393.168.701.237.915.243a.623.623 0 0 0 .203-.02.154.154 0 0 0 .03-.014l.007-.004.004-.006a.154.154 0 0 0 .014-.031.623.623 0 0 0 .02-.203c-.005-.214-.075-.522-.243-.915-.335-.78-.994-1.74-1.917-2.663-.922-.923-1.882-1.582-2.663-1.917-.393-.168-.701-.238-.915-.243a.622.622 0 0 0-.203.02.152.152 0 0 0-.037.018l-.004.006a.153.153 0 0 0-.013.031.622.622 0 0 0-.021.203c.005.214.075.522.243.915m-.77-1.72c-.782.78.168 2.997 2.12 4.95 1.953 1.952 4.17 2.902 4.95 2.12.782-.78-.168-2.997-2.12-4.95-1.953-1.952-4.17-2.902-4.95-2.12" clip-rule="evenodd"/>
  <path fill="url(#e)" fill-rule="evenodd" d="M7.762 11.671c.788.316 1.933.529 3.238.529s2.45-.213 3.238-.529c.397-.158.664-.327.82-.474a.62.62 0 0 0 .128-.158.154.154 0 0 0 .013-.031L15.2 11l-.001-.008a.154.154 0 0 0-.013-.03.62.62 0 0 0-.129-.16c-.155-.146-.422-.315-.819-.473C13.45 10.013 12.305 9.8 11 9.8s-2.45.213-3.238.529c-.397.158-.664.327-.82.474a.62.62 0 0 0-.128.158A.152.152 0 0 0 6.8 11l.001.008a.152.152 0 0 0 .013.03.62.62 0 0 0 .129.16c.155.146.422.315.819.473M6 11c0 1.105 2.239 2 5 2s5-.895 5-2-2.239-2-5-2-5 .895-5 2" clip-rule="evenodd"/>
  <path fill="#54A3D8" d="M7.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
  <path fill="#FFA92D" d="M10.5 13.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
  <path fill="#E05E4C" d="M14 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
  <defs>
    <linearGradient id="a" x1="20.75" x2="1.07" y1="19" y2="4.24" gradientUnits="userSpaceOnUse">
      <stop stop-color="#343B40"/>
      <stop offset="1" stop-color="#555E63"/>
    </linearGradient>
    <linearGradient id="b" x1="11" x2="11" y1="19" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BD8D48"/>
      <stop offset="1" stop-color="#E8B971"/>
    </linearGradient>
    <linearGradient id="c" x1="11" x2="11" y1="6" y2="16" gradientUnits="userSpaceOnUse">
      <stop stop-color="#93A2A3"/>
      <stop offset="1" stop-color="#758182"/>
    </linearGradient>
    <linearGradient id="d" x1="14.536" x2="7.464" y1="14.536" y2="7.464" gradientUnits="userSpaceOnUse">
      <stop stop-color="#92A1A2"/>
      <stop offset="1" stop-color="#AABCBD"/>
    </linearGradient>
    <linearGradient id="e" x1="16" x2="6" y1="11" y2="11" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8A9C9D"/>
      <stop offset="1" stop-color="#CFDCDD"/>
    </linearGradient>
  </defs>
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
			<defs
     id="defs5455">
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4239">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop4241" />
      <stop
         style="stop-color:#000000;stop-opacity:0;"
         offset="1"
         id="stop4243" />
    </linearGradient>
    <linearGradient
       id="linearGradient3919">
      <stop
         style="stop-color:#007ad9;stop-opacity:1;"
         offset="0"
         id="stop3921" />
      <stop
         style="stop-color:#00a8d9;stop-opacity:1;"
         offset="1"
         id="stop3923" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="503.798"
       x2="384.57144"
       y1="543.79797"
       x1="434.57144"
       id="linearGradient4586"
       xlink:href="#linearGradient4273"
       inkscape:collect="always"
       gradientTransform="translate(-1.1547241e-5,-1.6784668e-7)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4273">
      <stop
         style="stop-color:#343b40;stop-opacity:1"
         offset="0"
         id="stop4275" />
      <stop
         style="stop-color:#555e63;stop-opacity:1"
         offset="1"
         id="stop4277" />
    </linearGradient>
    <linearGradient
       id="linearGradient4152-0"
       inkscape:collect="always">
      <stop
         id="stop4154-0"
         offset="0"
         style="stop-color:#bd8d48;stop-opacity:1" />
      <stop
         id="stop4156-8"
         offset="1"
         style="stop-color:#e8b971;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4273"
       id="linearGradient3085"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.66666621,0,0,0.70000019,128.23484,165.18347)"
       x1="434.57144"
       y1="543.79797"
       x2="384.57144"
       y2="503.798" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4152-0"
       id="linearGradient3087"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.66666621,0,0,0.69999959,384.61562,515.04219)"
       x1="24"
       y1="43.999973"
       x2="24"
       y2="4" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4290"
       id="linearGradient4729"
       gradientUnits="userSpaceOnUse"
       x1="409.57144"
       y1="523.79797"
       x2="409.57144"
       y2="507.798"
       gradientTransform="translate(0,4)" />
    <linearGradient
       id="linearGradient4290"
       inkscape:collect="always">
      <stop
         id="stop4292"
         offset="0"
         style="stop-color:#7cbaf8;stop-opacity:1" />
      <stop
         id="stop4294"
         offset="1"
         style="stop-color:#f4fcff;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       y2="507.798"
       x2="409.57144"
       y1="523.79797"
       x1="409.57144"
       gradientTransform="translate(-7.9249369,18.729204)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient3052"
       xlink:href="#linearGradient4290"
       inkscape:collect="always" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4143"
       id="linearGradient3925"
       x1="408.57144"
       y1="530.79797"
       x2="401.57144"
       y2="530.79797"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="4"
       x2="26"
       y1="43.999973"
       x1="26"
       id="linearGradient4416"
       xlink:href="#linearGradient4143"
       inkscape:collect="always"
       gradientTransform="matrix(-0.99999999,0,0,1,432.57144,499.798)" />
    <linearGradient
       id="linearGradient4143"
       inkscape:collect="always">
      <stop
         id="stop4145"
         offset="0"
         style="stop-color:#197cf1;stop-opacity:1" />
      <stop
         id="stop4147"
         offset="1"
         style="stop-color:#20bcfa;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       y2="4"
       x2="26"
       y1="43.999973"
       x1="26"
       gradientTransform="matrix(-0.99999999,0,0,1,384.57144,509.798)"
       gradientUnits="userSpaceOnUse"
       id="linearGradient3044"
       xlink:href="#linearGradient4143"
       inkscape:collect="always" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4143"
       id="linearGradient3950"
       x1="8"
       y1="18.5"
       x2="11"
       y2="18.5"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4143"
       id="linearGradient3959"
       x1="19"
       y1="27"
       x2="19"
       y2="5"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4143"
       id="linearGradient3968"
       gradientUnits="userSpaceOnUse"
       x1="19"
       y1="27"
       x2="19"
       y2="5" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4239"
       id="linearGradient4245"
       x1="14.834037"
       y1="24.062218"
       x2="19.366825"
       y2="28.595005"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4239"
       id="linearGradient4247"
       x1="648.52252"
       y1="93.499515"
       x2="656.40546"
       y2="93.499512"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4239"
       id="linearGradient4249"
       x1="23.864508"
       y1="13.875984"
       x2="29.356333"
       y2="19.367809"
       gradientUnits="userSpaceOnUse" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:zoom="18.55"
     inkscape:cx="16"
     inkscape:cy="15.904047"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="true"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:window-width="1535"
     inkscape:window-height="876"
     inkscape:window-x="65"
     inkscape:window-y="24"
     inkscape:window-maximized="1"
     inkscape:showpageshadow="false"
     borderlayer="true"
     showguides="false"
     inkscape:snap-bbox="true"
     inkscape:snap-global="false">
    <inkscape:grid
       type="xygrid"
       id="grid4063" />
    <sodipodi:guide
       position="4.2167969e-05,32.000026"
       orientation="32,0"
       id="guide4625" />
    <sodipodi:guide
       position="4.2167969e-05,2.6367188e-05"
       orientation="0,31.999969"
       id="guide4627" />
    <sodipodi:guide
       position="32.000012,2.6367188e-05"
       orientation="-32,0"
       id="guide4629" />
    <sodipodi:guide
       position="32.000012,32.000026"
       orientation="0,-31.999969"
       id="guide4631" />
    <sodipodi:guide
       position="2.0000422,30.000026"
       orientation="28,0"
       id="guide4633" />
    <sodipodi:guide
       position="2.0000422,2.0000264"
       orientation="0,27.999969"
       id="guide4635" />
    <sodipodi:guide
       position="30,17"
       orientation="-28,0"
       id="guide4637" />
    <sodipodi:guide
       position="30.000012,30.000026"
       orientation="0,-27.999969"
       id="guide4639" />
    <sodipodi:guide
       position="9.0000117,24.000271"
       orientation="14,0"
       id="guide4429" />
    <sodipodi:guide
       position="9.0000117,10.000271"
       orientation="0,14.000031"
       id="guide4431" />
    <sodipodi:guide
       position="23.000042,10.000271"
       orientation="-14,0"
       id="guide4433" />
    <sodipodi:guide
       position="23.000042,24.000271"
       orientation="0,-14.000031"
       id="guide4435" />
  </sodipodi:namedview>
  <metadata
     id="metadata5458">
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
     inkscape:label="Capa 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-384.57143,-515.798)">
    <rect
       style="fill:url(#linearGradient3085);fill-opacity:1;stroke:none"
       id="rect4567"
       width="31.999987"
       height="28.000004"
       x="384.61563"
       y="517.84222" />
    <path
       sodipodi:nodetypes="cccccccccccccccc"
       inkscape:connector-curvature="0"
       style="fill:url(#linearGradient3087);fill-opacity:1;stroke:none"
       d="m 384.61562,517.84219 0,1.4 0,26.59998 1.33333,0 30.66665,0 3e-5,-2.09998 -3e-5,-24.5 0,-1.4 -1.33334,0 -29.33331,0 z m 2.00004,2 27.99996,0 0,24 -27.99996,0 z"
       id="rect4778" />
    <rect
       style="fill:#aa7f41;fill-opacity:1;stroke:none"
       id="rect4799"
       width="31.999949"
       height="0.9999665"
       x="384.61566"
       y="544.84222" />
    <path
       sodipodi:nodetypes="ccccccccccccc"
       inkscape:connector-curvature="0"
       style="color:#000000;text-decoration:none;text-decoration-line:none;display:inline;overflow:visible;visibility:visible;fill:#aa7f41;fill-opacity:0.49803922;fill-rule:nonzero;stroke:none;enable-background:accumulate"
       d="m 386.61566,519.79674 0,24.04545 0,0 27.99996,0 0,0 0,-24.04545 0,0 z m 0.99996,1.04545 26,0 0,22 -26,0 z"
       id="rect4553" />
    <ellipse
       style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:none;stroke:#d6d6d6;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate"
       id="path3011-2"
       transform="matrix(0,-1,1,0,0,0)"
       cx="-531.79797"
       cy="400.57144"
       rx="8.5000391"
       ry="3.5000391" />
    <ellipse
       style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:none;stroke:#d6d6d6;stroke-width:1.00346744;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate"
       id="path3011-2-8"
       transform="matrix(-0.74741636,-0.66435592,-0.74741636,0.66435592,0,0)"
       cx="-668.2066"
       cy="132.26517"
       rx="10.365829"
       ry="4.5713162" />
    <ellipse
       ry="3.4997938"
       rx="9.499794"
       cy="531.79797"
       cx="400.57144"
       id="ellipse4193"
       style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:none;stroke:#d6d6d6;stroke-width:1.00041258;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker:none;enable-background:accumulate" />
    <rect
       style="opacity:0.2;fill:url(#linearGradient4247);fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect4212"
       width="20.347849"
       height="3.9818952"
       x="648.52252"
       y="91.508568"
       transform="matrix(0.70710678,0.70710678,-0.70710678,0.70710678,0,0)" />
    <path
       style="opacity:0.2;fill:url(#linearGradient4245);fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 16.302734 22.5 L 13.486328 25.316406 L 18.214844 30.044922 L 23.845703 30.044922 L 16.302734 22.5 z "
       transform="translate(384.57143,515.798)"
       id="rect4214" />
    <path
       style="opacity:0.2;fill:url(#linearGradient4249);fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 25.277344 12.474609 L 22.462891 15.289062 L 32.044922 24.873047 L 32.044922 19.242188 L 25.277344 12.474609 z "
       transform="translate(384.57143,515.798)"
       id="rect4216" />
    <path
       id="path4208"
       d="m 392.57143,522.798 c -1.10464,0 -2,0.89536 -2,2 0,1.10464 0.89536,2 2,2 1.10464,0 2,-0.89536 2,-2 0,-1.10464 -0.89536,-2 -2,-2 z"
       style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:#54a3d8;fill-opacity:1;stroke:none;stroke-width:1;marker:none;enable-background:accumulate"
       inkscape:connector-curvature="0" />
    <path
       inkscape:connector-curvature="0"
       style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:#e05e4c;fill-opacity:1;stroke:none;stroke-width:1;marker:none;enable-background:accumulate"
       d="m 408.57143,527.798 c -1.10464,0 -2,0.89536 -2,2 0,1.10464 0.89536,2 2,2 1.10464,0 2,-0.89536 2,-2 0,-1.10464 -0.89536,-2 -2,-2 z"
       id="path4210" />
    <path
       style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:#ffa92d;fill-opacity:1;stroke:none;stroke-width:1;marker:none;enable-background:accumulate"
       d="m 399.57143,537.798 c -1.10464,0 -2,0.89536 -2,2 0,1.10464 0.89536,2 2,2 1.10464,0 2,-0.89536 2,-2 0,-1.10464 -0.89536,-2 -2,-2 z"
       id="path4204"
       inkscape:connector-curvature="0" />
  </g>
		</svg>
	{/if}
