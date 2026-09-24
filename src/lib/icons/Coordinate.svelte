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
	 d="M 7 3 L 7 14 L 7 14.208984 L 1.921875 19.289062 C 1.921875 19.289062 2.6015381 19.99939 2.6113281 20 C 2.6113281 20 6.6314125 15.991631 7.6328125 14.988281 L 19 15 L 19 14 L 8 14 L 8 3 L 7 3 z "
	 class="ColorScheme-Text"
     />
</svg>
