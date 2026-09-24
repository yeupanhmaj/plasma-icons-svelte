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
			<path
     style="fill:#209ae7;fill-opacity:1"
     d="M 8,2 2,4 v 8 l 6,2 6,-2 V 4 Z M 8,3 V 5.836291 L 7.5,6.1 3,4.56 Z m 5,2 v 6.4 L 8,13 V 7 Z"
     />
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
			<path
     style="fill:#209ae7;fill-opacity:1"
     d="M 11 1.8 L 3 5.9 L 3 16 L 11 20 L 19 16 L 19 5.9 L 11 1.8 z M 11 3 L 11 8.3 L 10.5 8.6 L 4 6.5 L 11 3 z M 18 7 L 18 15.4 L 11 18.8 L 11 9.5 L 18 7 z "
     />
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
			<defs
     id="defs13">
    <linearGradient
       id="a"
       y1="392.36"
       y2="365.36"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(309.57,152.44)">
      <stop
         stop-color="#ffffff"
         stop-opacity="0"
         id="stop2" />
      <stop
         offset="1"
         stop-color="#ffffff"
         stop-opacity=".2"
         id="stop4" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="17"
       y2="24"
       x1="47"
       x2="54"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-27,-8)">
      <stop
         stop-color="#060606"
         id="stop7" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop9" />
    </linearGradient>
    <path
       id="c"
       d="m389.57 545.8v-28h15l7 7v21h-14z" />
  </defs>
  <use
     xlink:href="#c"
     style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#209ae7;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     x="0"
     y="0"
     width="100%"
     height="100%"
     transform="translate(-384.57,-515.8)" />
  <g
     style="color:#000000;color-interpolation:sRGB;color-interpolation-filters:linearRGB;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
     transform="matrix(1,0,0,-1,-384.57,-515.8)"
     >
    <rect
       x="389.6"
       y="-518.8"
       width="15"
       height="1"
       id="rect17"
       style="opacity:0.5;fill:#ffffff" />
    <rect
       x="389.6"
       y="-545.8"
       width="22"
       height="1"
       style="opacity:0.25" />
  </g>
  <path
     d="M 27,9 20,2 v 7 z"
     id="path23"
     style="color:#000000;opacity:0.5;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ffffff;fill-rule:evenodd;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto" />
  <path
     style="opacity:0.2;fill:url(#b);fill-rule:evenodd"
     d="m 20,9 7,7 V 9 Z" />
  <use
     height="100%"
     width="100%"
     y="0"
     x="0"
     style="fill:url(#a)"
     xlink:href="#c"
     transform="translate(-384.57,-515.8)" />
  <path
     style="color:#31363b;fill:#ffffff;fill-opacity:0.75"
     d="m 16,11 -6,2 v 8 l 6,2 6,-2 v -8 z m 0,1 v 2.836291 L 15.5,15.1 11,13.56 Z m 5,2 v 6.4 L 16,22 v -6 z"
     />
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
        <linearGradient id="a" x1="40" x2="54" y1="17" y2="31" gradientTransform="translate(238 78.36)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#060606" offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="b" x2="0" y1="392.36" y2="336.36" gradientTransform="translate(190,-254)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" stop-opacity="0" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".2" offset="1"/>
        </linearGradient>
        <path id="c" d="m248 139.36v-58h30l14 14v44h-14z"/>
    </defs>
  <g
     transform="translate(-238,-78.36)"
     id="g27">
    <use
       height="100%"
       width="100%"
       y="0"
       x="0"
       style="fill:#209ae7"
       xlink:href="#c"
       id="use11" />
    <g
       style="color:#000000"
       >
      <rect
         style="opacity:0.5;fill:#ffffff"
         x="248"
         y="-82.360001"
         width="30"
         height="1"
         id="rect13" />
      <rect
         style="opacity:0.25"
         x="248"
         y="-139.36"
         width="44"
         height="1"
         id="rect15" />
    </g>
    <g
       style="fill-rule:evenodd"
       >
      <path
         style="opacity:0.5;fill:#ffffff"
         d="m 292,95.36 -14,-14 v 14 z"
         />
      <path
         style="opacity:0.2;fill:url(#a)"
         d="m 278,95.36 14,14 v -14 z"
         />
    </g>
    <use
       height="100%"
       width="100%"
       y="0"
       x="0"
       style="fill:url(#b-7)"
       xlink:href="#c"
       id="use25" />
  </g>
  <path
     style="fill:#ffffff;fill-opacity:0.7"
     d="M 32,22.9 31.74,23.1 23,27 v 12 l 9,4 9,-4 V 27 Z m 0,1.17 v 5.3 L 31.5,29.7 24,27.56 Z m 8,4 V 38.4 l -8,3.4 V 30.6 Z"
     />
		</svg>
	{/if}
