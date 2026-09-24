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
			<path class="ColorScheme-Text" d="m10 3v2h-1v1h-0.87891l4.8789 4.8789v-0.87891h1v-1h1v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1zm-7 2.1211v0.87891h-1v2h-1v1h1v2h1v1h1v-2h1v-1h1.8789l-1-1h-0.87891v-0.87891l-0.12109-0.12109h-0.87891v-0.87891l-1-1zm4 4v0.87891h0.87891l-0.87891-0.87891zm1 1v0.87891h0.87891l-0.87891-0.87891zm1 1v0.87891h0.87891l-0.87891-0.87891zm1 1v1.8789h1v-0.87891l-1-1z" fill="currentColor"/>
 <path class="ColorScheme-NegativeText" d="m2.5 1.793-0.70703 0.70703 11.707 11.707 0.70703-0.70703z" color="#da4453" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m6.1211 4 0.87891 0.87891v-0.87891h-0.87891zm7.8789 2v2h-1v1h-1v0.87891l4.1211 4.1211h0.87891v-1h1v-1h1v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1zm-9 1.1211v1.8789h-1v2h-1v1h1v2h1v3h1v2h1v-3h1v-3h1v-1h0.87891l-4.8789-4.8789zm9 9v0.87891h0.87891l-0.87891-0.87891z" fill="currentColor"/>
 <path class="ColorScheme-NegativeText" d="M 3,3.7071073 3.7071067,3 19,18.292893 18.292893,19 Z" color="#da4453" fill="currentColor"/>
		</svg>
	{/if}
