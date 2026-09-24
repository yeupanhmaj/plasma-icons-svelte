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
    d="M 5 3 L 5 4 L 5 5 L 3 5 L 3 8 L 5 8 L 5 14 L 3 14 L 3 17 L 5 17 L 5 19 L 6 19 L 19 19 L 19 18 L 19 4 L 19 3 L 5 3 z M 6 4 L 18 4 L 18 6 L 6 6 L 6 5 L 6 4 z M 6 7 L 18 7 L 18 11 L 18 18 L 6 18 L 6 7 z "
	class="ColorScheme-Text"
    />
</svg>
