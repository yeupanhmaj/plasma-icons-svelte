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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m3 2c-.554 0-1 .446-1 1v10c0 .554.446 1 1 1h10c.554 0 1-.446 1-1v-10c0-.554-.446-1-1-1zm0 1h10v10h-10zm6 1v3h3a3 3 0 0 0 -3 -3m-1 1a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 -3h-3z" color-interpolation="sRGB" text-rendering="auto" fill="#fa752a" shape-rendering="auto"/>
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
     inkscape:window-width="1360"
     inkscape:window-height="708"
     id="namedview10"
     showgrid="true"
     inkscape:zoom="11.498889"
     inkscape:cx="22.117086"
     inkscape:cy="5.5780425"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1-8"
     inkscape:object-nodes="true">
    <inkscape:grid
       type="xygrid"
       id="grid4145" />
  </sodipodi:namedview>
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
       style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#fa752a;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
       d="M 4.3339844 3 C 3.5953178 3 3 3.5953844 3 4.3339844 L 3 17.666016 C 3 18.404616 3.5953178 19 4.3339844 19 L 17.666016 19 C 18.404682 19 19 18.404616 19 17.666016 L 19 4.3339844 C 19 3.5953844 18.404682 3 17.666016 3 L 4.3339844 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 12 5 L 12 10 L 17 10 A 5 5 0 0 0 12 5 z M 11 6 A 5 5 0 0 0 6 11 A 5 5 0 0 0 11 16 A 5 5 0 0 0 16 11 L 15 11 L 11 11 L 11 7 L 11 6 z M 10 7.1308594 L 10 12 L 11 12 L 14.867188 12 A 4 4 0 0 1 11 15 A 4 4 0 0 1 7 11 A 4 4 0 0 1 10 7.1308594 z "
       transform="translate(0,1030.3622)"
       id="path4" />
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
  <linearGradient id="a" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="365.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="#fa752a" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" opacity=".5" y="-518.8" fill="#ffffff" height="1"/>
   <rect width="22" x="389.57" opacity=".25" y="-545.8" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#a)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m395.57 526.8c-.554 0-1 .446-1 1v10c0 .554.446 1 1 1h10c.554 0 1-.446 1-1v-10c0-.554-.446-1-1-1zm0 1h10v10h-10zm6 1v3h3a3 3 0 0 0 -3 -3m-1 1a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 -3h-3z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  <path fill="url(#b)" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
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
  <linearGradient id="a" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#fa752a" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
  <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
  <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#b)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m22 22c-.554 0-1 .446-1 1v20c0 .554.446 1 1 1h20c.554 0 1-.446 1-1v-20c0-.554-.446-1-1-1zm0 1h20v20h-20zm12 2v4h4c0-2.209-1.791-4-4-4m-2 1a5 5 0 0 0 -5 5 5 5 0 0 0 5 5 5 5 0 0 0 5 -5 5 5 0 0 0 -.10156 -1h-3.898v-3.895a5 5 0 0 0 -1 -.105469m0 1v4h4a4 4 0 0 1 -4 4 4 4 0 0 1 -4 -4 4 4 0 0 1 4 -4m-8 11v1h16v-1zm0 2v1h16v-1z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 <use fill="url(#a)" xlink:href="#c"/>
		</svg>
	{/if}
