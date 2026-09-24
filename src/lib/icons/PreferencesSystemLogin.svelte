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
			<linearGradient id="a"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="11.00001" x2="11.00001" xlink:href="#a" y1="9.99999" y2="4.99999"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="4.00001" x2="18.00002" y1="4.00016" y2="18"><stop offset="0" stop-color="#383e51"/><stop offset="1" stop-color="#655c6f" stop-opacity="0"/></linearGradient><linearGradient id="d" gradientTransform="matrix(.62500129 0 0 .78947505 -241.2327 -408.36755)" gradientUnits="userSpaceOnUse" x2="0" y1="538.79797" y2="519.79797"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="e" gradientTransform="matrix(.66666658 0 0 .50000001 -256.04766 -252.39899)" gradientUnits="userSpaceOnUse" x2="0" xlink:href="#a" y1="542.79797" y2="538.79797"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="6.78569" x2="17.714262" y1="3.285716" y2="14.214288"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="g" gradientTransform="matrix(.6 0 0 .61111111 -229.34287 -314.04322)" gradientUnits="userSpaceOnUse" x2="0" y1="536.79797" y2="518.79797"><stop offset="0" stop-color="#39a1d8"/><stop offset="1" stop-color="#4db4e8"/></linearGradient><path d="m.999997 2.000005h19.999996v15.000016h-19.999996z" fill="url(#d)" stroke-width=".638443"/><path d="m9.000006 16.99999h4v2h-4z" fill="url(#e)" stroke-width=".577351"/><path d="m7.000003 19.000013h8v1h-8z" fill="#99a1a7" stroke-width=".816499"/><path d="m1.9999982 13.999998 3.0000021 3.000002h16.0000007v-12.9999986l-1.000003-1.0000029z" fill="url(#f)" fill-rule="evenodd" opacity=".2" stroke-width=".642857"/><path d="m2 3h18v11h-18z" fill="url(#g)" stroke-width=".60553"/><path d="m18 5v3h-14l4 4h-4l2 2h14v-7z" fill="url(#c)" fill-rule="evenodd"/><path d="m4 5v3h14v-3zm0 4v3h14v-3z" fill="url(#b)"/><path d="m5.5 6a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm0 4a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm2 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm2 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5z" fill="#4d4d4d"/>
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
			<sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1535"
     inkscape:window-height="876"
     id="namedview46"
     showgrid="false"
     inkscape:zoom="7.375"
     inkscape:cx="68.252043"
     inkscape:cy="16"
     inkscape:window-x="65"
     inkscape:window-y="24"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs5455">
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4303"
       id="linearGradient4346"
       y1="542.79797"
       y2="538.79797"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-7e-5,2)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4303">
      <stop
         style="stop-color:#c6cdd1"
         id="stop4305" />
      <stop
         offset="1"
         style="stop-color:#e0e5e7"
         id="stop4307" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4293"
       id="linearGradient4173"
       y1="519.79797"
       x1="393.57144"
       y2="536.79797"
       x2="410.57144"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4293">
      <stop
         id="stop4295" />
      <stop
         offset="1"
         style="stop-opacity:0"
         id="stop4297" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4159"
       id="linearGradient4338"
       y1="538.79797"
       y2="519.79797"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,1.2105271,-3.00004,-111.43158)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4159">
      <stop
         style="stop-color:#2a2c2f"
         id="stop4161" />
      <stop
         offset="1"
         style="stop-color:#424649"
         id="stop4163" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4303"
       id="linearGradient4270"
       y1="524.79797"
       y2="522.79797"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,-0.99999997,0,-2.999886)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4303"
       id="linearGradient4274"
       y1="524.79797"
       y2="522.79797"
       gradientUnits="userSpaceOnUse"
       x2="0"
       gradientTransform="matrix(1,0,0,-1,0,-2.999888)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4172">
      <stop
         style="stop-color:#39a1d8"
         id="stop4174" />
      <stop
         offset="1"
         style="stop-color:#4db4e8"
         id="stop4176" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4410"
       id="linearGradient4373"
       y1="5.00016"
       x1="9"
       y2="19"
       x2="23.00001"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(384.57144,518.798)" />
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
       xlink:href="#linearGradient4172"
       id="linearGradient4351"
       y1="536.79797"
       y2="518.79797"
       x2="0"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4159"
       id="linearGradient4189"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,1.2105271,-3.00004,-111.43158)"
       y1="538.79797"
       x2="0"
       y2="519.79797" />
  </defs>
  <metadata
     id="metadata5458">
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
     transform="matrix(1 0 0 1 -384.57143 -515.798)">
    <flowRoot
       line-height="125%"
       style="font-size:10;font-family:sans-serif"
       id="flowRoot4170"
       transform="matrix(1 0 0 1 389.57142 520.79806)">
      <flowRegion
         id="flowRegion4172">
        <rect
           width="27"
           x="22"
           y="3"
           height="15"
           id="rect4174" />
      </flowRegion>
      <flowPara
         id="flowPara4176">Plasm</flowPara>
    </flowRoot>
    <rect
       width="30"
       x="385.57144"
       y="518.79797"
       rx="0"
       height="18"
       style="fill:url(#linearGradient4351)"
       id="rect4343" />
    <rect
       width="6"
       x="397.57144"
       y="540.79797"
       height="4"
       style="fill:url(#linearGradient4346)"
       id="rect4321" />
    <rect
       width="12"
       x="394.57144"
       y="544.79797"
       height="1"
       style="fill:#99a1a7"
       id="rect4323" />
    <path
       inkscape:connector-curvature="0"
       style="opacity:0.2;fill:url(#linearGradient4173);fill-rule:evenodd"
       id="path4165"
       d="m 385.57143,536.79801 4,4 27,0 0,-21 -1,-1 0,18 z" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#linearGradient4189)"
       id="rect4319"
       d="m 384.57143,517.79801 0,23 32,0 0,-23 -32,0 z m 1,1 30,0 0,18 -30,0 0,-18 z" />
    <rect
       width="14"
       x="393.57144"
       y="-527.7981"
       height="3"
       style="fill:url(#linearGradient4270)"
       id="rect4258"
       transform="scale(1,-1)" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#linearGradient4373);fill-rule:evenodd"
       id="path4361"
       d="m 407.57143,524.798 0,3 -14,0 4,4 -4,0 9,9 14,0 0,-4 0,-3 -9,-9 z" />
    <rect
       width="14"
       x="393.57144"
       y="-531.79797"
       height="3"
       style="fill:url(#linearGradient4274)"
       id="rect4272"
       transform="scale(1,-1)" />
    <circle
       cx="395.07144"
       cy="526.2981"
       style="fill:#4d4d4d"
       id="path4278"
       r="0.5" />
    <circle
       cx="395.07144"
       cy="530.2981"
       style="fill:#4d4d4d"
       id="path4278-9"
       r="0.5" />
    <circle
       cx="397.07144"
       cy="530.2981"
       style="fill:#4d4d4d"
       id="path4278-0"
       r="0.5" />
    <circle
       cx="399.07144"
       cy="530.2981"
       style="fill:#4d4d4d"
       id="path4278-5"
       r="0.5" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#linearGradient4338)"
       id="path4424"
       d="m 384.57143,517.79801 0,23 32,0 0,-23 -32,0 z m 1,1 30,0 0,18 -30,0 0,-18 z" />
  </g>
		</svg>
	{/if}
