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
			<path d="m2 2v1h11v2h1v-3h-12zm0 2v10h4v-1h-3v-8h9v-1h-10zm2 2v1h2v-1h-2zm3 0v1c2.271 0.034398 1 0 1 0h5v1h1v-2h-7zm5 2-4 4v2h2l4-4-2-2zm-8 1v1h1v-1h-1zm7.6895 0.68945 0.5918 0.5918-2.9688 2.9844v0.015625l-0.59375-0.59375 2.9707-2.998zm-7.6895 1.3105v1h2v-1h-2z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m3 3v3h1v-2h14v5h1v-6h-16zm0 4v12h6v-1h-5v-10h8v1h1v-2h-10zm2 3v1h4v-1h-4zm5 0v9h2v-1h-1v-7h7v1h1v-2h-9zm-5 3v1h2v-1h-2zm12 0-4 4v2h2l4-4-2-2zm-0.31055 1.6895 0.5918 0.5918-2.9688 2.9844v0.015625l-0.59375-0.59375 2.9707-2.998zm-11.689 0.31055v1h4v-1h-4z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
