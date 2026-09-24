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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m8 2c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6m0 1c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5m0 2c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3 .943-.001 1.831-.446 2.396-1.201l-.799-.6c-.377.503-.969.8-1.598.801-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 .63 0 1.222.297 1.6.801l.797-.6c-.566-.755-1.453-1.2-2.396-1.201"
     class="ColorScheme-Text"
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
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 11 3 A 8 7.9999919 0 0 0 3 11 A 8 7.9999919 0 0 0 11 19 A 8 7.9999919 0 0 0 19 11 A 8 7.9999919 0 0 0 11 3 z M 11 4 A 7 7 0 0 1 18 11 A 7 7 0 0 1 11 18 A 7 7 0 0 1 4 11 A 7 7 0 0 1 11 4 z M 11 6 A 5 5 0 0 0 6 11 A 5 5 0 0 0 11 16 A 5 5 0 0 0 14.533203 14.533203 L 13.826172 13.826172 A 4 4 0 0 1 11 15 A 4 4 0 0 1 7 11 A 4 4 0 0 1 11 7 A 4 4 0 0 1 13.826172 8.1738281 L 14.533203 7.4667969 A 5 5 0 0 0 11 6 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
