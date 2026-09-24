<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16 16"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<path 
        style="fill:currentColor"
        d="m 6,2 0,1 8.6,0 -6.6,6.6 -2,-2 0,1.4 2,2 2.3,-2.3 4.3,4.3 -8.6,0 0,1 10,0 0,-12 -10,0 z m 9,2 0,8 -4,-4 4,-4 z m -15,1 0,1 5,0 0,-1 -5,0 z m 2,3 0,1 3,0 0,-1 -3,0 z m 1,3 0,1 2,0 0,-1 -2,0 z" 
        class="ColorScheme-Text"
  />
</svg>
