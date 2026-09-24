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
     d="M 3 3 L 3 19 L 4 19 L 4 12 L 9 11 L 10 10.800781 L 10 12.800781 L 19 11 L 17 10 L 19 9 L 10 6.5996094 L 10 4.5996094 L 9 4.3339844 L 4 3 L 3 3 z "
     class="ColorScheme-Text"
     />
</svg>
