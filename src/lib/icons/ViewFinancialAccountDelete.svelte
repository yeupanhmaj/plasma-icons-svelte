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
    d="m3 2v6h-2v1h8v-1h-5v-5h10v5h1v-6zm2 2v1h4v-1zm0 2v1h3v-1zm-4 4v4h8v-4zm5 1h2v2h-2zm-4 1h1v1h-1zm2 0h1v1h-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="M 10 4 L 10 5 L 13 5 L 13 4 L 10 4 z M 10.707031 9 L 10 9.7070312 L 11.792969 11.5 L 10 13.292969 L 10.707031 14 L 12.5 12.207031 L 14.292969 14 L 15 13.292969 L 13.207031 11.5 L 15 9.7070312 L 14.292969 9 L 12.5 10.792969 L 10.707031 9 z "
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
    d="m5 3v8h-2v1h10v-1h-7v-7h12v10h1v-11zm2 2v1h6v-1zm0 2v1h4v-1zm-4 6v6h10v-6zm7 2h2v2h-2zm-6 2h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1z"
    style="fill:currentColor; fill-opacity:1; stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="m14 5v1h3v-1h-3zm0 11v1h5v-1h-5z"
    style="fill:currentColor; fill-opacity:1; stroke:none"
    class="ColorScheme-NegativeText"
    />
		</svg>
	{/if}
