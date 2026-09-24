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
     id="defs13" />
  
  
  <g
     id="vlc"
     transform="translate(0,-1030.3621)">
    <rect
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:3.3;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect4271"
       width="16"
       height="2"
       x="3"
       y="1047.3621"
       class="ColorScheme-Text" />
    <path
       style="opacity:1;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="m 9.1191406,1033.3613 -4.1015625,14.8672 0.9648438,0.2656 3.8984375,-14.1328 h 2.2382816 l 3.898437,14.1328 0.964844,-0.2656 -4.101563,-14.8672 z"
       id="path4273"
       class="ColorScheme-Text" />
    <path
       style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 9,1036.3621 h 4 l 1,3 H 8 Z"
       id="path4275"
       class="ColorScheme-Text" />
    <path
       style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 7.5,1042.3621 h 7 l 1,3 h -9 z"
       id="path4277"
       class="ColorScheme-Text" />
  </g>
</svg>
