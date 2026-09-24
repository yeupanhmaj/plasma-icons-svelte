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
     d="M 6 2 L 6 3 L 6 6 L 7 6 L 7 3 L 9 3 L 9 6 L 10 6 L 10 3 L 10 2 L 9 2 L 7 2 L 6 2 z M 3.8046875 6 L 3 6.8320312 L 8 12 L 13 6.8320312 L 12.195312 6 L 8 10.337891 L 3.8046875 6 z M 2 12 L 2 14 L 3 14 L 13 14 L 14 14 L 14 13 L 14 12 L 13 12 L 13 13 L 3 13 L 3 12 L 2 12 z "
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
    d="M 8 3 L 8 9 L 9 9 L 9 4 L 13 4 L 13 9 L 14 9 L 14 3 L 13 3 L 9 3 L 8 3 z M 5.7929688 10 L 5 10.816406 L 11 17 L 17 10.816406 L 16.207031 10 L 11 15.367188 L 5.7929688 10 z M 4 17 L 4 19 L 5 19 L 17 19 L 18 19 L 18 17 L 17 17 L 17 18 L 5 18 L 5 17 L 4 17 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
