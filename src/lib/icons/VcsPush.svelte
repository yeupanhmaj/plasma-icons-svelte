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
			<path id="path3" class="ColorScheme-Text" d="m4 12h7v2h-7z" fill="currentColor"/>
    <path id="path5" class="ColorScheme-Text" d="m7 3h1v8h-1z" fill="currentColor"/>
    <path id="path7" d="m7.5 1.7929688-3.7070312 3.7070312 0.7070312 0.7070312 3-3 2.646484 2.6464844 0.353516 0.3535156 0.707031-0.7070312-0.353515-0.3535156-3.353516-3.3535156z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path id="path3" class="ColorScheme-Text" d="m6 16h9v3h-9z" fill="currentColor" stroke-linecap="square" stroke-width="1.10782"/>
    <path id="path5" class="ColorScheme-Text" d="m10 4h1v11h-1z" fill="currentColor" stroke-linecap="square"/>
    <path id="path7" d="m10.5 2.7929688-4.7070312 4.7070312 0.7070312 0.7070312 4-4 3.646484 3.6464844 0.353516 0.3535156 0.707031-0.7070312-0.353515-0.3535156-4.353516-4.3535156z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
