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
	<path d="M6 2v5H4v1h2v2H4v1h2v3h1v-3h2v-1H7V8h2a3 3 0 0 0 0-6H7zm1 1h2a2 2 0 1 1 0 4H7z" class="ColorScheme-Text" fill="currentColor"/>
</svg>
