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
     d="m6 3v1h-3v10h4v-10h2v10h4v-10h-3v-1zm-2 2h2v8h-2zm6 0h2v8h-2z"
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
     d="M 9 4 L 9 5 L 7 5 L 6 5 L 6 6 L 6 19 L 7 19 L 10 19 L 10 18 L 10 5 L 12 5 L 12 19 L 13 19 L 16 19 L 16 18 L 16 5 L 13 5 L 13 4 L 9 4 z M 7 6 L 9 6 L 9 18 L 7 18 L 7 6 z M 13 6 L 15 6 L 15 18 L 13 18 L 13 6 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
