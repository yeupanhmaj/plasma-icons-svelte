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
			<path fill="#22a7f0" d="m6.5 2c-1.385 0-2.5 1.115-2.5 2.5 0 1.385 1.115 2.5 2.5 2.5 1.385 0 2.5-1.115 2.5-2.5 0-1.385-1.115-2.5-2.5-2.5m0 1c.831 0 1.5.669 1.5 1.5 0 .831-.669 1.5-1.5 1.5-.831 0-1.5-.669-1.5-1.5 0-.831.669-1.5 1.5-1.5m5.5 1c-1.108 0-2 .892-2 2 0 1.108.892 2 2 2 1.108 0 2-.892 2-2 0-1.108-.892-2-2-2m0 1c.554 0 1 .446 1 1 0 .554-.446 1-1 1-.554 0-1-.446-1-1 0-.554.446-1 1-1m-5.5 3c-2.493 0-4.5 2.01-4.5 4.5v1.5h9v-1.5c0-2.493-2.01-4.5-4.5-4.5m0 1c1.939 0 3.5 1.561 3.5 3.5v.5h-7v-.5c0-1.939 1.561-3.5 3.5-3.5m5.5 0c-.555 0-1.067.16-1.512.42.243.237.465.495.656.777.26-.123.547-.197.855-.197 1.108 0 2 .892 2 2h-2.1c.065.323.1.657.1 1h3v-1c0-1.662-1.338-3-3-3"/>
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
 <metadata id="metadata3874"/>
 <g id="layer1-8" transform="matrix(1.3333333 0 0 1.3333333 0.33333 -1381.48293)">
  <path style="fill:#22a7f0" id="rect4109" d="M 8 6 C 6.3380003 6 5 7.338 5 9 C 5 10.662 6.3380003 12 8 12 C 9.6619997 12 11 10.662 11 9 C 11 7.338 9.6619997 6 8 6 z M 8 7 A 2 2 0 0 1 10 9 A 2 2 0 0 1 8 11 A 2 2 0 0 1 6 9 A 2 2 0 0 1 8 7 z M 8 13 C 5.2299834 13 3 15.23 3 18 L 3 19 L 13 19 L 13 18 C 13 15.23 10.770017 13 8 13 z M 8 14 C 10.216017 14 12 15.784 12 18 L 4 18 C 4 15.784 5.7839834 14 8 14 z " transform="matrix(0.75000002 0 0 0.75000002 -0.249998 1036.1122)"/>
  <path style="fill:#22a7f0" id="path4139" d="M 14 3 C 12.338 3 11 4.338 11 6 C 11 7.662 12.338 9 14 9 C 15.662 9 17 7.662 17 6 C 17 4.338 15.662 3 14 3 z M 14 4 A 2 2 0 0 1 16 6 A 2 2 0 0 1 14 8 A 2 2 0 0 1 12 6 A 2 2 0 0 1 14 4 z M 14 10 C 13.353654 10 12.744006 10.134128 12.181641 10.361328 L 12.636719 11.275391 C 13.064535 11.114991 13.514485 11 14 11 C 16.21602 11 18 12.784 18 15 L 14.5 15 L 15 16 L 19 16 L 19 15 C 19 12.23 16.77002 10 14 10 z " transform="matrix(0.75000002 0 0 0.75000002 -0.249998 1036.1122)"/>
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
   <use fill="#1bb2fb" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".2" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <path opacity=".75" fill="#ffffff" d="m398.07 527.8c-1.385 0-2.5 1.115-2.5 2.5 0 1.385 1.115 2.5 2.5 2.5 1.385 0 2.5-1.115 2.5-2.5 0-1.385-1.115-2.5-2.5-2.5m0 1c.831 0 1.5.669 1.5 1.5 0 .831-.669 1.5-1.5 1.5-.831 0-1.5-.669-1.5-1.5 0-.831.669-1.5 1.5-1.5m5.5 1c-1.108 0-2 .892-2 2 0 1.108.892 2 2 2 1.108 0 2-.892 2-2 0-1.108-.892-2-2-2m0 1c.554 0 1 .446 1 1 0 .554-.446 1-1 1-.554 0-1-.446-1-1 0-.554.446-1 1-1m-5.5 3c-2.493 0-4.5 2.01-4.5 4.5v1.5h9v-1.5c0-2.493-2.01-4.5-4.5-4.5m0 1c1.939 0 3.5 1.561 3.5 3.5v.5h-7v-.5c0-1.939 1.561-3.5 3.5-3.5m5.5 0c-.555 0-1.067.16-1.512.42.243.237.465.495.656.777.26-.123.547-.197.855-.197 1.108 0 2 .892 2 2h-2.1c.065.323.1.657.1 1h3v-1c0-1.662-1.338-3-3-3"/>
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
			<defs
     id="defs4">
    <linearGradient
       id="a"
       y1="61"
       y2="3"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1 0 0-1 0 64)">
      <stop
         stop-color="#22a7f0"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#19b5fe"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="61"
       y2="47"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1 0 0-1 0 64)">
      <stop
         stop-color="#c8e3fe"
         id="stop12" />
      <stop
         offset="1"
         stop-color="#ffffff"
         id="stop14" />
    </linearGradient>
    <linearGradient
       id="c"
       y1="17"
       x1="40"
       y2="31"
       x2="54"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#383e51"
         id="stop17" />
      <stop
         offset="1"
         stop-color="#655c6f"
         stop-opacity="0"
         id="stop19" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient6251"
       id="linearGradient7149"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-48,-332.36221)"
       x1="58"
       y1="392.36221"
       x2="58"
       y2="336.36221" />
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
       xlink:href="#linearGradient9654"
       id="linearGradient9934"
       gradientUnits="userSpaceOnUse"
       x1="40"
       y1="17"
       x2="54"
       y2="31" />
    <linearGradient
       id="linearGradient9654">
      <stop
         style="stop-color:#060606;stop-opacity:1"
         offset="0"
         id="stop9656" />
      <stop
         style="stop-color:#000000;stop-opacity:0"
         offset="1"
         id="stop9658" />
    </linearGradient>
  </defs>
  <g
     id="g4217">
    <path
       d="m 10,61 0,-58.0000001 30,0 L 54,17 l 0,30 0,14 -14,0 -30,0 z"
       id="path6493"
       style="fill:#47a9de;fill-opacity:1" />
    <rect
       transform="scale(1,-1)"
       id="rect6495"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       height="1"
       y="-3.9999738"
       x="10"
       width="30" />
    <rect
       transform="scale(1,-1)"
       id="rect6497"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.25;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       height="1"
       y="-60.999969"
       x="10"
       width="44" />
    <path
       d="M 54,17 40,2.9999999 40,17 Z"
       id="path6499"
       style="opacity:0.5;fill:#ffffff;fill-opacity:1;fill-rule:evenodd" />
    <path
       style="opacity:0.2;fill:url(#linearGradient9934);fill-rule:evenodd"
       id="path9846"
       d="M 40,17 54,30.99999 54,17 Z" />
    <path
       style="fill:url(#linearGradient7149);fill-opacity:1"
       id="path6973"
       d="m 10,61 0,-58.0000001 30,0 L 54,17 l 0,30 0,14 -14,0 -30,0 z" />
    <path
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.75;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       id="path35"
       d="m28.5 22c-2.493 0-4.5 2.01-4.5 4.5 0 2.493 2.01 4.5 4.5 4.5 2.493 0 4.5-2.01 4.5-4.5 0-2.493-2.01-4.5-4.5-4.5m0 1c1.939 0 3.5 1.561 3.5 3.5 0 1.939-1.561 3.5-3.5 3.5-1.939 0-3.5-1.561-3.5-3.5 0-1.939 1.561-3.5 3.5-3.5m10.5.1c-1.662 0-3 1.338-3 3 0 1.662 1.338 3 3 3 1.662 0 3-1.338 3-3 0-1.662-1.338-3-3-3m0 1c1.108 0 2 .892 2 2 0 1.108-.892 2-2 2-1.108 0-2-.892-2-2 0-1.108.892-2 2-2m0 6.9c-1.186 0-2.236.521-2.967 1.336a9 9 0 0 1 .703125 .71289c.549-.637 1.352-1.049 2.264-1.049 1.662 0 3 1.338 3 3v4h-3a9 9 0 0 1 -.06055 1h3.061c.353 0 .686.071 1 .182v-5.182c0-2.216-1.784-4-4-4m-10.5 1c-4.155 0-7.5 3.345-7.5 7.5v4.5h15v-4.5c0-4.155-3.345-7.5-7.5-7.5m0 1.102c3.601 0 6.5 2.899 6.5 6.5v3.398h-13v-3.398c0-3.601 2.899-6.5 6.5-6.5"
       color="#000000"
       color-interpolation="sRGB"
       text-rendering="auto"
       image-rendering="auto"
       shape-rendering="auto"
       color-interpolation-filters="linearRGB"
       color-rendering="auto"
       fill="#ffffff" />
  </g>
		</svg>
	{/if}
