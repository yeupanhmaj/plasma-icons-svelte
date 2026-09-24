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
			<path fill="#723838" color="#000000" stroke-width="2" d="m6 2v2h1v-2zm3 0v2h1v-2zm3.877.994l-.893 1.506.875.5.893-1.537zm-9.764.068l-.844.5.926 1.506.844-.5zm.887 1.938l-2 2 6 7 6-7-2-2zm.438 1h3.063v1h-4.063zm4.063 0h3.063l1 1h-4.063zm-4.344 2h3.344v3.887zm4.344 0h3.344l-3.344 3.887z"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="709" inkscape:window-height="480" id="namedview20" showgrid="false" inkscape:zoom="10.727273" inkscape:cx="11" inkscape:cy="11" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="0" inkscape:current-layer="layer1"/>
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
    <path style="shape-rendering:auto;color-interpolation-filters:linearRGB;fill:#723838;image-rendering:auto;text-rendering:auto;color:#000000;fill-rule:evenodd;color-rendering:auto;color-interpolation:sRGB;fill-opacity:1" id="path4734" d="M 8.5 3 L 8.5 5 L 9.5 5 L 9.5 3 L 8.5 3 z M 12.5 3 L 12.5 5 L 13.5 5 L 13.5 3 L 12.5 3 z M 4.5605469 4.0800781 L 3.7597656 4.6816406 L 4.9609375 6.28125 L 5.7597656 5.6816406 L 4.5605469 4.0800781 z M 17.439453 4.0800781 L 16.240234 5.6816406 L 17.039062 6.28125 L 18.240234 4.6816406 L 17.439453 4.0800781 z M 7 6 L 3 9 L 11 19 L 19 9 L 15 6 L 7 6 z M 7.3339844 7 L 10.5 7 L 10.5 8.5 L 5.3339844 8.5 L 7.3339844 7 z M 11.5 7 L 14.666016 7 L 16.666016 8.5 L 11.5 8.5 L 11.5 7 z M 4.6796875 9.5 L 10.5 9.5 L 10.5 16.775391 L 4.6796875 9.5 z M 11.5 9.5 L 17.320312 9.5 L 11.5 16.775391 L 11.5 9.5 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
   <use fill="#db3333" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".6" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".7" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m396.57 528.8l-2 2 6 7 6-7-2-2zm.438 1h3.063v1h-4.063zm4.063 0h3.063l1 1h-4.063zm-4.344 2h3.344v3.887zm4.344 0h3.344l-3.344 3.887z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse" gradientTransform="translate(22-26)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-26-358.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m32 35v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-22 26)">
  <use fill="#db3333" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="32" y="22" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="32" y="-35" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".6" d="m76-9l-14-14v14z"/>
   <path opacity=".2" fill="url(#a)" d="m62-9l14 14v-14z"/>
  </g>
  <path opacity=".7" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m61-2.637c-26 25.09-13 12.546 0 0m-13.01 1.637l-3.986 3.986v.014l10 12 .873-1.047.059-.072 9.07-10.881v-.008l-3.992-3.992h-10.928zm.414 1h.949l.535 2h-3.484zm1.984 0h2.443l-1.154 2h-.752zm3.6 0h.031l1.154 2h-2.34zm1.188 0h2.443l-.537 2h-.752zm3.48 0h.941l2 2h-3.479zm-13.365 3h4.865l2.311 8.619zm5.902 0h5.621l-2.801 10.455-.01.012-.01-.012zm6.658 0h4.865l-7.176 8.619z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
