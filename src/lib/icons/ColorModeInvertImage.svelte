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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 8 3 L 13 3 L 13 13 L 8 13 L 8 3 Z M 3 3 L 13 3 L 13 9 L 11 7 L 7.65625 10.3438 L 6.3125 9 L 6.2813 9 L 3 12.2813 L 3 3 Z M 2 2 L 2 13.2813 L 2 14 L 14 14 L 14 13 L 14 12 L 14 11 L 14 10 L 14 2 L 2 2 Z M 6 4 C 4.89543 4 4 4.89543 4 6 C 4 7.10457 4.89543 8 6 8 C 7.10457 8 8 7.10457 8 6 C 8 4.89543 7.10457 4 6 4 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 11 4 L 11 12.9922 L 13.9941 10 L 14 10.0078 L 14.0078 10 L 17 12.9922 L 16.293 13.6992 L 14 11.4063 L 11.3555 14.0508 L 11 14.4063 L 11 18 L 18 18 L 18 4 L 11 4 Z M 9.29297 12 L 5 16.293 L 5.70703 17 L 9.29883 13.4082 L 9.94141 14.0508 L 10.6484 14.7578 L 11 14.4063 L 11 12.9922 L 10.6484 13.3438 L 9.30664 12 L 9.30064 12.0078 L 9.29297 12 Z M 7.5 6 C 8.331 6 9 6.669 9 7.5 C 9 8.331 8.331 9 7.5 9 C 6.669 9 6 8.331 6 7.5 C 6 6.669 6.669 6 7.5 6 Z M 7.5 5 C 6.115 5 5 6.115 5 7.5 C 5 8.885 6.115 10 7.5 10 C 8.885 10 10 8.885 10 7.5 C 10 6.115 8.885 5 7.5 5 Z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 Z M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 Z"/>
		</svg>
	{/if}
