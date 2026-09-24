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
			<path class="ColorScheme-NegativeText" d="M 2.6992188,2 2,2.6992188 7.3007812,8 2,13.300781 C 2,13.300781 2.7082187,13.995 2.6992188,14 L 8,8.6992188 13.300781,14 C 13.291781,13.995 14,13.300781 14,13.300781 L 8.6992188,8 14,2.6992188 13.300781,2 8,7.3007812 Z" fill="currentColor"/>
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
			<path class="ColorScheme-NegativeText" d="M 3.6992188 3 L 3 3.6992188 L 10.300781 11 L 3 18.300781 C 3 18.300781 3.7112147 18.993333 3.6992188 19 L 11 11.699219 L 18.300781 19 C 18.288781 18.9933 19 18.300781 19 18.300781 L 11.699219 11.001953 L 19 3.6992188 L 18.300781 3 L 11 10.300781 L 3.6992188 3 z " fill="currentColor"/>
		</svg>
	{/if}
