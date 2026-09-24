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
     d="M3 11H19V15H3z"
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M8 8h6v5H8z"
     class="ColorScheme-Accent"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 8,4 3.000001,3 3,-3 L 8,4 Z"
     class="ColorScheme-Accent"
     />
</svg>
