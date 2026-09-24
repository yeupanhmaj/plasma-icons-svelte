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
	<g id="weather-showers-scattered-day-symbolic" class="ColorScheme-Text" stroke-linejoin="bevel">
  <path id="rainwsd" d="m16 42 5-7" stroke="currentColor" stroke-width="2"/>
  <use transform="translate(16)" href="#rainwsd"/>
  <path d="m4 20h5" fill="none" stroke="currentColor" stroke-width="2" id="path8"/>
  <use transform="rotate( 36,20,20)" href="#path8"/>
  <use transform="rotate( 72,20,20)" href="#path8"/>
  <use transform="rotate(108,20,20)" href="#path8"/>
  <use transform="rotate(-36,20,20)" href="#path8"/>
    <path id="sun" d="m12.9 25.5 A9 9 0 0 1 20.8 11.02" stroke="currentColor" stroke-width="2" fill="none"/>
  <path id="cloud" d="m31 30 h 5 a 7 7 0 0 0 0.95 -13.92 a 9 9 0 0 0 -8.95-8.08 a 9 9 0 0 0 -8.36 12.31 a 5 5 0 1 0 -1.63 9.69h2 z" fill="none" stroke="currentColor" stroke-width="2"/>
 </g>
</svg>
