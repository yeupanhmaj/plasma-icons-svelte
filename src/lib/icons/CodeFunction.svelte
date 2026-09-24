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
     d="M 4 4 L 4 5 L 8 5 L 8 4 L 4 4 z M 9 4 L 9 11 L 14 11 L 14 4 L 9 4 z M 2 6 L 2 7 L 6 7 L 6 6 L 2 6 z M 3 8 L 3 9 L 6 9 L 6 8 L 3 8 z M 5 10 L 5 11 L 8 11 L 8 10 L 5 10 z "
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
	 d="m6 7v1h4v-1h-4m5 0v8h8v-8h-8m-8 2v1h4v-1h-4m1 3v1h3v-1h-3m2 2v1h4v-1h-4"
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
