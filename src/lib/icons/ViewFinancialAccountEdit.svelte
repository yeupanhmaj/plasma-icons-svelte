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
    d="m3 2v6h-2v1h7v-1h-4v-5h10v4h1v-5h-12zm2 2v1h4v-1h-4zm0 2v1h3v-1h-3zm8 2-4 4v2h2l4-4-2-2zm-0.310547 1.6894531 0.591797 0.5917969-2.96875 3-0.59375-0.59375 2.970703-2.9980469zm-11.689453 0.3105469v4h7v-4h-7zm5 1h1v2h-1v-2zm-4 1h1v1h-1v-1zm2 0h1v1h-1v-1z"
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
    d="m5 3v8h-2v1h9v-1h-6v-7h12v8h1v-9h-14zm2 2v1h6v-1h-6zm0 2v1h4v-1h-4zm-4 6v6h9v-6h-9zm14 0-4 4v2h2l4-4-2-2zm-0.310547 1.689453 0.591797 0.591797-2.96875 2.984375v0.015625l-0.59375-0.59375 2.970703-2.998047zm-7.689453 0.310547h2v2h-2v-2zm-5 2h1v1h-1v-1zm2 0h1v1h-1v-1z"
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
