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
			<path d="M4 .094l-.45.908-.786 1.596L0 3l2 1.95L1.527 7.7 4 6.402l2.473 1.3L6 4.948 8 3l-2.764-.402zm0 2.26l.572 1.158 1.28.185-.926.903.217 1.273L4 5.271l-1.143.602.217-1.273-.926-.903 1.28-.185z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
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
			<path style="fill:currentColor;stroke:none" class="ColorScheme-Text" d="M8 .188l-2.473 5.01L0 6l4 3.898-.943 5.506L8 12.804l4.943 2.598L12 9.898 16 6l-5.527-.803zm0 2.261l1.809 3.662 4.043.588-2.926 2.852.69 4.025L8 11.676l-3.615 1.9.69-4.025-2.927-2.852 4.043-.588z"/>
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
			<path d="M11 .008l-.448.908-2.951 5.978L-.001 8l5.5 5.361-1.296 7.57 6.796-3.574 6.8 3.574-1.3-7.57L22 8l-7.6-1.106zm0 2.26l2.735 5.54 6.113.889-4.424 4.314 1.045 6.092L11 16.226l-5.47 2.875 1.044-6.09L2.15 8.697l6.115-.889z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
