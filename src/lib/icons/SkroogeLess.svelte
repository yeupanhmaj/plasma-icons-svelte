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
    d="M 3 3 L 12.056641 15.943359 L 9 19 L 19 19 L 19 9 L 15.943359 12.056641 L 3 3 z "
	class="ColorScheme-Text"
    />
</svg>
