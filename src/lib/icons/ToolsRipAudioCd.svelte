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
     d="M 8 2 A 6 6.0000086 0 0 0 2 8 A 6 6.0000086 0 0 0 8 14 L 8 13 A 5 5 0 0 1 3 8 A 5 5 0 0 1 8 3 A 5 5 0 0 1 12.572266 6 L 13.644531 6 A 6 6.0000086 0 0 0 8 2 z M 8 4 C 5.790861 4 4 5.790861 4 8 L 6 8 C 6 6.8954305 6.8954305 6 8 6 L 8 4 z M 8 7 A 1 1 0 0 0 7 8 A 1 1 0 0 0 8 9 A 1 1 0 0 0 9 8 A 1 1 0 0 0 8 7 z M 12 7 L 12 10.269531 A 1.9999913 1.9999913 0 0 0 11 10 A 1.9999913 1.9999913 0 0 0 9 12 A 1.9999913 1.9999913 0 0 0 11 14 A 1.9999913 1.9999913 0 0 0 13 12 L 13 8 L 14 8 L 13 7 L 12 7 z "
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
    d="M 11 3 C 6.568 3 3 6.568 3 11 C 3 15.432 6.568 19 11 19 L 11 18 C 7.122 18 4 14.878 4 11 C 4 7.122 7.122 4 11 4 C 14.878 4 18 7.122 18 11 L 19 11 C 19 6.568 15.432 3 11 3 z M 11 5 C 7.676 5 5 7.676 5 11 L 8 11 C 8 9.338 9.338 8 11 8 L 11 5 z M 11 9 C 9.892 9 9 9.892 9 11 C 9 12.108 9.892 13 11 13 L 11 12 C 10.446 12 10 11.554 10 11 C 10 10.446 10.446 10 11 10 C 11.554 10 12 10.446 12 11 L 13 11 C 13 9.892 12.108 9 11 9 z M 15 10 L 15 15.277344 C 14.704935 15.106143 14.367047 15 14 15 C 12.892 15 12 15.892 12 17 C 12 18.108 12.892 19 14 19 C 15.108 19 16 18.108 16 17 L 16 12 L 16 11 L 17 11 L 16 10 L 15 10 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
