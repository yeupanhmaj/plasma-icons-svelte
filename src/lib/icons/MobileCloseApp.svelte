<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 12,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 12 12"
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
     id="mobile-close-app"
     transform="matrix(3.7734101,0,0,3.7734101,-17.945193,-1.9902193)"
     fill="currentColor">
    <path
       class="ColorScheme-Text"
       d="M 4.9144465,0.68618254 7.7770266,3.5487626 m -2.8625801,0 2.8625801,-2.86258006"
       stroke="currentColor"
       stroke-linecap="round"
       stroke-width="0.3175"
       id="path3" />
  </g>
</svg>
