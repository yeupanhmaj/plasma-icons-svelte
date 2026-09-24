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
     d="M 11 3 A 8 8.0000086 0 0 0 3 11 A 8 8.0000086 0 0 0 11 19 L 15 19 L 15 16 L 11 16 A 5 5 0 0 1 6 11 A 5 5 0 0 1 11 6 L 15 6 L 15 3 L 11 3 z M 16 3 L 16 6 L 19 6 L 19 3 L 16 3 z M 16 16 L 16 19 L 19 19 L 19 16 L 16 16 z "
     class="ColorScheme-Text"
     />
</svg>
