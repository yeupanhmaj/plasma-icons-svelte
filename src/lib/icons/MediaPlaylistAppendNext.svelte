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
			<path id="path5" class="ColorScheme-Text" d="m10 2v3h-3v1h3v3h1v-3h3v-1h-3v-3h-1zm-7 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm0 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm2 0v1h2 6v-1h-6-2zm0 2v1h2 4v-1h-4-2z" fill="currentColor"/>
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
			<path id="path7" class="ColorScheme-Text" d="m15 3v3h-3v1h3v3h1v-3h3v-1h-3v-3h-1zm-10.5 1c-0.6999993 0-1.5 0.7000008-1.5 1.5s0.8000007 1.5 1.5 1.5c0.8299992 0 1.5-0.7000008 1.5-1.5s-0.6700008-1.5-1.5-1.5zm0 6c-0.7679992 0-1.5 0.710001-1.5 1.5 0 0.799999 0.7320008 1.5 1.5 1.5 0.7999992 0 1.5-0.700001 1.5-1.5 0-0.789999-0.7000008-1.5-1.5-1.5zm3.5 2v1h4v-1h-4zm-3.5 4c-0.7679992 0-1.5 0.700001-1.5 1.5s0.7320008 1.5 1.5 1.5c0.7999992 0 1.5-0.700001 1.5-1.5s-0.7000008-1.5-1.5-1.5zm3.5 0v1h11v-1h-11zm0 2v1h4v-1h-4z" fill="currentColor"/>
		</svg>
	{/if}
