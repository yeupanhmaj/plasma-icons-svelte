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
    d="m11 3l-7 6h4.527344l2.472656 10 2.472656-10h4.527344l-7-6"
	class="ColorScheme-Text"
    />
</svg>
