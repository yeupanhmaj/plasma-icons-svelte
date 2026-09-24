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
	<g id="weather-clear-symbolic">
  <path class="ColorScheme-Text" d="m4 24h6" fill="none" stroke="currentColor"  stroke-width="2" id="line12"/>
  <use transform="rotate( 36 24 24)" href="#line12"/>
  <use transform="rotate( 72 24 24)" href="#line12"/>
  <use transform="rotate(108 24 24)" href="#line12"/>
  <use transform="rotate(144 24 24)" href="#line12"/>
  <use transform="rotate(180 24 24)" href="#line12"/>
  <use transform="rotate(-36 24 24)" href="#line12"/>
  <use transform="rotate(-72 24 24)" href="#line12"/>
  <use transform="rotate(-108 24 24)" href="#line12"/>
  <use transform="rotate(-144 24 24)" href="#line12"/>
  <circle class="ColorScheme-Text" cx="24" cy="24" r="11" fill="none" stroke="currentColor" stroke-width="2"/>
 </g>
</svg>
