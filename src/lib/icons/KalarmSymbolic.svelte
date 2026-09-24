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
	<g transform="translate(-326,-534.3622) translate(0,2e-05)" id="kalarm">
    <path class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none" d="m 337,537.3622 a 1.5,1.5 0 0 0 -1.5,1.5 1.5,1.5 0 0 0 0.16797,0.68555 5,5 0 0 0 -3.66797,4.81445 3.5,6 0 0 1 -3,5.93164 l 0,1.02149 0,0.0469 11.08789,0 a 1.5,1.5 0 0 0 -0.0879,0.5 1.5,1.5 0 0 0 1.5,1.5 1.5,1.5 0 0 0 1.5,-1.5 1.5,1.5 0 0 0 -0.0879,-0.5 l 2.08789,0 0,-0.0469 0,-1.02148 a 3.5,6 0 0 1 -3,-5.93165 5,5 0 0 0 -3.66602,-4.81836 1.5,1.5 0 0 0 0.16602,-0.68164 1.5,1.5 0 0 0 -1.5,-1.5 z m 0,3 a 4,4 0 0 1 4,4 4.5,7 0 0 0 2.19531,6 l -12.39062,0 a 4.5,7 0 0 0 2.19531,-6 4,4 0 0 1 4,-4 z" id="path4183"/>
  </g>
</svg>
