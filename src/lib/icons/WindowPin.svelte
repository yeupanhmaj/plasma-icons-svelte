<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 22
	);
</script>

	{#if numericSize <= 19}
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
			<path d="M11 2L5.854 7.146l-1.5-1.5-.708.708L6.293 9l-3.647 3.646.708.708L7 9.707l2.646 2.647.708-.708-1.5-1.5L14 5z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{:else}
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
			<path d="M15 3l-7.146 7.146L5.707 8 5 8.707 8.793 12.5 4 17.293l.707.707L9.5 13.207 13.293 17l.707-.707-2.146-2.147L19 7z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
