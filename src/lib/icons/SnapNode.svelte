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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 6 L 11 7 L 8 7 L 8 8 L 11 8 L 11 9 L 14 9 L 14 6 L 11 6 z M 2 7 L 2 8 L 3 8 L 3 7 L 2 7 z M 4 7 L 4 8 L 5 8 L 5 7 L 4 7 z M 6 7 L 6 8 L 7 8 L 7 7 L 6 7 z "
     class="ColorScheme-Text"/>
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
     d="M 16 10 L 16 11 L 13 11 L 13 12 L 16 12 L 16 13 L 19 13 L 19 10 L 16 10 z M 3 11 L 3 12 L 4 12 L 4 11 L 3 11 z M 5 11 L 5 12 L 6 12 L 6 11 L 5 11 z M 7 11 L 7 12 L 8 12 L 8 11 L 7 11 z M 9 11 L 9 12 L 10 12 L 10 11 L 9 11 z M 11 11 L 11 12 L 12 12 L 12 11 L 11 11 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
