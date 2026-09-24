<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

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
	<metadata
     id="metadata12">
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
     inkscape:window-width="1360"
     inkscape:window-height="708"
     id="namedview10"
     showgrid="true"
     inkscape:zoom="21.454545"
     inkscape:cx="7.6795112"
     inkscape:cy="12.007271"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2">
    <inkscape:grid
       type="xygrid"
       id="grid4134" />
  </sodipodi:namedview>
  
  <path
     sodipodi:type="star"
     style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     class="ColorScheme-Text"
     id="path4136"
     sodipodi:sides="4"
     sodipodi:cx="11"
     sodipodi:cy="11"
     sodipodi:r1="9"
     sodipodi:r2="2.8284271"
     sodipodi:arg1="0"
     sodipodi:arg2="0.78539816"
     inkscape:flatsided="false"
     inkscape:rounded="0"
     inkscape:randomized="0"
     d="M 20,11 13,13 11,20 9,13 2,11 9,9 11,2 13,9 Z" />
</svg>
