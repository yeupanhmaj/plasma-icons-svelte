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
			<path fill="#f62459" color="#000000" d="m2 3v10h5.9v-1h-4.9v-.063l3.906-3.344.75.75.244.266v-1.396l-.213-.213h-1.578l-3.109 2.656v-5.969l2.328 2.328.344-1.031-1.984-1.984h2.646l.332-1h-3.979zm6 0v1h4.313l-1.617 1.617-.688 2.063 2.992-2.992v5.969l-3.102-2.65-.332.994 3.434 2.938v.063h-4.434l-.332 1h5.766v-10h-.688z"/>
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
 <path style="stroke-opacity:0.550265;fill:#e00a5e;stroke-width:2.8" id="rect4144" d="M 3 5 L 3 5.75 L 3 16.25 L 3 16.560547 L 3 17 L 11 17 L 11 16 L 4 16 L 4 15.623047 L 4.1699219 15.462891 L 7.8632812 12 L 6.734375 12 L 4 14.5625 L 4 6 L 4.1054688 6 L 7.5429688 9.2226562 L 7.9316406 8.5253906 L 5.2382812 6 L 9.3339844 6 L 9.8886719 5 L 3 5 z M 11 5 L 11 6 L 16.761719 6 L 12.496094 10 L 13.628906 10 L 17.894531 6 L 18 6 L 18 14.5625 L 15.017578 11.767578 L 14.630859 12.462891 L 17.830078 15.462891 L 18 15.623047 L 18 16 L 12.666016 16 L 12.111328 17 L 19 17 L 19 15.5 L 19 5 L 11 5 z " transform="matrix(1 0 0 1 0 -0.000031)"/>
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
    <linearGradient id="linearGradient4351">
      <stop style="stop-color:#ffd6af" id="stop4353"/>
      <stop offset="1" style="stop-color:#fffcf9" id="stop4355"/>
    </linearGradient>
    <linearGradient id="linearGradient4300-8">
      <stop style="stop-color:#f62459" id="stop4302-2"/>
      <stop offset="1" style="stop-color:#f73768" id="stop4304-9"/>
    </linearGradient>
    <linearGradient id="linearGradient4351-4">
      <stop style="stop-color:#ffd6af" id="stop4353-7"/>
      <stop offset="1" style="stop-color:#ffecdb" id="stop4355-0"/>
    </linearGradient>
    <linearGradient xlink:href="#linearGradient4300-8" id="linearGradient4306-3" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.49999977,0,0,-0.48275841,384.57144,547.24623)"/>
    <linearGradient xlink:href="#linearGradient4351" id="linearGradient4357-7" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.48275841,0,0,-0.48275841,385.26109,547.48761)"/>
    <linearGradient xlink:href="#linearGradient4410" id="linearGradient4427-3" y1="31" x1="54" y2="16.500048" x2="39.500008" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,-0.48275841,-0.48275841,0,419.53694,550.86696)"/>
    <linearGradient id="linearGradient4410">
      <stop style="stop-color:#383e51" id="stop4412"/>
      <stop offset="1" style="stop-color:#655c6f;stop-opacity:0" id="stop4414"/>
    </linearGradient>
  </defs>
  
  <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
    <path style="fill:url(#linearGradient4306-3);fill-opacity:1" id="rect3500-2" d="m 389.57144,545.79796 0,-27.99999 14.99999,0 7.00003,7 -3e-5,14.24137 0,6.75862 -7,0 z"/>
    <rect width="14.999983" x="389.57144" y="-518.79797" height="0.999973" style="fill:#ffffff;fill-opacity:0.41176471" id="rect4169-9" transform="scale(1,-1)"/>
    <rect width="21.999994" x="389.57144" y="-545.79797" height="1.00003" style="fill:#2e3132;fill-opacity:0.29411765" id="rect4236-1" transform="scale(1,-1)"/>
    <path style="fill:url(#linearGradient4357-7);fill-opacity:1;fill-rule:evenodd" id="path4314-2" d="m 411.57144,524.79797 -7.00001,-7 0,7 z"/>
    <path style="opacity:0.2;fill:url(#linearGradient4427-3);fill-rule:evenodd" id="path4320-7" d="m 411.5714,531.798 -6.99997,-7 7,0 z"/>
    <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:Sans;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;display:inline;overflow:visible;visibility:visible;fill:#fffcf9;fill-opacity:1;stroke:none;stroke-width:1px;marker:none;enable-background:accumulate" d="m 394.57143,529.798 0,0.6875 0,7.8125 0,1.28125 0,0.21875 5.90039,0 0,-1 -4.90039,0 0,-0.0625 3.90625,-3.34375 0.75,0.75 0.24414,0.26562 0,-1.39648 -0.21289,-0.21289 -1.57812,0 -3.10938,2.65625 0,-5.96875 2.32813,2.32812 0.34375,-1.03125 -1.98438,-1.98437 2.64648,0 0.33204,-1 -3.97852,0 -0.6875,0 z m 6,0 0,1 4.3125,0 -1.61719,1.61719 -0.6875,2.0625 2.99219,-2.99219 0,5.96875 -3.10156,-2.65039 -0.33203,0.99414 3.43359,2.9375 0,0.0625 -4.43359,0 -0.33203,1 5.76562,0 0,-0.21875 0,-1.28125 0,-7.8125 0,-0.6875 -0.6875,0 -5.3125,0 z" id="path2988"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#f6265b" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <g transform="scale(1-1)">
   <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
  </g>
  <path opacity=".75" fill="#fffcf9" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <path fill="#fffcf9" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" d="m18 22v22h5.5l.5-1h-5v-.586l9.707-9.707.293.293.471-.943-9.06-9.06h13.586l.5-1zm22.5 0l-.5 1h3.586l-7.17 7.17-1.414 2.828.291-.291 9.707 9.707v.586h-15l-.5 1h16.5v-22zm-21.5 1l9 9-9 9zm26 0v18l-9-9z"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
