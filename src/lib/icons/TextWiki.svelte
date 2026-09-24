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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m6.5 2c-1.385 0-2.5 1.115-2.5 2.5 0 1.385 1.115 2.5 2.5 2.5 1.385 0 2.5-1.115 2.5-2.5 0-1.385-1.115-2.5-2.5-2.5m0 1c.831 0 1.5.669 1.5 1.5 0 .831-.669 1.5-1.5 1.5-.831 0-1.5-.669-1.5-1.5 0-.831.669-1.5 1.5-1.5m5.5 1c-1.108 0-2 .892-2 2 0 1.108.892 2 2 2 1.108 0 2-.892 2-2 0-1.108-.892-2-2-2m0 1c.554 0 1 .446 1 1 0 .554-.446 1-1 1-.554 0-1-.446-1-1 0-.554.446-1 1-1m-5.5 3c-2.493 0-4.5 2.01-4.5 4.5v1.5h9v-1.5c0-2.493-2.01-4.5-4.5-4.5m0 1c1.939 0 3.5 1.561 3.5 3.5v.5h-7v-.5c0-1.939 1.561-3.5 3.5-3.5m5.5 0c-.555 0-1.067.16-1.512.42.243.237.465.495.656.777.26-.123.547-.197.855-.197 1.108 0 2 .892 2 2h-2.1c.065.323.1.657.1 1h3v-1c0-1.662-1.338-3-3-3" color-interpolation="sRGB" text-rendering="auto" fill="#f9b425" shape-rendering="auto"/>
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
     inkscape:window-width="640"
     inkscape:window-height="480"
     id="namedview9"
     showgrid="false"
     inkscape:zoom="10.727273"
     inkscape:cx="11"
     inkscape:cy="11"
     inkscape:window-x="0"
     inkscape:window-y="24"
     inkscape:window-maximized="0"
     inkscape:current-layer="layer1-8" />
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
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Capa 1"
     inkscape:groupmode="layer"
     id="layer1-8"
     transform="matrix(1.3333333 0 0 1.3333333 0.33333 -1381.48293)">
    <path
       style="fill:#f9b425;color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       id="rect4109"
       d="M 8 6 C 6.3380003 6 5 7.338 5 9 C 5 10.662 6.3380003 12 8 12 C 9.6619997 12 11 10.662 11 9 C 11 7.338 9.6619997 6 8 6 z M 8 7 A 2 2 0 0 1 10 9 A 2 2 0 0 1 8 11 A 2 2 0 0 1 6 9 A 2 2 0 0 1 8 7 z M 8 13 C 5.2299834 13 3 15.23 3 18 L 3 19 L 13 19 L 13 18 C 13 15.23 10.770017 13 8 13 z M 8 14 C 10.216017 14 12 15.784 12 18 L 4 18 C 4 15.784 5.7839834 14 8 14 z "
       transform="matrix(0.75000002 0 0 0.75000002 -0.249998 1036.1122)" />
    <path
       style="fill:#f9b425;color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;filter-blend-mode:normal;filter-gaussianBlur-deviation:0;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       id="path4139"
       d="M 14 3 C 12.338 3 11 4.338 11 6 C 11 7.662 12.338 9 14 9 C 15.662 9 17 7.662 17 6 C 17 4.338 15.662 3 14 3 z M 14 4 A 2 2 0 0 1 16 6 A 2 2 0 0 1 14 8 A 2 2 0 0 1 12 6 A 2 2 0 0 1 14 4 z M 14 10 C 13.353654 10 12.744006 10.134128 12.181641 10.361328 L 12.636719 11.275391 C 13.064535 11.114991 13.514485 11 14 11 C 16.21602 11 18 12.784 18 15 L 14.5 15 L 15 16 L 19 16 L 19 15 C 19 12.23 16.77002 10 14 10 z "
       transform="matrix(0.75000002 0 0 0.75000002 -0.249998 1036.1122)" />
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#f39c12"/>
   <stop offset="1" stop-color="#f9a11f"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fddda3"/>
   <stop offset="1" stop-color="#fde3a7"/>
  </linearGradient>
  <linearGradient id="c" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" y="-518.8" fill="#ffffff" height="1" fill-opacity=".412"/>
   <rect width="22" x="389.57" y="-545.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  </g>
  <g fill-rule="evenodd">
   <path fill="url(#b)" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#c)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path fill="#fde8b9" d="m398.29 527.8c-1.385 0-2.5 1.115-2.5 2.5 0 1.385 1.115 2.5 2.5 2.5 1.385 0 2.5-1.115 2.5-2.5 0-1.385-1.115-2.5-2.5-2.5m0 1c.831 0 1.5.669 1.5 1.5 0 .831-.669 1.5-1.5 1.5-.831 0-1.5-.669-1.5-1.5 0-.831.669-1.5 1.5-1.5m5.5 1c-1.108 0-2 .892-2 2 0 1.108.892 2 2 2 1.108 0 2-.892 2-2 0-1.108-.892-2-2-2m0 1c.554 0 1 .446 1 1 0 .554-.446 1-1 1-.554 0-1-.446-1-1 0-.554.446-1 1-1m-5.5 3c-2.493 0-4.5 2.01-4.5 4.5v1.5h9v-1.5c0-2.493-2.01-4.5-4.5-4.5m0 1c1.939 0 3.5 1.561 3.5 3.5v.5h-7v-.5c0-1.939 1.561-3.5 3.5-3.5m5.5 0c-.555 0-1.067.16-1.512.42.243.237.465.495.656.777.26-.123.547-.197.855-.197 1.108 0 2 .892 2 2h-2.1c.065.323.1.657.1 1h3v-1c0-1.662-1.338-3-3-3"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#f9b425"/>
   <stop offset="1" stop-color="#f9bf3b"/>
  </linearGradient>
  <linearGradient id="b" y1="31" x1="54" y2="17" x2="40" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1-14 78)">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="c" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fbd783"/>
   <stop offset="1" stop-color="#fde8b9"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m10 3v58h30l14-14v-44h-14z"/>
 <rect width="30" x="10" y="60" fill="#2e3132" height="1" fill-opacity=".294"/>
 <rect width="44" x="10" y="3" fill="#ffffff" height="1" fill-opacity=".41"/>
 <g fill-rule="evenodd">
  <path fill="url(#c)" d="m54 47l-14 14v-14z"/>
  <path opacity=".2" fill="url(#b)" d="m26 61l14-14v14z"/>
 </g>
 <g fill="#fde8b9" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <path d="m23 22.1c1.662 0 3 1.338 3 3 0 1.662-1.338 3-3 3-1.662 0-3-1.338-3-3 0-1.662 1.338-3 3-3m0 1c-1.108 0-2 .892-2 2 0 1.108.892 2 2 2 1.108 0 2-.892 2-2 0-1.108-.892-2-2-2m0 6.9c1.186 0 2.236.521 2.967 1.336-.247.224-.482.462-.703.713-.549-.637-1.352-1.049-2.264-1.049-1.662 0-3 1.338-3 3v3h3l.016 1h-4.02v-4c0-2.216 1.784-4 4-4"/>
  <path d="m32 24.1c1.662 0 3 1.338 3 3 0 1.662-1.338 3-3 3-1.662 0-3-1.338-3-3 0-1.662 1.338-3 3-3m0 1c-1.108 0-2 .892-2 2 0 1.108.892 2 2 2 1.108 0 2-.892 2-2 0-1.108-.892-2-2-2"/>
  <path d="m41 22.1c-1.662 0-3 1.338-3 3 0 1.662 1.338 3 3 3 1.662 0 3-1.338 3-3 0-1.662-1.338-3-3-3m0 1c1.108 0 2 .892 2 2 0 1.108-.892 2-2 2-1.108 0-2-.892-2-2 0-1.108.892-2 2-2m0 6.9c-1.186 0-2.236.521-2.967 1.336.247.224.482.462.703.713.549-.637 1.352-1.049 2.264-1.049 1.662 0 3 1.338 3 3v3h-3l-.016 1h4.02v-4c0-2.216-1.784-4-4-4"/>
  <path d="m32.03 31.03c4.155 0 5.969 2.969 5.969 6.469v1.5h-12v-1.5c0-3.5 1.876-6.469 6.03-6.469m-.016.992c-3.601 0-5.02 2.254-5.02 5.578v.398h10v-.398c0-3.601-1.383-5.578-4.984-5.578"/>
 </g>
		</svg>
	{/if}
