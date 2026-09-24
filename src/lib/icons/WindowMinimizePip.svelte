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
			<path class="ColorScheme-Text" d="m2 2v12h6v-1h-5v-9h10v4h1v-6zm7 7v6h6v-6zm1 2h4v3h-4z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m7.9999465 5.0002137-0.999893 2e-7v1.3423975l1e-6 0.9501754-2.8926898-2.882958-0.707107 0.7071067 2.8887423 2.8831185-0.9501364-7e-7 -1.3390969 7e-7 4.666e-4 0.9998928h1.3386313l2.6606688 5.32e-5 4.131e-4 -2.6573881z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m9.93907 8.0718026-0.999892 2e-7v3.2427472l-3.0355875-3.035587-0.707107 0.7071068 3.0355875 3.0355872h-3.2427475v0.999893h4.9497465v-0.292787z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m3 3v16h8v-1h-7v-11h14v4h1v-8h-1zm9 9v4-1 5h8v-8h-3zm1 3h6v4h-6v-5z" fill="currentColor"/>
		</svg>
	{/if}
