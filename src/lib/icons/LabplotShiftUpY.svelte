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
	d="m7 9l-4 2 4 2v-4m8 0v4l4-2-4-2m-4 1c-.554 0-1 .446-1 1 0 .554.446 1 1 1 .554 0 1-.446 1-1 0-.554-.446-1-1-1m-2 5l2 4 2-4h-4"
	class="ColorScheme-Text"
    />
</svg>
