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
			<path id="path3" class="ColorScheme-Text" d="m2 8v6h5v-6h-1v3h-3v-3zm1 4h3v1h-3z" fill="currentColor"/>
    <path id="path5" class="ColorScheme-Accent" d="m10 13h3v1h-3z" fill="currentColor"/>
    <path id="path7" d="m2.5 4.7929688-0.7070312 0.7070312 2.7070312 2.7070312 2.7070312-2.7070312-0.7070312-0.7070312-2 2-2-2z" class="ColorScheme-Text" fill="currentColor"/>
    <path id="path9" class="ColorScheme-Text" d="m5.9511719 2a2 2 0 0 0-1.9511719 2v3h1v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8h1v-8a2 2 0 0 0-1.951172-2 2 2 0 0 0-0.048828 0h-4a2 2 0 0 0-0.0488281 0z" fill="currentColor"/>
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
			<path id="path3" class="ColorScheme-Text" d="m3 10v9h7v-9h-1v4h-5v-4zm1 6h5v1h-5z" fill="currentColor"/>
    <path id="path5" class="ColorScheme-Accent" d="m13 17h5v2h-5z" fill="currentColor"/>
    <path id="path7" d="m3.5 5.7929688-0.7070312 0.7070312 0.3535156 0.3535156 3.3535156 3.3535154 3.3535156-3.3535154 0.3535154-0.3535156-0.707031-0.7070312-3 3-3-3z" class="ColorScheme-Text" fill="currentColor"/>
    <path id="path9" class="ColorScheme-Text" d="m7.9511719 3a2 2 0 0 0-1.9511719 2v4h1v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v11h1v-11a2 2 0 0 0-1.951172-2 2 2 0 0 0-0.048828 0h-6a2 2 0 0 0-0.0488281 0z" fill="currentColor"/>
		</svg>
	{/if}
