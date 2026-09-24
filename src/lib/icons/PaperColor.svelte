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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 9 13 L 13 13 L 13 6 L 10 6 L 10 3 L 6 3 L 6 2 L 11 2 L 14 5 L 14 14 L 9 14 L 9 13 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 5.00391 2.0293 C 4.44148 3.99204 3.30112 5.70402 2.18489 7.3871 C 1.54262 8.39426 0.81264 9.54061 1.05005 10.7925 C 1.3091 12.554 2.94184 13.9239 4.69622 14.0182 C 6.49415 14.1852 8.35128 13.0138 8.85221 11.256 C 9.11621 10.4352 9.01832 9.57207 8.63577 8.80484 C 7.86811 7.25787 6.7453 5.91923 5.96657 4.37688 C 5.57601 3.62602 5.24727 2.84012 5.00391 2.0293 Z M 7.77148 8.25391 C 8.1674 8.91977 8.51327 9.66701 8.42165 10.4627 C 8.32022 12.0447 6.91171 13.3494 5.35452 13.4675 C 4.52178 13.5531 3.66287 13.3265 2.98047 12.8418 C 4.80534 13.2877 6.8802 12.2855 7.58336 10.5265 C 7.88602 9.81116 7.92752 9.00985 7.77148 8.25391 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 7 3 C 6.02709 6.40503 3.64555 9.33228 2.5957 11.6758 C 2.2283 12.3726 2 13.1546 2 14 C 2 16.77 4.23 19 7 19 C 9.77 19 12 16.77 12 14 C 12 13.1546 11.7717 12.3726 11.4043 11.6758 C 10.3545 9.33228 7.9729 6.40503 7 3 Z M 9.2832 10.7168 C 10.3209 11.438 11 12.6351 11 14 C 11 16.216 9.216 18 7 18 C 5.63504 18 4.438 17.321 3.7168 16.2832 C 4.36385 16.7329 5.14892 17 6 17 C 8.216 17 10 15.216 10 13 C 10 12.1489 9.73291 11.3638 9.2832 10.7168 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 8 3 L 15 3 L 19 7 L 19 19 L 11 19 L 11 18 L 18 18 L 18 8 L 14 8 L 14 4 L 8 4 L 8 3 Z"/>
		</svg>
	{/if}
