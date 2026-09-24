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
    d="m4.1210938 2 1 1h8.8789062v8.878906l1 1v-10.878906h-10.878906zm2 2 1 1h1.8789062v-1h-2.8789062zm-3.1210938 1.1210938v2.8789062h-2v1h5.8789062l-1-1h-1.8789062v-1.8789062l-1-1zm7.121094 2.8789062 1 1h1.878906v-1h-2.878906zm-9.121094 2v4h10.878906l-1-1h-0.878906v-0.878906l-2.1210938-2.121094h-6.8789062zm11.121094 0 0.878906 0.878906v-0.878906h-0.878906zm-10.121094 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="M 2.7070312 2 L 2 2.7070312 L 13.292969 14 L 14 13.267578 L 2.7070312 2 z M 10 4 L 10 5 L 13 5 L 13 4 L 10 4 z "
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
    d="m5.1210938 3 1 1h11.878906v11.878906l1 1v-13.878906h-13.878906zm2 2 1 1h4.8789062v-1h-5.8789062zm2 2 1.0000002 1h0.878906v-1h-1.8789062zm-4.1210938 0.1210938v3.8789062h-2v1h6.8789062l-1-1h-2.8789062v-2.8789062l-1-1zm8.121094 3.8789062 1 1h2.878906v-1h-3.878906zm-10.121094 2v6h13.878906l-2-2h-0.878906v-0.878906l-3.121094-3.121094h-7.878906zm12.121094 0 1.878906 1.878906v-1.878906h-1.878906zm-11.121094 4h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"
    style="fill:currentColor; fill-opacity:1; stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="M 3.7070312 3 L 3 3.7070312 L 18.292969 19 L 19 18.292969 L 3.7070312 3 z M 14 5 L 14 6 L 17 6 L 17 5 L 14 5 z "
    style="fill:currentColor; fill-opacity:1; stroke:none"
    class="ColorScheme-NegativeText"
    />
		</svg>
	{/if}
