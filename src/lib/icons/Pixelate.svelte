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
			<path class="ColorScheme-Text" d="m2.9999999 5.0000002v1h-1v-1zm0 4.9999998v1h-1v-1zm0-3v2h-1v-2zm11-2v1h-1v-1zm0 5v1h-1v-1zm0-3.0000002v2h-1v-2zm-9.0000002 6.0000002h1v1h-1zm5 0h1.0000002v1h-1.0000002zm-3 0h2v1h-2zm-1.9999998-11h1v1h-1zm5 0h1v1h-1zm-3 0h2v1h-2zm3 8h2v2h-2zm-1e-7 -3h2.0000001v2h-2.0000001zm1e-7 -3h2v2h-2zm-3 6h2v2h-2zm-1e-7 -3h2.0000001v2h-2.0000001zm1e-7 -3h2v2h-2zm-2.9999999 5.9999998h2v2.0000002h-2zm-1e-7 -3h2.0000001v2h-2.0000001zm1e-7 -3h2v2h-2z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m14 14h3v3h-3zm-9 0h3v3h-3zm4 0h4v3h-4zm5-5.0000003h3v4.0000003h-3zm-9 0h3v4.0000003h-3zm4 0h4v4.0000003h-4zm5-3.9999997h3v3h-3zm-9 0h3v3h-3zm4 0h4v3h-4zm-5 9v1h-1v-1zm0-7v1h-1v-1zm0 2v4h-1v-4zm15 5v1h-1v-1zm0-7v1h-1v-1zm0 2v4h-1v-4zm-12 9h1v1h-1zm7 0h1v1h-1zm-5 0h4v1h-4zm-2-15h1v1h-1zm7 0h1v1h-1zm-5 0h4v1h-4z" fill="currentColor"/>
		</svg>
	{/if}
