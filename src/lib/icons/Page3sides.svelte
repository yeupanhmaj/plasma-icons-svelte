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
     d="m2 2v12h13v-12zm1 1h3v10h-3zm4 0h3v10h-3zm4 0h3v10h-3z"
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
     d="M 3 3 L 3 19 L 9 19 L 19 19 L 19 3 L 11 3 L 3 3 z M 4 4 L 8 4 L 8 18 L 4 18 L 4 4 z M 9 4 L 13 4 L 13 18 L 9 18 L 9 4 z M 14 4 L 18 4 L 18 18 L 14 18 L 14 4 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
