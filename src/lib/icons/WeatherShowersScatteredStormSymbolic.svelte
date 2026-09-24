<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 48,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 48 48"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<g id="weather-showers-scattered-storm-symbolic" class="ColorScheme-Text" stroke-linejoin="bevel">
  <path id="lightning" d="m25.415 22  -3.4145 9 3.2442 0l-5.2442 13l0.3171 0l 9.6829-15h-3.841l3.841-7z" fill="currentColor"/>
  <path id="rainwsd" d="m14 40 5-7" stroke="currentColor" stroke-width="2"/>
  <use transform="translate(18)" href="#rainwsd"/>
  <path id="cloud" d="m31 30 h 5 a 7 7 0 0 0 0.95 -13.92 a 9 9 0 0 0 -8.95-8.08 a 9 9 0 0 0 -8.36 12.31 a 5 5 0 1 0 -1.63 9.69h2 " fill="none" stroke="currentColor" stroke-width="2"/>
 </g>
</svg>
