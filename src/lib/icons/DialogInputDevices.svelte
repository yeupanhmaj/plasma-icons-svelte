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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="M3 2v4h11v5h-2V7h-1v4H7v1h4v1h1v-1h3V2zm1 1h1v1h2V3h4v1h2V3h1v2H4z"/>
        <path d="M3.5 7A2.5 2.5 0 0 0 1 9.5v1.973a2.5 2.5 0 0 0 0 .027A2.5 2.5 0 0 0 3.5 14 2.5 2.5 0 0 0 6 11.5V9.527A2.5 2.5 0 0 0 6 9.5 2.5 2.5 0 0 0 3.5 7zm0 1A1.5 1.5 0 0 1 5 9.5v1.955a1.5 1.5 0 0 1 0 .045A1.5 1.5 0 0 1 3.5 13 1.5 1.5 0 0 1 2 11.5V9.545A1.5 1.5 0 0 1 2 9.5 1.5 1.5 0 0 1 3.5 8zM3 9v1h1V9z"/>
    </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="M5 3v5h15v8h-2v-5h-1v5H9v1h8v1h1v-1h3V3zm1 1h14v3H6V5zm1 1v1h2V5zm10 0v1h2V5z"/>
        <path d="M4.5 9A3.5 3.5 0 0 0 1 12.5v3a3.5 3.5 0 1 0 7 0v-3A3.5 3.5 0 0 0 4.5 9zm0 1A2.5 2.5 0 0 1 7 12.5v3a2.5 2.5 0 1 1-5 0v-3A2.5 2.5 0 0 1 4.5 10z"/>
        <path d="M4 11h1v2H4z"/>
    </g>
		</svg>
	{/if}
