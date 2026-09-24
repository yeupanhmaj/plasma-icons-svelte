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
			<path fill="#fc963a" color="#000000" stroke-width=".1" d="m2 2v2c5.523 0 10 4.477 10 10h2c0-.021 0-.041 0-.063 0-.391-.026-.775-.063-1.156-.002-.021.002-.042 0-.063-.039-.381-.114-.756-.188-1.125-.004-.02.004-.043 0-.063-.236-1.157-.643-2.242-1.188-3.25-.004-.008.004-.024 0-.031-1.479-2.724-3.983-4.798-7-5.719-.357-.111-.724-.204-1.094-.281-.02-.004-.043.004-.063 0-.371-.076-.743-.147-1.125-.188-.021-.002-.042.002-.063 0-.383-.039-.764-.06-1.156-.063-.021 0-.041 0-.063 0m0 4v2c3.314 0 6 2.686 6 6h2c0-4.418-3.582-8-8-8m2 4c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2 0-1.105-.895-2-2-2"/>
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
			<sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="676"
     inkscape:window-height="708"
     id="namedview10"
     showgrid="false"
     inkscape:zoom="10.727273"
     inkscape:cx="11"
     inkscape:cy="11"
     inkscape:window-x="680"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="layer1-8" />
  <defs
     id="defs3871" />
  <metadata
     id="metadata3874">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Capa 1"
     inkscape:groupmode="layer"
     style="fill:#f27935"
     id="layer1-8"
     transform="matrix(1 0 0 1 0 -1030.3622)">
    <path
       style="stroke-linecap:round;stroke-width:0.1;fill:#fc963a;fill-opacity:1"
       d="M 3 3 L 3 5 A 14 14 0 0 1 17 19 L 19 19 A 16 16 0 0 0 3 3 z M 3 8 L 3 10 A 9 9 0 0 1 12 19 L 14 19 A 11 11 0 0 0 3 8 z M 5.5 14 A 2.5 2.5 0 0 0 3 16.5 A 2.5 2.5 0 0 0 5.5 19 A 2.5 2.5 0 0 0 8 16.5 A 2.5 2.5 0 0 0 5.5 14 z "
       transform="translate(0,1030.3622)"
       id="path4171-5" />
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
  <linearGradient id="a" y1="392.36" y2="365.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" y2="24" x1="47" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#fc963a" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m394.57 526.8v2c5.523 0 10 4.477 10 10h2c0-.021 0-.041 0-.063 0-.391-.026-.775-.063-1.156-.002-.021.002-.042 0-.063-.039-.381-.114-.756-.188-1.125-.004-.02.004-.043 0-.063-.236-1.157-.643-2.242-1.188-3.25-.004-.008.004-.024 0-.031-1.479-2.724-3.983-4.798-7-5.719-.357-.111-.724-.204-1.094-.281-.02-.004-.043.004-.063 0-.371-.076-.743-.147-1.125-.188-.021-.002-.042.002-.063 0-.383-.039-.764-.061-1.156-.063-.021 0-.041 0-.063 0m0 4v2c3.314 0 6 2.686 6 6h2c0-4.418-3.582-8-8-8m2 4c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2 0-1.105-.895-2-2-2" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  <use fill="url(#a)" xlink:href="#c"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(302 78.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(254-254)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m312 139.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-302-78.36)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#fc963a" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="312" y="-82.36" width="30" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="312" y="-139.36" width="44" height="1"/>
   </g>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m356 95.36l-14-14v14z"/>
   <path opacity=".1" fill="url(#a)" d="m342 95.36l14 14v-14z"/>
  </g>
  <use fill="url(#b)" xlink:href="#c"/>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m324.04 100.33v3a18.999996 18.999996 0 0 1 19 19h3a21.999996 21.999996 0 0 0 -22 -22m0 7v3a11.999996 11.999996 0 0 1 12 12h3a14.999996 14.999996 0 0 0 -15 -15m3.5 8c-1.939 0-3.5 1.561-3.5 3.5 0 1.939 1.561 3.5 3.5 3.5 1.939 0 3.5-1.561 3.5-3.5 0-1.939-1.561-3.5-3.5-3.5" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 </g>
		</svg>
	{/if}
