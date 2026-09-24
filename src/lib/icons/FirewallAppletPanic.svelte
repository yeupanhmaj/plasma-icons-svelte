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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M2 2v3h6V2zm7 0v3h5V2zM2 6v3h2V6zm3 0v3h1V6zm-3 4v3h4v-3z"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" d="M8 6c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1V7c0-.554-.446-1-1-1z"/>
    <path d="M11 7a2 2 0 0 0-2 2l.002 1H8v3h6v-3h-1V9a2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1v1h-2V9a1 1 0 0 1 1-1z" fill="#fff"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M3 3v3h8V3zm9 0v3h7V3zM3 7v3h3V7zm4 0v3h8V7zm9 0v3h3V7zM3 11v3h8v-3zm0 4v3h3v-3zm4 0v3h4v-3z"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" d="M13 11c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h6c.554 0 1-.446 1-1v-6c0-.554-.446-1-1-1z"/>
    <path d="M16 12a2 2 0 0 0-2 2l.002 1H13v3h6v-3h-1v-1a2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 1-1z" fill="#fff"/>
		</svg>
	{/if}
