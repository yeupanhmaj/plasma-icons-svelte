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
	<path id="path4" class="ColorScheme-Text" d="m5 3c-1.108 0-2 0.8919999-2 2v12c0 1.108 0.892 2 2 2h12c1.108 0 2-0.892 2-2v-12c0-1.1080001-0.892-2-2-2zm0 1h12c0.554 0 1 0.4459999 1 1v12c0 0.554-0.446 1-1 1h-12c-0.554 0-1-0.446-1-1v-12c0-0.5540001 0.446-1 1-1zm1 1c-0.554 0-1 0.446-1 1v10c0 0.554 0.446 1 1 1h10c0.554 0 1-0.446 1-1v-10c0-0.554-0.446-1-1-1z" fill="currentColor"/>
</svg>
