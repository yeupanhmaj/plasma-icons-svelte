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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 14 L 3 2 L 10 2 L 13 5 L 13 9 L 12 9 L 12 6 L 9 6 L 9 3 L 4 3 L 4 13 L 8 13 L 8 14 L 3 14 Z M 11 8 L 7 11 L 9.69922 11.9004 L 9 14 L 13 11 L 10.3008 10.0996 L 11 8 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4.00001 2.998 L 14 2.998 C 15.2997 4.27953 16.6341 5.62947 17.9471 6.93731 C 18.0727 7.14742 17.9633 7.45489 18 7.70185 L 18 14 L 17 14 L 17 7.998 L 13 7.998 L 13 3.998 L 5 3.998 L 5 17.998 L 13 17.998 L 13 19 L 4.00001 19 L 4.00001 2.998 Z M 12 16 L 14.6992 16.9007 C 14.4661 17.6008 14.2331 18.3009 14 19.001 L 18 16 L 15.3008 15.0993 L 16 12.999 L 12 16 Z"/>
		</svg>
	{/if}
