<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16 16"
	width={size}
	height={size}
	fill={color}
	class="plasma-icon {className}"
	style="color: {color}; {style}"
	{...restProps}
>
	<path style="fill:currentColor;fill-opacity:1;stroke:none;fill-rule:evenodd"
     d="m8.02 14c6.238 0 7.731-12 3.852-12-3.928 0-10.11 9.602-3.83 9.602 6.196 0 .054-9.602-3.859-9.602-3.913 0-2.511 12 3.837 12"
     class="ColorScheme-Text"
     />
</svg>
