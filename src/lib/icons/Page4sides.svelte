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
     d="m2 2v12h13v-12zm1 1h2v10h-2zm3 0h2v10h-2zm3 0h2v10h-2zm3 0h2v10h-2z"
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
     d="M 2 3 L 2 19 L 8 19 L 14 19 L 15 19 L 20 19 L 20 3 L 10 3 L 2 3 z M 3 4 L 7 4 L 7 18 L 3 18 L 3 4 z M 8 4 L 11 4 L 11 18 L 8 18 L 8 4 z M 12 4 L 15 4 L 15 18 L 12 18 L 12 4 z M 16 4 L 19 4 L 19 18 L 16 18 L 16 4 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
