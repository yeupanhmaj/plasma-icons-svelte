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
	<path d="M14 16h4v1h-4zm-1 0H9v1h4z" style="fill:currentColor" class="ColorScheme-Text"/>
  <path fill-rule="evenodd" d="M2 3v16h18V3zm17 1H3v14h16z" clip-rule="evenodd" style="fill:currentColor" class="ColorScheme-Text"/>
</svg>
