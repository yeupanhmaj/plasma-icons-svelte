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
       d="M 5 4 L 5 5 L 3 5 L 2 5 L 2 6 L 2 11 L 3 11 L 5 11 L 5 12 L 14 12 L 14 9 L 5 9 L 5 10 L 3 10 L 3 9 L 4 9 L 4 7 L 3 7 L 3 6 L 5 6 L 5 7 L 14 7 L 14 4 L 5 4 z "
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
    d="m7 7v1h-3-1v2 2 1.9h1 3v1h12v-3h-12v1h-3v-.9h1v-2h-1v-1h3v1h12v-3z"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
