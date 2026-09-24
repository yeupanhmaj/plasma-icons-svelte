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
     id="defs8" />
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
     inkscape:zoom="59"
     inkscape:cx="10.64336"
     inkscape:cy="7.4533201"
     inkscape:window-x="0"
     inkscape:window-y="36"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <path
     inkscape:connector-curvature="0"
     style="opacity:1;fill:#2e6ea9;fill-opacity:1;fill-rule:evenodd"
     id="path20"
     d="m 13.499459,13.997806 -3.6800719,0.0022 -2.5078901,-3.605693 c 0,0 -0.4037771,-0.6754536 -0.6520471,-0.8715803 C 6.452474,9.3594776 6.36399,9.3010399 6.1591589,9.3010399 l -0.465443,0 0.00108,4.6942461 -3.194796,0.0011 0,-11.99639 6.9558382,0 c 0,0 2.8189049,0.5059325 2.8762809,3.2218164 0.0638,3.0277841 -2.7245349,3.9186393 -2.7245349,3.9186393 C 9.9899101,9.2927584 13.065665,13.295898 13.5,13.995339 M 7.9849828,4.6016355 5.72643,4.6005446 5.7253519,6.640452 7.9849828,6.6399393 c 0,0 1.046705,-0.00327 1.046705,-1.0374239 0,-1.0551614 -1.046705,-0.9998872 -1.046705,-0.9998872" />
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="2560" inkscape:window-height="1375" id="namedview14" showgrid="false" inkscape:zoom="42.909091" inkscape:cx="12.200563" inkscape:cy="9.7100165" inkscape:window-x="0" inkscape:window-y="36" inkscape:window-maximized="1" inkscape:current-layer="layer1"/>
  <defs id="defs3871"/>
  <metadata id="metadata3874">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
        <dc:title/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path inkscape:connector-curvature="0" style="opacity:1;fill:#2e6ea9;fill-opacity:1;fill-rule:evenodd" id="path20" d="m 343.99972,553.35943 -4.68373,0.003 -3.19186,-4.80759 c 0,0 -0.5139,-0.9006 -0.82988,-1.16211 -0.26342,-0.21765 -0.37603,-0.29556 -0.63673,-0.29556 l -0.59238,0 9.6e-4,6.25899 -4.0661,10e-4 0,-15.99519 8.85289,0 c 0,0 3.58769,0.67458 3.66072,4.29576 0.0812,4.03704 -3.46759,5.22485 -3.46759,5.22485 0.4866,0.20307 4.40119,5.54059 4.95398,6.47318 m -7.01911,-12.52493 -2.87452,-10e-4 -9.6e-4,2.71988 2.87589,-6.9e-4 c 0,0 1.33218,-0.004 1.33218,-1.38323 0,-1.40688 -1.33218,-1.33318 -1.33218,-1.33318"/>
  </g>
		</svg>
	{/if}
