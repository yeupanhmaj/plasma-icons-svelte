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
       style="fill:currentColor;fill-opacity:1;stroke:none"
       d="M 8 2 C 4.6862915 2 2 4.6862915 2 8 C 2 11.313708 4.6862915 14 8 14 L 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 5.2385763 5.2385763 3 8 3 C 10.761424 3 13 5.2385763 13 8 L 14 8 C 14 4.6862915 11.313708 2 8 2 z M 8 6 C 6.8954305 6 6 6.8954305 6 8 C 6 9.1045695 6.8954305 10 8 10 L 8 9 C 7.4477153 9 7 8.5522847 7 8 C 7 7.4477153 7.4477153 7 8 7 C 8.5522847 7 9 7.4477153 9 8 L 10 8 C 10 6.8954305 9.1045695 6 8 6 z M 9 9 L 9 14 L 11 14 L 12 13 L 13 12 L 13 9 L 9 9 z M 10 10 L 12 10 L 12 12 L 11 12 L 11 13 L 10 13 L 10 10 z "
       class="ColorScheme-Text" 
       />
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none"
       d="M 8 2 C 4.6862915 2 2 4.6862915 2 8 C 2 11.313708 4.6862915 14 8 14 L 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 5.2385763 5.2385763 3 8 3 C 10.761424 3 13 5.2385763 13 8 L 14 8 C 14 4.6862915 11.313708 2 8 2 z M 8 6 C 6.8954305 6 6 6.8954305 6 8 C 6 9.1045695 6.8954305 10 8 10 L 8 9 C 7.4477153 9 7 8.5522847 7 8 C 7 7.4477153 7.4477153 7 8 7 C 8.5522847 7 9 7.4477153 9 8 L 10 8 C 10 6.8954305 9.1045695 6 8 6 z M 9 9 L 9 14 L 11 14 L 12 13 L 13 12 L 13 9 L 9 9 z M 10 10 L 12 10 L 12 12 L 11 12 L 11 13 L 10 13 L 10 10 z "
        class="ColorScheme-Text"
        />
		</svg>
	{:else if numericSize <= 43}
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
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 11 3 A 8 8 0 0 0 3 11 A 8 8 0 0 0 11 19 A 8 8 0 0 0 12 18.929688 L 12 17.921875 A 7 7 0 0 1 11 18 A 7 7 0 0 1 4 11 A 7 7 0 0 1 11 4 A 7 7 0 0 1 18 11 L 19 11 A 8 8 0 0 0 11 3 z M 11 5 C 7.676 5 5 7.676 5 11 L 8 11 C 8 9.338 9.338 8 11 8 L 11 5 z M 11 9 A 2 2 0 0 0 9 11 A 2 2 0 0 0 11 13 L 11 12 A 1 1 0 0 1 10 11 A 1 1 0 0 1 11 10 A 1 1 0 0 1 12 11 L 13 11 A 2 2 0 0 0 11 9 z M 13 12 L 13 19 L 16 19 L 18 17 L 18 12 L 13 12 z M 14 13 L 17 13 L 17 17 L 16 17 L 16 18 L 14 18 L 14 13 z "
       id="rect4119" 
       class="ColorScheme-Text"/>
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
			<defs id="defs5455">
  <linearGradient id="linearGradient4372" xlink:href="#linearGradient4227" y1="523.79797" y2="537.79797" x1="408.5715" gradientUnits="userSpaceOnUse" x2="422.57147" gradientTransform="matrix(1.2998888 0 0 1.3 -499.09733 -648.93736)"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient id="linearGradient3834" xlink:href="#linearGradient4300" y1="540.79797" y2="506.798" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.5292812 0 0 1.529412 -592.82053 -769.10295)"/>
  <linearGradient id="linearGradient3862" xlink:href="#linearGradient4351" y1="540.79797" y2="506.798" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.52941243 0 0 0.52941244 -184.30279 -245.30519)"/>
  <linearGradient xlink:href="#linearGradient4351" id="linearGradient4215" x1="29.734833" x2="47.734833" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.1111111 0 0 1.1111111 381.53272 -618.94577)"/>
  <linearGradient id="linearGradient4372-2" xlink:href="#linearGradient4227" y1="522.91602" y2="533.68524" x1="407.55716" gradientUnits="userSpaceOnUse" x2="418.3273" gradientTransform="matrix(1.2998888 0 0 1.3 -488.77899 -669.79083)"/>
  <linearGradient id="linearGradient4300">
   <stop style="stop-color:#bdc3c7" id="stop4302"/>
   <stop offset="1" style="stop-color:#dadfe1" id="stop4304"/>
  </linearGradient>
  <linearGradient id="linearGradient4351">
   <stop style="stop-color:#566472" id="stop4353"/>
   <stop offset="1" style="stop-color:#6c7a89" id="stop4355"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4300" id="linearGradient5250" y1="545.79071" y2="533.79071" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -376.57144 -491.79797)">
  <path style="fill:url(#linearGradient3834)" id="rect4146" d="M 32 6 C 17.59725 6 6.0019531 17.59602 6.0019531 32 C 6.0019531 46.40398 17.59725 58 32 58 C 46.40275 58 57.998047 46.40398 57.998047 32 C 57.998047 17.59602 46.40275 6 32 6 z M 32 29 C 33.662 29 35 30.338 35 32 C 35 33.662 33.662 35 32 35 C 30.338 35 29 33.662 29 32 C 29 30.338 30.338 29 32 29 z " transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <path style="fill:url(#linearGradient4372);opacity:0.2;fill-rule:evenodd" id="path4364" d="M 38.125 25.375 L 37.570312 26.257812 A 8 8 0 0 1 40 32 A 8 8 0 0 1 32 40 A 8 8 0 0 1 25.669922 36.876953 L 24.71875 37.375 L 42.683594 55.683594 C 48.453734 53.085924 53.084131 48.454284 55.681641 42.683594 L 38.125 25.375 z M 37.025391 27.126953 L 34.736328 30.777344 C 34.90297 31.151175 35 31.562905 35 32 C 35 33.662 33.662 35 32 35 C 31.358211 35 30.768025 34.795724 30.28125 34.455078 L 26.564453 36.40625 A 7 7 0 0 0 32 39 A 7 7 0 0 0 39 32 A 7 7 0 0 0 37.025391 27.126953 z " transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <path style="fill:url(#linearGradient3862)" id="rect4270" d="M 32 23 C 27.014 23 23 27.014 23 32 C 23 36.986 27.014 41 32 41 C 36.986 41 41 36.986 41 32 C 41 27.014 36.986 23 32 23 z M 32 24 A 8 8 0 0 1 40 32 A 8 8 0 0 1 32 40 A 8 8 0 0 1 24 32 A 8 8 0 0 1 32 24 z M 32 25 A 7 7 0 0 0 25 32 A 7 7 0 0 0 32 39 A 7 7 0 0 0 39 32 A 7 7 0 0 0 32 25 z M 32 29 C 33.662 29 35 30.338 35 32 C 35 33.662 33.662 35 32 35 C 30.338 35 29 33.662 29 32 C 29 30.338 30.338 29 32 29 z " transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <path style="fill:#2e3132;fill-opacity:0.294118" id="rect4284" d="m 6.0019531,31.191406 c -0.005,0.21774 0,0.435127 0,0.654297 C 6.0019531,46.334943 17.59723,58 32,58 46.40277,58 57.998047,46.334943 57.998047,31.845703 c 0,-0.21917 0.005,-0.436557 0,-0.654297 C 57.654007,45.374776 46.18454,57 32,57 17.81546,57 6.3459931,45.374776 6.0019531,31.191406 Z" transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <path style="fill:#2e3132;fill-opacity:0.294118;stroke-linecap:round" id="path4558" d="M 32 24 A 8 8 0 0 0 24 32 A 8 8 0 0 0 32 40 A 8 8 0 0 0 40 32 A 8 8 0 0 0 32 24 z M 32 25 A 7 7 0 0 1 39 32 A 7 7 0 0 1 32 39 A 7 7 0 0 1 25 32 A 7 7 0 0 1 32 25 z " transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <circle cx="424.57144" cy="507.79797" style="fill:url(#linearGradient4215);stroke-linecap:round" id="path4207" r="10"/>
  <path style="fill:url(#linearGradient4372-2);opacity:0.2;fill-rule:evenodd" id="path4364-0" d="m 52.999987,19.000023 -3,3 -7,0 15.000013,15 c 0,0 -1.3e-5,-22 0,-22 l -5.000013,-5 z" transform="matrix(1 0 0 1 376.57144 491.79797)"/>
  <path style="fill:url(#linearGradient5250);fill-rule:evenodd" id="rect4140" d="m 3,2 0,12 6,0 1,0 3,-3 0,-1 0,-8 -10,0 z m 1,1 8,0 0,7 -3,0 0,3 -5,0 0,-10 z" transform="matrix(1 0 0 1 416.57144 499.79797)"/>
 </g>
		</svg>
	{/if}
