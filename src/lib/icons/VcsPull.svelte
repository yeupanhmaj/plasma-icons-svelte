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
    <path id="path5" class="ColorScheme-Text" d="m7 2h1v8h-1z" fill="currentColor"/>
    <path id="path7" d="m4.5 6.7929688-0.7070312 0.7070312 0.3535156 0.3535156 3.3535156 3.3535154 3.353516-3.3535154 0.353515-0.3535156-0.707031-0.7070312-0.353516 0.3535156-2.646484 2.6464844-3-3z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path id="path3" class="ColorScheme-Text" d="m6 16h9v3h-9z" fill="currentColor"/>
    <path id="path5" class="ColorScheme-Text" d="m10 3h1v11h-1z" fill="currentColor"/>
    <path id="path7" d="m6.5 9.7929688-0.7070312 0.7070312 0.3535156 0.353516 4.3535156 4.353515 4.353516-4.353515 0.353515-0.353516-0.707031-0.7070312-0.353516 0.3535152-3.646484 3.646485-3.6464844-3.646485-0.3535156-0.3535152z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
