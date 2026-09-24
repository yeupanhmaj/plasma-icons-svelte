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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 4 L 2 4 L 2 6 L 3 6 L 3 10 L 2 10 L 2 12 L 3 12 L 3 14 L 8 14 L 8 13 L 6 13 L 6 3 L 13 3 L 13 11 L 9.9 11 L 11.5 9.4 L 10.8 8.671875 L 8 11.5 L 10.8 14.3 L 11.5 13.6 L 9.9 12 L 14 12 L 14 2 L 3 2 z M 4 3 L 5 3 L 5 13 L 4 13 L 4 3 z "/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 5 3 L 5 5 L 3 5 L 3 8 L 5 8 L 5 14 L 3 14 L 3 17 L 5 17 L 5 19 L 12 19 L 12 18 L 9 18 L 9 4 L 18 4 L 18 15 L 13.7 15 L 16 12.7 L 15.3 12 L 11.8 15.5 L 15.3 19 L 16 18.3 L 13.7 16 L 19 16 L 19 3 L 5 3 z M 6 4 L 8 4 L 8 18 L 6 18 L 6 4 z " />
		</svg>
	{/if}
