<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

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
     id="metadata14">
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
     inkscape:window-width="1920"
     inkscape:window-height="1046"
     id="namedview12"
     showgrid="false"
     inkscape:zoom="29.5"
     inkscape:cx="3.5873749"
     inkscape:cy="4.9082691"
     inkscape:window-x="0"
     inkscape:window-y="34"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  
  <g
     transform="matrix(1,0,0,-1,-421.71,547.79)"
     id="g6">
    <path
       style="color:#bebebe;fill:currentColor;fill-opacity:1;stroke:none"
       d="m 424.71,545.79 0,-12 10,0 0,9 -3,3 z m 1,-1 5,0 0,-3 3,0 0,-7 -8,0 z"
       class="ColorScheme-Text"
       id="path8"
       inkscape:connector-curvature="0" />
    <path
       style="color:#3daee9;fill:currentColor;fill-opacity:1;stroke:none"
       d="m 426.71,535.79 6,0 0,2 -6,0 z"
       class="ColorScheme-Accent"
       id="path10"
       inkscape:connector-curvature="0" />
  </g>
</svg>
