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
			<path class="ColorScheme-Text" d="m6.3828 2-4.3828 11h1.3574l1.1895-3h4.7949c0.23616-0.49856 0.58683-0.93424 1.0234-1.2715l-2.6797-6.7285h-1.3027zm0.62305 1.3281 2.1211 5.6719h-4.1856z" fill="currentColor"/>
    <path class="ColorScheme-NegativeText" d="m15 11.5a2.5 2.5 0 0 0-2.5-2.5 2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5m-1 0a1.5 1.5 0 0 1-0.14844 0.64453l-1.9966-1.9965a1.5 1.5 0 0 1 0.645-0.148 1.5 1.5 0 0 1 1.5 1.5m-0.85547 1.3516a1.5 1.5 0 0 1-0.64453 0.14844 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 0.14844-0.64453z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m7.9102 3-4.9102 14h1.6582l1.625-4.4375h5.4336l0.65039 1.7754c0.25714-0.56511 0.64231-1.0626 1.125-1.4531l-3.4024-9.8848h-2.1797zm1.1055 1.9375 2.1797 6.3438h-4.3906z" fill="currentColor"/>
    <path class="ColorScheme-NegativeText" d="m19 16c0-1.662-1.338-3-3-3s-3 1.338-3 3 1.338 3 3 3 3-1.338 3-3zm-1 0c0 0.37162-0.10606 0.7142-0.28125 1.0117l-2.7305-2.7305c0.29752-0.17518 0.64009-0.28125 1.0117-0.28125 1.108 0 2 0.892 2 2zm-0.98828 1.7188c-0.29752 0.17518-0.64009 0.28125-1.0117 0.28125-1.108 0-2-0.892-2-2 0-0.37162 0.10606-0.7142 0.28125-1.0117z" fill="currentColor"/>
		</svg>
	{/if}
