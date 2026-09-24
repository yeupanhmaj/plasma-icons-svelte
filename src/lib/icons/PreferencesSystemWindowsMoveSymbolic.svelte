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
	<path d="m3 3v16h16v-16zm1 3h14v12h-14zm7 1-1.5 2.5 0.5 0.5h2l0.5-0.5zm-2.5 3.5-2.5 1.5 2.5 1.5 0.5-0.5v-2zm5 0-0.5 0.5v2l0.5 0.5 2.5-1.5zm-2.5 0.5c-0.55228 0-1 0.44772-1 1s0.44772 1 1 1 1-0.44772 1-1-0.44772-1-1-1zm-1 3-0.5 0.5 1.5 2.5 1.5-2.5-0.5-0.5z" style="fill:currentColor" class="ColorScheme-Text"/>
</svg>
