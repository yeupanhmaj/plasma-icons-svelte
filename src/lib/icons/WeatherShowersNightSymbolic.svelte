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
	<g id="weather-showers-night-symbolic" class="ColorScheme-Text" stroke-linejoin="bevel">
  <path id="cloud" d="m31 30 h 5 a 7 7 0 0 0 0.95 -13.92 a 9 9 0 0 0 -8.95-8.08 a 9 9 0 0 0 -8.36 12.31 a 5 5 0 1 0 -1.63 9.69h2 z" fill="none" stroke="currentColor" stroke-width="2"/>
  <path id="rainwsd" d="m8 42 5-7" stroke="currentColor" stroke-width="2"/>
  <use transform="translate(8)" href="#rainwsd"/>
  <use transform="translate(16)" href="#rainwsd"/>
  <use transform="translate(24)" href="#rainwsd"/>
  <path id="moon" d="m14 21.5a14 14 0 0 1 2-17 12 12 0 0 0-2.5 23" fill="none" stroke="currentColor" stroke-width="2"/>
 </g>
</svg>
