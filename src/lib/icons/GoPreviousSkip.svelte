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
        <path d="M6.293 8l6-6 .707.707L7.707 8 13 13.293l-.707.707z"/>
        <path d="M2.293 8l6-6L9 2.707 3.707 8 9 13.293 8.293 14z"/>
    </g>
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
			<path d="M18 3.707L17.293 3l-8 8 8 8 .707-.707L10.707 11zm-5 0L12.293 3l-8 8 8 8 .707-.707L5.707 11z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="M27 2.707L26.293 2l-14 14 14 14 .707-.707L13.707 16zm-7 0L19.293 2l-14 14 14 14 .707-.707L6.707 16z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
