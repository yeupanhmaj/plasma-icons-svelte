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
			<path class="ColorScheme-Text" d="m11.5 2c-1.380712 0-2.5 1.1192881-2.5 2.5s1.119288 2.5 2.5 2.5 2.5-1.1192881 2.5-2.5-1.119288-2.5-2.5-2.5zm-10.5 4v1h5v1h1v4h-1v1h-5v1h7v-8h-7zm1 2c-0.365911 0-0.70494 0.1057638-1 0.2773438v1.7226562c0-0.5522847 0.4477153-1 1-1s1 0.4477153 1 1c0 0.552285-0.4477153 1-1 1s-1-0.447715-1-1v1.722656c0.29506 0.17158 0.634089 0.277344 1 0.277344 1.1045701 0 2-0.89543 2-2 0-1.104569-0.8954299-2-2-2zm9.646484 0c-1.032822 9.664e-4 -1.9919133 0.5237905-2.646484 1.3925781v2.6074219h6.146484c0-2.2091399-1.567004-4.0000013-3.5-4zm0 1c1.05817 0.0017815 2.000793 0.8028154 2.353516 2h-4.7070312c0.3527225-1.1971843 1.2953452-1.9982181 2.3535152-2z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m15 3c-1.662 0-3 1.338-3 3s1.338 3 3 3 3-1.338 3-3-1.338-3-3-3zm-13 6v1h6v1h1v1h1v4h-1v1h-1v1h-6v1h9v-10h-9zm13 1c-0.646346 0-1.437635 0.200563-2 0.427734l0.455078 0.914063c0.427816-0.160506 1.059407-0.341797 1.544922-0.341797 2.21602 0 4 1.78398 4 4h-6v1h7v-1c0-2.77002-2.22998-5-5-5zm-12 1c-0.3523436 0-0.6859307 0.07201-1 0.183594v1.09375c0.2812497-0.163698 0.6015527-0.268514 0.9492188-0.277344h0.0019531c0.01628-1.99e-4 0.0325481-1.99e-4 0.0488281 0 1.104569 0 2 0.895431 2 2s-0.895431 2-2 2c-0.365911 0-0.70494-0.105764-1-0.277344v1.09375c0.3140693 0.111584 0.6476564 0.183594 1 0.183594 1.656854 0 3-1.343146 3-3s-1.343146-3-3-3z" fill="currentColor"/>
		</svg>
	{/if}
