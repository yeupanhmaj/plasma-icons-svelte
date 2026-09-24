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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m11 8c-1.662 0-3 1.338-3 3s1.338 3 3 3 3-1.338 3-3-1.338-3-3-3zm0 1a2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -2-2 2 2 0 0 1 2-2z"/>
        <path d="m2 2v12h6v-1h-5v-6h2l2-2h6.028l-.028 3h1v-4h-4.992l-2-2-.008.008v-.008h-4z"/>
        <path d="m10 9v3h2v-1h-1v-2z"/>
    </g>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m15 11c-2.215995 0-4 1.784005-4 4s1.784005 4 4 4 4-1.784005 4-4-1.784005-4-4-4m0 1c1.661995 0 3 1.338005 3 3s-1.338005 3-3 3-3-1.338005-3-3 1.338005-3 3-3m-1 1v3h2v-1h-1v-2h-1m-11-10v16h8v-1h-7v-8h3v-0.009766l0.007813 0.009766 2-2h8.992188v3h1v-6h-6.992188l-2-2-0.0078 0.00977v-0.00977h-7" class="ColorScheme-Text"
    />
		</svg>
	{/if}
