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
	<defs
     id="defs10" />
  
  
  <g
     id="kget"
     transform="translate(-326,-534.36218)">
    <path
       id="rect4170"
       transform="translate(326,534.36218)"
       d="m 9,3 v 1 4 1 2 h 1 V 4 h 2 v 7 h 1 V 9 8 4 3 Z M 6.7578125,10.34375 6.0507812,11.050781 11,16 15.949219,11.050781 15.242188,10.34375 11,14.585938 Z M 5,17 v 2 h 1 10 1 v -2 h -1 v 1 H 6 v -1 z"
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:2.8;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.550265"
       class="ColorScheme-Text" />
  </g>
</svg>
