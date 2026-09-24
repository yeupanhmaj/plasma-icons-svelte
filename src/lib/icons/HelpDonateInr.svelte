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
	<path d="M4 2v1h2.5a2.5 2.5 0 0 1 2.445 2H4v1h4.95A2.5 2.5 0 0 1 6.5 8H4v.707L4.293 9l5 5H10v-.707L5.707 9H6.5a3.5 3.5 0 0 0 3.46-3H12V5H9.959a3.5 3.5 0 0 0-1.01-2H12V2H6.5z" class="ColorScheme-Text" fill="currentColor"/>
</svg>
