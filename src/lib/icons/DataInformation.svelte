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
			<rect class="ColorScheme-Accent" x="2" y="2" width="12" height="12" rx="2" fill="currentColor"/>
    <path d="m7 4v2h2v-2zm0 3v5h2v-5z" fill="#fff"/>
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
			<rect class="ColorScheme-Accent" x="3" y="3" width="16" height="16" rx="2" fill="currentColor"/>
    <path d="m10 6v2h2v-2zm0 4v6h2v-6z" fill="#fff"/>
		</svg>
	{/if}
