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
			<path class="ColorScheme-Text" d="m2 2v12h6v-1h-5v-9h10v4h1v-6zm7 7v6h6v-6zm1 2h4v3h-4z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="M 4,8.999786 H 4.9999606 V 7.657389 L 4.9999596,6.707213 7.8928452,9.590171 8.6,8.883065 5.7110623,5.999946 l 0.9502006,1e-6 1.3391875,-1e-6 -4.666e-4,-0.999893 H 6.6612619 L 4.0004131,5 4,7.657388 Z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="M 5,12.949747 H 5.999892 V 9.707 L 9.03548,12.742587 9.7425869,12.03548 6.706999,8.999893 H 9.9497469 V 8 H 5 v 0.292787 z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m3 3v16h8v-1h-7v-11h14v4h1v-8h-1zm9 9v4-1 5h8v-8h-3zm1 3h6v4h-6v-5z" fill="currentColor"/>
		</svg>
	{/if}
