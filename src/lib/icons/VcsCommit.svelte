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
			<g class="ColorScheme-Text" fill="currentColor" stroke-linecap="square">
        <path d="m7 3h1v4h-1z"/>
        <path d="m7 10h1v4h-1z"/>
        <path d="m7.5 6a2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 -2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5 1.5 1.5 0 0 1 -1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"/>
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
        <path d="m10 4h1v5h-1z"/>
        <path d="m10 14h1v5h-1z"/>
        <path d="m10.5 8a3.5 3.5 0 0 0 -3.5 3.5 3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0 -3.5-3.5zm0 1a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5 2.5 2.5 0 0 1 -2.5-2.5 2.5 2.5 0 0 1 2.5-2.5z"/>
    </g>
		</svg>
	{/if}
