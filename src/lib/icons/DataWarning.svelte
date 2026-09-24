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
			<path class="ColorScheme-NeutralText" d="m8.0065001 2.0000269a0.75001881 0.74999832 0 0 0-0.6772669 0.414749l-5.2501316 10.499976a0.75001881 0.74999832 0 0 0 0.6712668 1.085248h10.500264a0.75001881 0.74999832 0 0 0 0.671266-1.085248l-5.2501312-10.499976a0.75001881 0.74999832 0 0 0-0.6652667-0.414749z" fill="currentColor"/>
    <path d="m7 6v4h2v-4zm0 5v2h2v-2z" fill="#fff"/>
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
			<path class="ColorScheme-NeutralText" d="m11.006318 3.0000261a0.72728737 0.72727154 0 0 0-0.65674 0.4021811l-7.2728738 14.545431a0.72728737 0.72727154 0 0 0 0.6509222 1.052362h14.545748a0.72728737 0.72727154 0 0 0 0.650922-1.052362l-7.272874-14.545431a0.72728737 0.72727154 0 0 0-0.645104-0.4021811z" fill="currentColor"/>
    <path d="m10 8v5h2v-5zm0 7v2h2v-2z" fill="#fff"/>
		</svg>
	{/if}
