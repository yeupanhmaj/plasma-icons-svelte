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
	<g id="weather-clouds-night-symbolic" stroke-linejoin="bevel">
  <path class="ColorScheme-Text" d="m18 29 a14 14 0 0 1 4 -20 a15 15 0 0 0 -9 24.7 " fill="none" stroke="currentColor" stroke-width="2"/>
  <path class="ColorScheme-Text" id="cloud" d="m36.95 25.08a 9 9 0 0 0 -8.95-8.08 a 9 9 0 0 0 -8.36 12.31 a 5 5 0 1 0 -1.63 9.69h18a 7 7 0 0 0 0.95 -13.92 z" fill="none" stroke="currentColor" stroke-width="2"/>
 </g>
</svg>
