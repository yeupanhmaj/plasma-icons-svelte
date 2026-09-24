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
			<path class="ColorScheme-Text" d="m4 2v3h0.6644239l-1.4247267 6h-1.2396972v3h3v-1h2v1h2.9999996v-3h-2.9999996v1h-2v-1h-0.7603028l1.4247267-6h1.1513378l4.1842383 2.7588842v1.6515445h3v-3h-3v0.220339l-4-2.6307677v-2zm1 1h1v1h-1zm7 4.4104287h1v1h-1zm-9 4.5895713h1v1h-1zm5 0h1v1h-1z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m6 3v3h0.6644239l-2.4247267 10h-1.2396972v3h3v-1h4v1h3v-3h-3v1h-4v-1h-0.7603028l2.4247267-10h1.1513378l7.1842383 4.348456v1.651545h3v-3.000001h-3v0.220339l-7-4.220339v-2zm1 1h1v1h-1zm10 6.000001h1v1h-1zm-13 6.999999h1v1h-1zm7 0h1v1h-1z" fill="currentColor"/>
		</svg>
	{/if}
