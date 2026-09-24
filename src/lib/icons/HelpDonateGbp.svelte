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
	<path d="M9 2a3 3 0 0 0-3 3v2H4v1h2v3a2 2 0 0 1-2 2v1h7v-1H6.23A3 3 0 0 0 7 11V8h2V7H7V5a2 2 0 0 1 2-2 2 1 0 0 1 1.6.4l.69-.69A3 2 0 0 0 9 2z" class="ColorScheme-Text" fill="currentColor"/>
</svg>
