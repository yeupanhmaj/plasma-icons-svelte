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
			<g class="ColorScheme-Text" fill="currentColor" fill-rule="evenodd">
        <path d="m3 1h2v2h-2z"/>
        <path d="m7 1h2v2h-2z"/>
        <path d="m11 1h2v2h-2z"/>
        <path d="m3 5h2v2h-2z"/>
        <path d="m7 5h2v2h-2z"/>
        <path d="m11 5h2v2h-2z"/>
        <path d="m3 9h2v2h-2z"/>
        <path d="m7 9h2v2h-2z"/>
        <path d="m11 9h2v2h-2z"/>
        <path d="m7 13h2v2h-2z"/>
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
			<g class="ColorScheme-Text" fill="currentColor" fill-rule="evenodd">
        <path d="m9 18h4v4h-4z"/>
        <path d="m9 12h4v4h-4z"/>
        <path d="m9 6h4v4h-4z"/>
        <path d="m9 0h4v4h-4z"/>
        <path d="m15 12h4v4h-4z"/>
        <path d="m15 6h4v4h-4z"/>
        <path d="m15 0h4v4h-4z"/>
        <path d="m3 12h4v4h-4z"/>
        <path d="m3 6h4v4h-4z"/>
        <path d="m3 0h4v4h-4z"/>
    </g>
		</svg>
	{/if}
