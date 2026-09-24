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
			<path class="ColorScheme-Text" d="m8 14-6-12h12zm1e-3 -2.237 4.383-8.764h-8.766z" fill="currentColor"/>
    <path d="m5.3816452 7.3957931-2.4903351-5.0156379h4.9738231c2.7356028 0 4.9731438 0.00929 4.9723128 0.02064-8.31e-4 0.011355-1.118401 2.2683894-2.483489 5.0156379l-2.4819766 4.9949979z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-551.28571-607.64789)" d="m553.28572 610.6479 0.64385 1.1428 8.35605 14.8572 8.35625-14.8572 0.64385-1.1428h-18m1.78189 1.1428h14.27347l-7.05546 12.54476-7.21801-12.54476" fill="currentColor"/>
    <path d="m6.9772695 10.509744-3.8922022-6.8748421 3.8741937-0.0272298c2.1308064-0.014977 5.598621-0.014977 7.706257 0l3.832062 0.027229-3.798802 6.8606289c-2.089342 3.773346-3.805666 6.867025-3.814054 6.874843-0.0083 0.0078-1.7667432-3.079466-3.9074545-6.860629z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
