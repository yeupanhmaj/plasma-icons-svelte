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
     d="m 2,2 0,12 1,0 6,0 1,0 3,0 1,0 0,-12 z M 3,3 5,3 5,5 3,5 Z M 6,3 9,3 9,5 6,5 Z m 4,0 1,0 1,0 1,0 0,2 -1,0 -1,0 -1,0 z M 3,6 5,6 5,9 3,9 Z m 3,0 3,0 1,0 3,0 0,3 0,1 0,3 -3,0 -1,0 -3,0 0,-3 0,-1 z m -3,4 2,0 0,3 -2,0 z"
     class="ColorScheme-Text"
     />
</svg>
