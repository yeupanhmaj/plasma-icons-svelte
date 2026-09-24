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
     d="M 2 2 L 2 4 L 3 4 L 3 3 L 13 3 L 13 4 L 14 4 L 14 2 L 2 2 z M 8 4 L 3 9.1679688 L 3.8046875 10 L 8 5.6621094 L 12.195312 10 L 13 9.1679688 L 8 4 z M 6 10 L 6 14 L 7 14 L 10 14 L 10 10 L 9 10 L 9 13 L 7 13 L 7 10 L 6 10 z "
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
     d="M 4 3 L 4 5 L 5 5 L 5 4 L 17 4 L 17 5 L 18 5 L 18 3 L 17 3 L 5 3 L 4 3 z M 11 5 L 5 11.183594 L 5.7929688 12 L 11 6.6328125 L 16.207031 12 L 17 11.183594 L 11 5 z M 8 13 L 8 19 L 9 19 L 13 19 L 14 19 L 14 13 L 13 13 L 13 18 L 9 18 L 9 13 L 8 13 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
