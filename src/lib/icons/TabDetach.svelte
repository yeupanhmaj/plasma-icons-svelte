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
     d="M 2 2 L 2 14 L 14 14 L 14 5 L 7 5 L 7 2 L 6 2 L 2 2 z M 8 2 L 8 4 L 13 4 L 13 2 L 8 2 z M 3 3 L 6 3 L 6 5 L 6 6 L 13 6 L 13 13 L 3 13 L 3 3 z "
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
     d="m3 3v1 14 1h16v-1-12h-1-2-7v-1-2h-1-4m6 0v2h8v-2zm-6 1h4v3h8 2v11h-14z"
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
