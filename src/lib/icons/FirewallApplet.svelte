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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M9 10h5v3H9zM2 2v3h6V2zm7 0v3h5V2zM2 6v3h2V6zm3 0v3h6V6zm7 0v3h2V6zM2 10v3h6v-3z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M16 15h3v3h-3zM3 15h3v3H3zm4 0h8v3H7zm5-4h7v3h-7zm-9 0h8v3H3zm13-4h3v3h-3zM3 7h3v3H3zm4 0h8v3H7zm5-4h7v3h-7zM3 3h8v3H3z"/>
		</svg>
	{/if}
