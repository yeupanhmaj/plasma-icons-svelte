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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m2 2v12h12v-12zm4 1h7v10h-7z"/>
        <path d="m8.3530312 4.6464844-.7070312.7070312 2.646484 2.6464844-2.646484 2.646484.7070312.707032 3.3535158-3.353516z"/>
    </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m3 3v16h16v-16zm5 1h10v14h-10z" stroke-linecap="square" stroke-linejoin="round"/>
        <path d="m11.353516 6.6464844 4.353515 4.3535156-4.353515 4.353516-.707032-.707032 3.646485-3.646484-3.646485-3.6464844z"/>
    </g>
		</svg>
	{/if}
