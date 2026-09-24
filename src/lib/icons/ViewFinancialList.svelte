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
        d="m10 4v1h2v-1zm0 6v1h2v-1z"
        class="ColorScheme-PositiveText"
    />
    <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m3 2v2h-1v2h1v4h-1v2h1v2h11v-12zm2 1h8v10h-8zm1 1v1h3v-1zm0 2v1h3v-1zm0 2v1h3v-1zm0 2v1h3v-1z"
        class="ColorScheme-Text"
    />
    <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m10 7h2v1h-2z"
        class="ColorScheme-NegativeText"
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
			<path
        style="fill:currentColor;fill-opacity:1;stroke:none" 
        d="m4 3v2h-1v3h1v6h-1v3h1v2h14v-16zm2 1h11v14h-11zm1 1v1h5v-1zm0 2v1h6v-1zm0 2v1h5v-1zm0 2v1h6v-1zm0 2v1h5v-1zm0 2v1h6v-1z"
        class="ColorScheme-Text"
    />
    <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m14 9v1h2v-1z"
        class="ColorScheme-NegativeText"
    />
    <path
        style="fill:currentColor;fill-opacity:1;stroke:none" 
        d="m14 5v1h2v-1zm0 8v1h2v-1z"
        class="ColorScheme-PositiveText"
    />
		</svg>
	{/if}
