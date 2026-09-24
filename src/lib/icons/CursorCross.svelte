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
     d="M 14 4 L 14 14 L 4 14 L 4 18 L 14 18 L 14 28 L 18 28 L 18 18 L 28 18 L 28 14 L 18 14 L 18 4 L 14 4 z "
     class="ColorScheme-Text"
     />
</svg>
