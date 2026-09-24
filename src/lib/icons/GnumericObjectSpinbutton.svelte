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
	<path id="path4" d="m6 11v8h10v-8zm1.78125 2 3.21875 3.5 3.1875-3.5 0.8125 0.625-3.625 3.9375-0.375 0.4375-0.375-0.4375-3.625-3.9375z" fill="#b3b3b3"/>
    <path id="path6" class="ColorScheme-Text" d="m6 3v8h10v-8zm5 1 0.375 0.4375 3.625 3.9375-0.8125 0.625-3.1875-3.5-3.21875 3.5-0.78125-0.625 3.625-3.9375z" fill="currentColor"/>
</svg>
