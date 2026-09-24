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
     inkscape:window-x="60"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg7"
     showborder="false" />
  
  <circle
     style="fill:currentColor;fill-opacity:1;stroke:none"
     class="ColorScheme-NeutralText"
     cx="4"
     cy="4"
     r="4"
     id="circle3" />
  <path
     d="M 4,0 2,3 H 3 V 5 H 0.13 C 0.33097501,5.7748203 0.75979462,6.4715215 1.361,7 H 4 C 4.5522847,7 5,6.5522847 5,6 V 3 h 1 z"
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
			<circle style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" cx="8" cy="8" r="8"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7z"/>
    <path d="M8 2L5 6h2v5a1 1 0 0 1-1 1H2.266a7 7 0 0 0 2.146 2H7a2 2 0 0 0 2-2V6h2z" fill="#fff"/>
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
			<path d="M11 0A11 11 0 0 0 0 11a11 11 0 0 0 11 11 11 11 0 0 0 11-11A11 11 0 0 0 11 0z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText"/>
    <path d="M11 3L8 7h2v9a1 1 0 0 1-1 1H3.012a10 10 0 0 0 2.008 2H10a2 2 0 0 0 2-2V7h2zM3.121 18.66a11 11 0 0 0 .074.078 11 11 0 0 1-.074-.078z" fill="#fff"/>
    <path d="M11 0A11 11 0 0 0 0 11a11 11 0 0 0 11 11 11 11 0 0 0 11-11A11 11 0 0 0 11 0zm0 1a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 1 11 10 10 0 0 1 11 1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
