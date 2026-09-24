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
	<defs id="defs3051">
    
    <radialGradient
       xlink:href="#linearGradient4469"
       id="radialGradient4475"
       cx="555.57141"
       cy="753.9336"
       fx="555.57141"
       fy="753.9336"
       r="8"
       gradientTransform="translate(0,-1.7975178e-4)"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       id="linearGradient4469">
      <stop
         style="stop-color:#b3b3b3;stop-opacity:1;"
         offset="0"
         id="stop4471" />
      <stop
         style="stop-color:#232629;stop-opacity:1"
         offset="1"
         id="stop4473" />
    </linearGradient>
  </defs>
  <g
     transform="translate(-544.57141,-742.93359)">
    <path
       style="opacity:1;fill:url(#radialGradient4475);fill-opacity:1;stroke:none;stroke-linecap:round"
       d="m 547.57141,745.93359 16,0 0,16.00001 -16,0 z"
       id="rect4467" />
  </g>
</svg>
