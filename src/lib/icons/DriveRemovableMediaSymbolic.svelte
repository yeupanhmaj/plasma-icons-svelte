<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 32 32"
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
     id="device-notifier"
     transform="translate(-321,-529.36218)">
    <path
       id="rect4196"
       transform="translate(321,529.36218)"
       d="M 9,2 V 16 H 8 7 v 14 h 1 16 1 V 16 H 24 23 V 2 Z m 1,3 h 2 v 8 h -2 z m 10,0 h 2 v 8 h -2 z m -7,3 h 2 v 5 h -2 z m 4,0 h 2 v 5 H 17 Z M 8,17 H 24 V 29 H 8 Z m 8,1 -2,2 h 4 z m -6,7 v 1 h 12 v -1 z m 1,2 v 1 h 10 v -1 z"
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:0.1;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       class="ColorScheme-Text" />
    <rect
       y="529.36218"
       x="321"
       height="31.999985"
       width="31.999985"
       id="rect4151"
       style="opacity:0.2;fill:none;fill-opacity:1;stroke:none" />
  </g>
</svg>
