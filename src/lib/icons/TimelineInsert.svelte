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
     d="M2 11H6V15H2z"
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 7,5 10,8 13,5 7,5 Z"
     class="ColorScheme-Accent"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 16,11 0,-2 4,4 -4,4 0,-2 -2,0 0,-4 z"
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 7,9 6,0 0,5 -6,0 z"
     class="ColorScheme-Accent"
     />
</svg>
