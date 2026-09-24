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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m5 1.9746094v0.9746094l1 0.0253906v5.0253906 5.025391l-1-0.025391v0.974609l1.9746094 0.025391v-12l-1.9746094-0.0253906zm1 6.0253906-3-3v2h-1v2h1v2l3-3zm5-6.0253906-1.9746094 0.0253906v12l1.9746094-0.025391v-0.974609l-1 0.025391v-5.025391-5.0253906l1-0.0253906v-0.9746094zm-1 6.0253906 3 3v-2h1v-2h-1v-2l-3 3z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m7 3v1h2v7 7h-2v1h3v-16h-3zm2 8-4-4v3h-2v2h2v3l4-4zm3-8v16h3v-1h-2v-7-7h2v-1h-3zm1 8 4 4v-3h2v-2h-2v-3l-4 4z"/>
		</svg>
	{/if}
