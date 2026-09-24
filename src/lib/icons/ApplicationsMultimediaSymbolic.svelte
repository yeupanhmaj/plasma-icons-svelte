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
	<path class="ColorScheme-Text" fill="currentColor" d="M2 3v12h7v3H7v1h8v-1h-2v-3h7V3zm1 1h16v10H3zm6 2.4v5.2L14 9z"/>
</svg>
