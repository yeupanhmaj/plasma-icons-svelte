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
	<path id="path4" d="m17.96875 7.03125c0.012841 0.0721104 0.03125 0.1428388 0.03125 0.21875v7.5c0 0.692524-0.557476 1.25-1.25 1.25h-12.5c-0.0759112 0-0.1466396-0.018409-0.21875-0.03125 0.1043073 0.585739 0.6021377 1.03125 1.21875 1.03125h12.5c0.692524 0 1.25-0.557476 1.25-1.25v-7.5c0-0.6166123-0.445511-1.1144427-1.03125-1.21875z" fill="#b3b3b3"/>
    <path id="path6" class="ColorScheme-Text" d="m4.25 6c-0.6925235 0-1.25 0.5574765-1.25 1.25v7.5c0 0.692524 0.5574765 1.25 1.25 1.25h12.5c0.692524 0 1.25-0.557476 1.25-1.25v-7.5c0-0.6925235-0.557476-1.25-1.25-1.25zm9.75 2h1v4h-6v2l-3-2.5 3-2.5v2h5z" fill="currentColor"/>
</svg>
