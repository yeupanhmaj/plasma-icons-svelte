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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m13.996 3.654l-7 .004-2.441 6.691-1.555-2.695h-1v1h.428l2.133 3.693 3.02-7.693h6.42zm-4 2c-1.662 0-3 1.338-3 3 0 1.662 1.338 3 3 3 .773 0 1.469-.298 2-.775v.775h1v-6h-1v.775c-.531-.477-1.227-.775-2-.775m0 1c1.108 0 2 .892 2 2 0 1.108-.892 2-2 2-1.108 0-2-.892-2-2 0-1.108.892-2 2-2" color-interpolation="sRGB" text-rendering="auto" fill="#383838" shape-rendering="auto"/>
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
			<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1360" inkscape:window-height="708" id="namedview11" showgrid="true" inkscape:object-nodes="true" inkscape:zoom="16.649151" inkscape:cx="13.233839" inkscape:cy="9.2515912" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="layer1">
    <inkscape:grid type="xygrid" id="grid4145"/>
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
    <path style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#383838;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto" d="M 19,5 9.6679688,5.0058594 6.5,14.5 4.3339844,11 3,11 3,12 4,12 6.5,17 10.441406,6 19,6 Z m -5,3 c -2.209139,0 -4,1.790861 -4,4 0,2.209139 1.790861,4 4,4 1.149118,-0.0018 2.241964,-0.497698 3,-1.361328 L 17,16 l 1,0 0,-4 0,-4 -1,0 0,1.3613281 C 16.241964,8.4976979 15.149118,8.0017906 14,8 Z m 0,1 c 1.656854,0 3,1.343146 3,3 0,1.656854 -1.343146,3 -3,3 -1.656854,0 -3,-1.343146 -3,-3 0,-1.656854 1.343146,-3 3,-3 z" transform="translate(326,534.3622)" id="path4" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccccccccccscccccccccsssss"/>
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
  <linearGradient id="a" y1="392.36" y2="365.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(309.57 152.44)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="47" y2="24" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(357.57 507.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <use fill="#383838" xlink:href="#c"/>
   <g fill="#ffffff">
    <path opacity=".1" d="m391.57 517.8v1.998h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v2h-1.998v1h1.998v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2h1v-1h-1v-2l-1-1h-2v-2l-1-1h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998h-1v1.998h-2v-1.998zm1 2.998h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-12 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 3h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-15 3h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1z"/>
    <rect opacity=".5" x="389.57" y="-518.8" width="15" height="1" transform="scale(1-1)"/>
   </g>
   <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1" transform="scale(1-1)"/>
  </g>
  <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <g fill="#afafaf" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <path d="m411.57 524.8l-7-7v7z"/>
   <path d="m406.4 528.08l-7 .004-2.441 6.691-1.555-2.695h-1v1h.428l2.133 3.693 3.02-7.693h6.42zm-4 2c-1.662 0-3 1.338-3 3 0 1.662 1.338 3 3 3 .773 0 1.469-.298 2-.775v.775h1v-6h-1v.775c-.531-.477-1.227-.775-2-.775m0 1c1.108 0 2 .892 2 2 0 1.108-.892 2-2 2-1.108 0-2-.892-2-2 0-1.108.892-2 2-2"/>
  </g>
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
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <use fill="#383838" xlink:href="#c"/>
  <g fill="#ffffff">
   <path opacity=".1" d="m10 4v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2v-1h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-1v-1l-1-1v2h-2v-2h2l-1-1h-29zm3 1h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-24 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-27 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-30 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-33 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm3 0h2v2h-2v-1zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-36 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2z"/>
   <rect opacity=".5" x="10" y="-4" width="30" height="1" transform="scale(1-1)"/>
  </g>
  <rect opacity=".25" x="10" y="-61" width="44" height="1" transform="scale(1-1)"/>
  <path fill="#afafaf" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <use opacity=".7" fill="url(#a)" xlink:href="#c"/>
 <path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m40 26.01l-8 .004-4.441 7.691-1.555-2.695h-2v1h1.428l2.133 3.693 5.02-8.693h6.42v1h1zm-5 3c-1.662 0-3 1.338-3 3 0 1.662 1.338 3 3 3 .773 0 1.469-.298 2-.775v.775h1v-6h-1v.775c-.531-.477-1.227-.775-2-.775m0 1c1.108 0 2 .892 2 2 0 1.108-.892 2-2 2-1.108 0-2-.892-2-2 0-1.108.892-2 2-2m-11.99 6.99c-.006 0-.01.223-.01.5 0 .277.004.5.01.5h17.98c.006 0 .01-.223.01-.5 0-.277-.004-.5-.01-.5zm8 3c-.006 0-.01.223-.01.5 0 .277.004.5.01.5h1.98c.006 0 .01-.223.01-.5 0-.277-.004-.5-.01-.5z" color-interpolation="sRGB" text-rendering="auto" fill="#afafaf" shape-rendering="auto"/>
		</svg>
	{/if}
