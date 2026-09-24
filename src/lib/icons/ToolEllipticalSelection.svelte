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
			<ellipse cx="7.9878635" cy="8.0085039" rx="5.5101886" ry="4.478539" fill="none" stroke="currentColor" stroke-dasharray="2,2" class="ColorScheme-Text"/>
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
			<ellipse cx="11.077622" cy="11.002757" rx="7.5652175" ry="6.4893737" fill="none" stroke="currentColor" stroke-dasharray="1.96201885,1.96201885" stroke-width=".98100942" class="ColorScheme-Text"/>
		</svg>
	{/if}
