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
	<path id="path4" class="ColorScheme-Text" d="m3 3v16h16v-16h-7zm1 1h8v14h-8zm11.5 0 0.375 0.375 2.125 1.9375-0.71875 0.6875-1.78125-1.625-1.78125 1.625-0.71875-0.6875 2.125-1.9375zm-10.5 2v1h5v-1zm0 3v1h5v-1zm0 3v1h5v-1zm0 3v1h5v-1zm8.71875 0 1.78125 1.625 1.78125-1.625 0.71875 0.6875-2.125 1.9375-0.375 0.375-0.375-0.375-2.125-1.9375z" fill="currentColor"/>
</svg>
