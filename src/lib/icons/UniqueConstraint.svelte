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
     d="m4 2v8c0 2.209 1.791 4 4 4 2.209 0 4-1.791 4-4v-8h-1v8c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3v-8z"
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
    d="M 5 3 L 5 13 A 6 6 0 0 0 11 19 A 6 6 0 0 0 17 13 L 17 3 L 16 3 L 16 13 A 5 5 0 0 1 11 18 A 5 5 0 0 1 6 13 L 6 3 L 5 3 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
