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

	{#if numericSize <= 27}
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
			<linearGradient id="a" gradientTransform="matrix(.64285741 0 0 .64285741 -246.51032 -330.87026)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="12" y2="10"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="6" x2="15" y1="6" y2="18"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><rect fill="url(#a)" height="18.000008" rx="9" stroke-width=".642857" width="18" x="2" y="2"/><path d="m7.7070312 10.292969-1.4140624 1.414062 7.7460932 7.746094c.662448-.240307 1.294381-.557584 1.882813-.945313zm3.9999998 0-1.414062 1.414062 6.308593 6.308594c.522421-.417361.996702-.891642 1.414063-1.414063zm4 0-1.414062 1.414062 4.214843 4.214844c.387729-.588432.705006-1.220365.945313-1.882813z" fill="url(#c)" opacity=".2"/><path d="m7 10a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0 -1-1zm4 0a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0 -1-1zm4 0a1 1 0 0 0 -1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0 -1-1z" fill="url(#b)"/>
		</svg>
	{:else}
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
  <linearGradient xlink:href="#linearGradient4303" id="linearGradient4238" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -0.000006 0)"/>
  <linearGradient xlink:href="#linearGradient4159" id="linearGradient4370" y1="30" y2="1.999974" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4303">
   <stop style="stop-color:#c6cdd1" id="stop4305"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307"/>
  </linearGradient>
  <linearGradient id="linearGradient4159">
   <stop style="stop-color:#2a2c2f" id="stop4161"/>
   <stop offset="1" style="stop-color:#424649" id="stop4163"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4198" y1="9" x1="9.00001" y2="22.999973" x2="23" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="27.999989" x="386.57144" y="517.79797" rx="13.999994" height="28" style="fill:url(#linearGradient4238)" id="rect4175"/>
  <path style="fill:url(#linearGradient4198);opacity:0.2;fill-rule:evenodd" id="path4175" d="m 9.4003906,15 -0.099609,2 0.9999998,1 10.970703,10.970703 c 3.4891,-1.412467 6.267011,-4.183045 7.6875,-7.667969 L 22.706,14.95 22.191,14.6 19.400391,15 19.318359,16.662109 17.706,14.95 17.191,14.6 14.400391,15 14.318359,16.662109 12.706,14.95 12.191,14.6 Z" transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <path style="fill:url(#linearGradient4370)" id="rect4176" d="m 16,14 c -1.108,0 -2,0.892 -2,2 0,1.108 0.892,2 2,2 1.108,0 2,-0.892 2,-2 0,-1.108 -0.892,-2 -2,-2 z m -5,0 c -1.108,0 -2,0.892 -2,2 0,1.108 0.892,2 2,2 1.108,0 2,-0.892 2,-2 0,-1.108 -0.892,-2 -2,-2 z m 10,0 c -1.108,0 -2,0.892 -2,2 0,1.108 0.892,2 2,2 1.108,0 2,-0.892 2,-2 0,-1.108 -0.892,-2 -2,-2 z" transform="matrix(1 0 0 1 384.57143 515.798)"/>
 </g>
		</svg>
	{/if}
