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
	<path d="M12.615 13h-3.23L6.9 17h8.202z" style="fill:currentColor" class="ColorScheme-Text"/>
  <path fill-rule="evenodd" d="M8 4V3h6v1h-1v5.85l5 8V19H4v-1.15l5-8V4zm4 0h-2v6.15L5.09 18h11.82L12 10.15z" clip-rule="evenodd" style="fill:currentColor" class="ColorScheme-Text"/>
</svg>
