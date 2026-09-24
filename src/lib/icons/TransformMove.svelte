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
       d="M 8 2 L 6 5 L 10 5 L 8 2 z M 5 6 L 2 8 L 5 10 L 5 6 z M 11 6 L 11 10 L 14 8 L 11 6 z M 8 7 C 7.4477153 7 7 7.4477153 7 8 C 7 8.5522847 7.4477153 9 8 9 C 8.5522847 9 9 8.5522847 9 8 C 9 7.4477153 8.5522847 7 8 7 z M 6 11 L 8 14 L 10 11 L 6 11 z "
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
    d="M 11 3 L 9 7 L 13 7 L 11 3 z M 7 9 L 3 11 L 7 13 L 7 9 z M 15 9 L 15 13 L 19 11 L 15 9 z M 11 10 C 10.446 10 10 10.446 10 11 C 10 11.554 10.446 12 11 12 C 11.554 12 12 11.554 12 11 C 12 10.446 11.554 10 11 10 z M 9 15 L 11 19 L 13 15 L 9 15 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
