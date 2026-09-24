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
			<rect class="ColorScheme-NegativeText" x="2" y="2" width="12" height="12" rx="2" fill="currentColor"/>
    <path d="M 5.414,4 4,5.414 6.586,8 4,10.586 5.414,12 8,9.414 10.586,12 12,10.586 9.414,8 12,5.414 10.586,4 8,6.586 Z" fill="#fff"/>
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
			<rect class="ColorScheme-NegativeText" x="3" y="3" width="16" height="16" rx="2" fill="currentColor"/>
    <path d="M 6.414,5 5,6.414 9.586,11 5,15.586 6.414,17 11,12.414 15.586,17 17,15.586 12.414,11 17,6.414 15.586,5 11,9.586 Z" fill="#fff"/>
		</svg>
	{/if}
