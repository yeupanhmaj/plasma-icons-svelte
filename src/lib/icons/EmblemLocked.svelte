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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" d="M1 0C.446 0 0 .446 0 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1V1c0-.554-.446-1-1-1z"/>
    <path d="M4 1a2 2 0 0 0-2 2l.002 1H1v3h6V4H6V3a2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1v1H3V3a1 1 0 0 1 1-1z" fill="#fff"/>
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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" height="16" rx="2" width="16"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M2 0C.892 0 0 .892 0 2v12c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z"/>
    <path d="M8 2a3 3 0 0 0-3 3v3H3v6h10V8h-2V5a3 3 0 0 0-3-3zm0 1a2 2 0 0 1 2 2v3H6V5a2 2 0 0 1 2-2z" fill="#fff"/>
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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" height="22" rx="2" width="22"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M2 0C.892 0 0 .892 0 2v18c0 1.108.892 2 2 2h18c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h18c.554 0 1 .446 1 1v18c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z"/>
    <path d="M11 3C8.784 3 7 4.784 7 7v4H5v8h12v-8h-2V7c0-2.216-1.784-4-4-4m0 1c1.662 0 3 1.561 3 3.5V11H8V7.5C8 5.561 9.338 4 11 4" fill="#fff"/>
		</svg>
	{/if}
