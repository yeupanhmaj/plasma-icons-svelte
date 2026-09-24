<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 32 32"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4 4 L 4 5 L 28 5 L 28 4 L 4 4 z M 16 7 L 11 13 L 15 13 L 15 28 L 17 28 L 17 13 L 21 13 L 16 7 z "
     class="ColorScheme-Text"
     />
</svg>
