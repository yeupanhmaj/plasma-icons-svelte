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
			<path d="M2 2v12h12V2zm1 1h10v10H3zm1 7v2h3v-2zm5 0v2h3v-2z" class="ColorScheme-Text" fill="currentColor"/>
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
       d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 5 15 L 5 17 L 10 17 L 10 15 L 5 15 z M 12 15 L 12 17 L 17 17 L 17 15 L 12 15 z "
        class="ColorScheme-Text"
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
			<defs id="defs5455">
  <linearGradient id="linearGradient4229">
   <stop style="stop-color:#566069" id="stop4231"/>
   <stop offset="1" style="stop-color:#18222a" id="stop4233"/>
  </linearGradient>
  <linearGradient id="linearGradient4369">
   <stop style="stop-color:#253440" id="stop4371"/>
   <stop offset="1" style="stop-color:#566069;stop-opacity:0.463277" id="stop4373"/>
  </linearGradient>
  <linearGradient id="linearGradient4191">
   <stop style="stop-color:#18222a" id="stop4193"/>
   <stop offset="1" style="stop-color:#566069" id="stop4195"/>
  </linearGradient>
  <linearGradient id="linearGradient4303-4">
   <stop style="stop-color:#197cf1" id="stop4305-0"/>
   <stop offset="1" style="stop-color:#21c9fb" id="stop4307-7"/>
  </linearGradient>
  <radialGradient cx="400.57144" cy="531.79797" r="13.999979" id="radialGradient4227" xlink:href="#linearGradient4229" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.000003 0 0 2.000003 -392.57266 -539.79957)"/>
  <linearGradient id="linearGradient4262" xlink:href="#linearGradient4191" y1="543.79797" y2="519.79797" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(2.000003 0 0 2 -392.57266 -539.79798)"/>
  <linearGradient id="linearGradient4288" xlink:href="#linearGradient4369" y1="543.79797" y2="539.79797" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(2.000003 0 0 2 -392.57266 -539.79798)"/>
  <linearGradient id="linearGradient4288-8" xlink:href="#linearGradient4369" y1="543.79797" y2="539.79797" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(2.000003 0 0 2 -366.57264 -539.79792)"/>
  <linearGradient id="linearGradient4416" xlink:href="#linearGradient4303-4" y1="19" y2="10" x1="20" gradientUnits="userSpaceOnUse" x2="8" gradientTransform="matrix(2.000003 0 0 2 378.57135 489.29802)"/>
  <linearGradient id="linearGradient4198" xlink:href="#linearGradient4227" y1="9" y2="22.999973" x1="9.00001" gradientUnits="userSpaceOnUse" x2="23" gradientTransform="matrix(2.000003 0 0 2 378.57133 488.79802)"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231-3"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -376.57144 -491.79797)">
  <rect width="52" x="382.57144" y="497.798" rx="1.999989" height="51.999989" style="fill:url(#radialGradient4227);stroke-linejoin:round;stroke-width:2" id="rect4189"/>
  <rect width="48.00007" x="384.57138" y="499.79797" rx="1.00002" height="48" style="fill:url(#linearGradient4262);stroke-linejoin:round;stroke-width:2" id="rect4237"/>
  <rect width="22.00001" x="384.57138" y="539.79797" rx="0.000053" height="8" style="fill:#83878a;stroke-linejoin:round;stroke-width:2" id="rect4239"/>
  <rect width="22.00007" x="410.57144" y="539.79797" rx="0.000053" height="8" style="fill:#83878a;stroke-linejoin:round;stroke-width:2" id="rect4239-7"/>
  <rect width="22.00003" x="384.57138" y="545.79797" rx="0" height="2" style="fill:url(#linearGradient4288);stroke-linejoin:round;stroke-width:2" id="rect4280"/>
  <rect width="22.00003" x="410.57144" y="545.79797" rx="0" height="2" style="fill:url(#linearGradient4288-8);stroke-linejoin:round;stroke-width:2" id="rect4280-1"/>
  <path id="path4369"/>
  <path style="fill:url(#linearGradient4198);opacity:0.2;fill-rule:evenodd" id="path4175" d="m 407.50894,510.54797 -2.9375,0.25 -2,0 -2,4 4,4 0,14 16.99999,17 13.00001,2e-5 0,-14.86525 z"/>
  <path style="fill:url(#linearGradient4416);stroke-linejoin:round;stroke-width:2" id="path4405" d="m 404.57139,509.29802 a 4.000006,4 0 0 0 -4,4 4.000006,4 0 0 0 3,3.8711 l 0,-2.14454 a 2.000003,2 0 0 1 -1,-1.72656 2.000003,2 0 0 1 2,-2 2.000003,2 0 0 1 2.00001,2 2.000003,2 0 0 1 -0.02,0.26954 l 1.6875,1.3125 a 4.000006,4 0 0 0 0.33204,-1.58204 4.000006,4 0 0 0 -4.00001,-4 z m 0,4 0.012,19.5 5.98829,-8 9.00002,0 -15.00003,-11.5 z"/>
 </g>
		</svg>
	{/if}
