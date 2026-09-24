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
	<g transform="translate(154,8e-6) translate(-154,-8e-06)" id="ime-wubi">
    <path style="fill:currentColor;fill-opacity:1;stroke:none" d="M 3,3.0019531 3,19 19,19 19,3.0019531 Z M 4,4 18,4 18,18 4,18 Z M 6,6 6,7 9.8769531,7 9.2109375,10 7,10 7,11 8.9882812,11 8.0996094,15 6,15 l 0,1 10,0 0,-1 -2,0 0,-5 -3.763672,0 L 10.902344,7 15,7 15,6 Z M 10.013672,11 13,11 l 0,4 -3.8769531,0 z" class="ColorScheme-Text" id="path6-6"/>
    <rect style="fill:none;fill-opacity:1;stroke:none" id="rect4138-8" width="22" height="22" x="0" y="0"/>
  </g>
</svg>
