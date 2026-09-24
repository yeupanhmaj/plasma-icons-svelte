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
			<path fill="#22a7f0" color="#000000" d="m2 1039.36v10h12v-10h-11.313zm1.688 1h8.625l-4.313 4.313-1.063-1.063zm-.688.688l3.219 3.219-3.219 2.75zm10 0v5.969l-3.219-2.75zm-6.094 3.906l.75.75.344.375.344-.375.75-.75 3.906 3.344v.062h-10v-.062z" transform="translate(0-1036.36)"/>
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
  <path inkscape:connector-curvature="0" style="stroke-opacity:0.550265;fill:#22a7f0;stroke-width:2.8" id="rect4144" d="m 327,537.3622 0,1 0,14 0,0.41406 0,0.58594 1,0 19,0 0,-0.58594 0,-0.41406 0,-1 0,-14 -0.0488,0 -0.95117,0 -17.53711,0 -0.46289,0 -1,0 z m 1,1 0.0488,0 5.97461,5.97656 -6.02344,6.02344 0,-12 z m 1.46289,0 15.07422,0 -7.53711,7.53711 -7.53711,-7.53711 z m 16.48828,0 0.0488,0 0,12 -6.02344,-6.02344 5.97461,-5.97656 z m -11.2207,6.68359 2.26953,2.26758 2.26953,-2.26758 6.26758,6.26758 0.46289,0.46289 0,0.58594 -18,0 0,-0.58594 0.46289,-0.46289 6.26758,-6.26758 z"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1021" id="namedview26" showgrid="false" inkscape:zoom="7.375" inkscape:cx="16" inkscape:cy="16" inkscape:window-x="0" inkscape:window-y="30" inkscape:window-maximized="1" inkscape:current-layer="layer1"/>
  <defs id="defs5455">
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4300" id="linearGradient4306-3" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.49999977,0,0,-0.48275841,384.57144,547.24623)"/>
    <linearGradient inkscape:collect="always" id="linearGradient4300">
      <stop style="stop-color:#22a7f0" id="stop4302"/>
      <stop offset="1" style="stop-color:#19b5fe" id="stop4304"/>
    </linearGradient>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4351" id="linearGradient4357-7" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.48275841,0,0,-0.48275841,385.26109,547.48761)"/>
    <linearGradient inkscape:collect="always" id="linearGradient4351">
      <stop style="stop-color:#c8e3fe" id="stop4353"/>
      <stop offset="1" style="stop-color:#ffffff" id="stop4355"/>
    </linearGradient>
    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4410" id="linearGradient4427-3" y1="31" x1="54" y2="16.500048" x2="39.500008" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,-0.48275841,-0.48275841,0,419.53694,550.86696)"/>
    <linearGradient inkscape:collect="always" id="linearGradient4410">
      <stop style="stop-color:#383e51" id="stop4412"/>
      <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
    </linearGradient>
  </defs>
  <metadata id="metadata5458">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
    <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4306-3);fill-opacity:1" id="rect3500-2" d="m 389.57144,545.79796 0,-27.99999 14.99999,0 7.00003,7 -3e-5,14.24137 0,6.75862 -7,0 z"/>
    <rect width="14.999983" x="389.57144" y="-518.79797" height="0.999973" style="fill:#ffffff;fill-opacity:0.41176471" id="rect4169-9" transform="scale(1,-1)"/>
    <rect width="21.999994" x="389.57144" y="-545.79797" height="1.00003" style="fill:#2e3132;fill-opacity:0.29411765" id="rect4236-1" transform="scale(1,-1)"/>
    <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4357-7);fill-opacity:1;fill-rule:evenodd" id="path4314-2" d="m 411.57144,524.79797 -7.00001,-7 0,7 z"/>
    <path inkscape:connector-curvature="0" style="opacity:0.2;fill:url(#linearGradient4427-3);fill-rule:evenodd" id="path4320-7" d="m 411.5714,531.798 -6.99997,-7 7,0 z"/>
    <path inkscape:connector-curvature="0" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Sans;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;display:inline;overflow:visible;visibility:visible;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1px;marker:none;enable-background:accumulate" d="m 394.57143,528.798 0,0.6875 0,7.8125 0,1.2813 0,0.2187 12,0 0,-0.2187 0,-1.2813 0,-7.8125 0,-0.6875 -0.6875,0 -10.625,0 -0.6875,0 z m 1.6875,1 8.625,0 -3.25,3.25 -0.71875,0.7188 -0.34375,0.3437 -0.34375,-0.3437 -0.71875,-0.7188 -3.25,-3.25 z m -0.6875,0.6875 3.21875,3.2188 -3.21875,2.75 0,-5.9688 z m 10,0 0,5.9688 -3.21875,-2.75 3.21875,-3.2188 z m -6.09375,3.9063 0.75,0.75 0.34375,0.375 0.34375,-0.375 0.75,-0.75 3.90625,3.3437 0,0.062 -10,0 0,-0.062 3.90625,-3.3437 z" id="path2988"/>
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
			<defs>
  <linearGradient id="a" y1="3" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#22a7f0"/>
   <stop offset="1" stop-color="#19b5fe"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#c8e3fe"/>
   <stop offset="1" stop-color="#ffffff"/>
  </linearGradient>
  <linearGradient id="c" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m10 61v-58h30l14 14v44h-14z"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" y="-4" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="44" x="10" y="-61" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path fill="url(#b)" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#c)" d="m40 17l14 14v-14z"/>
 </g>
 <path fill="#ffffff" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" d="m18 22v22h28v-22zm1 1l9 9-9 9zm1.414 0h23.17l-11.586 11.586zm24.586 0v18l-9-9zm-16.293 9.707l3.293 3.293 3.293-3.293 9.707 9.707v.586h-26v-.586z"/>
		</svg>
	{/if}
