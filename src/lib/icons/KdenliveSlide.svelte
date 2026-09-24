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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m9.9991767 2.0001746h-3.9990267l-2.033e-4 4.9999201h-0.999936v-2.0001214l-3.0000932 3.0000574 3.0000932 3.0000843v-2.0001487h0.999936l2.033e-4 5.0002137h3.9990267l8e-4 -5.0002137h0.9999363v2.0001487l3.000076-3.0000843-3.000086-3.0000574v2.0001214h-0.9999357zm-2.9990264 1.0000006h1.9990257v10.000004h-1.9990257z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M 13,3.000088 H 9 l -3.717e-4,7 L 7,10 7.0001005,6.9997078 3,10.99976 7.0001005,14.999849 7,12 8.9996283,12.000088 9,19 h 4 l 9.99e-4,-6.999912 1.998856,-8.8e-5 10e-5,2.999849 L 19,10.99976 14.999909,6.9997078 14.999808,10 l -1.998855,8.8e-5 z M 10,4 h 2 v 14 h -2 z"/>
		</svg>
	{/if}
