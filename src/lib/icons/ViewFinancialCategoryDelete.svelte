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
			<path d="m2 2v1h11v2h1v-3h-12zm0 2v10h4v-1h-3v-8h9v-1h-10zm2 2v1h2v-1h-2zm3 0v8h1v-7h5v1h1v-2h-7zm-3 3v1h1v-1h-1zm0 2v1h2v-1h-2z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="m9 11v1h5v-1z" fill="currentColor" class="ColorScheme-NegativeText"/>
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
			<path d="m3 3v3h1v-2h14v5h1v-6h-16zm0 4v12h6v-1h-5v-10h8v1h1v-2h-10zm2 3v1h4v-1h-4zm5 0v9h3v-1h-2v-7h7v2h1v-3h-9zm2 2v2h1v-1h4v-1h-5zm-7 1v1h2v-1h-2zm0 2v1h4v-1h-4z" fill="currentColor" class="ColorScheme-Text"/>
    <path d="m14 16v1h5v-1z" fill="currentColor" class="ColorScheme-NegativeText"/>
		</svg>
	{/if}
