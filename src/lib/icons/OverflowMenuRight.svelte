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
     d="m 10,5 0,2 2,0 0,-2 z m 4,5 0,2 2,0 0,-2 z m -4,0 0,2 2,0 0,-2 z m 0,5 0,2 2,0 0,-2 z"
	 class="ColorScheme-Text"
     />
</svg>
