<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

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
	<g id="kopete">
    <path id="rect4144" d="m 3,3 0,12 3,0 0,4 4,-4 9,0 0,-12 z m 1,1 14,0 0,10 -14,0 z m 9.234375,0.5292969 -0.238281,0.4765625 C 14.254947,5.9480768 14.997235,7.4275888 15,9 c -0.0028,1.572411 -0.745053,3.051924 -2.003906,3.994141 l 0.238281,0.472656 C 14.927234,12.62117 15.997658,10.892314 16,9 15.999137,7.106279 14.928491,5.3755534 13.234375,4.5292969 Z M 6,5 6,7 8,7 8,5 Z m 3,3 0,2 4,0 0,-2 z m -3,3 0,2 2,0 0,-2 z" style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
  </g>
</svg>
