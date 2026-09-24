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
	<path style="fill:currentColor;fill-opacity:1;stroke:none" d="m16 3h-10v1h10zm-5 1-3.0508 3.0508 0.70703 0.70703 2.3438-2.3438 2.3438 2.3438 0.70703-0.70703-1.1758-1.1758zm5 14h-10v1h10zm-5 0 3.0508-3.0508-0.70703-0.70703-2.3438 2.3438-2.3438-2.3438-0.70703 0.70703 1.1758 1.1758zm2-9h-4.0098v4h4.0098v-1zm-1 1v2h-2.0098v-2z" class="ColorScheme-Text"/>
</svg>
