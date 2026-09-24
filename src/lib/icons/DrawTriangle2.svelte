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
			<path class="ColorScheme-Text" d="m14 8-12 6v-12zm-2.237-1e-3 -8.764-4.383v8.766z" fill="currentColor"/>
    <path d="m2.5629576 7.9253433v-4.9241532l4.9938231 2.4570619c4.3812483 2.1556629 4.9896313 2.4601266 4.9596473 2.4820476-0.0188 0.013742-2.266017 1.1239335-4.9938232 2.4670914l-4.9596472 2.442105z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-551.28571-607.64789)" d="m555.28572 610.6479 1 0.57227 13 7.42773-13 7.42773-1 0.57227v-16m1 1.58398v12.6875l10.97656-6.27148-10.97656-6.41602" fill="currentColor"/>
    <path d="m4.4900721 10.963298c0-3.8130589 0.00678-6.8750503 0.015235-6.8717413 0.00838 0.00328 2.668149 1.568234 5.9105999 3.4776696l5.895366 3.4717007-5.861716 3.374297c-3.2239452 1.855863-5.8837152 3.385881-5.9106011 3.40004l-0.048884 0.02574z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
