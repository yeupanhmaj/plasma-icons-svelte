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
	<g transform="translate(-25,-1) translate(24,0)" id="quassel_inactive">
    <rect style="fill:#ffffff;fill-opacity:0.01000001;stroke:none" id="rect3777" width="22" height="22" x="1" y="1"/>
    <path inkscape:connector-curvature="0" class="ColorScheme-Text" id="path3779" transform="translate(1,1)" d="m 11,3 c -4.418278,0 -8,3.581722 -8,8 0,4.418278 3.581722,8 8,8 4.418278,0 8,-3.581722 8,-8 0,-4.418278 -3.581722,-8 -8,-8 z m 0,1 c 3.865993,0 7,3.1340068 7,7 0,3.865993 -3.134007,7 -7,7 C 7.1340068,18 4,14.865993 4,11 4,7.1340068 7.1340068,4 11,4 z m 2,7 c -1.656854,0 -3,1.343146 -3,3 0,1.656854 1.343146,3 3,3 1.656854,0 3,-1.343146 3,-3 0,-1.656854 -1.343146,-3 -3,-3 z" style="opacity:0.2;fill:currentColor;fill-opacity:1;stroke:none"/>
  </g>
</svg>
