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
	<g id="weather-hail-symbolic" class="ColorScheme-Text" fill="currentColor" stroke-linejoin="bevel">
  <path id="cloud" d="m31 30 h 5 a 7 7 0 0 0 0.95 -13.92 a 9 9 0 0 0 -8.95-8.08 a 9 9 0 0 0 -8.36 12.31 a 5 5 0 1 0 -1.63 9.69h2z " fill="none" stroke="currentColor" stroke-width="2"/>
  <path id="hail" d="m14 33-3 3 3 3 3-3-3-3z"/>
  <use transform="translate(8)" href="#hail"/>
  <use transform="translate(16)" href="#hail"/>
  <use transform="translate(24)" href="#hail"/>
  <use transform="translate(-4,5.5)" href="#hail"/>
  <use transform="translate(4 5.5)" href="#hail"/>
  <use transform="translate(12,5.5)" href="#hail"/>
  <use transform="translate(20,5.5)" href="#hail"/>
 </g>
</svg>
