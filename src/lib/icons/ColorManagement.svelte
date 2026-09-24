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
			<metadata
     id="metadata10">
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
  <defs
     id="defs8">
    <path
       d="m24 8c-8.863992 0-16 7.136008-16 16h16v-16"
       id="H"
       fill="url(#0)" />
    <path
       d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16v16"
       id="I"
       fill="url(#3)" />
    <path
       d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16v16"
       id="J"
       fill="url(#1)" />
    <linearGradient
       gradientUnits="userSpaceOnUse"
       x2="408.57"
       x1="424.57"
       y2="539.8"
       y1="523.8"
       id="3">
      <stop
         id="stop3346"
         stop-color="#c1cc00" />
      <stop
         id="stop3348"
         stop-color="#dfcd00"
         offset="0.312" />
      <stop
         id="stop3350"
         stop-color="#f0cc00"
         offset="0.562" />
      <stop
         id="stop3352"
         stop-color="#fd8c08"
         offset="0.75" />
      <stop
         id="stop3354"
         stop-color="#f25c13"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       x2="24"
       x1="8"
       y2="8"
       y1="24"
       id="0">
      <stop
         id="stop3357"
         stop-color="#e81877" />
      <stop
         id="stop3359"
         stop-color="#dd1d8c"
         offset="0.312" />
      <stop
         id="stop3361"
         stop-color="#6d57b1"
         offset="0.562" />
      <stop
         id="stop3363"
         stop-color="#2a78c1"
         offset="0.75" />
      <stop
         id="stop3365"
         stop-color="#018dcb"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       x2="408.57"
       x1="424.57"
       y2="507.8"
       y1="523.8"
       id="2">
      <stop
         id="stop3368"
         stop-color="#bec900" />
      <stop
         id="stop3370"
         stop-color="#9ec80a"
         offset="0.312" />
      <stop
         id="stop3372"
         stop-color="#71b93d"
         offset="0.562" />
      <stop
         id="stop3374"
         stop-color="#35a48f"
         offset="0.75" />
      <stop
         id="stop3376"
         stop-color="#018fca"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientUnits="userSpaceOnUse"
       x2="408.57"
       x1="392.57"
       y2="539.8"
       y1="523.8"
       id="1">
      <stop
         id="stop3379"
         stop-color="#e51561" />
      <stop
         id="stop3381"
         stop-color="#e4156c"
         offset="0.312" />
      <stop
         id="stop3383"
         stop-color="#e71e2c"
         offset="0.562" />
      <stop
         id="stop3385"
         stop-color="#e8301e"
         offset="0.75" />
      <stop
         id="stop3387"
         stop-color="#e6320e"
         offset="1" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#2"
       id="linearGradient3480"
       gradientUnits="userSpaceOnUse"
       x1="424.57"
       y1="523.8"
       x2="408.57"
       y2="507.8" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#2"
       id="linearGradient3482"
       gradientUnits="userSpaceOnUse"
       x1="424.57"
       y1="523.8"
       x2="408.57"
       y2="507.8" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#1"
       id="linearGradient3484"
       gradientUnits="userSpaceOnUse"
       x1="392.57"
       y1="523.8"
       x2="408.57"
       y2="539.8" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#2"
       id="linearGradient3486"
       gradientUnits="userSpaceOnUse"
       x1="424.57"
       y1="523.8"
       x2="408.57"
       y2="507.8" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#2"
       id="linearGradient3488"
       gradientUnits="userSpaceOnUse"
       x1="424.57"
       y1="523.8"
       x2="408.57"
       y2="507.8" />
  </defs>
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1375"
     id="namedview6"
     showgrid="false"
     inkscape:zoom="14.75"
     inkscape:cx="7.9322034"
     inkscape:cy="7.4576271"
     inkscape:window-x="0"
     inkscape:window-y="36"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <g
     id="g3389"
     transform="matrix(0.93665727,0,0,0.93660767,-2.303527,-967.34673)">
    <g
       id="g3391"
       transform="matrix(0.38637,0.10353,-0.10353,0.38637,-92.63,796.68)">
      <use
         id="use3393"
         transform="translate(384.57,499.8)"
         clip-path="url(#5)"
         xlink:href="#H"
         x="0"
         y="0"
         width="100%"
         height="100%" />
      <use
         id="use3395"
         clip-path="url(#6)"
         xlink:href="#J"
         x="0"
         y="0"
         width="100%"
         height="100%" />
      <path
         id="path3397"
         clip-path="url(#7)"
         d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16"
         inkscape:connector-curvature="0"
         style="fill:url(#linearGradient3480)" />
      <use
         id="use3399"
         clip-path="url(#8)"
         xlink:href="#I"
         x="0"
         y="0"
         width="100%"
         height="100%" />
    </g>
    <g
       id="g3401"
       transform="matrix(0.4,0,0,0.4,-152.43,831.84)"
       style="opacity:0.7">
      <use
         id="use3403"
         transform="translate(384.57,499.8)"
         clip-path="url(#9)"
         xlink:href="#H"
         style="filter:url(#4)"
         x="0"
         y="0"
         width="100%"
         height="100%" />
      <use
         id="use3405"
         clip-path="url(#A)"
         xlink:href="#J"
         style="filter:url(#4)"
         x="0"
         y="0"
         width="100%"
         height="100%" />
      <use
         id="use3407"
         clip-path="url(#B)"
         xlink:href="#I"
         style="filter:url(#4)"
         x="0"
         y="0"
         width="100%"
         height="100%" />
      <path
         id="path3409"
         clip-path="url(#C)"
         d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16"
         inkscape:connector-curvature="0"
         style="fill:url(#linearGradient3482);filter:url(#4)" />
    </g>
    <use
       id="use3411"
       transform="matrix(0.28284,0.28284,-0.28284,0.28284,11,1027.79)"
       clip-path="url(#9)"
       xlink:href="#H"
       style="opacity:0.35"
       x="0"
       y="0"
       width="100%"
       height="100%" />
    <path
       id="path3413"
       transform="matrix(0.28284,0.28284,-0.28284,0.28284,43.591,777.65)"
       clip-path="url(#A)"
       d="m 408.57143,539.798 c -8.86399,0 -16,-7.13601 -16,-16 l 16,0 0,16"
       inkscape:connector-curvature="0"
       style="opacity:0.35;fill:url(#linearGradient3484)" />
    <use
       id="use3415"
       transform="matrix(0.28284,0.28284,-0.28284,0.28284,43.591,777.65)"
       clip-path="url(#B)"
       xlink:href="#I"
       style="opacity:0.35"
       x="0"
       y="0"
       width="100%"
       height="100%" />
    <path
       id="path3417"
       transform="matrix(0.28284,0.28284,-0.28284,0.28284,43.591,777.65)"
       clip-path="url(#C)"
       d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16"
       inkscape:connector-curvature="0"
       style="opacity:0.35;fill:url(#linearGradient3486)" />
    <g
       id="g3419"
       transform="matrix(0.10353,0.38637,-0.38637,0.10353,171.08,829.27)">
      <use
         id="use3421"
         transform="translate(384.57,499.8)"
         clip-path="url(#D)"
         xlink:href="#H"
         style="opacity:0.3"
         x="0"
         y="0"
         width="100%"
         height="100%" />
      <use
         id="use3423"
         clip-path="url(#E)"
         xlink:href="#J"
         style="opacity:0.3"
         x="0"
         y="0"
         width="100%"
         height="100%" />
      <use
         id="use3425"
         clip-path="url(#F)"
         xlink:href="#I"
         style="opacity:0.3"
         x="0"
         y="0"
         width="100%"
         height="100%" />
      <path
         id="path3427"
         clip-path="url(#G)"
         d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16"
         inkscape:connector-curvature="0"
         style="opacity:0.3;fill:url(#linearGradient3488)" />
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
			<defs>
  <path fill="url(#0)" id="H" d="m24 8c-8.863992 0-16 7.136008-16 16h16v-16"/>
  <path fill="url(#3)" id="I" d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16v16"/>
  <path fill="url(#1)" id="J" d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16v16"/>
  <linearGradient id="3" y1="523.8" y2="539.8" x1="424.57" x2="408.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#c1cc00"/>
   <stop offset="0.312" stop-color="#dfcd00"/>
   <stop offset="0.562" stop-color="#f0cc00"/>
   <stop offset="0.75" stop-color="#fd8c08"/>
   <stop offset="1" stop-color="#f25c13"/>
  </linearGradient>
  <linearGradient id="0" y1="24" y2="8" x1="8" x2="24" gradientUnits="userSpaceOnUse">
   <stop stop-color="#e81877"/>
   <stop offset="0.312" stop-color="#dd1d8c"/>
   <stop offset="0.562" stop-color="#6d57b1"/>
   <stop offset="0.75" stop-color="#2a78c1"/>
   <stop offset="1" stop-color="#018dcb"/>
  </linearGradient>
  <linearGradient id="2" y1="523.8" y2="507.8" x1="424.57" x2="408.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#bec900"/>
   <stop offset="0.312" stop-color="#9ec80a"/>
   <stop offset="0.562" stop-color="#71b93d"/>
   <stop offset="0.75" stop-color="#35a48f"/>
   <stop offset="1" stop-color="#018fca"/>
  </linearGradient>
  <linearGradient id="1" y1="523.8" y2="539.8" x1="392.57" x2="408.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#e51561"/>
   <stop offset="0.312" stop-color="#e4156c"/>
   <stop offset="0.562" stop-color="#e71e2c"/>
   <stop offset="0.75" stop-color="#e8301e"/>
   <stop offset="1" stop-color="#e6320e"/>
  </linearGradient>
 </defs>
 <g transform="matrix(1.24886 0 0 1.24887 -2.738 -1289.52)">
  <g transform="matrix(0.38637 0.10353 -0.10353 0.38637 -92.63 796.68)">
   <use xlink:href="#H" clip-path="url(#5)" transform="matrix(1 0 0 1 384.57 499.8)"/>
   <use xlink:href="#J" clip-path="url(#6)"/>
   <path fill="url(#2)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16v-16" clip-path="url(#7)"/>
   <use xlink:href="#I" clip-path="url(#8)"/>
  </g>
  <g opacity="0.7" transform="matrix(0.4 0 0 0.4 -152.43 831.84)">
   <use filter="url(#4)" xlink:href="#H" clip-path="url(#9)" transform="matrix(1 0 0 1 384.57 499.8)"/>
   <use filter="url(#4)" xlink:href="#J" clip-path="url(#A)"/>
   <use filter="url(#4)" xlink:href="#I" clip-path="url(#B)"/>
   <path fill="url(#2)" filter="url(#4)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16v-16" clip-path="url(#C)"/>
  </g>
  <use opacity="0.35" xlink:href="#H" clip-path="url(#9)" transform="matrix(0.28284 0.28284 -0.28284 0.28284 11 1027.79)"/>
  <path opacity="0.35" fill="url(#1)" d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16v16" clip-path="url(#A)" transform="matrix(0.28284 0.28284 -0.28284 0.28284 43.591 777.65)"/>
  <use opacity="0.35" xlink:href="#I" clip-path="url(#B)" transform="matrix(0.28284 0.28284 -0.28284 0.28284 43.591 777.65)"/>
  <path opacity="0.35" fill="url(#2)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16v-16" clip-path="url(#C)" transform="matrix(0.28284 0.28284 -0.28284 0.28284 43.591 777.65)"/>
  <g transform="matrix(0.10353 0.38637 -0.38637 0.10353 171.08 829.27)">
   <use opacity="0.3" xlink:href="#H" clip-path="url(#D)" transform="matrix(1 0 0 1 384.57 499.8)"/>
   <use opacity="0.3" xlink:href="#J" clip-path="url(#E)"/>
   <use opacity="0.3" xlink:href="#I" clip-path="url(#F)"/>
   <path opacity="0.3" fill="url(#2)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16v-16" clip-path="url(#G)"/>
  </g>
 </g>
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
			<metadata
     id="metadata10">
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
  <defs
     id="defs8">
    <path
       fill="url(#0)"
       id="H"
       d="m24 8c-8.863992 0-16 7.136008-16 16h16v-16" />
    <path
       fill="url(#3)"
       id="I"
       d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16v16" />
    <path
       fill="url(#1)"
       id="J"
       d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16v16" />
    <linearGradient
       id="3"
       y1="523.8"
       y2="539.8"
       x1="424.57"
       x2="408.57"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#c1cc00"
         id="stop3346" />
      <stop
         offset="0.312"
         stop-color="#dfcd00"
         id="stop3348" />
      <stop
         offset="0.562"
         stop-color="#f0cc00"
         id="stop3350" />
      <stop
         offset="0.75"
         stop-color="#fd8c08"
         id="stop3352" />
      <stop
         offset="1"
         stop-color="#f25c13"
         id="stop3354" />
    </linearGradient>
    <linearGradient
       id="0"
       y1="24"
       y2="8"
       x1="8"
       x2="24"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#e81877"
         id="stop3357" />
      <stop
         offset="0.312"
         stop-color="#dd1d8c"
         id="stop3359" />
      <stop
         offset="0.562"
         stop-color="#6d57b1"
         id="stop3361" />
      <stop
         offset="0.75"
         stop-color="#2a78c1"
         id="stop3363" />
      <stop
         offset="1"
         stop-color="#018dcb"
         id="stop3365" />
    </linearGradient>
    <linearGradient
       id="2"
       y1="523.8"
       y2="507.8"
       x1="424.57"
       x2="408.57"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#bec900"
         id="stop3368" />
      <stop
         offset="0.312"
         stop-color="#9ec80a"
         id="stop3370" />
      <stop
         offset="0.562"
         stop-color="#71b93d"
         id="stop3372" />
      <stop
         offset="0.75"
         stop-color="#35a48f"
         id="stop3374" />
      <stop
         offset="1"
         stop-color="#018fca"
         id="stop3376" />
    </linearGradient>
    <linearGradient
       id="1"
       y1="523.8"
       y2="539.8"
       x1="392.57"
       x2="408.57"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#e51561"
         id="stop3379" />
      <stop
         offset="0.312"
         stop-color="#e4156c"
         id="stop3381" />
      <stop
         offset="0.562"
         stop-color="#e71e2c"
         id="stop3383" />
      <stop
         offset="0.75"
         stop-color="#e8301e"
         id="stop3385" />
      <stop
         offset="1"
         stop-color="#e6320e"
         id="stop3387" />
    </linearGradient>
    <linearGradient
       y2="507.8"
       x2="408.57"
       y1="523.8"
       x1="424.57"
       gradientUnits="userSpaceOnUse"
       id="linearGradient3480"
       xlink:href="#2" />
    <linearGradient
       y2="507.8"
       x2="408.57"
       y1="523.8"
       x1="424.57"
       gradientUnits="userSpaceOnUse"
       id="linearGradient3482"
       xlink:href="#2" />
    <linearGradient
       y2="539.8"
       x2="408.57"
       y1="523.8"
       x1="392.57"
       gradientUnits="userSpaceOnUse"
       id="linearGradient3484"
       xlink:href="#1" />
    <linearGradient
       y2="507.8"
       x2="408.57"
       y1="523.8"
       x1="424.57"
       gradientUnits="userSpaceOnUse"
       id="linearGradient3486"
       xlink:href="#2" />
    <linearGradient
       y2="507.8"
       x2="408.57"
       y1="523.8"
       x1="424.57"
       gradientUnits="userSpaceOnUse"
       id="linearGradient3488"
       xlink:href="#2" />
  </defs>
  <g
     transform="matrix(1.8733145,0,0,1.8733295,-4.6070532,-1934.8123)"
     id="g3389">
    <g
       transform="matrix(0.38637,0.10353,-0.10353,0.38637,-92.63,796.68)"
       id="g3391">
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         xlink:href="#H"
         clip-path="url(#5)"
         transform="translate(384.57,499.8)"
         id="use3393" />
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         xlink:href="#J"
         clip-path="url(#6)"
         id="use3395" />
      <path
         style="fill:url(#linearGradient3480)"
         d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16"
         clip-path="url(#7)"
         id="path3397" />
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         xlink:href="#I"
         clip-path="url(#8)"
         id="use3399" />
    </g>
    <g
       style="opacity:0.7"
       transform="matrix(0.4,0,0,0.4,-152.43,831.84)"
       id="g3401">
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         style="filter:url(#4)"
         xlink:href="#H"
         clip-path="url(#9)"
         transform="translate(384.57,499.8)"
         id="use3403" />
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         style="filter:url(#4)"
         xlink:href="#J"
         clip-path="url(#A)"
         id="use3405" />
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         style="filter:url(#4)"
         xlink:href="#I"
         clip-path="url(#B)"
         id="use3407" />
      <path
         style="fill:url(#linearGradient3482);filter:url(#4)"
         d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16"
         clip-path="url(#C)"
         id="path3409" />
    </g>
    <use
       height="100%"
       width="100%"
       y="0"
       x="0"
       style="opacity:0.35"
       xlink:href="#H"
       clip-path="url(#9)"
       transform="matrix(0.28284,0.28284,-0.28284,0.28284,11,1027.79)"
       id="use3411" />
    <path
       style="opacity:0.35;fill:url(#linearGradient3484)"
       d="m 408.57143,539.798 c -8.86399,0 -16,-7.13601 -16,-16 l 16,0 0,16"
       clip-path="url(#A)"
       transform="matrix(0.28284,0.28284,-0.28284,0.28284,43.591,777.65)"
       id="path3413" />
    <use
       height="100%"
       width="100%"
       y="0"
       x="0"
       style="opacity:0.35"
       xlink:href="#I"
       clip-path="url(#B)"
       transform="matrix(0.28284,0.28284,-0.28284,0.28284,43.591,777.65)"
       id="use3415" />
    <path
       style="opacity:0.35;fill:url(#linearGradient3486)"
       d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16"
       clip-path="url(#C)"
       transform="matrix(0.28284,0.28284,-0.28284,0.28284,43.591,777.65)"
       id="path3417" />
    <g
       transform="matrix(0.10353,0.38637,-0.38637,0.10353,171.08,829.27)"
       id="g3419">
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         style="opacity:0.3"
         xlink:href="#H"
         clip-path="url(#D)"
         transform="translate(384.57,499.8)"
         id="use3421" />
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         style="opacity:0.3"
         xlink:href="#J"
         clip-path="url(#E)"
         id="use3423" />
      <use
         height="100%"
         width="100%"
         y="0"
         x="0"
         style="opacity:0.3"
         xlink:href="#I"
         clip-path="url(#F)"
         id="use3425" />
      <path
         style="opacity:0.3;fill:url(#linearGradient3488)"
         d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16"
         clip-path="url(#G)"
         id="path3427" />
    </g>
  </g>
		</svg>
	{/if}
