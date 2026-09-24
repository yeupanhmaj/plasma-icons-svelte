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
	<g transform="translate(-326,-534.3622) translate(0,2e-05)" id="kruler">
    <path inkscape:connector-curvature="0" id="path6" class="ColorScheme-Text" d="m 328,538.3622 0,2 0,12 1,0 17,0 0,-1 -17,0 0,-11 17,0 0,-2 -18,0 z m 2,3 0,3 1,0 0,-3 -1,0 z m 2,0 0,3 1,0 0,-3 -1,0 z m 2,0 0,6 1,0 0,-6 -1,0 z m 2,0 0,3 1,0 0,-3 -1,0 z m 2,0 0,3 1,0 0,-3 -1,0 z m 2,0 0,6 1,0 0,-6 -1,0 z m 2,0 0,3 1,0 0,-3 -1,0 z m 2,0 0,3 1,0 0,-3 -1,0 z" style="fill:currentColor;fill-opacity:1;stroke:none"/>
  </g>
</svg>
