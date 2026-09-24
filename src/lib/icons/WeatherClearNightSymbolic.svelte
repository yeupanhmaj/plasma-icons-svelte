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
	<g id="weather-clear-night-symbolic">
  <path class="ColorScheme-Text" d="m36 33 a13 13 0 0 1 -14 -24  a15 15 1 1 0 14 24 z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="miter"/>
 </g>
</svg>
