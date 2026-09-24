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
        <path d="M8.707 8l-6 6L2 13.293 7.293 8 2 2.707 2.707 2z"/>
        <path d="M12.707 8l-6 6L6 13.293 11.293 8 6 2.707 6.707 2z"/>
        <path d="M13 2h1v12h-1z"/>
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
        <path d="M19 3h-1v16h1zm-6.293 8l-8-8L4 3.707 11.293 11 4 18.293l.707.707z"/>
        <path d="M17.707 11l-8-8L9 3.707 16.293 11 9 18.293l.707.707z"/>
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
        <path d="M27 2v28h1V2zm-8.293 14l-14-14L4 2.707 17.293 16 4 29.293l.707.707z"/>
        <path d="M25.707 16l-14-14-.707.707L24.293 16 11 29.293l.707.707z"/>
    </g>
		</svg>
	{/if}
