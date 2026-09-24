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

	{#if numericSize <= 12}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8 8"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<metadata
     id="metadata13">
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
     id="defs11" />
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="1860"
     inkscape:window-height="1049"
     id="namedview9"
     showgrid="false"
     showborder="false"
     inkscape:window-x="60"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg7">
    <inkscape:grid
       type="xygrid"
       id="grid820" />
  </sodipodi:namedview>
  
  <circle
     style="fill:currentColor;fill-opacity:1;stroke:none"
     class="ColorScheme-Accent"
     cx="4"
     cy="4"
     r="4"
     id="circle3" />
  <path
     d="M 8,4 5,6 V 5 H 3 V 7.87 C 2.2251797,7.669025 1.5284785,7.2402054 1,6.639 V 4 C 1,3.4477153 1.4477153,3 2,3 H 5 V 2 Z"
     id="path5"
     inkscape:connector-curvature="0"
     style="fill:#ffffff"
     sodipodi:nodetypes="ccccccssccc" />
		</svg>
	{:else if numericSize <= 19}
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
			<circle style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Accent" cx="8" cy="8" r="8"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7z"/>
    <path d="M10 5v2H4a2 2 0 0 0-2 2v2.59a7 7 0 0 0 2 2.152V10a1 1 0 0 1 1-1h5v2l4-3z" fill="#fff"/>
		</svg>
	{:else}
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
			<path d="M11 0A11 11 0 0 0 0 11a11 11 0 0 0 11 11 11 11 0 0 0 11-11A11 11 0 0 0 11 0z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Accent"/>
    <path d="M19 11l-4 3v-2H6a1 1 0 0 0-1 1v5.988a10 10 0 0 1-2-2.008V12a2 2 0 0 1 2-2h10V8zM3.34 18.879a11 11 0 0 1-.078-.074 11 11 0 0 0 .078.074z" fill="#fff"/>
    <path d="M11 0A11 11 0 0 0 0 11a11 11 0 0 0 11 11 11 11 0 0 0 11-11A11 11 0 0 0 11 0zm0 1a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 1 11 10 10 0 0 1 11 1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
