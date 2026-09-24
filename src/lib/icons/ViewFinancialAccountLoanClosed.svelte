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
			<path d="m5.1210938 3 1 1h3.8789062v1h-2.8789062l1 1h1.8789062v1.8789062l2 2v-3.8789062h1v4.878906l1 1v-6.878906h-3v-2h-5.8789062zm-3.1210938 2v8h8.878906l-0.9999998-1h-3.8789062v-3.8789062l-2-2v5.8789062h-1v-6h0.8789062l-1-1h-0.8789062z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 2.7070312,2 2,2.7070312 13.292969,14 14,13.267578 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
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
			<path d="m7 4v0.8789062l1 1v-0.8789062h6v1h-5.8789062l1 1h5.8789062v5.878906l2 2v-7.878906h1v8.878906l1 1v-10.878906h-4v-2h-8zm-4 2v12h12.878906l-1-1h-7.878906v-7.8789062l-2-2v9.8789062h-1v-10h0.8789062l-1-1h-0.8789062z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="M 3.7070312,2.9999999 3,3.7070311 18.292969,19 19,18.292969 Z" fill="currentColor" class="ColorScheme-NegativeText"/>
		</svg>
	{/if}
