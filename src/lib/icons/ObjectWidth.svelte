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
	<path style="fill:currentColor;fill-opacity:1;stroke:none" d="m3 6v10h1v-5-5h-1zm1 5 3.0508 3.0508 0.70703-0.70703-2.3438-2.3438 2.3438-2.3438-0.70703-0.70703-3.0508 3.0508zm14-5v5 5h1v-10h-1zm0 5-3.0508-3.0508-0.70703 0.70703 2.3438 2.3438-2.3438 2.3438 0.70703 0.70703 3.0508-3.0508zm-9-2v1 3 0.009766h4v-0.009766-0.99023-2.0098-1h-1-3zm1 1h2v2.0098h-2v-2.0098z" class="ColorScheme-Text"/>
</svg>
