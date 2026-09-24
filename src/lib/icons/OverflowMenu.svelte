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
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1246"
     inkscape:window-height="896"
     id="namedview8"
     showgrid="false"
     showguides="true"
     inkscape:guide-bbox="true"
     inkscape:zoom="14.75"
     inkscape:cx="17.251043"
     inkscape:cy="2.7779489"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg2">
    <inkscape:grid
       type="xygrid"
       id="grid3338" />
  </sodipodi:namedview>
  
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 7,3 7,5 9,5 9,3 Z M 7,7 7,9 9,9 9,7 Z m 0,4 0,2 2,0 0,-2 z"
     class="ColorScheme-Text"
     id="path6"
     inkscape:connector-curvature="0"
     sodipodi:nodetypes="ccccccccccccccc" />
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
			<metadata
     id="metadata10">
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
     inkscape:window-width="999"
     inkscape:window-height="779"
     id="namedview8"
     showgrid="false"
     showguides="true"
     inkscape:guide-bbox="true"
     inkscape:zoom="7.5853273"
     inkscape:cx="33.198554"
     inkscape:cy="9.4729622"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg2">
    <inkscape:grid
       type="xygrid"
       id="grid3338" />
  </sodipodi:namedview>
  
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 10,5 0,2 2,0 0,-2 -2,0 m 0,5 0,2 2,0 0,-2 -2,0 m 0,5 0,2 2,0 0,-2 -2,0"
     class="ColorScheme-Text"
     id="path6"
     inkscape:connector-curvature="0"
     sodipodi:nodetypes="ccccccccccccccc" />
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
     id="metadata9">
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
     inkscape:window-width="982"
     inkscape:window-height="703"
     id="namedview7"
     showgrid="false"
     showguides="true"
     inkscape:guide-bbox="true"
     inkscape:zoom="7.375"
     inkscape:cx="31.254158"
     inkscape:cy="23.675403"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg2">
    <inkscape:grid
       type="xygrid"
       id="grid3337" />
  </sodipodi:namedview>
  
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="m 15,5 0,2 2,0 0,-2 z m 0,10 0,2 2,0 0,-2 z m 0,10 0,2 2,0 0,-2 z"
     id="a"
     class="ColorScheme-Text"
     inkscape:connector-curvature="0"
     sodipodi:nodetypes="ccccccccccccccc" />
		</svg>
	{/if}
