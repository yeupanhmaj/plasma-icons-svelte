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
			<path fill="#ff8b23" d="m7 2v3h1v-3zm-2 1v2h1v-2zm4 0v2h1v-2zm-6 1v1h1v-1zm-1 2v4c0 1.813 1.01 3 3 3h-2v1h8v-1h-2c1.572 0 2.507-.727 3-2h1c1 0 1-.003 1-1.094v-1.094c0-1.818 0-1.813-1-1.813h-1v-1zm1 1h8v3c0 1.511-1.338 2-3 2h-2c-1.662 0-3-.489-3-2zm9 1h1v2h-1z"/>
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
			<defs id="defs3871">
    <linearGradient id="linearGradient4300-8">
      <stop style="stop-color:#f27935" id="stop4302-5"/>
      <stop offset="1" style="stop-color:#f2784b" id="stop4304-7"/>
    </linearGradient>
    <linearGradient id="linearGradient4357" xlink:href="#linearGradient4351" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0"/>
    <linearGradient id="linearGradient4410">
      <stop style="stop-color:#383e51" id="stop4412"/>
      <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
    </linearGradient>
    <linearGradient id="linearGradient4427" xlink:href="#linearGradient4410" y1="31" y2="17" x1="54" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 -14 78)"/>
    <linearGradient id="linearGradient4306" xlink:href="#linearGradient4300-8" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0"/>
    <linearGradient id="linearGradient4351">
      <stop style="stop-color:#f7ab89" id="stop4353"/>
      <stop offset="1" style="stop-color:#f9bda3" id="stop4355"/>
    </linearGradient>
    <linearGradient xlink:href="#linearGradient4410" id="linearGradient3444" y1="31" x1="54" y2="17" gradientUnits="userSpaceOnUse" x2="40" gradientTransform="matrix(1 0 0 -1 503.93261 656.69754)"/>
    <linearGradient xlink:href="#linearGradient4351" id="linearGradient3447" y1="61" y2="47" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
    <linearGradient xlink:href="#linearGradient4300-8" id="linearGradient3452" y1="61" y2="3" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 517.93261 578.69754)"/>
  </defs>
  
  <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path style="fill:#ff8b23;stroke-width:6;fill-opacity:1" id="rect5505" d="M 8 3 L 8 7 L 9 7 L 9 3 L 8 3 z M 10 4 L 10 7 L 11 7 L 11 4 L 10 4 z M 6 5 L 6 7 L 7 7 L 7 5 L 6 5 z M 12 5 L 12 7 L 13 7 L 13 5 L 12 5 z M 4 6 L 4 7 L 5 7 L 5 6 L 4 6 z M 14 6 L 14 7 L 15 7 L 15 6 L 14 6 z M 3 8 L 3 9 L 3 14 A 4 3.9893909 0 0 0 3 14.009766 A 4 3.9893909 0 0 0 7 18 L 4 18 L 4 19 L 15 19 L 15 18 L 12 18 A 4 3.9893909 0 0 0 16 14.009766 A 4 3.9893909 0 0 0 16 14 L 18 14 C 18.55401 14 19 13.55401 19 13 L 19 10 C 19 9.44599 18.55401 9 18 9 L 16 9 L 16 8 L 3 8 z M 4 9 L 15 9 L 15 10 L 15 13 L 15 14 A 3 3 0 0 1 12 17 L 7 17 A 3 3 0 0 1 4 14 L 4 9 z M 16 10 L 18 10 L 18 13 L 16 13 L 16 10 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
			<defs id="defs5455">
  <linearGradient xlink:href="#linearGradient6251" id="linearGradient5849" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.48,0,0,0.40601922,362.65138,385.60555)" y1="394.54437" x2="0" y2="335.43387"/>
  <linearGradient id="linearGradient6251">
   <stop id="stop6253" stop-color="#ffffff" stop-opacity="0"/>
   <stop id="stop6255" offset="1" stop-color="#ffffff" stop-opacity="0.2"/>
  </linearGradient>
 </defs>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect y="521.79797" x="388.57144" height="23.999989" width="23.999989" id="rect5837" mix-blend-mode="normal" solid-color="#000000" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" fill="#ff8b23" shape-rendering="auto"/>
  <rect width="24.00001" x="388.57144" y="544.79797" height="0.999974" id="rect5839" mix-blend-mode="normal" solid-color="#000000" opacity="0.25" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" shape-rendering="auto"/>
  <rect width="23.999989" x="388.57144" y="521.79797" height="1.00003" id="rect5841" mix-blend-mode="normal" solid-color="#000000" opacity="0.5" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" fill="#ffffff" shape-rendering="auto"/>
  <path d="m 404.57143,522.79812 0,1 1,0 0,-1 -1,0 z m 1,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,1 1,0 0,-1 z m 0,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,1 1,0 0,-1 z m 0,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,0.56054 0,1.43946 2,0 0,-1 -1,0 0,-1 z" id="path5843" mix-blend-mode="normal" solid-color="#000000" opacity="0.4" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" stroke-width="2" isolation="auto" stroke-linecap="square" color-interpolation="sRGB" solid-opacity="1" shape-rendering="auto"/>
  <path id="rect4166" d="m 395.57143,531.798 0,3 1,0 0,-3 -1,0 z m -2,1 0,2 1,0 0,-2 -1,0 z m 4,0 0,2 1,0 0,-2 -1,0 z m -6,1 0,1 1,0 0,-1 -1,0 z m -1,2 0,4 c 0,1.8131 1.0056,3 3,3 l -2,0 0,1 8,0 0,-1 -2,0 c 1.57239,0 2.50725,-0.7275 3,-2 l 1,0 c 1,0 1,-0.003 1,-1.09375 l 0,-1.09375 c 0,-1.8182 0,-1.8125 -1,-1.8125 l -1,0 0,-1 -10,0 z m 1,1 8,0 0,0.46875 0,0.53125 0,2 c 0,1.5109 -1.338,2 -3,2 l -2,0 c -1.662,0 -3,-0.4891 -3,-2 l 0,-3 z m 9,1 0.5,0 0.5,0 0,1 0,1 -1,0 0,-2 z" opacity="0.4"/>
  <rect id="rect5847" width="24" height="24" x="388.57144" y="521.79797" mix-blend-mode="normal" solid-color="#000000" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" fill="url(#linearGradient5849)" shape-rendering="auto"/>
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
			<defs
     id="defs4">
    <linearGradient
       id="linearGradient6251">
      <stop
         style="stop-color:#ffffff;stop-opacity:0"
         offset="0"
         id="stop6253" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0.2"
         offset="1"
         id="stop6255" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient6251"
       id="linearGradient5849"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,0.84587337,-47,-272.73458)"
       x1="58"
       y1="403.41098"
       x2="58"
       y2="323.82297" />
  </defs>
  
  <rect
     y="10.999992"
     x="7"
     height="49.999977"
     width="49.999977"
     id="rect5837"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ff8b23;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
  <rect
     width="50"
     x="7"
     y="59.999992"
     height="1.0000085"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.25;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect5839" />
  <rect
     width="50"
     x="7"
     y="10.999992"
     height="1.0000085"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect5841" />
  <path
     style="opacity:0.4;fill:#000000;fill-opacity:1"
     id="path4238"
     d="m 19.999999,35 0,6 1,0 0,-6 -1,0 z m 4,2 0,3 1,0 0,-3 -1,0 z m -8,1 0,4 1,0 0,-4 -1,0 z m -3,5 0,7 c 0,3.324 2.676,6 6,6 l -5,0 0,1 14,0 0,-1 -5,0 c 2.62066,0 4.83109,-1.66713 5.65234,-4 l 1.84766,0 c 1.385,0 2.5,-1.115 2.5,-2.5 l 0,-2 c 0,-1.385 -1.115,-2.5 -2.5,-2.5 l -1.5,0 0,-2 -16,0 z m 1,1 14,0 0,1 0,1 0,4 c 0,2.77 -2.23,5 -5,5 l -4,0 c -2.77,0 -5,-2.23 -5,-5 l 0,-6 z m 15,2 1.5,0 0.17187,0 c 0.73579,0 1.32813,0.59234 1.32813,1.32812 l 0,2.34375 c 0,0.73579 -0.59234,1.32813 -1.32813,1.32813 l -0.17187,0 -1.58984,0 c 0.0543,-0.32565 0.0898,-0.65846 0.0898,-1 l 0,-4 z" />
  <path
     style="opacity:0.4;fill:#000000;fill-opacity:1"
     d="m 40,12 0,2 2,0 0,-2 -2,0 z m 2,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m 0,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m 0,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m -2,3 0,4 1,0 0,4 2,0 0,-4 1,0 0,-4 -4,0 z m 1,1 2,0 0,2 -2,0 0,-2 z"
     id="rect4173-3-3" />
  <rect
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.55199998;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient5849);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect5847"
     width="49.999977"
     height="49.999977"
     x="7"
     y="10.999992" />
		</svg>
	{/if}
