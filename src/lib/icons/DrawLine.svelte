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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 2 L 11 4.3125 L 4.3125 11.001953 L 2.0019531 11.001953 L 2.0019531 14.001953 L 5.0019531 14.001953 L 5.0019531 11.6875 L 11.6875 5 L 14 5 L 14 2 L 11 2 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z "
     class="ColorScheme-Text"
     />
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="m16 3v2.3125l-10.6875 10.6875h-2.3125v3h3v-2.3125l10.6875-10.6875h2.3125v-3h-3m1 1h1v1h-1v-1m-13 13h1v1h-1v-1"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
