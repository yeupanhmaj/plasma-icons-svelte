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
        <path d="M3.74 2l-.334.943L10.26 5H1v9h14V5h-.99l-1.865-.479zM2 6h12v7H2z"/>
        <path d="M3 7v1h4V7zm7.5 0A2.5 2.5 0 0 0 8 9.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 13 9.5 2.5 2.5 0 0 0 10.5 7zm0 1A1.5 1.5 0 0 1 12 9.5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 9 9.5 1.5 1.5 0 0 1 10.5 8zM3 9v1h4V9zm0 2v1h4v-1z"/>
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
        <path d="M3.858 3L18 8l-.333.943-14.142-5z"/>
        <path d="M3 8v11h16V8zm1 1h14v9H4z"/>
        <path d="M4 8c0 1.662 1.338 3 3 3h8c1.662 0 3-1.338 3-3zm2 1h5v1H6zm6 0h4v1h-4zm-7 3h6v1H5zm0 2h6v1H5zm0 2h6v1H5zm9.5-4a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"/>
    </g>
		</svg>
	{/if}
