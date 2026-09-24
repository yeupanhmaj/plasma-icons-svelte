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
			<path class="ColorScheme-Text" d="m14 2v12h-12v-12zm-1 2h-2v9h2zm-3 0h-7v9h7zm-3 2v2h2v1h-2v2h-1v-2h-2v-1h2v-2z" fill="currentColor"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path class="ColorScheme-Text" d="m19 3v16h-16v-16zm-1 4h-4v11h4zm-5 0h-9v11h9zm-4 3v2h2v1h-2v2h-1v-2h-2v-1h2v-2z" fill="currentColor"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path class="ColorScheme-Text" d="m28 4v24h-24v-24zm-1 5h-7v18h7zm-8 0h-14v18h14zm-6.5 4.5v4h4v1h-4v4h-1v-4h-4v-1h4v-4z" fill="currentColor"/>
		</svg>
	{/if}
