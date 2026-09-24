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
			<path fill="#2e6ea9" d="m2 1038.36v12h12v-12zm1 1h4v1h1v-1h5v10h-10zm5 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v2h2v-1h-1z" transform="translate(0-1036.36)"/>
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
			<defs id="defs3871"/>
  
  <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path style="fill:#2e6ea9;stroke-width:2;fill-opacity:1" id="rect5669" d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 10 4 L 10 5 L 11 5 L 11 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 11 5 L 11 6 L 12 6 L 12 5 L 11 5 z M 11 6 L 10 6 L 10 7 L 11 7 L 11 6 z M 11 7 L 11 8 L 12 8 L 12 7 L 11 7 z M 11 8 L 10 8 L 10 9 L 11 9 L 11 8 z M 11 9 L 11 10 L 12 10 L 12 9 L 11 9 z M 11 10 L 10 10 L 10 11 L 11 11 L 11 10 z M 11 11 L 11 12 L 12 12 L 12 11 L 11 11 z M 11 12 L 10 12 L 10 13 L 10 14 L 11 14 L 12 14 L 12 13 L 11 13 L 11 12 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <rect y="521.79797" x="388.57144" height="23.999989" width="23.999989" id="rect5837" mix-blend-mode="normal" solid-color="#000000" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" fill="#2e6ea9" shape-rendering="auto"/>
  <rect width="24.00001" x="388.57144" y="544.79797" height="0.999974" id="rect5839" mix-blend-mode="normal" solid-color="#000000" opacity="0.25" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" shape-rendering="auto"/>
  <rect width="23.999989" x="388.57144" y="521.79797" height="1.00003" id="rect5841" mix-blend-mode="normal" solid-color="#000000" opacity="0.5" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" isolation="auto" color-interpolation="sRGB" solid-opacity="1" fill="#ffffff" shape-rendering="auto"/>
  <path d="m 399.57141,522.79812 0,1 1,0 0,-1 -1,0 z m 1,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,1 1,0 0,-1 z m 0,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,1 1,0 0,-1 z m 0,1 0,1 1,0 0,-1 -1,0 z m 0,1 -1,0 0,0.56054 0,1.43946 2,0 0,-1 -1,0 0,-1 z" id="path5843" mix-blend-mode="normal" solid-color="#000000" opacity="0.8" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" stroke-width="2" isolation="auto" stroke-linecap="square" color-interpolation="sRGB" solid-opacity="1" fill="#ffffff" shape-rendering="auto"/>
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
       id="linearGradient4850"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,0.84587337,-46.999997,-272.73456)"
       x1="58"
       y1="393.95328"
       x2="58"
       y2="324.65894" />
  </defs>
  
  <rect
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#2e6ea9;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     id="rect4838"
     width="49.999977"
     height="49.999977"
     x="7"
     y="10.999992" />
  <rect
     id="rect4840"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.25;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     height="1.0000085"
     y="59.999992"
     x="7"
     width="50" />
  <rect
     id="rect4842"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     height="1.0000085"
     y="10.999992"
     x="7"
     width="50" />
  <path
     style="opacity:0.75;fill:#ffffff;fill-opacity:1"
     d="m 30,12 0,2 2,0 0,-2 -2,0 z m 2,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m 0,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m 0,2 0,2 2,0 0,-2 -2,0 z m 0,2 -2,0 0,2 2,0 0,-2 z m -2,3 0,4 1,0 0,4 2,0 0,-4 1,0 0,-4 -4,0 z m 1,1 2,0 0,2 -2,0 0,-2 z"
     id="rect4173-3-3" />
  <rect
     y="10.999992"
     x="7"
     height="49.999977"
     width="49.999977"
     id="rect4848"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.55199998;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:url(#linearGradient4850);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
		</svg>
	{/if}
