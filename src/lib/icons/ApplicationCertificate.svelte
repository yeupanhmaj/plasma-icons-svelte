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
			<path fill="#cf000f" d="m7.96 1038.34c-1.996 0-3.602 1.607-3.602 3.602 0 1.164.549 2.193 1.401 2.85v5.555l2.201-1.601 2.201 1.601v-5.555c.852-.658 1.401-1.686 1.401-2.85 0-1.996-1.607-3.602-3.602-3.602" transform="translate(0-1036.36)"/>
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
			<defs id="defs3871"/>
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="21.123867" inkscape:cx="3.5682124" inkscape:cy="13.425096" inkscape:document-units="px" inkscape:current-layer="layer1-0" showgrid="true" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:window-width="1366" inkscape:window-height="699" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:showpageshadow="false" inkscape:snap-bbox="true" inkscape:object-nodes="true" inkscape:snap-global="false">
    <inkscape:grid type="xygrid" id="grid4132"/>
    <sodipodi:guide position="2,20.000017" orientation="18,0" id="guide4138"/>
    <sodipodi:guide position="2,2.0000174" orientation="0,18" id="guide4140"/>
    <sodipodi:guide position="20,2.0000174" orientation="-18,0" id="guide4142"/>
    <sodipodi:guide position="20,20.000017" orientation="0,-18" id="guide4144"/>
    <sodipodi:guide position="3,19.000017" orientation="16,0" id="guide4146"/>
    <sodipodi:guide position="3,3.0000174" orientation="0,16" id="guide4148"/>
    <sodipodi:guide position="19,3.0000174" orientation="-16,0" id="guide4150"/>
    <sodipodi:guide position="24.562501,19.000001" orientation="0,-16" id="guide4152"/>
  </sodipodi:namedview>
  <metadata id="metadata3874">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
        <dc:title/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="translate(-326,-534.3622)">
    <g transform="matrix(1.3342187,0,0,1.3359009,326.3388,-849.7864)" id="layer1-0" inkscape:label="Capa 1">
      <path inkscape:connector-curvature="0" style="fill:#cf000f;fill-opacity:1;stroke:none" d="m 7.9882092,1038.378 c -1.9907212,0 -3.5933591,1.6006 -3.5933591,3.5888 0,1.1597 0.5478871,2.1844 1.3974174,2.8397 l 0,5.5343 2.1959417,-1.5951 2.1959408,1.5951 0,-5.5343 c 0.849532,-0.6553 1.397419,-1.68 1.397419,-2.8397 0,-1.9882 -1.6026389,-3.5888 -3.5933598,-3.5888 z" id="rect4222"/>
    </g>
  </g>
		</svg>
	{:else if numericSize <= 48}
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
			<sodipodi:namedview inkscape:current-layer="svg37" showgrid="false" id="namedview39" inkscape:window-height="480" inkscape:window-width="640" inkscape:pageshadow="2" inkscape:pageopacity="0" guidetolerance="10" gridtolerance="10" objecttolerance="10" borderopacity="1" bordercolor="#666666" pagecolor="#ffffff" />
    <defs id="defs17">
        <linearGradient gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)" gradientUnits="userSpaceOnUse" x2="0" y2="3" y1="61" id="a">
            <stop offset="0" stop-color="#d91e18" id="stop4" />
            <stop offset="1" stop-color="#cf000f" id="stop2" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="0" y2="524.8" y1="518.04" id="b">
            <stop offset="0" stop-color="#fcbcbe" id="stop9" />
            <stop offset="1" stop-color="#fb7d80" id="stop7" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="411.57" y2="531.8" x1="404.57" y1="524.8" id="c">
            <stop id="stop12" stop-color="#383e51" />
            <stop id="stop14" stop-opacity="0" stop-color="#655c6f" offset="1" />
        </linearGradient>
    </defs>
    <g id="g35" transform="translate(-384.57-515.8)">
        <path id="path19" d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#a)" />
        <g id="g25" transform="scale(1-1)">
            <rect id="rect21" fill-opacity=".412" height="1" fill="#ffffff" y="-518.8" x="389.57" width="15" />
            <rect id="rect23" fill-opacity=".294" height="1" fill="#2e3132" y="-545.8" x="389.57" width="22" />
        </g>
        <g id="g31" fill-rule="evenodd">
            <path id="path27" d="m411.57 524.8l-7-7v7z" fill="url(#b)" />
            <path id="path29" d="m411.57 531.8l-7-7h7z" fill="url(#c)" opacity=".2" />
        </g>
        <path id="path33" d="m400.64 526.65c-2.02 0-3.644 1.625-3.644 3.644 0 1.178.556 2.218 1.417 2.883v5.62l2.227-1.62 2.227 1.62v-5.62c.862-.665 1.417-1.706 1.417-2.883 0-2.02-1.625-3.644-3.644-3.644" fill="#fcbcbe" />
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<sodipodi:namedview inkscape:current-layer="svg35" showgrid="false" id="namedview37" inkscape:window-height="480" inkscape:window-width="640" inkscape:pageshadow="2" inkscape:pageopacity="0" guidetolerance="10" gridtolerance="10" objecttolerance="10" borderopacity="1" bordercolor="#666666" pagecolor="#ffffff" />
    <defs id="defs17">
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="61" y1="3" id="a">
            <stop id="stop2" stop-color="#cf000f" />
            <stop id="stop4" stop-color="#d91e18" offset="1" />
        </linearGradient>
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="47" y1="61" id="b">
            <stop offset="0" stop-color="#fb9fa2" id="stop9" />
            <stop offset="1" stop-color="#fb7d80" id="stop7" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="54" y2="31" x1="40" y1="17" id="c">
            <stop id="stop12" stop-color="#383e51" />
            <stop id="stop14" stop-opacity="0" stop-color="#655c6f" offset="1" />
        </linearGradient>
    </defs>
    <path id="path19" d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)" />
    <g id="g25" transform="scale(1-1)">
        <rect id="rect21" fill-opacity=".412" height="1" fill="#ffffff" y="-4" x="10" width="30" />
        <rect id="rect23" fill-opacity=".294" height="1" fill="#2e3132" y="-61" x="10" width="44" />
    </g>
    <g id="g31" fill-rule="evenodd">
        <path id="path27" d="m54 17l-14-14v14z" fill="url(#b)" />
        <path id="path29" d="m40 17l14 14v-14z" fill="url(#c)" opacity=".2" />
    </g>
    <path id="path33" d="m32 19.333c-4.432 0-8 3.568-8 8 0 2.585 1.22 4.869 3.111 6.33v12.337l4.889-3.556 4.889 3.556v-12.337c1.891-1.461 3.111-3.745 3.111-6.33 0-4.432-3.568-8-8-8" fill="#fcbcbe" />
		</svg>
	{/if}
