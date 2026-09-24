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
	<path id="path4" class="ColorScheme-Text" d="m9 2v4h4v-4zm1 1h2v2h-2zm-7 7v1h1v-1zm3 0v1h1v-1zm3 0v1h1v-1zm3 0v1h1v-1zm3 0v1h1v-1zm3 0v1h1v-1zm-15 5v4h4v-4zm12 0v4h4v-4zm-11 1h2v2h-2zm12 0h2v2h-2z" fill="currentColor"/>
    <path id="path6" class="ColorScheme-Accent" d="m9 7 2 3 2-3zm-4 4-2 3h4zm12 0-2 3h4z" fill="currentColor"/>
</svg>
