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
			<path d="M11 2L7.56 5.44l3 3L14 5zM3.94 6.06l-.294.294-.414.414L5.88 9.414l-3.233 3.232.708.708 3.232-3.233 2.646 2.647.414-.414.293-.293z" class="ColorScheme-Text" fill="currentColor"/>
    <path d="M2.707 2L2 2.707 13.293 14l.707-.707z" class="ColorScheme-NegativeText" fill="currentColor"/>
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
			<path d="M15 3l-4.94 4.94 4 4L19 7zM5.707 8L5 8.707 8.793 12.5 4 17.293l.707.707L9.5 13.207 13.293 17l.707-.707z" class="ColorScheme-Text" fill="currentColor"/>
    <path d="M3.707 3L3 3.707 18.293 19l.707-.707z" class="ColorScheme-NegativeText" fill="currentColor"/>
		</svg>
	{/if}
