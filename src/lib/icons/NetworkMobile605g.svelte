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
	<g transform="translate(0,-308) translate(-22,374)" id="network-mobile-60-5g">
    <rect y="-66" x="22" height="22" width="22" id="rect4828-2" style="opacity:0.55;fill:none;fill-opacity:1;stroke:none;stroke-width:3.56737041px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
    <path style="opacity:0.35;fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 25,-47 16,-16 v 16 z" id="path4830-7" class="ColorScheme-Text"/>
    <path id="path4832-0" d="M 37,-59 25,-47 H 37 Z" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" class="ColorScheme-Text"/>
    <path class="ColorScheme-Text" id="path5060-9" d="m 30,-63 v 4 1 h 4 v -1 -1 -1 h -2 v 1 h 1 v 1 h -2 v -3 h 3 v -1 h -3 z" style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"/>
    <path style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 25,-63 v 3 h 3 v 1 h -3 v 1 h 3 1 v -3 h -3 v -1 h 3 v -1 z" id="rect1642-3-6" class="ColorScheme-Text"/>
  </g>
</svg>
