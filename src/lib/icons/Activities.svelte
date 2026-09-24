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
			<path d="m4 2v4h8v-4zm3 1h2v2h-2zm-5 4v2h12v-2zm2 3v4h8v-4zm4 1c0.5522847 0 1 0.447715 1 1s-0.4477153 1-1 1-1-0.447715-1-1 0.4477153-1 1-1z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m6 3v5h11v-5zm4 1h3v3h-3zm-7 6v2h17v-2zm3 4v5h11v-5zm5.5 1c0.828427 0 1.5 0.671573 1.5 1.5s-0.671573 1.5-1.5 1.5-1.5-0.671573-1.5-1.5 0.671573-1.5 1.5-1.5z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
