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
			<rect x="2.4988089" y="3.5160389" width="10.998194" height="8.9580956" fill="none" stroke="currentColor" stroke-dasharray="2,2" stroke-dashoffset="4.95" stroke-miterlimit="3.9000001" class="ColorScheme-Text"/>
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
			<rect x="2.5215156" y="3.5311673" width="16.952848" height="14.931264" fill="none" stroke="currentColor" stroke-dasharray="2.08599997,2.08599997" stroke-dashoffset="4.9125299" stroke-width="1.043" class="ColorScheme-Text"/>
		</svg>
	{/if}
