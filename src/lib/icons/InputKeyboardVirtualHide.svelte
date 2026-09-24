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
	<path class="ColorScheme-Text" d="m2 2v11h18v-11h-18zm1 1h7 1 8v1h-16v-1zm0 2h16v7h-4-8-4v-7zm1 1v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2zm-12 2v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2zm-12 2v1h2v-1h-2zm3 0v1h8v-1h-8zm9 0v1h2v-1h-2zm-9.2929688 4.292969-0.7070312 0.707031 5 5 5-5-0.707031-0.707031-4.292969 4.292969-4.2929688-4.292969z" fill="currentColor"/>
</svg>
