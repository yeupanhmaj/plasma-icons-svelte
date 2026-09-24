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
     d="M 4 3 L 4 17 L 3 17 L 3 18 L 4 18 L 4 19 L 5 19 L 5 18 L 19 18 L 19 17 L 17 17 L 17 15 L 16 15 L 16 17 L 13 17 L 13 15 L 12 15 L 12 17 L 9 17 L 9 15 L 8 15 L 8 17 L 5 17 L 5 3 L 4 3 z "
     class="ColorScheme-Text"
     />
</svg>
