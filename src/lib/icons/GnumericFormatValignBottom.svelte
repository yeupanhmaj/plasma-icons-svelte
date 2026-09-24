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
     d="M 15 4 L 15 19 L 11 19 L 16 25 L 21 19 L 17 19 L 17 4 L 15 4 z M 4 27 L 4 28 L 28 28 L 28 27 L 4 27 z "
     class="ColorScheme-Text"
     />
</svg>
