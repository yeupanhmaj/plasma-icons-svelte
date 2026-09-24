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
        <path d="M9.707 8l-6 6L3 13.293 8.293 8 3 2.707 3.707 2z"/>
        <path d="M13.707 8l-6 6L7 13.293 12.293 8 7 2.707 7.707 2z"/>
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
			<path d="M4 3.707L4.707 3l8 8-8 8L4 18.293 11.293 11zm5 0L9.707 3l8 8-8 8L9 18.293 16.293 11z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="M5 2.707L5.707 2l14 14-14 14L5 29.293 18.293 16zm7 0L12.707 2l14 14-14 14-.707-.707L25.293 16z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
