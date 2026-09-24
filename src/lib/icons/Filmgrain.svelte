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
    d="m547.57141 746.43359v15h1 2 10 2 1v-15h-1-2-10-2-1m1 1h1v1h-1v-1m2 0h10v5.5h-10v-5.5m11 0h1v1h-1v-1m-13 3h1v1h-1v-1m13 0h1v1h-1v-1m-13 3h1v1h-1v-1m13 0h1v1h-1v-1m-11 1.5h10v5.5h-10v-5.5m-2 1.5h1v1h-1v-1m13 0h1v1h-1v-1m-13 3h1v1h-1v-1m13 0h1v1h-1v-1" transform="translate(-544.57141-742.93359)"
    class="ColorScheme-Text"
    />
</svg>
