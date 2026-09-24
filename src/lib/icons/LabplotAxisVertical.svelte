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
     d="M 4 3 L 4 17 L 3 17 L 3 18 L 4 18 L 4 19 L 5 19 L 5 18 L 19 18 L 19 17 L 5 17 L 5 13.333984 L 7 13.333984 L 7 12.333984 L 5 12.333984 L 5 4 L 7 4 L 7 3 L 5 3 L 4 3 z M 5.0078125 7.6660156 L 5.0078125 8.6660156 L 7.0078125 8.6660156 L 7.0078125 7.6660156 L 5.0078125 7.6660156 z "
     class="ColorScheme-Text"
     />
</svg>
