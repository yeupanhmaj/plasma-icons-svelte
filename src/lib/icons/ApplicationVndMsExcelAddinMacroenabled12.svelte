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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m3 1038.36c-.554 0-1 .446-1 1v10c0 .554.446 1 1 1h10c.554 0 1-.446 1-1v-10c0-.554-.446-1-1-1zm0 1h10v10h-10zm1 1v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm-6 1.998v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm-6 1.998v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm-6 1.998v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1z" color-interpolation="sRGB" text-rendering="auto" fill="#25bb70" shape-rendering="auto" transform="translate(0-1036.36)"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1360" inkscape:window-height="708" id="namedview11" showgrid="true" inkscape:zoom="17.437253" inkscape:cx="2.1035423" inkscape:cy="7.8372487" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="excel" inkscape:object-nodes="true">
    <inkscape:grid type="xygrid" id="grid4151"/>
  </sodipodi:namedview>
  <defs id="defs3871"/>
  <metadata id="metadata3874">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <g transform="matrix(0.18182176,0,0,0.18182176,306.98141,537.71654)" id="excel">
      <path style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#25bb70;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;fill-opacity:1" d="M 4.3339844 3 C 3.5953171 3 3 3.5953177 3 4.3339844 L 3 17.666016 C 3 18.404682 3.5953171 19 4.3339844 19 L 17.666016 19 C 18.404683 19 19 18.404682 19 17.666016 L 19 4.3339844 C 19 3.5953177 18.404683 3 17.666016 3 L 4.3339844 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 5 5 L 5 6 L 8 6 L 8 5 L 5 5 z M 9 5 L 9 6 L 13 6 L 13 5 L 9 5 z M 14 5 L 14 6 L 17 6 L 17 5 L 14 5 z M 5 7 L 5 8 L 8 8 L 8 7 L 5 7 z M 9 7 L 9 8 L 13 8 L 13 7 L 9 7 z M 14 7 L 14 8 L 17 8 L 17 7 L 14 7 z M 5 9 L 5 10 L 8 10 L 8 9 L 5 9 z M 9 9 L 9 10 L 13 10 L 13 9 L 9 9 z M 14 9 L 14 10 L 17 10 L 17 9 L 14 9 z M 5 11 L 5 12 L 8 12 L 8 11 L 5 11 z M 9 11 L 9 12 L 13 12 L 13 11 L 9 11 z M 14 11 L 14 12 L 17 12 L 17 11 L 14 11 z M 5 13 L 5 14 L 8 14 L 8 13 L 5 13 z M 9 13 L 9 14 L 13 14 L 13 13 L 9 13 z M 14 13 L 14 14 L 17 14 L 17 13 L 14 13 z M 5 15 L 5 16 L 8 16 L 8 15 L 5 15 z M 9 15 L 9 16 L 13 16 L 13 15 L 9 15 z M 14 15 L 14 16 L 17 16 L 17 15 L 14 15 z " transform="matrix(5.4998918,0,0,5.4998918,104.60019,-18.448507)" id="path4"/>
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
			<defs>
  <linearGradient id="a" y1="17" x1="47" y2="24" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="365.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#25bb70" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
  </g>
  <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <g fill="#ffffff" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <path opacity=".5" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".75" d="m395.57 526.8c-.554 0-1 .446-1 1v10c0 .554.446 1 1 1h10c.554 0 1-.446 1-1v-10c0-.554-.446-1-1-1zm0 1h10v10h-10zm1 1v1h2v-1zm3 .002v1h2v-1zm3 0v1h2v-1zm-6 1.998v1h2v-1zm3 .002v1h2v-1zm3 0v1h2v-1zm-6 1.998v1h2v-1zm3 .002v1h2v-1zm3 0v1h2v-1zm-6 1.998v1h2v-1zm3 .002v1h2v-1zm3 0v1h2v-1z"/>
  </g>
  <use fill="url(#b)" xlink:href="#c"/>
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
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <use fill="#25bb70" xlink:href="#c"/>
  <g transform="scale(1-1)">
   <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
  </g>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#b)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" stroke-width="2" d="m22 22c-.554 0-1 .446-1 1v20c0 .554.446 1 1 1h20c.554 0 1-.446 1-1v-20c0-.554-.446-1-1-1zm0 1h20v20h-20v-19zm1 1v2h5v-2zm6.5 0v2h5v-2zm6.5 0v2h5v-2zm-13 4v2h5v-2zm6.5 0v2h5v-2zm6.5 0v2h5v-2zm-13 4v2h5v-2zm6.5 0v2h5v-2zm6.5 0v2h5v-2zm-13 4v2h5v-2zm6.5 0v2h5v-2zm6.5 0v2h5v-2zm-13 4v2h5v-2zm6.5 0v2h5v-2zm6.5 0v2h5v-2z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 <use fill="url(#a)" xlink:href="#c"/>
		</svg>
	{/if}
