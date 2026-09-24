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
     d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 5 4 L 5 18 L 4 18 L 4 4 z M 7 4 L 9 4 L 9 18 L 7 18 L 7 4 z M 10 4 L 11 4 L 11 18 L 10 18 L 10 4 z M 13 4 L 15 4 L 15 18 L 13 18 L 13 4 z M 16 4 L 18 4 L 18 18 L 16 18 L 16 4 z "
     class="ColorScheme-Text"
     />
</svg>
