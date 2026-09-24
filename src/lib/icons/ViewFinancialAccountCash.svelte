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
			<path d="m2 4v8h12v-8zm2 1h8v1h1v4h-1v1h-8v-1h-1v-4h1zm4 1c-1.1045695 0-2 0.895431-2 2 0 1.10457 0.8954305 2 2 2 1.1045701 0 2-0.89543 2-2 0-1.104569-0.8954299-2-2-2zm0 1c0.5522847 0 1 0.4477153 1 1 0 0.552285-0.4477153 1-1 1s-1-0.447715-1-1c0-0.5522847 0.4477153-1 1-1z" fill="currentColor" class="ColorScheme-Text"/>
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
			<path d="m3 6v10h16v-10zm3 1h10v1h1v1h1v4h-1v1h-1v1h-10v-1h-1v-1h-1v-4h1v-1h1zm5 1c-1.6568542 0-3 1.343146-3 3s1.3431458 3 3 3c1.656854 0 3-1.343146 3-3s-1.343146-3-3-3zm-0.05078 1h2e-3c0.01628-1.99e-4 0.03255-1.99e-4 0.04883 0 1.104569 0 2 0.895431 2 2s-0.895431 2-2 2c-1.1045695 0-2-0.895431-2-2-3.498e-4 -1.085038 0.8645304-1.97245 1.949219-2z" fill="currentColor" class="ColorScheme-Text"/>
		</svg>
	{/if}
