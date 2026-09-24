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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m4 14c-.554 0-1-.446-1-1v-10c0-.554.446-1 1-1h8c.554 0 1 .446 1 1v10c0 .554-.446 1-1 1zm0-1h8v-10h-8zm1-2v-1h6v1zm0-2v-1h6v1zm0-2v-1h6v1zm0-2v-1h6v1z" color-interpolation="sRGB" text-rendering="auto" fill="#4040bf" shape-rendering="auto"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1360" inkscape:window-height="708" id="namedview14" showgrid="true" inkscape:zoom="15.170655" inkscape:cx="3.4476327" inkscape:cy="9.5120244" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="word" inkscape:object-nodes="true">
    <inkscape:grid type="xygrid" id="grid4149"/>
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
    <g transform="matrix(0.2492145,0,0,0.2492145,331.51447,519.35784)" id="word">
      <path style="opacity:1;fill:#4040bf;fill-opacity:1;stroke:none;stroke-width:10;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 5 3 C 4.4459998 3 4 3.4459998 4 4 L 4 18 C 4 18.554 4.4459998 19 5 19 L 17 19 C 17.554 19 18 18.554 18 18 L 18 4 C 18 3.4459998 17.554 3 17 3 L 5 3 z M 5 4 L 17 4 L 17 18 L 5 18 L 5 4 z M 6 6 L 6 7 L 16 7 L 16 6 L 6 6 z M 6 9 L 6 10 L 16 10 L 16 9 L 6 9 z M 6 12 L 6 13 L 16 13 L 16 12 L 6 12 z M 6 15 L 6 16 L 16 16 L 16 15 L 6 15 z " transform="matrix(4.0126076,0,0,4.0126076,-22.127404,60.206609)" id="rect4151"/>
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
   <use fill="#4040bf" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m396.57 538.8c-.554 0-1-.446-1-1v-10c0-.554.446-1 1-1h8c.554 0 1 .446 1 1v10c0 .554-.446 1-1 1zm0-1h8v-10h-8zm1-2v-1h6v1zm0-2v-1h6v1zm0-2v-1h6v1zm0-2v-1h6v1z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
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
 <use fill="#4040bf" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
  <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
  <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#b)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m22 22c-.554 0-1 .446-1 1v20c0 .554.446 1 1 1h20c.554 0 1-.446 1-1v-20c0-.554-.446-1-1-1zm0 1h20v20h-20v-19zm1 2v1h8v-1zm10 0v1h8v-1zm-9.949 3v1h7.949v-1zm9.949 0v1h8v-1zm-10 3v1h8v-1zm10 0v1h8v-1zm-9.949 3v1h7.949v-1zm9.949 0v1h8v-1zm-10 3v1h8v-1zm10 0v1h8v-1zm-9.949 3v1h7.949v-1zm9.949 0v1h8v-1z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 <use fill="url(#a)" xlink:href="#c"/>
		</svg>
	{/if}
