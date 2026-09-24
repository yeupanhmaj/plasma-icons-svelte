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
        class="ColorScheme-NegativeText"
        d="M7 3v4H3v1h4v6H3v1h4v4h1v-4h6v4h1v-4h4v-1h-4V8h4V7h-4V3h-1v4H8V3H7m1 5h6v6H8V8"/>
</svg>
