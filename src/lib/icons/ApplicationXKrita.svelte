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
			<path fill="#a64d4d" d="m2.093 1038.02c-.03 0-.053 0-.068.018-.479.479 6.067 6.488 6.067 6.488l2.453 2.334c-.791 1.845 1.688 1.875 2.223 2.811.235.41-.051.967-.478.996.849.28 1.992-1.35 1.648-2.27-.41-1.099-.826-1.575-1.606-1.909-.322-.138-1.141-.149-1.427.012l-2.273-2.513c0 0-5.609-5.887-6.538-5.968m1.034 5.834c-.217.001-.284.315-.284.745.041.85.579 3.33 3.25 5.137 2.249 1.522 6.365.972 6.298.108-.905-1.124-2.419-.423-2.439-3.114-.88.01-1.828-.131-1.793.24.148 1.552-2.313.433-3.267-1.15-.958-1.451-1.486-1.966-1.765-1.965m3.507 1.915c-.146 0-.263.048-.319.144-.111.192.069.505.403.698.334.193.695.193.806.001.111-.192-.07-.505-.404-.697-.167-.096-.486.001-.486-.145" transform="translate(0-1036.36)"/>
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
       style="fill:#a64d4d"
       d="m 329.12407,537.36347 c -0.04,0 -0.0707,0 -0.0907,0.0227 -0.63862,0.60442 8.08877,8.18681 8.08877,8.18681 l 3.27044,2.94513 c -1.05459,2.3281 2.25051,2.36595 2.96379,3.54703 0.31331,0.51736 -0.068,1.2202 -0.63729,1.2568 1.13192,0.35331 2.65582,-1.70349 2.19718,-2.86438 -0.54662,-1.38676 -1.10125,-1.9874 -2.14118,-2.40885 -0.4293,-0.17413 -1.52123,-0.18801 -1.90253,0.0151 l -3.03046,-3.171 c 0,0 -7.47814,-7.42845 -8.71672,-7.53066 m 1.37857,7.36157 c -0.28932,0.001 -0.37864,0.39748 -0.37864,0.94007 0.0547,1.07257 0.77194,4.20193 4.33303,6.48207 2.99845,1.92052 8.48607,1.22651 8.39674,0.13628 -1.20658,-1.41831 -3.2251,-0.53376 -3.25177,-3.92937 -1.17325,0.0126 -2.43716,-0.1653 -2.3905,0.30284 0.19732,1.95838 -3.08378,0.54638 -4.3557,-1.45111 -1.27724,-1.83093 -1.98119,-2.48078 -2.35316,-2.47951 m 4.67567,2.41642 c -0.19465,0 -0.35064,0.0606 -0.4253,0.1817 -0.14799,0.24228 0.092,0.63723 0.53729,0.88077 0.4453,0.24353 0.9266,0.24353 1.07459,0.001 0.14799,-0.24227 -0.0933,-0.63723 -0.53863,-0.8795 -0.22265,-0.12114 -0.64795,0.001 -0.64795,-0.18297"
       id="path4" />
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
  <linearGradient id="a" y1="392.36" y2="320.48" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(.5 0 0 .42294 378.57 378.93)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <linearGradient id="b" y1="17" x1="47" y2="24" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(360.57 510.8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" id="c" color-interpolation="sRGB" color="#000000" d="m386.57 545.8v-25h21l7 7v18h-7z"/>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <use fill="#fc7676" xlink:href="#c"/>
  <g fill-rule="evenodd">
   <path opacity=".6" color-interpolation-filters="linearRGB" color="#000000" image-rendering="auto" color-rendering="auto" d="m414.57 527.8l-7-7v7z" color-interpolation="sRGB" text-rendering="auto" shape-rendering="auto"/>
   <path opacity=".2" fill="url(#b)" d="m407.57 527.8l7 7v-7z"/>
  </g>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
   <rect opacity=".25" x="386.57" y="544.8" width="28" height="1"/>
   <rect opacity=".3" x="386.57" y="520.8" width="21" fill="#ffffff" height="1"/>
  </g>
  <path opacity=".6" d="m392.32 524.29c-.041-.003-.073.004-.093.025-.661.661 8.376 8.957 8.376 8.957l3.386 3.222c-1.092 2.548 2.33 2.589 3.068 3.881.324.567-.07 1.336-.66 1.375 1.172.387 2.75-1.863 2.275-3.134-.566-1.517-1.14-2.175-2.218-2.635-.445-.19-1.575-.205-1.97.017l-3.138-3.469c0 0-7.743-8.128-9.03-8.239m1.427 8.05c-.3.001-.392.435-.392 1.028.057 1.174.799 4.598 4.486 7.092 3.105 2.101 8.787 1.343 8.695.149-1.249-1.552-3.34-.584-3.367-4.3-1.215.009-2.524-.18-2.475.331.204 2.143-3.193.597-4.51-1.588-1.322-2-2.051-2.715-2.437-2.713m4.841 2.643c-.201 0-.363.066-.44.199-.153.265.095.697.556.963.461.266.959.267 1.112.001.153-.265-.096-.697-.557-.963-.231-.133-.671.001-.671-.2"/>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(6 8)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="320.48" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 .84587-34-272.73)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" id="c" color-interpolation="sRGB" color="#000000" d="m4 61v-50h42l14 14v36h-14z"/>
 </defs>
 <use fill="#fc7676" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <rect opacity=".25" x="4" y="60" width="56" height="1"/>
  <path opacity=".6" fill-rule="evenodd" d="m60 25l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m46 25l14 14v-14z"/>
 <rect opacity=".3" color-interpolation-filters="linearRGB" x="4" y="11" color="#000000" image-rendering="auto" color-rendering="auto" width="42" color-interpolation="sRGB" text-rendering="auto" fill="#ffffff" height="1" shape-rendering="auto"/>
 <path opacity=".6" d="m16.928 20.527c-.061-.005-.106.007-.137.037-.968.968 16.932 17.9 16.932 17.9l4.959 4.719c-.142 4.217 3.768 3.856 4.85 5.748.474.83-.458 1.891-1.322 1.949 1.716.566 3.735-2.696 3.041-4.557-.829-2.221-1.836-2.852-3.414-3.525-.652-.278-1.768-.101-2.428-.342l-4.596-5.08c0 0-16-16.686-17.885-16.85"/>
 <path opacity=".6" d="m23.365 38.764c.083 1.719 1.17 6.732 6.57 10.386 4.548 3.077 12.867 1.966 12.733.218-1.83-2.273-4.891-.853-4.931-6.295-1.78.013-3.695-.266-3.624.483.299 3.138-4.676.875-6.605-2.326-3.443-5.215-4.143-4.453-4.142-2.466m7.664 2.364c-.295 0-.532.097-.645.291-.224.389.139 1.02.814 1.41.675.39 1.404.391 1.629.002.224-.389-.141-1.02-.816-1.41-.338-.195-.982.002-.982-.293"/>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
