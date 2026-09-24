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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 14 L 13 14 L 13 5 L 10 2 L 3 2 Z M 4 3 L 5 3 L 5 11 L 4 11 L 4 3 Z M 6 3 L 9 3 L 9 6 L 12 6 L 12 11 L 6 11 L 6 3 Z M 9 6 L 7 8 L 9 10 L 9 6 Z M 4 12 L 5 12 L 5 13 L 4 13 L 4 12 Z M 6 12 L 12 12 L 12 13 L 6 13 L 6 12 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 3 L 4 19 L 18 19 L 18 7 L 14 3 L 4.00019 3.00001 Z M 5.00019 4.00001 L 6.00019 4.00001 L 6.00019 15 L 5.00019 15 L 5.00019 4.00001 Z M 7.00019 4.00001 L 13 4 L 13 8 L 17 8 L 16.992 15 L 7 15 L 7 4.00001 L 7.00019 4.00001 Z M 10.0002 5.00001 L 8.00019 7.00001 L 10.0002 9.00001 L 10.0002 5.00001 Z M 5.00019 16 L 6.00019 16 L 6.00019 18 L 5.00019 18 L 5.00019 16 Z M 7.00019 16 L 16.9922 16 L 16.9922 18 L 7.00019 18 L 7.00019 16 Z"/>
		</svg>
	{/if}
