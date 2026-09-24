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
			<path fill="#3c559f" d="m11.689 2.189l-1.621 1.621h-4.967a1.5 1.5 0 0 0 -1.41211 -1 1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1 1.41211v7.088h3v1h3v-1h3v-6.879l1.621-1.621zm0 1.414l.707.707-.707.707-.707-.707zm-8 .20703a.5 .5 0 0 1 .5 .5 .5 .5 0 0 1 -.5 .5 .5 .5 0 0 1 -.5 -.5 .5 .5 0 0 1 .5 -.5m1.412 1h4.967l1.121 1.121v5.879h-2v-1h-3v1h-2v-6.088a1.5 1.5 0 0 0 .91211 -.91211m2.088 7h1v1h-1z"/>
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
     id="namedview7"
     showgrid="true"
     inkscape:zoom="10.011011"
     inkscape:cx="12.402356"
     inkscape:cy="8.994274"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2">
    <inkscape:grid
       type="xygrid"
       id="grid4140" />
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
  <path
     style="opacity:1;fill:#3c559f;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
     d="M 16.5 2 L 13.5 5 L 7.9492188 5 A 2.5 2.5 0 0 0 5.5 3 A 2.5 2.5 0 0 0 3 5.5 A 2.5 2.5 0 0 0 5 7.9453125 L 5 17 L 6 17 L 8 17 L 8 19 L 13 19 L 13 17 L 16 17 L 17 17 L 17 8.5 L 20 5.5 L 16.5 2 z M 16.5 3.4003906 L 18.599609 5.5 L 16.5 7.5996094 L 14.400391 5.5 L 16.5 3.4003906 z M 5.5 4 A 1.5 1.5 0 0 1 7 5.5 A 1.5 1.5 0 0 1 5.5 7 A 1.5 1.5 0 0 1 4 5.5 A 1.5 1.5 0 0 1 5.5 4 z M 7.9453125 6 L 13.5 6 L 16 8.5 L 16 16 L 13 16 L 13 14 L 8 14 L 8 16 L 6 16 L 6 7.9492188 A 2.5 2.5 0 0 0 7.9453125 6 z M 9 15 L 12 15 L 12 18 L 9 18 L 9 15 z "
     id="path4146" />
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
  <linearGradient id="b" y1="3" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <use fill="#3c559f" xlink:href="#c"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" opacity=".5" y="-518.8" fill="#ffffff" height="1"/>
   <rect width="22" x="389.57" opacity=".25" y="-545.8" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#a)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path opacity=".75" fill="#ffffff" d="m404.07 527.18l-1.621 1.621h-4.967a1.5 1.5 0 0 0 -1.41211 -1 1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1 1.41211v7.088h3v1h3v-1h3v-6.879l1.621-1.621zm0 1.414l.707.707-.707.707-.707-.707zm-8 .20703a.5 .5 0 0 1 .5 .5 .5 .5 0 0 1 -.5 .5 .5 .5 0 0 1 -.5 -.5 .5 .5 0 0 1 .5 -.5m1.412 1h4.967l1.121 1.121v5.879h-2v-1h-3v1h-2v-6.088a1.5 1.5 0 0 0 .91211 -.91211m2.088 7h1v1h-1z"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#3a539b"/>
   <stop offset="1" stop-color="#3f5aa9"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="c" y1="2.642" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="d" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="url(#a)" xlink:href="#d"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" opacity=".5" y="-4" fill="#ffffff" height="1"/>
  <rect width="44" x="10" opacity=".25" y="-61" height="1"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#b)" d="m40 17l14 14v-14z"/>
 </g>
 <path opacity=".75" fill="#ffffff" d="m22 22c-.554 0-1 .446-1 1v20c0 .554.446 1 1 1h20c.554 0 1-.446 1-1v-20c0-.554-.446-1-1-1zm0 1h20v20h-20zm15.5 1.5l-2.5 2.5h-6.05a2.5 2.5 0 0 0 -2.449219 -2 2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2 2.445312v9.05h4v2h5v-2h3v-9l2.5-2.5zm0 1.199l1.801 1.801-1.801 1.801-1.5-1.5v-.602zm-11 .300781a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5 1.5 1.5 0 0 1 -1.5 -1.5 1.5 1.5 0 0 1 1.5 -1.5m2.445 2h6.05l2 2v8h-2v-2h-5v2h-3v-8.05a2.5 2.5 0 0 0 1.945312 -1.949219m2.055 9h3v3h-3z"/>
 <use fill="url(#c)" xlink:href="#d"/>
		</svg>
	{/if}
