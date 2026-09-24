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
			<path d="m3 2v12h7.5c1.385 0 2.5-1.115 2.5-2.5s-1.115-2.5-2.5-2.5h-1.7929688l1.4999998-1.5-.707031-.7070312-2.7070312 2.7070312 2.7070312 2.707031.707031-.707031-1.4999998-1.5h1.7929688c.831 0 1.5.669 1.5 1.5s-.669 1.5-1.5 1.5h-6.5v-10h5v3h3v2h1v-3l-3-3z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path d="m4 3v16h11c1.662 0 3-1.338 3-3s-1.338-3-3-3h-1.292969l1.5-1.5-.707031-.707031-2.707031 2.707031 2.707031 2.707031.707031-.707031-1.5-1.5h1.292969c1.108 0 2 .892 2 2s-.892 2-2 2h-10v-14h8v4h4v4h1v-5l-4-4z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path d="m6 4v24h15.5c2.493 0 4.5-2.007 4.5-4.5s-2.007-4.5-4.5-4.5h-2.792969l2.5-2.5-.707031-.707031-3.707031 3.707031 3.707031 3.707031.707031-.707031-2.5-2.5h2.792969c1.939 0 3.5 1.561 3.5 3.5s-1.561 3.5-3.5 3.5h-14.5v-22h11v7h7v7h1v-8l-7-7z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
