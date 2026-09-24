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
			<path fill="#f9d24c" d="m5 2v8.281c-.295-.171-.635-.281-1-.281-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-7h7v4.281c-.295-.171-.635-.281-1-.281-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-9zm1 1h7v1h-7z"/>
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
    <path style="fill:#f9d24c;fill-opacity:1" id="rect5233" d="M 7 3 L 7 4 L 7 14.503906 A 2.5 2.5 0 0 0 5.5 14 A 2.5 2.5 0 0 0 3 16.5 A 2.5 2.5 0 0 0 5.5 19 A 2.5 2.5 0 0 0 8 16.5 L 8 7 L 18 7 L 18 12.503906 A 2.5 2.5 0 0 0 16.5 12 A 2.5 2.5 0 0 0 14 14.5 A 2.5 2.5 0 0 0 16.5 17 A 2.5 2.5 0 0 0 19 14.5 L 19 4 L 19 3.5 L 19 3 L 8 3 L 7 3 z M 8 4 L 18 4 L 18 6 L 8 6 L 8 4 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <linearGradient id="a" y1="29.831" x1="16.78" y2="2" x2="16.847" gradientUnits="userSpaceOnUse">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="#fbeaab" d="m403.11696 518.673a11.45454 13.125 0 0 0 -11.45453 13.125 11.45454 13.125 0 0 0 11.45453 13.125 11.45454 13.125 0 0 0 11.45455 -13.125 11.45454 13.125 0 0 0 -11.45455 -13.125m0 9.33334a3.309086 3.791661 0 0 1 3.3091 3.79166 3.309086 3.791661 0 0 1 -3.3091 3.79167 3.309086 3.791661 0 0 1 -3.30908 -3.79167 3.309086 3.791661 0 0 1 3.30908 -3.79166m0 .875a2.54545 2.916661 0 0 0 -2.54545 2.91666 2.54545 2.916661 0 0 0 2.54545 2.91667 2.54545 2.916661 0 0 0 2.54547 -2.91667 2.54545 2.916661 0 0 0 -2.54547 -2.91666m0 1.45833a1.272722 1.458328 0 0 1 1.27274 1.45833 1.272722 1.458328 0 0 1 -1.27274 1.45834 1.272722 1.458328 0 0 1 -1.27272 -1.45834 1.272722 1.458328 0 0 1 1.27272 -1.45833"/>
  <path fill="#f9d24c" d="m386.57 517.8v28h24.436v-11.958h-2.291c-.987 0-1.782-.911-1.782-2.042 0-1.131.795-2.042 1.782-2.042h2.291v-11.958z"/>
  <path opacity=".75" fill="#ffffff" d="m394.57 526.8v8.281c-.295-.171-.635-.281-1-.281-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-7h7v4.281c-.295-.171-.635-.281-1-.281-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-9zm1 1h7v1h-7z"/>
  <rect width="24.405" x="386.57" y="544.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  <rect width="24.405" x="386.57" y="517.8" fill="#ffffff" height="1" fill-opacity=".412"/>
  <path fill="url(#a)" d="m2 2v28h24.436v-4.508a11.45454 13.125 0 0 0 3.564453 -9.492188 11.45454 13.125 0 0 0 -3.564453 -9.505859v-4.494z" transform="translate(384.57 515.8)"/>
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
        <linearGradient id="a" x2="0" y1="392.36" y2="336.36" gradientTransform="translate(-6,-332.36)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" stop-opacity="0" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".2" offset="1"/>
        </linearGradient>
    </defs>
    <g transform="translate(0,-4)" color="#000000" color-rendering="auto" image-rendering="auto" shape-rendering="auto">
        <circle cx="37" cy="36" r="24" fill="#fbeaab"/>
        <path d="m5 11v50h50v-20h-4.096c-2.717 0-4.904-2.187-4.904-4.904v-0.191c0-2.717 2.187-4.904 4.904-4.904h4.096v-20z" fill="#f9d24c"/>
        <rect x="5" y="60" width="50" height="1" opacity=".25"/>
        <g fill="#fff">
            <rect x="5" y="11" width="50" height="1" opacity=".5"/>
            <path d="m21 25v16.05c-0.635-0.648-1.517-1.053-2.5-1.053-1.939 0-3.5 1.561-3.5 3.5s1.561 3.5 3.5 3.5c1.905 0 3.437-1.509 3.49-3.4h0.01v-13.6h14v8.05c-0.635-0.648-1.517-1.053-2.5-1.053-1.939 0-3.5 1.561-3.5 3.5s1.561 3.5 3.5 3.5 3.5-1.561 3.5-3.5v-15.5h-15zm1 2h14v2h-14z" opacity=".75" stroke-width="2"/>
        </g>
        <path d="m5 11v50h50v-9.158a24 24 0 0 0 6-15.841797 24 24 0 0 0-6-15.830078v-9.17z" fill="url(#a)"/>
    </g>
		</svg>
	{/if}
