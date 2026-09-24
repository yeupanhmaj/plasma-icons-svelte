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

	{#if numericSize <= 27}
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
        <path d="M6.79 3.707l-.868.5 1.646 2.85-2.248-.602-.26.967 3.215.861L9.845 11H6.708L4.354 8.646l-.708.708L5.293 11H2v1h3.293l-1.647 1.646.708.708L6.707 12H9.84l-1.567 2.713-3.214.861.257.967 2.25-.604L5.92 18.79l.865.5 1.647-2.852.603 2.25.965-.26-.861-3.216L10.994 12H11l1.857 3.219-.86 3.215.966.257.601-2.248 1.647 2.852.867-.5-1.646-2.852 2.248.602.26-.965-3.215-.861L12.155 12h3.138l2.353 2.354.708-.708L16.707 12H20v-1h-3.293l1.647-1.646-.051-.06H17L15.293 11H11v-.002l-.004-.002-1.853-3.213.86-3.215-.966-.26-.601 2.25zM16 3v1h2.293l-2 2-.293.293V7h4V6h-2.293l2-2L20 3.707V3h-.707z"/>
        <path d="M11 5v1h2.293l-2 2-.293.293V9h4V8h-2.293l2-2L15 5.707V5h-.707z"/>
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
        <path d="M9.79 5.242l-.868.5 2.146 3.717-3.615-.969-.258.967 4.58 1.227L14.844 16H8.707l-3.353-3.354-.708.708L7.293 16H3v1h4.293l-2.647 2.646.708.708L8.707 17h6.137l-3.069 5.316-4.58 1.227.258.967 3.615-.969-2.146 3.717.867.5 2.147-3.717.968 3.615.965-.26-1.226-4.58L16 17l3.357 5.816-1.226 4.58.965.26.968-3.615 2.147 3.717.867-.5-2.146-3.717 3.615.969.258-.967-4.58-1.227L17.156 17h6.137l3.353 3.354.708-.708L24.707 17H29v-1h-4.293l2.647-2.646-.708-.708L23.293 16H16v-.002l-3.357-5.814 1.226-4.58-.965-.26-.968 3.615zM23 4v1h2.293l-2 2-.293.293V8h4V7h-2.293l2-2L27 4.707V4h-.707z"/>
        <path d="M20 10v1h2.293l-2 2-.293.293V14h4v-1h-2.293l2-2 .293-.293V10h-.707zm-4-5v1h2.293l-2 2-.293.293V9h4V8h-2.293l2-2L20 5.707V5h-.707z"/>
    </g>
		</svg>
	{/if}
