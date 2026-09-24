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
       d="M 5 3 L 5 4 L 2 4 L 2 5 L 2 11 L 2 12 L 5 12 L 5 13 L 14 13 L 14 10 L 5 10 L 5 11 L 3 11 L 3 9 L 4 9 L 4 7 L 3 7 L 3 5 L 5 5 L 5 6 L 14 6 L 14 3 L 5 3 z "
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
    d="m7 6v1h-3-1v3 2 3h1 3v1h12v-3h-12v1h-3v-2h1v-2h-1v-2h3v1h12v-3z"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
