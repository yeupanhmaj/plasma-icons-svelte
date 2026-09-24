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
			<path d="m0 14v-9l3-3h10l3 3v9zm1-1h6v-10h-3v3h-3zm8 0h6v-7h-3v-3h-3z"  style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
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
			<g  style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text">
        <path d="m12 17v-12h6l3 3v9zm1-1h7v-7h-3v-3h-4z"/>
        <path d="m10 17v-12h-6l-3 3v9zm-1-1h-7v-7h3v-3h4z"/>
    </g>
		</svg>
	{/if}
