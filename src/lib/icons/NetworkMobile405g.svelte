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
	<g transform="translate(0,-308) translate(-44,374)" id="network-mobile-40-5g">
    <rect style="opacity:0.55;fill:none;fill-opacity:1;stroke:none;stroke-width:3.56737041px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect4836-6" width="22" height="22" x="44" y="-66"/>
    <path id="path4838-0" d="m 47,-47 16,-16 v 16 z" style="opacity:0.35;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" class="ColorScheme-Text"/>
    <path id="path4840-6" d="M 57,-57 47,-47 H 57 Z" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" class="ColorScheme-Text"/>
    <path class="ColorScheme-Text" style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none" d="m 52,-63 v 4 1 h 4 v -1 -1 -1 h -2 v 1 h 1 v 1 h -2 v -3 h 3 v -1 h -3 z" id="path5062-2"/>
    <path style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 47,-63 v 3 h 3 v 1 h -3 v 1 h 3 1 v -3 h -3 v -1 h 3 v -1 z" id="rect1642-3-6-7" class="ColorScheme-Text"/>
  </g>
</svg>
