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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-PositiveText" height="8" rx="1" width="8"/>
    <path d="M6 2L3 5 1.5 3.5l-1 1L3 7l4-4z" fill="#fff"/>
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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-PositiveText" height="16" rx="2" width="16"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M2 0C.892 0 0 .892 0 2v12c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z"/>
    <path d="M12.586 3.586L6.5 9.672 3.414 6.586 2 8l4.5 4.5L14 5z" fill="#fff"/>
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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-PositiveText" height="22" rx="2" width="22"/>
    <path d="M17.586 5.414L9 14 4.414 9.414 3 10.828l6 6 10-10z" fill="#fff"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M2 0C.892 0 0 .892 0 2v18c0 1.108.892 2 2 2h18c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h18c.554 0 1 .446 1 1v18c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z"/>
		</svg>
	{/if}
