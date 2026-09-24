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
			<path class="ColorScheme-Text" d="m14 3v3h-4v-3zm-1 1h-2v1h2zm-7.1719 0.67188 0.70703 0.70703-1.6211 1.6211h4.0859v1h-4.0859l1.6211 1.6211-0.70703 0.70703-2.8281-2.8281 2.8281-2.8281zm4.3438 2 2.8281 2.8281-2.8281 2.8281-0.70703-0.70703 1.6211-1.6211h-4.0859v-1h4.0859l-1.6211-1.6211 0.70703-0.70703zm-4.1719 4.3281v3h-4v-3zm-1 1h-2v1h2z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m14 4v4h5v-4h-5zm1 1h3v2h-3v-2zm-6.707 1-3.5 3.5 3.5 3.5 0.70703-0.70703-2.293-2.293h5.293v-1h-5.293l2.293-2.293-0.70703-0.70703zm5.4141 3-0.70703 0.70703 2.293 2.293h-5.293v1h5.293l-2.293 2.293 0.70703 0.70703 3.5-3.5-3.5-3.5zm-10.707 5v4h5v-4h-5zm1 1h3v2h-3v-2z" fill="currentColor"/>
		</svg>
	{/if}
