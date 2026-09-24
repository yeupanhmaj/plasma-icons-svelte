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
			<path fill="#2cbd2c" d="m2 2v12h12v-12h-11zm1 1h10v2h-10zm0 3h2v3h-2zm3 0h4v3h-4zm5 0h2v3h-2zm-8 4h2v3h-2zm3 0h4v3h-4zm5 0h2v3h-2z"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="709" inkscape:window-height="480" id="namedview11" showgrid="false" inkscape:zoom="10.727273" inkscape:cx="11" inkscape:cy="11" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="0" inkscape:current-layer="layer1"/>
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
    <path style="fill:#2cbd2c;stroke-width:2;fill-opacity:1" id="rect4376" d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 8 L 4 8 L 4 4 z M 4 9 L 8 9 L 8 13 L 4 13 L 4 9 z M 9 9 L 13 9 L 13 13 L 9 13 L 9 9 z M 14 9 L 18 9 L 18 13 L 14 13 L 14 9 z M 4 14 L 8 14 L 8 18 L 4 18 L 4 14 z M 9 14 L 13 14 L 13 18 L 9 18 L 9 14 z M 14 14 L 18 14 L 18 18 L 14 18 L 14 14 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
   <use fill="#2cbd2c" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".9" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" stroke-width="2" d="m394.57 526.8v12h12v-12h-11zm1 1h10v2h-10zm0 3h2v3h-2zm3 0h4v3h-4zm5 0h2v3h-2zm-8 4h2v3h-2zm3 0h4v3h-4zm5 0h2v3h-2z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(110 296.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(62-36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m120 357.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-110-296.36)">
  <use fill="#2cbd2c" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="120" y="-300.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="120" y="-357.36" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m164 313.36l-14-14v14z"/>
   <path opacity=".2" fill="url(#a)" d="m150 313.36l14 14v-14z"/>
  </g>
  <path opacity=".9" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" stroke-width="2" d="m131 318.36v22h22v-22zm1 1h20v4h-20zm0 5h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5zm-15 4h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5zm-15 4h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5zm-15 4h5v3h-5zm6 0h8v3h-8zm9 0h5v3h-5z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
