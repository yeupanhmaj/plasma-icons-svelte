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
	<path fill-rule="evenodd" d="M4 11a7 7 0 1 0 14 0 7 7 0 0 0-14 0m7-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clip-rule="evenodd" style="fill:currentColor" class="ColorScheme-Text"/>
  <path d="M8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" style="fill:currentColor" class="ColorScheme-Text"/>
</svg>
