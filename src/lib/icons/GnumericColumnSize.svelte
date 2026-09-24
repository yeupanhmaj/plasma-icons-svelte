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
	<path id="path4" class="ColorScheme-Text" d="m9 3v7h-2v-2l-4 3 4 3v-2h2v7h4v-7h2v2l4-3-4-3v2h-2v-7h-3zm1 1h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z" fill="currentColor"/>
</svg>
