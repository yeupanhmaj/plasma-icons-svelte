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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     d="M 2 2 L 2 11 L 7 11 L 9 11 L 14 11 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 10 L 9 10 L 7 10 L 3 10 L 3 3 z M 10 4 L 10 5 L 12 5 L 12 4 L 10 4 z M 2 12 L 2 13 L 6 13 L 6 12 L 2 12 z M 10 12 L 10 13 L 14 13 L 14 12 L 10 12 z M 7 13 L 7 14 L 9 14 L 9 13 L 7 13 z "
     />
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
			<path id="path1595" class="ColorScheme-Text" d="m3 3v6h2v7c0 1.662 1.338 3 3 3h4v-5h-5v2h2v2h-1c-1.108 0-2-0.892-2-2v-7h2v-6zm6 0v1h9v7h1v-8h-1zm-5 1h3v4h-3zm1 1v2h1v-2zm-2 5v6h1v-6z" fill="currentColor" opacity=".5"/>
    <path id="path1609" class="ColorScheme-NegativeText" d="M 13.84845,13.003252 13,13.851689 15.15156,16.003252 13,18.154815 l 0.84845,0.848437 2.15156,-2.151564 2.15154,2.151564 L 19,18.154815 16.84844,16.003252 19,13.851689 18.15155,13.003252 16.00001,15.154815 Z" fill="currentColor"/>
		</svg>
	{/if}
