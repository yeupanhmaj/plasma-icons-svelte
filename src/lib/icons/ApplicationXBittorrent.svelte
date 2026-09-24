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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m8 1038.36c-1.072 3.818-4 6.073-4 8.182 0 2.109 1.791 3.818 4 3.818 2.209 0 4-1.709 4-3.818 0-2.109-2.928-4.364-4-8.182m2.75 6.2333a3.428571 3.272727 0 0 1 .67857 1.9485 3.428571 3.272727 0 0 1 -3.42857 3.2727 3.428571 3.272727 0 0 1 -2.03795 -.6456 4 3.818182 0 0 0 .89509 .1002 4 3.818182 0 0 0 4 -3.8182 4 3.818182 0 0 0 -.10714 -.8576" color-interpolation="sRGB" text-rendering="auto" fill="#75d8e1" shape-rendering="auto" transform="translate(0-1036.36)"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1360" inkscape:window-height="708" id="namedview11" showgrid="false" inkscape:zoom="21.46" inkscape:cx="4.8491869" inkscape:cy="14.727866" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="layer1"/>
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
    <path inkscape:connector-curvature="0" style="fill:#75d8e1;fill-opacity:1;stroke:none" d="m 337,537.3622 c -0.97291,3.405 -3.35445,6.3323 -4.4043,8.6758 -0.3674,0.6968 -0.5957,1.4788 -0.5957,2.3242 0,2.77 2.23,5 5,5 2.77,0 5,-2.23 5,-5 0,-0.8454 -0.2283,-1.6274 -0.5957,-2.3242 -1.04985,-2.3435 -3.4314,-5.2708 -4.4043,-8.6758 z m 2.2832,7.7168 c 1.0377,0.7212 1.7168,1.9183 1.7168,3.2832 0,2.216 -1.784,4 -4,4 -1.36496,0 -2.562,-0.679 -3.2832,-1.7168 0.64704,0.4497 1.43212,0.7168 2.2832,0.7168 2.216,0 4,-1.784 4,-4 0,-0.8511 -0.26709,-1.6362 -0.7168,-2.2832 z" class="ColorScheme-Text" id="path6"/>
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
   <use fill="#75d8e1" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#a)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m400.57 526.8c-1.072 3.818-4 6.073-4 8.182 0 2.109 1.791 3.818 4 3.818 2.209 0 4-1.71 4-3.818 0-2.109-2.928-4.364-4-8.182m2.75 6.2333a3.428571 3.272727 0 0 1 .67857 1.9485 3.428571 3.272727 0 0 1 -3.42857 3.2727 3.428571 3.272727 0 0 1 -2.03795 -.6456 4 3.818182 0 0 0 .89509 .1002 4 3.818182 0 0 0 4 -3.8182 4 3.818182 0 0 0 -.10714 -.8576" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#75d8e1" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
  <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
  <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
  <path opacity=".1" fill="url(#a)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m32 21c-1.876 7-7 11.134-7 15 0 3.866 3.134 7 7 7 3.866 0 7-3.134 7-7 0-3.866-5.124-8-7-15m4.8125 11.42773a6 6 0 0 1 1.1875 3.57227 6 6 0 0 1 -6 6 6 6 0 0 1 -3.56641 -1.18359 7 7 0 0 0 1.56641 .18359 7 7 0 0 0 7 -7 7 7 0 0 0 -.1875 -1.57227" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
