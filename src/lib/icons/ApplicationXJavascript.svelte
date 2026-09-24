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
			<path color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m6 2c-1.165.411-2 1.507-2 2.814v.381c0 .74-.404 1.378-1 1.723v2.166c.596.345 1 .981 1 1.721v.381c0 1.307.835 2.403 2 2.814v-1.092c-.596-.345-1-.983-1-1.723v-.381c0-1.3-.826-2.388-1.98-2.805 1.154-.417 1.98-1.505 1.98-2.805v-.381c0-.74.404-1.378 1-1.723zm4 0v1.092c.596.345 1 .983 1 1.723v.381c0 1.299.827 2.388 1.98 2.805-1.154.416-1.98 1.505-1.98 2.805v.381c0 .74-.404 1.378-1 1.723v1.092c1.165-.411 2-1.507 2-2.814v-.381c0-.74.404-1.376 1-1.721v-2.166c-.596-.345-1-.983-1-1.723v-.381c0-1.307-.835-2.403-2-2.814" color-interpolation="sRGB" text-rendering="auto" fill="#ffa555" shape-rendering="auto"/>
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
			<defs
     id="defs3871" />
  
  <g
     id="layer1"
     transform="matrix(1 0 0 1 -326 -534.3622)">
    <path
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:oxygen;-inkscape-font-specification:oxygen;letter-spacing:0px;word-spacing:0px;fill:#ffa555;fill-opacity:1;stroke:none"
       d="M 10.044922 3 C 8.2680919 3 7.5234375 3.7063656 7.5234375 5.5097656 L 7.5234375 7.9511719 C 7.5234375 9.0649719 7.4892425 10.355469 6.5078125 10.355469 L 6 10.355469 L 6 11.644531 L 6.5078125 11.644531 C 7.4892925 11.644531 7.5234375 12.935028 7.5234375 14.048828 L 7.5234375 16.490234 C 7.5234375 18.293634 8.2680919 19 10.044922 19 L 10.044922 17.816406 C 8.8603719 17.816406 8.84375 17.338069 8.84375 15.605469 L 8.84375 13.589844 C 8.84375 12.758944 8.639045 11.522466 7.640625 11.009766 C 8.639045 10.497066 8.84375 9.2587344 8.84375 8.4277344 L 8.84375 6.3945312 C 8.84375 4.6619312 8.8603519 4.1835938 10.044922 4.1835938 L 10.044922 3 z M 11.939453 3 L 11.939453 4.1835938 C 13.124013 4.1835938 13.15625 4.6619312 13.15625 6.3945312 L 13.15625 8.4277344 C 13.15625 9.2587344 13.360955 10.497066 14.359375 11.009766 C 13.360955 11.522466 13.15625 12.758944 13.15625 13.589844 L 13.15625 15.605469 C 13.15625 17.338069 13.124053 17.816406 11.939453 17.816406 L 11.939453 19 C 13.716293 19 14.476562 18.293634 14.476562 16.490234 L 14.476562 14.048828 C 14.476562 12.935028 14.545156 11.644531 15.509766 11.644531 L 16 11.644531 L 16 10.355469 L 15.509766 10.355469 C 14.545196 10.355469 14.476562 9.0649719 14.476562 7.9511719 L 14.476562 5.5097656 C 14.476562 3.7063656 13.716293 3 11.939453 3 z M 11 8 A 1 1 0 0 0 10 9 A 1 1 0 0 0 11 10 A 1 1 0 0 0 12 9 A 1 1 0 0 0 11 8 z M 11 12 A 1 1 0 0 0 10 13 A 1 1 0 0 0 11 14 L 11 15 L 11.130859 15 C 11.368129 14.743 11.817152 13.990719 11.945312 13.324219 A 1 1 0 0 0 12 13.03125 A 1 1 0 0 0 12 13 A 1 1 0 0 0 11 12 z "
       transform="translate(326,534.3622)"
       id="path4121" />
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
   <use fill="#ffa555" xlink:href="#c"/>
   <g transform="scale(1-1)">
    <rect opacity=".5" x="389.57" y="-518.8" width="15" fill="#ffffff" height="1"/>
    <rect opacity=".25" x="389.57" y="-545.8" width="22" height="1"/>
   </g>
   <path opacity=".5" fill="#ffffff" fill-rule="evenodd" d="m411.57 524.8l-7-7v7z"/>
  </g>
  <path opacity=".1" fill="url(#b)" fill-rule="evenodd" d="m404.57 524.8l7 7v-7z"/>
  <use fill="url(#a)" xlink:href="#c"/>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m14 10c-1.165.411-2 1.507-2 2.814v.381c0 .74-.404 1.378-1 1.723v2.166c.596.345 1 .981 1 1.721v.381c0 1.307.835 2.403 2 2.814v-1.092c-.596-.345-1-.983-1-1.723v-.381c0-1.3-.826-2.388-1.98-2.805 1.154-.417 1.98-1.505 1.98-2.805v-.381c0-.74.404-1.378 1-1.723zm4 0v1.092c.596.345 1 .983 1 1.723v.381c0 1.299.827 2.388 1.98 2.805-1.154.416-1.98 1.505-1.98 2.805v.381c0 .74-.404 1.378-1 1.723v1.092c1.165-.411 2-1.507 2-2.814v-.381c0-.74.404-1.376 1-1.721v-2.166c-.596-.345-1-.983-1-1.723v-.381c0-1.307-.835-2.403-2-2.814" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto" transform="translate(384.57 515.8)"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(372 1234.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(324 902)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m382 1295.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-372-1234.36)">
  <use fill="#ffa555" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="382" y="-1238.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="382" y="-1295.36" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".5" fill="#ffffff" d="m426 1251.36l-14-14v14z"/>
   <path opacity=".1" fill="url(#a)" d="m412 1251.36l14 14v-14z"/>
  </g>
  <path opacity=".75" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m401 1256.36c-2.216 0-4 1.784-4 4v3c0 1.662-1.338 3-3 3v1c2.216 0 4-1.784 4-4v-3c0-1.662 1.338-3 3-3zm-7 11v1c1.662 0 3 1.338 3 3v3c0 2.216 1.784 4 4 4v-1c-1.662 0-3-1.338-3-3v-3c0-2.216-1.784-4-4-4m13-11v1c1.662 0 3 1.338 3 3v3c0 2.216 1.784 4 4 4v-1c-1.662 0-3-1.338-3-3v-3c0-2.216-1.784-4-4-4m7 11c-2.216 0-4 1.784-4 4v3c0 1.662-1.338 3-3 3v1c2.216 0 4-1.784 4-4v-3c0-1.662 1.338-3 3-3z" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" shape-rendering="auto"/>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
