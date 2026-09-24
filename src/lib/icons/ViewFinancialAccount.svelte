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
    d="m3 2v6h-2v1h12v-1h-9v-5h10v11h1v-12h-12zm2 2v1h4v-1h-4zm0 2v1h3v-1h-3zm-4 4v4h12v-4h-12zm9 1h2v2h-2v-2zm-8 1h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="m10 4v1h3v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
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
    d="m5 3v8h-2v1h14v-1h-11v-7h12v15h1v-16zm2 2v1h6v-1zm0 2v1h4v-1zm-4 6v6h14v-6zm11 2h2v2h-2zm-10 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"
    style="fill:currentColor; fill-opacity:1; stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="m14 5v1h3v-1z"
    style="fill:currentColor; fill-opacity:1; stroke:none"
    class="ColorScheme-NegativeText"
    />
		</svg>
	{/if}
