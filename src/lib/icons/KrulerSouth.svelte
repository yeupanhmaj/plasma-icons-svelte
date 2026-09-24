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
	<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 2,14 0,-1 0,-4 0,-1 12,0 0,1 0,4 0,1 -12,0 z m 1,-1 1,0 0,-2 1,0 0,2 2,0 0,-2 1,0 0,2 2,0 0,-2 1,0 0,2 2,0 0,-4 -10,0 0,4 z M 5,7 2,5 5,3 5,7 Z m 6,0 0,-4 3,2 -3,2 z"
     class="ColorScheme-Text"
     />
</svg>
