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
	<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" height="16" rx="2" width="16"/>
    <path d="m2 0c-1.108 0-2 .892-2 2v12c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2v-12c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1h-12c-.554 0-1-.446-1-1v-12c0-.554.446-1 1-1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
    <path d="m8 2a6 6 0 0 0 -6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0 -6-6zm0 2a4 4 0 0 1 4 4 4 4 0 0 1 -4 4 4 4 0 0 1 -4-4 4 4 0 0 1 3-3.8691406v4.8691406h4v-1h-3z" fill="#fff"/>
</svg>
