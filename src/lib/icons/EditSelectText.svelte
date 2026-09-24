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
			<path d="M11 2v1h1v10h-1v1h3v-1h-1V3h1V2zM6 3L2 13h1.078l1.2-3h4.445l1.199 3H11L7 3zm.5 1.445L8.322 9H4.678z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="M14 3v1h2v14h-2v1h5v-1h-2V4h2V3zM8 5L3 17h1.082l1.666-4h5.504l1.666 4H14L9 5zm.5 1.395L10.836 12H6.164z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
