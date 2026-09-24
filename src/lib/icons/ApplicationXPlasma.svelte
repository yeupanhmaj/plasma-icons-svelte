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
			<path fill="#8e44ad" color="#000000" stroke-width="5" d="M5 2A1 1 0 0 0 4 3 1 1 0 0 0 5 4 1 1 0 0 0 6 3 1 1 0 0 0 5 2M10 2L8.06 3.563 10.656 6.781 8.219 9.219 10 11 14 7zM3.5 6A1.5 1.5 0 0 0 2 7.5 1.5 1.5 0 0 0 3.5 9 1.5 1.5 0 0 0 5 7.5 1.5 1.5 0 0 0 3.5 6M6.5 11A1.5 1.5 0 0 0 5 12.5 1.5 1.5 0 0 0 6.5 14 1.5 1.5 0 0 0 8 12.5 1.5 1.5 0 0 0 6.5 11"/>
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
 <metadata id="metadata3874"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path inkscape:label="Capa 1" inkscape:connector-curvature="0" style="fill:#8e44ad" id="rect4231" d="M 7,3 C 6.446,3 6,3.446 6,4 6,4.554 6.446,5 7,5 7.554,5 8,4.554 8,4 8,3.446 7.554,3 7,3 Z m 7,0 -2,2 3,3 -3,3 2,2 3,-3 2,-2 -5,-5 z M 4.5,9 C 3.669,9 3,9.669 3,10.5 3,11.331 3.669,12 4.5,12 5.331,12 6,11.331 6,10.5 6,9.669 5.331,9 4.5,9 Z M 9,15 c -1.108,0 -2,0.892 -2,2 0,1.108 0.892,2 2,2 1.108,0 2,-0.892 2,-2 0,-1.108 -0.892,-2 -2,-2 z" transform="matrix(1 0 0 1 326 534.3622)"/>
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
			<sodipodi:namedview inkscape:current-layer="layer1" inkscape:window-maximized="1" inkscape:window-y="30" inkscape:window-x="0" inkscape:cy="16" inkscape:cx="-3.7966102" inkscape:zoom="7.375" showgrid="false" id="namedview31" inkscape:window-height="1021" inkscape:window-width="1920" inkscape:pageshadow="2" inkscape:pageopacity="0" guidetolerance="10" gridtolerance="10" objecttolerance="10" borderopacity="1" bordercolor="#666666" pagecolor="#ffffff" />
    <defs id="defs5455">
        <linearGradient id="linearGradient4410" inkscape:collect="always">
            <stop id="stop4412" style="stop-color:#383e51" />
            <stop id="stop4414" style="stop-color:#655c6f;stop-opacity:0" offset="1" />
        </linearGradient>
        <linearGradient id="linearGradient4351-2" inkscape:collect="always">
            <stop offset="0" style="stop-color:#e8d9eb" id="stop4355-6" />
            <stop offset="1" style="stop-color:#d3bdd7" id="stop4353-8" />
        </linearGradient>
        <linearGradient id="linearGradient4300-1" inkscape:collect="always">
            <stop offset="0" style="stop-color:#9b59b6" id="stop4304-6" />
            <stop offset="1" style="stop-color:#8e44ad" id="stop4302-0" />
        </linearGradient>
        <linearGradient gradientTransform="matrix(0.49999977,0,0,-0.48275841,384.57144,547.24623)" gradientUnits="userSpaceOnUse" x2="0" y2="3" y1="61" id="linearGradient4306-3" xlink:href="#linearGradient4300-1" inkscape:collect="always" />
        <linearGradient gradientTransform="matrix(0.48275841,0,0,-0.48275841,385.26109,547.48761)" gradientUnits="userSpaceOnUse" x2="0" y2="47" y1="61" id="linearGradient4357-7" xlink:href="#linearGradient4351-2" inkscape:collect="always" />
        <linearGradient gradientTransform="matrix(0,-0.48275841,-0.48275841,0,419.53694,550.86696)" gradientUnits="userSpaceOnUse" x2="39.500008" y2="16.500048" x1="54" y1="31" id="linearGradient4427-3" xlink:href="#linearGradient4410" inkscape:collect="always" />
    </defs>
    <metadata id="metadata5458">
        <rdf:RDF>
            <cc:Work rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            </cc:Work>
        </rdf:RDF>
    </metadata>
    <g transform="matrix(1 0 0 1 -384.57143 -515.798)" id="layer1" inkscape:groupmode="layer" inkscape:label="Capa 1">
        <path d="m 389.57144,545.79796 0,-27.99999 14.99999,0 7.00003,7 -3e-5,14.24137 0,6.75862 -7,0 z" id="rect3500-2" style="fill:url(#linearGradient4306-3);fill-opacity:1.0" inkscape:connector-curvature="0" />
        <rect transform="scale(1,-1)" id="rect4169-9" style="fill:#ffffff;fill-opacity:0.41176471" height="0.999973" y="-518.79797" x="389.57144" width="14.999983" />
        <rect transform="scale(1,-1)" id="rect4236-1" style="fill:#2e3132;fill-opacity:0.29411765" height="1.00003" y="-545.79797" x="389.57144" width="21.999994" />
        <path d="m 411.57144,524.79797 -7.00001,-7 0,7 z" id="path4314-2" style="fill:url(#linearGradient4357-7);fill-opacity:1.0;fill-rule:evenodd" inkscape:connector-curvature="0" />
        <path d="m 411.5714,531.798 -6.99997,-7 7,0 z" id="path4320-7" style="opacity:0.2;fill:url(#linearGradient4427-3);fill-rule:evenodd" inkscape:connector-curvature="0" />
        <path id="path2994" d="m 397.57143,527.798 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z m 5,0 -1.9375,1.5625 2.59375,3.21875 -2.4375,2.4375 1.78125,1.78125 4,-4 -4,-5 z m -6.5,4 a 1.5,1.5 0 0 0 -1.5,1.5 1.5,1.5 0 0 0 1.5,1.5 1.5,1.5 0 0 0 1.5,-1.5 1.5,1.5 0 0 0 -1.5,-1.5 z m 3,5 a 1.5,1.5 0 0 0 -1.5,1.5 1.5,1.5 0 0 0 1.5,1.5 1.5,1.5 0 0 0 1.5,-1.5 1.5,1.5 0 0 0 -1.5,-1.5 z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Sans;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;display:inline;overflow:visible;visibility:visible;fill:#e8d9eb;fill-opacity:1;stroke:none;stroke-width:5;marker:none;enable-background:accumulate" inkscape:connector-curvature="0" />
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
            <stop id="stop2" stop-color="#8e44ad" />
            <stop id="stop4" stop-color="#9b59b6" offset="1" />
        </linearGradient>
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="47" y1="61" id="b">
            <stop offset="0" stop-color="#e8d9eb" id="stop9" />
            <stop offset="1" stop-color="#d3bdd7" id="stop7" />
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
    <path id="path33" d="m26.5 21.9c-.831 0-1.5.669-1.5 1.5 0 .831.669 1.5 1.5 1.5.831 0 1.5-.669 1.5-1.5 0-.831-.669-1.5-1.5-1.5m8.5.1l-3 3 5 5-5 5 3 3 8-8zm-11.5 8c-1.385 0-2.5 1.115-2.5 2.5 0 1.385 1.115 2.5 2.5 2.5 1.385 0 2.5-1.115 2.5-2.5 0-1.385-1.115-2.5-2.5-2.5m5.5 8c-1.662 0-3 1.338-3 3 0 1.662 1.338 3 3 3 1.662 0 3-1.338 3-3 0-1.662-1.338-3-3-3" color="#000000" color-interpolation="sRGB" text-rendering="auto" image-rendering="auto" shape-rendering="auto" color-interpolation-filters="linearRGB" color-rendering="auto" fill="#e8d9eb" />
		</svg>
	{/if}
