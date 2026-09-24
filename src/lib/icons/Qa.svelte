<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 32 32"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 3 6 L 3 20 L 11 20 L 11 26 L 15 30 L 15 26 L 29 26 L 29 12 L 21 12 L 21 6 L 3 6 z M 4 7 L 20 7 L 20 19 L 4 19 L 4 7 z M 21 13 L 28 13 L 28 25 L 12 25 L 12 20 L 17 20 L 17 24 L 21 20 L 21 13 z "
     id="path88" 
     class="ColorScheme-Text"
     />
</svg>
