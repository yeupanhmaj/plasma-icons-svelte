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
			<rect x="7" y="3" width="3" height="5" class="ColorScheme-Accent" fill="currentColor" fill-rule="evenodd"/>
    <path d="M8 2a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm0 1h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z" fill="currentColor" class="ColorScheme-Text"/>
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
			<rect x="9" y="4" width="4" height="7" class="ColorScheme-Accent" fill="currentColor" fill-rule="evenodd"/>
    <path d="M10 3a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm0 1h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" fill="currentColor" class="ColorScheme-Text"/>
		</svg>
	{/if}
