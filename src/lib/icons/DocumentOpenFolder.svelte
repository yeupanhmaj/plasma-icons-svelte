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
     d="M 2 2 L 2 3 L 2 6 L 2 7 L 2 13 L 2 14 L 14 14 L 14 13 L 14 6 L 14 5 L 14 4 L 9.0078125 4 L 7.0078125 2 L 7 2.0078125 L 7 2 L 3 2 L 2 2 z M 3 3 L 6.5917969 3 L 7.59375 4 L 7 4 L 7 4.0078125 L 6.9921875 4 L 4.9921875 6 L 3 6 L 3 3 z M 3 7 L 13 7 L 13 13 L 3 13 L 3 7 z "
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
	d="m3 3v1 15h1 15v-1-13h-6.992188l-2-2-.007812.007813v-.007813h-6-1m6.00781 5h8.992188v10h-14v-8h3v-.007813l.007813.007813 2-2"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
