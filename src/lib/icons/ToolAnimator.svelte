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
     d="m2 2v12h12v-10h-9v-1h9v-1zm1 4h10v3h-10zm0 4h6v1h-6zm7 0h3v3h-3zm-7 2h6v1h-6z"
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
    d="M 3 3 L 3 7 L 3 8 L 3 18 L 3 19 L 19 19 L 19 18 L 19 17 L 19 16 L 19 8 L 19 7 L 19 4.9003906 L 7 6 L 7 5 L 19 4 L 19 3 L 7 3 L 3 3 z M 4 8 L 18 8 L 18 10 L 4 10 L 4 8 z M 4 11 L 7 11 L 7 14 L 4 14 L 4 11 z M 8 11 L 14 11 L 14 14 L 8 14 L 8 11 z M 15 11 L 18 11 L 18 14 L 15 14 L 15 11 z M 4 15 L 14 15 L 14 16 L 4 16 L 4 15 z M 15 15 L 18 15 L 18 16 L 15 16 L 15 15 z M 4 17 L 14 17 L 15 17 L 18 17 L 18 18 L 4 18 L 4 17 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
