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
			<rect fill="#9b59b6" height="8" rx="1" width="8"/>
    <path d="M4 1a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1H3v2h1V5a2 2 0 0 0 2-2 2 2 0 0 0-2-2zM3 7h1v1H3z" fill="#fff"/>
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
			<rect fill="#9b59b6" height="16" rx="2" width="16"/>
    <path d="M2 0C.892 0 0 .892 0 2v12c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
    <path d="M8 2a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2H7v3h2V9.867A4 4 0 0 0 12 6a4 4 0 0 0-4-4zM7 12v2h2v-2z" fill="#fff"/>
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
			<rect fill="#9b59b6" height="22" rx="2" width="22"/>
    <path d="M2 0C.892 0 0 .892 0 2v18c0 1.108.892 2 2 2h18c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h18c.554 0 1 .446 1 1v18c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
    <path d="M11 3a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3h-1v4h2v-2.102A5 5 0 0 0 16 8a5 5 0 0 0-5-5zm-1 14v2h2v-2z" fill="#fff"/>
		</svg>
	{/if}
