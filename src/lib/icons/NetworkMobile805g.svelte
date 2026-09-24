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
	<g transform="translate(0,-308) translate(0,374)" id="network-mobile-80-5g">
    <rect style="opacity:0.55;fill:none;fill-opacity:1;stroke:none;stroke-width:3.56737041px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect4820-5" width="22" height="22" x="0" y="-66"/>
    <path id="path4822-6" d="m 3,-47 16,-16 v 16 z" style="opacity:0.35;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" class="ColorScheme-Text"/>
    <path id="path4824-2" d="M 17,-61 3,-47 h 14 z" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" class="ColorScheme-Text"/>
    <path class="ColorScheme-Text" id="path5058-9" d="m 8,-63 v 4 1 h 4 v -1 -1 -1 h -2 v 1 h 1 v 1 H 9 v -3 h 3 v -1 H 9 Z" style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"/>
    <path style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 3,-63 v 3 h 3 v 1 H 3 v 1 h 3 1 v -3 H 4 v -1 h 3 v -1 z" id="rect1642-3" class="ColorScheme-Text"/>
  </g>
</svg>
