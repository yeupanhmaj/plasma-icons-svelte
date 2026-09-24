<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 16
	);
</script>

	{#if numericSize <= 24}
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
			<path id="smartphone" class="ColorScheme-Text" d="m6 2c-0.96855 0-2 1.0314-2 2v8c0 0.96855 1.0314 2 2 2h4c0.96855 0 2-1.0314 2-2v-8c0-0.96855-1.0314-2-2-2h-0.5-3-0.5zm0 1a0.5 0.5 0 0 1 0.5 0.47461v0.025391c0 0.277 0.223 0.5 0.5 0.5h2c0.277 0 0.5-0.223 0.5-0.5a0.5 0.5 0 0 1 0.5-0.5c0.56208 0 1 0.43788 1 1v8c0 0.56208-0.43788 1-1 1h-4c-0.56208 0-1-0.43788-1-1v-8c0-0.56208 0.43788-1 1-1zm0.5 8c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h3c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5h-3z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m11.023 3c-1.1209 0-2.0234 0.90253-2.0234 2.0234v21.953c0 1.1209 0.90252 2.0234 2.0234 2.0234h9.9434c1.1209 0 2.0234-0.90253 2.0234-2.0234v-21.953c0-1.1209-0.90252-2.0234-2.0234-2.0234h-1.4668-7-1.4766zm-0.023438 1h1.5c0.26834 0 0.48666 0.2097 0.5 0.47461v0.025391c0 0.277 0.223 0.5 0.5 0.5h5c0.277 0 0.5-0.223 0.5-0.5v-0.025391c0.013342-0.26491 0.23166-0.47461 0.5-0.47461h1.5c0.554 0 1 0.446 1 1v22c0 0.554-0.446 1-1 1h-10c-0.554 0-1-0.446-1-1v-22c0-0.554 0.446-1 1-1zm2.5 22c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h5c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5h-5z" fill="currentColor"/>
		</svg>
	{/if}
