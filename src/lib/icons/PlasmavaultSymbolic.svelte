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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M2 2v12h12V4H9.008l-2-2L7 2.008V2H2zm1 1h3.592l1.002 1H7v.008L6.992 4l-2 2H3V3zm7.057 3.756A2.344 2.344 0 0 1 12.395 9H13v4H7V9h.717a2.344 2.344 0 0 1 2.34-2.244zm-.008.781A1.563 1.563 0 0 0 8.5 9h3.115a1.563 1.563 0 0 0-1.558-1.463 1.563 1.563 0 0 0-.008 0z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M3 3v16h16V5h-6.992l-2-2-.008.008V3H3zm1 1h5.586l1.004 1.004L6.57 9H4V4zm10 5a3 3 0 0 1 3 3v1h1v5h-8v-5h1v-1a3 3 0 0 1 3-3zm0 1a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2z"/>
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
			<g id="plasmavault" transform="translate(0,1e-06)">
        <path id="rect4230" d="m0-1e-6h32.000004v32h-32.000004z" fill="none"/>
        <path id="path875" d="m4 4v24h24v-21h-11l-3-3zm1 1h8.585938l2.207031 2.2070312-5.792969 5.7929688h-5zm16 8a4 4 0 0 1 4 4v3h2v7h-12v-7h2v-3a4 4 0 0 1 4-4zm0 1a3.0003099 3 0 0 0-3 3v3h6v-3a3.0003099 3 0 0 0-3-3z" class="ColorScheme-Text" fill="currentColor"/>
    </g>
		</svg>
	{/if}
