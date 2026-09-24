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
			<g class="ColorScheme-Text" fill="currentColor">
    <path d="m14 2h-12v12zm-2.0005 5.9997a3.9998 3.9998 0 0 1-3.9998 3.9998 3.9998 3.9998 0 0 1-3.9998-3.9998 3.9998 3.9998 0 0 1 3.9998-3.9998 3.9998 3.9998 0 0 1 3.9998 3.9998z"/>
  </g>
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
			<g fill="currentColor" class="ColorScheme-Text">
    <path d="m6.7574 15.243c-2.3431-2.3431-2.3431-6.1421 0-8.4853 2.3431-2.3431 6.1421-2.3431 8.4853 0zm12.243-12.243h-16v16l3.7574-3.7574c2.3431 2.3431 6.1421 2.3431 8.4853 0s2.3431-6.1421 0-8.4853z" />
  </g>
		</svg>
	{/if}
