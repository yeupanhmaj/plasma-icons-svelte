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
			<path  d="M5 1v7h6V3L9 1zm1 1h2v2h2v3H6zm2 6v7h6v-5l-2-2zm1 1h2v2h2v3H9zM8 8v7H2v-5l2-2zM7 9H5v2H3v3h4z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
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
			<path  d="M12 12v7h6v-5l-2-2zm1 1h2v2h2v3h-4zm-3-1v7H4v-5l2-2zm-1 1H7v2H5v3h4zM8 3v7h6V5l-2-2zm1 1h2v2h2v3H9z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
