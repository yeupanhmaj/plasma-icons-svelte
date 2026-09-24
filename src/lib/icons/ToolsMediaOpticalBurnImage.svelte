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
     d="M8 2.00195A6 6.00001 0 0 0 2 8.00195 6 6.00001 0 0 0 8 14.00195 6 6.00001 0 0 0 14 8.00195 6 6.00001 0 0 0 8 2.00195M8 3.00195A5 5 0 0 1 13 8.00195 5 5 0 0 1 8 13.00195 5 5 0 0 1 3 8.00195 5 5 0 0 1 8 3.00195M8 4A4 4 0 0 0 4 8H6A2 2 0 0 1 8 6zM8 7A1 1 0 0 0 7 8 1 1 0 0 0 8 9 1 1 0 0 0 9 8 1 1 0 0 0 8 7M10 8A2 2 0 0 1 8 10V12A4 4 0 0 0 12 8z"
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
    d="M 11 3 C 6.568 3 3 6.568 3 11 C 3 15.432 6.568 19 11 19 C 15.432 19 19 15.432 19 11 C 19 6.568 15.432 3 11 3 z M 11 4 C 14.878 4 18 7.122 18 11 C 18 14.878 14.878 18 11 18 C 7.122 18 4 14.878 4 11 C 4 7.122 7.122 4 11 4 z M 11 5 C 7.676004 5 5 7.676 5 11 L 8 11 C 8 9.338 9.3380018 8 11 8 L 11 5 z M 11 9 C 9.8920013 9 9 9.892 9 11 C 9 12.108 9.8920013 13 11 13 C 12.107999 13 13 12.108 13 11 C 13 9.892 12.107999 9 11 9 z M 11 10 C 11.553999 10 12 10.446 12 11 C 12 11.554 11.553999 12 11 12 C 10.446001 12 10 11.554 10 11 C 10 10.446 10.446001 10 11 10 z M 14 11 C 14 12.662 12.661998 14 11 14 L 11 17 C 14.323996 17 17 14.324 17 11 L 14 11 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
