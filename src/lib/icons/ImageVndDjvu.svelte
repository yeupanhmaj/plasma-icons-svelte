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
			<g fill="#f9b425" color="#4d4d4d" transform="translate(-421.71-531.79)">
  <path d="m2 3v11h12v-11zm1 1h10v9h-10z" transform="translate(421.71 531.79)"/>
  <rect width="1" x="433.71" y="533.79" height="1"/>
  <rect width="1" x="424.71" y="533.79" height="1"/>
  <rect width="1" x="426.71" y="533.79" height="1"/>
  <rect width="1" x="431.71" y="533.79" height="1"/>
  <rect width="8" x="425.71" y="536.79" height="1"/>
  <rect width="4" x="425.71" y="538.79" height="1"/>
  <rect width="2" x="431.71" y="542.79" height="1"/>
  <rect width="6" x="425.71" y="540.79" height="1"/>
 </g>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1017" id="namedview11" showgrid="true" inkscape:zoom="15.170655" inkscape:cx="12.021188" inkscape:cy="3.4513757" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="layer1">
    <inkscape:grid type="xygrid" id="grid4139"/>
  </sodipodi:namedview>
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
    <path inkscape:connector-curvature="0" style="opacity:1;fill:#f9b425;fill-opacity:1;stroke:none" d="m 329,537.3622 0,2 0,1 0,13 1,0 8,0 2,0 2,0 2,0 1,0 0,-3 0,-2 0,-9 0,-2 -1,0 0,1 -2,0 0,-1 -1,0 0,1 -2,0 0,-1 -1,0 0,1 -2,0 0,-1 -1,0 0,1 -2,0 0,-1 -1,0 0,1 -2,0 0,-1 -1,0 z m 1,3 14,0 0,1 0,1 0,1 0,1 0,5 0,2 0,1 -1,0 -2,0 -3,0 -8,0 0,-8 0,-1 0,-1 0,-1 0,-1 z m 2,2 0,1 10,0 0,-1 -10,0 z m 0,3 0,1 6,0 0,-1 -6,0 z m 0,3 0,1 8,0 0,-1 -8,0 z m 8,2 0,1 2,0 0,-1 -2,0 z" id="rect4108" class="ColorScheme-Text"/>
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
			<defs>
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0 .48276 384.57 516.35)">
   <stop stop-color="#f39c12"/>
   <stop offset="1" stop-color="#f9a11f"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m389.57 517.8v28h22v-28h-7z"/>
  <rect width="22" x="389.57" y="544.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  <rect width="22" x="389.57" y="517.8" fill="#ffffff" height="1" fill-opacity=".412"/>
  <g fill="#fddda3" color="#4d4d4d" transform="translate(-29.14-8.993)">
   <path d="m2 3v11h12v-11zm1 1h10v9h-10z" transform="translate(421.71 531.79)"/>
   <rect width="1" x="433.71" y="533.79" height="1"/>
   <rect width="1" x="424.71" y="533.79" height="1"/>
   <rect width="1" x="426.71" y="533.79" height="1"/>
   <rect width="1" x="431.71" y="533.79" height="1"/>
   <rect width="8" x="425.71" y="536.79" height="1"/>
   <rect width="4" x="425.71" y="538.79" height="1"/>
   <rect width="2" x="431.71" y="542.79" height="1"/>
   <rect width="6" x="425.71" y="540.79" height="1"/>
  </g>
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
   <stop stop-color="#f9b425"/>
   <stop offset="1" stop-color="#f9bf3b"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#fddda3"/>
   <stop offset="1" stop-color="#fde3a7"/>
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
 <path fill="url(#b)" fill-rule="evenodd" d="m54 17l-14-14v14z"/>
 <rect width="1" x="16" y="4" fill="#ffffff" height="56" fill-opacity=".252"/>
 <rect color-interpolation-filters="linearRGB" x="17" y="4" fill-opacity=".083" color="#000000" image-rendering="auto" color-rendering="auto" width="1" color-interpolation="sRGB" text-rendering="auto" height="56" shape-rendering="auto"/>
 <path fill="#fddda3" d="m23 22v22h1.375c6.875 0 13.75 0 20.625 0 0-6.417 0-12.833 0-19.25v-2.75h-1v1h-2v-1h-2v1h-2v-1h-2v1h-3v-1h-2v1h-3v-1h-2v1h-2v-1zm1 3h20c0 6.07 0 12.198 0 18-6.417 0-13.583 0-20 0 0-5.5 0-12.5 0-18m3 4v1h14v-1zm0 4v1h8v-1zm0 4v1h11v-1zm11 3v1h3v-1z"/>
 <path opacity=".2" fill="url(#c)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
		</svg>
	{/if}
