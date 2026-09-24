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
	<path d="M18 11V4H9v7h4l2 2v-2z" style="fill:currentColor" class="ColorScheme-Text"/>
  <path fill-rule="evenodd" d="M10 15H2V2h18v13h-5v5zm-7-1V3h16v11h-5v3.586L10.414 14z" clip-rule="evenodd" style="fill:currentColor" class="ColorScheme-Text"/>
</svg>
