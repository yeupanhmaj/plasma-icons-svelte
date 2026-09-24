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
			<path fill="currentColor" class="ColorScheme-Text" d="M5 3v2H2v2h12V5h-3V3zm1 1h4v1H6zM2 8v5h12V8h-4v2H6V8zm5 0v1h2V8z"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path fill="currentColor" class="ColorScheme-Text" d="M7 4v2H3v4h16V6h-4V4zm1 1h6v1H8zm-5 6v7h16v-7h-5v2H8v-2zm6 0v1h4v-1z"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path fill="currentColor" class="ColorScheme-Text" d="M10 5v3H2v6h28V8h-8V5zm1 1h10v2H11zm-9 9v12h28V15h-9v3H11v-3zm10 0v2h8v-2z"/>
		</svg>
	{/if}
