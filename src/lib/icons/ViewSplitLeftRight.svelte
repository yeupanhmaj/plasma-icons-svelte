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
       d="M 2 2 L 2 14 L 7 14 L 7 2 L 2 2 z M 8 2 L 8 14 L 14 14 L 14 2 L 8 2 z M 3 5 L 6 5 L 6 13 L 3 13 L 3 5 z M 9 5 L 13 5 L 13 13 L 9 13 L 9 5 z "
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
    d="m3 3v16h7v-1-11-4h-7m8 0v16h1 1 6v-16h-6-1-1m-7 4h5v11h-5v-11m8 0h1 5v11h-5-1v-11"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
