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
	<path id="path4" class="ColorScheme-Text" d="m11 3c-2.216 0-4 1.784-4 4v1h1v-0.5c0-1.939 1.338-3.5 3-3.5s3 1.561 3 3.5v3.5h-9v8h12v-8h-2v-4c0-2.216-1.784-4-4-4zm-5 9h10v6h-10z" fill="currentColor"/>
</svg>
