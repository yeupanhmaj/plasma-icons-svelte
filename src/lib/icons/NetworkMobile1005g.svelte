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
	<g transform="translate(0,-308) translate(22,374)" id="network-mobile-100-5g">
    <rect y="-66" x="-22" height="22" width="22" id="rect4814-6" style="opacity:0.55;fill:none;fill-opacity:1;stroke:none;stroke-width:3.56737041px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
    <path id="path4816-7" d="m -19,-47 16,-16 v 16 z" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" class="ColorScheme-Text"/>
    <path class="ColorScheme-Text" style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none" d="m -14,-63 v 4 1 h 4 v -1 -1 -1 h -2 v 1 h 1 v 1 h -2 v -3 h 3 v -1 h -3 z" id="rect4976-4-5"/>
    <path style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m -19,-63 v 3 h 3 v 1 h -3 v 1 h 3 1 v -3 h -3 v -1 h 3 v -1 z" id="rect1642" class="ColorScheme-Text"/>
  </g>
</svg>
