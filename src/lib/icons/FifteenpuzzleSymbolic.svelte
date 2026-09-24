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
			viewBox="0 0 16 16.000001"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g transform="translate(-23)" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square">
        <path d="m25 2v12h12v-12zm1 1h10v10h-10z" stop-color="#000000"/>
        <path d="m27 3.9999995h2v1.9999998h-2z"/>
        <path d="m30 3.9999995h2v1.9999998h-2z"/>
        <path d="m32.980778 3.9999995h2.038445v1.9999999h-2.038445z"/>
        <path d="m27 6.9999995h2v1.9999998h-2z"/>
        <path d="m30 6.9999995h2v1.9999998h-2z"/>
        <path d="m32.980778 7.999999h2.038445v1.9999999h-2.038445z"/>
        <path d="m27 9.999999h2v2h-2z"/>
        <path d="m30 9.999999h2v2h-2z"/>
    </g>
		</svg>
	{:else if numericSize <= 27}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 22 22.000002"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g class="ColorScheme-Text" fill="currentColor" stroke-linecap="square">
        <path d="m15 11v4h4v-4zm1 1h2v2h-2z" stop-color="#000000"/>
        <path transform="rotate(90)" d="m9-13v4h4v-4zm1 1h2v2h-2z" stop-color="#000000"/>
        <path d="m3 15v4h4v-4zm1 1h2v2h-2z" stop-color="#000000"/>
        <path d="m3 9v4h4v-4zm1 1h2v2h-2z" stop-color="#000000"/>
        <path transform="rotate(90)" d="m3-13v4h4v-4zm1 1h2v2h-2z" stop-color="#000000"/>
        <path d="m15 3v4h4v-4zm1 1h2v2h-2z" stop-color="#000000"/>
        <path d="m3 3v4h4v-4zm1 1h2v2h-2z" stop-color="#000000"/>
        <path transform="rotate(90)" d="m15-13v4h4v-4zm1 1h2v2h-2z" stop-color="#000000"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32.000002"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g transform="translate(0,-23)" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square">
        <path d="m4 27v6h6v-6zm1 1h4v4h-4z" stop-color="#000000"/>
        <path d="m22 27v6h6v-6zm1 1h4v4h-4z" stop-color="#000000"/>
        <path d="m13 27v6h6v-6zm1 1h4v4h-4z" stop-color="#000000"/>
        <path d="m4 36v6h6v-6zm1 1h4v4h-4z" stop-color="#000000"/>
        <path d="m22 39v6h6v-6zm1 1h4v4h-4z" stop-color="#000000"/>
        <path d="m13 36v6h6v-6zm1 1h4v4h-4z" stop-color="#000000"/>
        <path d="m4 45v6h6v-6zm1 1h4v4h-4z" stop-color="#000000"/>
        <path d="m13 45v6h6v-6zm1 1h4v4h-4z" stop-color="#000000"/>
    </g>
		</svg>
	{/if}
