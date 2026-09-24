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
			<linearGradient id="a"><stop offset="0" stop-color="#814b13"/><stop offset="1" stop-color="#9d5b17"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.64285644 0 0 .64285644 -246.50993 -330.86975)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#fdc95f"/><stop offset="1" stop-color="#fdd583"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="11" x2="11" xlink:href="#a" y1="11" y2="7"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="11" x2="11" xlink:href="#a" y1="16" y2="13"/><rect fill="url(#b)" height="18" rx="8.999991" ry="8.999996" stroke-width=".642856" width="17.999987" x="2" y="2"/><path d="m2.0097741 10.5c-.00897.165461-.013672.332222-.013672.5 0 4.985998 4.014005 9 8.9999999 9 4.985995 0 9-4.014002 9-9 0-.167778-.0047-.334539-.01367-.5-.257722 4.751677-4.168112 8.5-8.986328 8.5-4.8182159 0-8.7286059-3.748323-8.9863279-8.5z" fill="#9d5b17" opacity=".25" stroke-width=".642856"/><path d="m8 7c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1s1-.446 1-1v-2c0-.554-.446-1-1-1zm6 0c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1s1-.446 1-1v-2c0-.554-.446-1-1-1z" fill="url(#c)"/><path d="m7.1347656 13a4 4 0 0 0 3.8652344 3 4 4 0 0 0 3.865234-3h-1.041015a3 3 0 0 1 -2.824219 2 3 3 0 0 1 -2.8242188-2z" fill="url(#d)"/>
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
  <linearGradient id="linearGradient4207">
   <stop style="stop-color:#814b13" id="stop4209"/>
   <stop offset="1" style="stop-color:#9d5b17" id="stop4211"/>
  </linearGradient>
  <linearGradient id="linearGradient4143">
   <stop style="stop-color:#fdc95f" id="stop4145"/>
   <stop offset="1" style="stop-color:#fdd583" id="stop4147"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4143" id="linearGradient4149" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -0.000017 0.000013)"/>
  <linearGradient xlink:href="#linearGradient4207" id="linearGradient4213" y1="538.79797" y2="534.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4207" id="linearGradient4221" y1="528.79797" y2="524.79797" x2="0" gradientUnits="userSpaceOnUse"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="28.00001" x="386.57141" y="517.79797" rx="14" height="28.00003" ry="14.00001" style="fill:url(#linearGradient4149)" id="rect4130"/>
  <ellipse cx="395.57144" cy="526.79803" rx="2" ry="2.00001" style="fill:url(#linearGradient4221);stroke-width:5.03937" id="path4184"/>
  <ellipse cx="405.5715" cy="526.79803" rx="1.999993" ry="2" style="fill:url(#linearGradient4221);stroke-width:5.03935" id="circle4186"/>
  <path style="fill:url(#linearGradient4213);stroke-width:1.231256" id="path4229" d="m 395.24526,535.10422 a 6.1562779,7.3875605 0 0 0 5.32662,3.69378 6.1562779,7.3875605 0 0 0 5.32182,-3.69378 l -0.7479,0 a 6.1562779,7.3875605 0 0 1 -4.57392,2.46253 6.1562779,7.3875605 0 0 1 -4.57633,-2.46253 l -0.75029,0 z"/>
 </g>
		</svg>
	{/if}
