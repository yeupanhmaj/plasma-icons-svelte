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
			<path d="M 3 2 L 3 14 L 8 14 L 8 13 L 4 13 L 4 3 L 9 3 L 9 6 L 12 6 L 12 8 L 13 8 L 13 5 L 10 2 L 3 2 Z M 9.707 9.03 L 9 9.737 L 10.793 11.53 L 9 13.323 L 9.707 14.03 L 11.5 12.237 L 13.293 14.03 L 14 13.323 L 12.207 11.53 L 14 9.737 L 13.293 9.03 L 11.5 10.823 L 9.707 9.03 Z" style="fill:currentColor; fill-opacity:1; stroke:none" class="ColorScheme-NegativeText"/>
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
			<path d="M 4 3 L 4 19 L 5 19 L 11 19 L 11 18 L 5 18 L 5 4 L 13 4 L 13 8 L 17 8 L 17 13 L 18 13 L 18 7 L 14 3 L 5 3 L 4 3 Z M 13.707 14 L 13 14.707 L 14.793 16.5 L 13 18.293 L 13.707 19 L 15.5 17.207 L 17.293 19 L 18 18.293 L 16.207 16.5 L 18 14.707 L 17.293 14 L 15.5 15.793 L 13.707 14 Z" style="fill:currentColor; fill-opacity:1; stroke:none" class="ColorScheme-NegativeText"/>
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
			<path
        style="fill:currentColor;fill-opacity:1;stroke:none" 
        class="ColorScheme-NegativeText"
        d="M18 20.707L21.293 24 18 27.293c.013.025.707.707.707.707L22 24.707 25.293 28l.707-.707L22.707 24 26 20.707 25.293 20 22 23.293 18.707 20zM6 4v24h11v-1H7V5h11v7h7v7h1v-8l-7-7h-1z"/>
		</svg>
	{/if}
