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
			<path fill="#8373d7" color="#000000" stroke-width=".1" d="m9.09 2l-3.146 11.74.967.26 3.146-11.74zm-3.805 2l-2.961 3.145-.324.348.324.346 2.943 3.162.715-.695-2.621-2.813 2.639-2.797zm6.715 0c-1.108 0-2 .892-2 2v1h1v-1c0-.554.446-1 1-1 .554 0 1 .446 1 1v1c-1.108 0-2 .892-2 2h1c0-.554.446-1 1-1h1v-2c0-1.108-.892-2-2-2m-.5 6a.5 .5 0 0 0 -.5 .5 .5 .5 0 0 0 .5 .5 .5 .5 0 0 0 .5 -.5 .5 .5 0 0 0 -.5 -.5"/>
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
     inkscape:window-width="910"
     inkscape:window-height="480"
     id="namedview40"
     showgrid="false"
     inkscape:zoom="10.727273"
     inkscape:cx="-2.6101692"
     inkscape:cy="11"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0"
     inkscape:current-layer="layer1" />
  <defs
     id="defs3871">
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4300-8">
      <stop
         style="stop-color:#f27935"
         id="stop4302-5" />
      <stop
         offset="1"
         style="stop-color:#f2784b"
         id="stop4304-7" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4357"
       xlink:href="#linearGradient4351"
       y1="61"
       y2="47"
       gradientUnits="userSpaceOnUse"
       x2="0" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4410">
      <stop
         style="stop-color:#383e51"
         id="stop4412" />
      <stop
         offset="1"
         style="stop-color:#655c6f;stop-opacity:0"
         id="stop4414" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4427"
       xlink:href="#linearGradient4410"
       y1="31"
       y2="17"
       x1="54"
       gradientUnits="userSpaceOnUse"
       x2="40"
       gradientTransform="matrix(1 0 0 -1 -14 78)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4306"
       xlink:href="#linearGradient4300-8"
       y1="61"
       y2="3"
       gradientUnits="userSpaceOnUse"
       x2="0" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4351">
      <stop
         style="stop-color:#f7ab89"
         id="stop4353" />
      <stop
         offset="1"
         style="stop-color:#f9bda3"
         id="stop4355" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4410"
       id="linearGradient3444"
       y1="31"
       x1="54"
       y2="17"
       gradientUnits="userSpaceOnUse"
       x2="40"
       gradientTransform="matrix(1 0 0 -1 503.93261 656.69754)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4351"
       id="linearGradient3447"
       y1="61"
       y2="47"
       gradientUnits="userSpaceOnUse"
       x2="0"
       gradientTransform="matrix(1 0 0 1 517.93261 578.69754)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient4300-8"
       id="linearGradient3452"
       y1="61"
       y2="3"
       gradientUnits="userSpaceOnUse"
       x2="0"
       gradientTransform="matrix(1 0 0 1 517.93261 578.69754)" />
  </defs>
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
     id="layer1"
     transform="matrix(1 0 0 1 -326 -534.3622)">
    <path
       inkscape:connector-curvature="0"
       style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Sans;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;display:inline;overflow:visible;visibility:visible;fill:#8373d7;fill-opacity:1;stroke:none;stroke-width:1px;marker:none;enable-background:accumulate"
       d="m 338.5,537.3622 -4,15.75391 1,0.24609 4,-15.75391 -1,-0.24609 z m -5.24609,3 -3.97461,4.64453 -0.2793,0.35547 0.2793,0.35547 3.97461,4.64453 L 334,549.65322 330.33594,545.3622 334,541.07118 333.25391,540.3622 Z m 9.24609,0 a 2.5,2.5 0 0 0 -2.5,2.5 l 0,1.5 1,0 0,-1.5 a 1.5,1.5 0 0 1 1.5,-1.5 1.5,1.5 0 0 1 1.5,1.5 l 0,2.5 -0.5,0 a 2.5,2.5 0 0 0 -2.5,2.5 l 0,0.5 1,0 0,-0.5 a 1.5,1.5 0 0 1 1.5,-1.5 l 1,0 0.5,0 0,-3.5 a 2.5,2.5 0 0 0 -2.5,-2.5 z m -1,9 a 0.5,0.5 0 0 0 -0.5,0.5 0.5,0.5 0 0 0 0.5,0.5 0.5,0.5 0 0 0 0.5,-0.5 0.5,0.5 0 0 0 -0.5,-0.5 z"
       id="path3454" />
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
   <use fill="#8373d7" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".6" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".7" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m401.66 526.8l-2.947 11h1.031l2.883-10.977zm-4.805 2l-2.961 3.145-.324.348.324.346 2.943 3.162.715-.695-2.621-2.813 2.639-2.797zm8.715 0c-1.108 0-2 2-2 2v1h1v-1c0 0 .446-1 1-1 .554 0 1 .446 1 1v2c-1.108 0-2 .892-2 2h1c0-.554 1-1 1-1h1v-3c0-1.108-.892-2-2-2m-.5 7c-.276 0-.5.224-.5.5 0 .276.224.5.5.5.276 0 .5-.224.5-.5 0-.276-.224-.5-.5-.5" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(612 1314.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(564 982)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m622 1375.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-612-1314.36)">
  <use fill="#8373d7" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="622" y="-1318.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="622" y="-1375.36" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".6" d="m666 1331.36l-14-14v14z"/>
   <path opacity=".2" fill="url(#a)" d="m652 1331.36l14 14v-14z"/>
  </g>
  <path opacity=".7" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m645.05 1339.04l-5.318 17.59h1.045l5.318-17.59zm7.967.744v.01c-1.347-.012-2.694.373-3.871 1.049.003.297-.005 1.037-.002 1.334 1.3-.781 2.851-1.772 4.381-1.477 1.091.219 2.376.996 2.523 2.138.156 1.021-.599 2.133-1.335 2.821-.89.974-2.079 1.753-2.574 3.02-.277.848-.117 1.798-.141 2.684.379-.02.489.024.867 0 .006-.999-.267-2.184.465-3.03.611-.977 1.708-1.649 2.474-2.492.694-.711 1.285-1.593 1.275-2.615.035-1.332-.831-2.643-2.094-3.092-.621-.255-1.303-.352-1.969-.348zm-17.02 2.574l-6 6 6 6 .707-.707-5.293-5.293 5.293-5.293zm17 11l-.982.014-.018 1.986h1z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
