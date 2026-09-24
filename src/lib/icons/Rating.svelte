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

	{#if numericSize <= 12}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8 8"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path d="M4 .094l1.236 2.505L8 3 6 4.95l.472 2.753L4 6.403l-2.472 1.3L2 4.95 0 3l2.764-.401z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{:else if numericSize <= 19}
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M8 .188l2.472 5.009L16 6l-4 3.899.944 5.506L8 12.805l-4.944 2.6L4 9.899 0 6l5.528-.803z"/>
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
			<path d="M11 .008l3.4 6.888L22 8l-5.5 5.361 1.298 7.57L11 17.357l-6.798 3.574 1.298-7.57L0 8l7.6-1.104z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
