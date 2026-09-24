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
	<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 4.999999,5.0000004 0,2 2,0 0,-2 -2,0 z m 5.000001,0 0,2 2,0 0,-2 -2,0 z m 5,0 0,2 2,0 0,-2 -2,0 z M 4.999999,10 l 0,2 2,0 0,-2 -2,0 z M 10,10 l 0,2 2,0 0,-2 -2,0 z m 5,0 0,2 2,0 0,-2 -2,0 z m -10.000001,5 0,2 2,0 0,-2 -2,0 z M 10,15 l 0,2 2,0 0,-2 -2,0 z m 5,0 0,2 2,0 0,-2 -2,0 z"
	 class="ColorScheme-Text"
     />
</svg>
