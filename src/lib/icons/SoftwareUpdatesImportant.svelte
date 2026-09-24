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
	viewBox="0 0 22 22"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<g id="software-updates-important" transform="translate(-44,2.66454e-15)">
    <path id="path4198" d="m 51,7 -3,3 0,9 5.099609,0 L 57,19 l 5.099609,0 0,-9 -3,-3 L 57,7 53.099609,7 Z m 0.3,1 3.7,0 3.7,0 2,2 -11.4,0 z m 1.7,3 4,0 0,5 -1,-1 -1,1 -1,-1 -1,1 z" style="fill:currentColor;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" class="ColorScheme-Text"/>
    <path id="path4202" d="m 60,3 3,5 -6,0 z" style="fill:#fdbc4b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"/>
    <rect y="-2.6645353e-15" x="44" height="22" width="22" id="rect4206" style="opacity:1;fill:none;fill-opacity:0.59905659;stroke:none"/>
  </g>
</svg>
