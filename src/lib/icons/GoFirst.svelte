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
        <path d="M7.293 8l6 6 .707-.707L8.707 8 14 2.707 13.293 2z"/>
        <path d="M3.293 8l6 6 .707-.707L4.707 8 10 2.707 9.293 2z"/>
        <path d="M2 2h1v12H2z"/>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="M3 19h1V3H3zm6.293-8l8 8 .707-.707L10.707 11 18 3.707 17.293 3z"/>
        <path d="M4.293 11l8 8 .707-.707L5.707 11 13 3.707 12.293 3z"/>
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
        <path d="M5 30V2H4v28zm8.293-14l14 14 .707-.707L14.707 16 28 2.707 27.293 2z"/>
        <path d="M6.293 16l14 14 .707-.707L7.707 16 21 2.707 20.293 2z"/>
    </g>
		</svg>
	{/if}
