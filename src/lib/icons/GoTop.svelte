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
        <path d="M8 7.293l-6 6 .707.707L8 8.707 13.293 14l.707-.707z"/>
        <path d="M8 3.293l-6 6 .707.707L8 4.707 13.293 10 14 9.293z"/>
        <path d="M2 2h12v1H2z"/>
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
        <path d="M3 3v1h16V3zm8 6.293l-8 8 .707.707L11 10.707 18.293 18l.707-.707z"/>
        <path d="M11 4.293l-8 8 .707.707L11 5.707 18.293 13l.707-.707z"/>
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
        <path d="M2 5h28V4H2zm14 8.293l-14 14 .707.707L16 14.707 29.293 28l.707-.707z"/>
        <path d="M16 6.293l-14 14 .707.707L16 7.707 29.293 21l.707-.707z"/>
    </g>
		</svg>
	{/if}
