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
	<defs
     id="defs10" />
  
  
  <g
     id="konversation"
     transform="translate(-326,-534.36218)">
    <path
       id="rect3353"
       d="m 344,538.3622 -12,3.41797 v 1.04297 4.53906 0.58203 l 1,0.28516 v 2.13281 0.30078 l 6,1.69922 v -1 -1.42383 l 5,1.42383 v -1.04297 -10.91406 z m -1,1.32813 v 10.34375 l -10,-2.84766 v -4.64844 z m -12,2.375 -1,0.28515 v 0.0117 1 3 1 0.0117 l 1,0.28516 v -0.29688 -0.74609 -3.50782 -0.74609 z m 3,6.44921 4,1.13868 v 1.42578 l -4,-1.13282 z"
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:0.1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.299435"
       class="ColorScheme-Text" />
  </g>
</svg>
