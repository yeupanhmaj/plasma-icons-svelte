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

	{#if numericSize <= 27}
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
        <path d="M7.047 4.049A7.995 8 0 0 0 3 11a7.995 8 0 0 0 7.994 8 7.995 8 0 0 0 6.938-4.043 7.995 8 0 0 0 .01-.006l-.739-.738a6.996 7 0 0 1-.004.006 6.996 7 0 0 1-3.207.781 6.996 7 0 0 1-6.994-7 6.996 7 0 0 1 .785-3.213zM6.303 5.82A7.995 8 0 0 0 5.998 8a7.995 8 0 0 0 7.994 8 7.995 8 0 0 0 2.188-.313A6.996 7 0 0 1 10.994 18 6.996 7 0 0 1 4 11a6.996 7 0 0 1 2.303-5.18z"/>
        <path d="M10 6v1h2.293l-2 2-.293.293V10h4V9h-2.293l2-2L14 6.707V6h-.707zm5-3v1h2.293l-2 2-.293.293V7h4V6h-2.293l2-2L19 3.707V3h-.707z"/>
    </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="M9.762 5.762a12 12 0 0 0-.004.008A12 12 0 0 0 4 16a12 12 0 0 0 12 12 12 12 0 0 0 10.238-5.762l-.732-.732A11 11 0 0 1 20 23 11 11 0 0 1 9 12a11 11 0 0 1 1.486-5.502 11 11 0 0 1 .008-.004zM8.8 7.702A12 12 0 0 0 8 12a12 12 0 0 0 12 12 12 12 0 0 0 4.326-.82A11 11 0 0 1 16 27 11 11 0 0 1 5 16a11 11 0 0 1 3.8-8.299zM22 6v1h2.293l-2 2-.293.293V10h4V9h-2.293l2-2L26 6.707V6h-.707z"/>
        <path d="M20 13v1h2.293l-2 2-.293.293V17h4v-1h-2.293l2-2 .293-.293V13h-.707zm-6-5v1h2.293l-2 2-.293.293V12h4v-1h-2.293l2-2L18 8.707V8h-.707z"/>
    </g>
		</svg>
	{/if}
