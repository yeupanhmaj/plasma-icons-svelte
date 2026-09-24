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
			<g stroke-linecap="square">
        <path id="path3" class="ColorScheme-Text" fill="currentColor" d="m2 8v6h5v-6h-1v3h-3v-3zm1 4h3v1h-3z"/>
        <path id="path5" class="ColorScheme-Accent" fill="currentColor" d="m3 9h3v1h-3z"/>
        <path id="path7" class="ColorScheme-Text" fill="currentColor" d="m5.9511719 2a2 2 0 0 0-1.9511719 2v4h1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7h1v-7a2 2 0 0 0-1.951172-2 2 2 0 0 0-0.048828 0h-4a2 2 0 0 0-0.048828 0z"/>
    </g>
    <path id="path9" d="M 9.5 8.7929688 L 8.7929688 9.5 L 9.1464844 9.8535156 L 11.5 12.207031 L 13.853516 9.8535156 L 14.207031 9.5 L 13.5 8.7929688 L 13.146484 9.1464844 L 11.5 10.792969 L 9.8535156 9.1464844 L 9.5 8.7929688 z " class="ColorScheme-Text" fill="currentColor"/>
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
			<path id="path3" class="ColorScheme-Text" d="m3 10v9h7v-9h-1v4h-5v-4zm1 6h5v1h-5z" fill="currentColor" stroke-linecap="square"/>
    <path id="path5" class="ColorScheme-Accent" d="m4 11h5v2h-5z" fill="currentColor" stroke-linecap="square"/>
    <path id="path7" d="m12.5 11.792969-0.707031 0.707031 0.353515 0.353516 3.353516 3.353515 3.353516-3.353515 0.353515-0.353516-0.707031-0.707031-0.353516 0.353515-2.646484 2.646485-2.646484-2.646485-0.353516-0.353515z" class="ColorScheme-Text" fill="currentColor"/>
    <path id="path11" class="ColorScheme-Text" d="m7.9511719 3a2 2 0 0 0-1.9511719 2v5h1v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10h1v-10a2 2 0 0 0-1.951172-2 2 2 0 0 0-0.048828 0h-6a2 2 0 0 0-0.0488281 0z" fill="currentColor"/>
		</svg>
	{/if}
