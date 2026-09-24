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
     d="m2 2v5h12v-5zm1 1h10v3h-10zm-1 5v6l4-3zm5 0v3h1v-3zm2 0v3h5v-3z"
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
    d="M 3 3 L 3 4 L 3 10 L 4 10 L 19 10 L 19 9 L 19 3 L 18 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 9 L 4 9 L 4 4 z M 3 11 L 3 19 L 8 15 L 3 11 z M 11 12 L 11 15 L 13 15 L 13 12 L 11 12 z M 15 12 L 15 15 L 19 15 L 19 12 L 15 12 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
