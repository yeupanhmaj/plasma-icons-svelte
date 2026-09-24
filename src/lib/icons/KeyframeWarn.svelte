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
			<path class="ColorScheme-Text" d="m5 3v1h2v1.0508c-2.238 0.25375-4 2.1467-4 4.4492 0 2.3031 1.7631 4.1964 4.002 4.4492v-0.99805c-1.6956-0.24314-3.002-1.6884-3.002-3.4512 0-1.933 1.567-3.5 3.5-3.5 1.7609 0 3.1963 1.307 3.4414 3h1.0078c-0.10055-0.85946-0.43497-1.6449-0.95508-2.2871l0.75586-0.75586 0.39648 0.39648 0.70703-0.70703-1.5-1.5-0.70703 0.70703 0.39648 0.39648-0.75195 0.75195c-0.64603-0.51083-1.4321-0.85378-2.291-0.95117v-1.0508h2v-1z" fill="currentColor"/>
  <path class="ColorScheme-NeutralText" d="m10.498 9.486a0.49995 0.49995 0 0 0-0.43139 0.24843l-1.999 3.4646a0.49995 0.49995 0 0 0 0.43332 0.75108l4-2e-3a0.49995 0.49995 0 0 0 0.43139-0.75108l-2.001-3.4626a0.49995 0.49995 0 0 0-0.43332-0.24843z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m7 3v1h3v2.0254c-3.3453 0.258-6 3.0655-6 6.4746 0 3.4091 2.6547 6.2166 6 6.4746v-1c-2.803-0.25289-5-2.6058-5-5.4746 0-3.0376 2.4624-5.5 5.5-5.5 2.8688 0 5.2217 2.197 5.4746 5h1.002c-0.10969-1.4139-0.67578-2.7012-1.5508-3.7188l1.0762-1.0762 0.79883 0.79492 0.70508-0.70898-2.2988-2.2891-0.70508 0.70898 0.79102 0.78906-1.0742 1.0742c-1.0187-0.87213-2.3055-1.4398-3.7188-1.5488v-2.0254h3v-1z" fill="currentColor"/>
  <path class="ColorScheme-NeutralText" fill="currentColor" d="m14.5 11.824a0.50076 0.49915 0 0 0-0.43294 0.24949l-3.0001 5.1785a0.50076 0.49915 0 0 0 0.43294 0.74846h6.0003a0.50076 0.49915 0 0 0 0.43294-0.74846l-3.0001-5.1785a0.50076 0.49915 0 0 0-0.43294-0.24949z" />
		</svg>
	{/if}
