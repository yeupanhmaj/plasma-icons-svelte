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
			<path class="ColorScheme-Text" d="m6 2v4h-4v4h4v4h4v-4h4v-4h-4v-4zm1 1h2v4h4v2h-4v4h-2v-4h-4v-2h4v-1z" fill="currentColor"/>
    <path d="m6.978071 11.184841-0.0190613-2.116597-4.2062093-0.0383672v-2.0941338l2.1031046-0.0191834 2.1031047-0.0191833 0.0190611-2.1165964 0.0190611-2.1165965h2.0110564v4.269374h4.2421607v2.0985059h-4.2421607v4.2693737h-2.0110561z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-.99999-.99999)" d="m10 4v6h-6v4h6v6h4v-6h6v-4h-6v-6h-4m1 1h2v6h6v2h-6v6h-2v-6h-6v-2h6v-6" fill="currentColor"/>
    <path d="m9.9476126 15.290724v-3.284614h-6.6243075v-2.052882h6.6243075v-6.6718721h2.1736014v6.6718721h6.624308v2.052882h-6.624308v6.569228h-2.1736014z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
