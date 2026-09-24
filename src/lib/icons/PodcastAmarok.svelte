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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 3 C 8.790861 3 7 4.7908568 7 7 L 10 7 L 10 8 L 7.15625 8 L 7 8 L 7 11 L 10 11 L 10 12 L 7.15625 12 C 7.6009217 13.724309 9.1368122 15 11 15 C 12.863188 15 14.399078 13.724309 14.84375 12 L 12 12 L 12 11 L 15 11 L 15 8 L 14.84375 8 L 12 8 L 12 7 L 15 7 C 15 4.7908568 13.209139 3 11 3 z M 5.09375 12 C 5.5127507 14.517145 7.4856132 16.48682 10 16.90625 L 10 17 L 9 19 L 13 19 L 12 17 L 12 16.90625 C 14.514386 16.48682 16.487249 14.517145 16.90625 12 L 15.90625 12 C 15.440019 14.278416 13.416246 16 11 16 C 8.5837543 16 6.5599813 14.278416 6.09375 12 L 5.09375 12 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{:else}
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
     id="defs4208">
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4498"
       xlink:href="#linearGradient4211"
       y1="543.79797"
       y2="503.798"
       gradientUnits="userSpaceOnUse"
       x2="0"
       gradientTransform="matrix(0.93333286,0,0,0.93333286,-365.33314,547.48432)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4211">
      <stop
         style="stop-color:#2f3943"
         id="stop4213" />
      <stop
         offset="1"
         style="stop-color:#808c9b"
         id="stop4215" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4508"
       xlink:href="#linearGradient4211"
       y1="499.798"
       y2="547.79797"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.93333286,0,0,0.93333286,-365.33314,547.48432)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4293"
       id="linearGradient4149-11"
       y1="524.79797"
       x1="393.57144"
       y2="538.79797"
       x2="407.57147"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-384.57159,504.5642)" />
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
       xlink:href="#linearGradient4175"
       id="linearGradient5003-5"
       y1="22.999973"
       y2="8.9999743"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-1.6e-4,1020.3622)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4175">
      <stop
         style="stop-color:#ffd42a"
         id="stop4177" />
      <stop
         offset="1"
         style="stop-color:#ffdf62"
         id="stop4179" />
    </linearGradient>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="2.67"
     inkscape:cx="-101.73034"
     inkscape:cy="82.044944"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     units="px"
     inkscape:window-width="1535"
     inkscape:window-height="876"
     inkscape:window-x="65"
     inkscape:window-y="24"
     inkscape:window-maximized="1" />
  <metadata
     id="metadata4211">
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
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-1020.3622)">
    <rect
       id="rect4160-91"
       style="fill:#26333a;stroke-width:0.09375"
       height="28.000004"
       rx="14.000002"
       y="1022.3622"
       x="1.9999945"
       width="28.000004" />
    <rect
       id="rect4338-6"
       style="fill:url(#linearGradient4498);stroke-width:0.093333"
       height="26.133337"
       rx="13.066669"
       y="1023.2955"
       x="2.9333274"
       width="26.133337" />
    <rect
       id="rect4162-1"
       style="fill:url(#linearGradient4508);stroke-width:0.084615"
       height="20.53334"
       rx="10.26667"
       y="1026.0956"
       x="5.733326"
       width="20.53334" />
    <path
       inkscape:connector-curvature="0"
       style="opacity:0.2;fill:url(#linearGradient4149-11)"
       id="rect4130-8"
       d="m 16.99984,1029.3622 -0.97227,8.0555 -2.26517,0.8396 2.23744,2.1049 -1.60225,1.1712 -2.05056,-1.7223 2.12126,1.309 -1.38567,2.2244 8.76317,5.7685 c 0,0 5.13374,-3.5946 7.20483,-7.7 z" />
    <path
       inkscape:connector-curvature="0"
       style="fill:url(#linearGradient5003-5);stroke-width:2"
       id="path4712-4"
       d="m 15.99984,1029.3622 a 3,3 0 0 0 -2.82617,2 l 1.82617,0 0,1 -2,0 0,1 2,0 0,1 -2,0 0,1 2,0 0,1 -2,0 a 3,3 0 0 0 3,3 3,3 0 0 0 3,-3 l -2,0 0,-1 2,0 0,-1 -2,0 0,-1 2,0 0,-1 -2,0 0,-1 1.82422,0 a 3,3 0 0 0 -2.82422,-2 z m -5,7 a 5,5 0 0 0 3.49219,4.7617 l -1.49219,2.2383 6,0 -1.49023,-2.2344 a 5,5 0 0 0 3.49023,-4.7656 l -1,0 a 4,4 0 0 1 -4,4 4,4 0 0 1 -4,-4 l -1,0 z" />
  </g>
		</svg>
	{/if}
