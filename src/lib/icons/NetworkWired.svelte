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
	<g transform="translate(110,0) translate(-110,0)" id="network-wired">
    <path class="ColorScheme-Text" id="rect4467-4" transform="translate(-110,0)" d="m 113,3 0,6 2,0 0,8 1,0 0,-8 2,0 0,-6 z m 6,0 0,1 9,0 0,10 -11,0 0,1 0,1 1,0 1,0 0,1 0,0.726562 0,0.273438 -2,0 0,1 2,0 1,0 2,0 3,0 0,-1 -1,0 -1,0 0,-2 1,0 4,0 1,0 0,-13 -1,0 z m -5,1 3,0 0,4 -3,0 z m 1,1 0,2 1,0 0,-2 z m -2,5 0,6 1,0 0,-6 z" style="fill:currentColor;fill-opacity:1;stroke:none"/>
    <rect style="opacity:1;fill:none;fill-opacity:1;stroke:none" id="rect4509-9" width="22" height="22" x="0" y="0"/>
  </g>
</svg>
