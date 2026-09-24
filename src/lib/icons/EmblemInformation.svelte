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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Accent" height="8" rx="1" width="8"/>
    <path d="M3 1h2v2H3zm0 3v4h2V4z" fill="#fff"/>
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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Accent" height="16" rx="2" width="16"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M2 0C.892 0 0 .892 0 2v12c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z"/>
    <path d="M7 2v2h2V2zm0 3v9h2V5z" fill="#fff"/>
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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Accent" height="22" rx="2" width="22"/>
    <path d="M10 3v2h2V3zm0 4v12h2V7z" fill="#fff"/>
    <path d="M2 0C.892 0 0 .892 0 2v18c0 1.108.892 2 2 2h18c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h18c.554 0 1 .446 1 1v18c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
