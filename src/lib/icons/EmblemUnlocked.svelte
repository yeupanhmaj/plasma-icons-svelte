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

	{#if numericSize <= 12}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8 8"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path class="ColorScheme-NeutralText" d="M1 0C.446 0 0 .446 0 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1V1c0-.554-.446-1-1-1z" fill="currentColor"/>
    <path d="m4 1a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1 1 1 0 0 1 1 1v1h-4v3h6v-3h-1v-1a2 2 0 0 0-2-2zm-2 4h4v1h-4v-1z" fill="#fff"/>
		</svg>
	{:else if numericSize <= 19}
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
			<rect class="ColorScheme-NeutralText" width="16" height="16" rx="2" fill="currentColor"/>
    <path class="ColorScheme-Text" d="M2 0C.892 0 0 .892 0 2v12c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z" fill="currentColor" fill-opacity=".6"/>
    <path d="m8 2a3 3 0 0 0-3 3v1h1v-1a2 2 0 0 1 4 0v3h-7v6h10v-6h-2v-3a3 3 0 0 0-3-3zm-4 7h8v4h-8v-4z" fill="#fff"/>
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
			<rect class="ColorScheme-NeutralText" width="22" height="22" rx="2" fill="currentColor"/>
    <path class="ColorScheme-Text" d="M2 0C.892 0 0 .892 0 2v18c0 1.108.892 2 2 2h18c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h18c.554 0 1 .446 1 1v18c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z" fill="currentColor" fill-opacity=".6"/>
    <path d="m11 3c-2.216 0-4 1.784-4 4v1h1v-0.5c0-1.939 1.338-3.5 3-3.5s3 1.561 3 3.5v3.5h-9v8h12v-8h-2v-4c0-2.216-1.784-4-4-4zm-5 9h10v6h-10v-6z" fill="#fff"/>
		</svg>
	{/if}
