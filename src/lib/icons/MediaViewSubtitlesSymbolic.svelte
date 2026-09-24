<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16 16"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<g
     transform="matrix(1,0,0,-1,-421.71,547.79)"
     id="g6">
    <path
       style="color:#bebebe;fill:currentColor;fill-opacity:1;stroke:none"
       d="m 424.71,545.79 0,-12 10,0 0,9 -3,3 z m 1,-1 5,0 0,-3 3,0 0,-7 -8,0 z"
       class="ColorScheme-Text"
       id="path8" />
    <path
       style="color:#3daee9;fill:currentColor;fill-opacity:1;stroke:none"
       d="m 426.71,535.79 6,0 0,2 -6,0 z"
       class="ColorScheme-Accent"
       id="path10" />
  </g>
</svg>
