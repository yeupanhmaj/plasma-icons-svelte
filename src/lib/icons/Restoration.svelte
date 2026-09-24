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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 7 L 3 8 L 13 8 L 13 7 L 13 5 L 10 2 L 3 2 Z M 4 3 L 9 3 L 9 6 L 12 6 L 12 7 L 4 7 L 4 3 Z M 3 9 L 3 10 L 3 14 L 13 14 L 13 10 L 13 9 L 3 9 Z M 4 10 L 12 10 L 12 13 L 4 13 L 4 10 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 19 L 4 12 L 5 12 L 17 12 L 18 12 L 18 19 L 17 19 L 5 19 L 4 19 Z M 5 18 L 17 18 L 17 13 L 5 13 L 5 18 Z M 4 11 L 4 3 L 5 3 L 13 3 L 14 3 L 14 3.0098 L 14.008 3 L 18.0002 6.99219 L 18.0002 6.99999 L 18.0002 8.40624 L 18.0002 11 L 17.0002 11 L 5.00019 11 L 4 11 Z M 5 10 L 17 10 L 17 8 L 13 8 L 13 7 L 13 4 L 5 4 L 5 10 Z"/>
		</svg>
	{/if}
