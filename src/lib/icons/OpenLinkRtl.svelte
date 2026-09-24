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
			<path class="ColorScheme-Text" d="m3.0000067 10.000326v2.999589l10.000327 1.64e-4v-9.9999172l-3-1.641e-4v-1.0000002l4 1.643e-4v11.999917l-12.000327-1.63e-4v-3.99959m5.0000002-7.0003287-3.2832002 0.00969 4.8079811 4.808206-0.7071071 0.7071071-4.807981-4.8082062-0.0097 3.2832027-0.999999 7e-7 7e-6 -5h4.9999998" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m4.000007 11v6.999918l14.000327 1.64e-4v-14.000246l-7-1.643e-4v-1l8 1.643e-4v16.000246l-16.000327-1.64e-4v-7.999918m5-7.0003284-3.2832 0.00969 8.343861 8.3440854-0.707108 0.707107-8.34386-8.3440856-0.0097 3.2832031h-1l7e-6 -5 5-1e-7" fill="currentColor"/>
		</svg>
	{/if}
