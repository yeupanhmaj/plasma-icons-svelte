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
        <path d="M8 8.707l-6-6L2.707 2 8 7.293 13.293 2l.707.707z"/>
        <path d="M8 12.707l-6-6L2.707 6 8 11.293 13.293 6l.707.707z"/>
        <path d="M2 13h12v1H2z"/>
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
        <path d="M3 19v-1h16v1zm8-6.293l-8-8L3.707 4 11 11.293 18.293 4l.707.707z"/>
        <path d="M11 17.707l-8-8L3.707 9 11 16.293 18.293 9l.707.707z"/>
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
        <path d="M2 27h28v1H2zm14-8.293l-14-14L2.707 4 16 17.293 29.293 4l.707.707z"/>
        <path d="M16 25.707l-14-14L2.707 11 16 24.293 29.293 11l.707.707z"/>
    </g>
		</svg>
	{/if}
