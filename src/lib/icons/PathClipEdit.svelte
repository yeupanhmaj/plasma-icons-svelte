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
     d="M 3 4 L 3 18 L 19 18 L 19 4 L 3 4 z M 10.941406 5.078125 A 6 6 0 0 1 17 11 L 17 11.078125 A 6 6 0 0 1 11.019531 17.078125 A 6 6 0 0 1 5 11.117188 A 6 6 0 0 1 10.941406 5.078125 z "
     class="ColorScheme-Text"
     />
</svg>
