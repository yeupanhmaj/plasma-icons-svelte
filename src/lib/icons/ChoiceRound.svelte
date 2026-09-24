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
    d="M 11 3 A 8 8 0 0 0 3 11 A 8 8 0 0 0 11 19 A 8 8 0 0 0 19 11 A 8 8 0 0 0 11 3 z M 11 4 A 7 7 0 0 1 18 11 A 7 7 0 0 1 11 18 A 7 7 0 0 1 4 11 A 7 7 0 0 1 11 4 z "
    class="ColorScheme-Text"
    />
</svg>
