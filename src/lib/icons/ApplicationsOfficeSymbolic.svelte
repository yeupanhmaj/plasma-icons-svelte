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
	<path d="M16 8h2v10h-2v1h3V7l-4-4h-2.593l1 1H14v.593l2 2z" style="fill:currentColor" class="ColorScheme-Text"/>
  <path fill-rule="evenodd" d="M6 16V9h6v5l-2 2zm5-6H7v5h2v-2h2z" clip-rule="evenodd" style="fill:currentColor" class="ColorScheme-Text"/>
  <path fill-rule="evenodd" d="M3 19V3h8l4 4v12zm7-15H4v14h10V8h-4z" clip-rule="evenodd" style="fill:currentColor" class="ColorScheme-Text"/>
</svg>
