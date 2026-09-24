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
     d="m 4,3 v 2 h 8 V 3 Z m 0,4 v 2 h 8 V 7 Z m 0,4 v 2 h 8 v -2 z"
     class="ColorScheme-Text"
     />
</svg>
