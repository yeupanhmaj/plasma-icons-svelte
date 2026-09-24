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
     d="m2 2v1h2v10h-2v1h5v-1h-2v-10h2v-1zm5 8v2h7v-2h-1v1h-5v-1z"
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
     d="M 3 3 L 3 4 L 5 4 L 5 18 L 3 18 L 3 19 L 8 19 L 8 18 L 6 18 L 6 4 L 8 4 L 8 3 L 3 3 z M 8 15 L 8 17 L 9 17 L 18 17 L 19 17 L 19 16 L 19 15 L 18 15 L 18 16 L 9 16 L 9 15 L 8 15 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
