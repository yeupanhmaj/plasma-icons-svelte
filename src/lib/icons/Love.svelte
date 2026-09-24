<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
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
	<path d="m7 3c-2.7614 0-5 2.2386-5 5 0 5 7 9 9 11 2-2 9-6 9-11 0-2.7614-2.2386-5-5-5-1.6396 0-3.0882 0.78077-4 2-0.91181-1.2192-2.3604-2-4-2z" fill="#ea5756"/>
</svg>
