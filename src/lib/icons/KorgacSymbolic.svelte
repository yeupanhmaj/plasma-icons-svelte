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
	<g id="korgac">
    <path id="rect4131" d="m 11,3 c -4.4319982,0 -8,3.5680018 -8,8 0,4.431998 3.5680018,8 8,8 4.431998,0 8,-3.568002 8,-8 0,-4.4319982 -3.568002,-8 -8,-8 z m 0,1 c 3.877999,0 7,3.1220013 7,7 0,3.877999 -3.122001,7 -7,7 C 7.1220013,18 4,14.877999 4,11 4,7.1220013 7.1220013,4 11,4 Z m -1,1 0,7 1,0 5,0 0,-1 -5,0 0,-6 -1,0 z" style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none" inkscape:connector-curvature="0" class="ColorScheme-Text"/>
  </g>
</svg>
