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
			<path class="ColorScheme-Text" d="m6.3828 2-4.3828 11h1.3574l1.1895-3h6.3262l-3.1875-8h-1.3027zm0.62305 1.3281 2.1211 5.6719h-4.1855l2.0645-5.6719zm7.6836 5.4355-3.3574 3.7793-1.625-1.625-0.70703 0.70703 2.375 2.375 4.0234-4.5273-0.70898-0.70898z" style="fill:currentColor"/>
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
			<path class="ColorScheme-Text" d="m7.9102 3-4.9102 14h1.6582l1.625-4.4375h5.4336l0.89258 2.4375h1.6543l-4.1739-12h-2.1797zm1.1055 1.9375 2.1797 6.3438h-4.3906zm10.277 7.6758-4.5918 4.5918-1.1465-1.1465-0.70703 0.70703 1.8594 1.8477 5.293-5.293-0.70703-0.70703z" style="fill:currentColor"/>
		</svg>
	{/if}
