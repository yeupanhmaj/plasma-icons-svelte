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
     d="M 8 2 A 6 2 0 0 0 2 4 L 2 12 A 6 2 0 0 0 8 14 A 6 2 0 0 0 14 12 L 14 4 A 6 2 0 0 0 8 2 z M 8 3 A 5 1 0 0 1 13 4 A 5 1 0 0 1 8 5 A 5 1 0 0 1 3 4 A 5 1 0 0 1 8 3 z M 3 5.1015625 A 6 2 0 0 0 8 6 A 6 2 0 0 0 13 5.1035156 L 13 8 A 5 1 0 0 1 8 9 A 5 1 0 0 1 3 8 L 3 5.1015625 z M 3 9.1015625 A 6 2 0 0 0 8 10 A 6 2 0 0 0 13 9.1035156 L 13 12 A 5 1 0 0 1 8 13 A 5 1 0 0 1 3 12 L 3 9.1015625 z "
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
    d="M 11 3 A 8 3 0 0 0 3 6 L 3 16 A 8 3 0 0 0 11 19 A 8 3 0 0 0 19 16 L 19 6 A 8 3 0 0 0 11 3 z M 11 4 A 7 2 0 0 1 18 6 A 7 2 0 0 1 11 8 A 7 2 0 0 1 4 6 A 7 2 0 0 1 11 4 z M 18 7.4453125 L 18 11 A 7 2 0 0 1 11 13 A 7 2 0 0 1 4 11 L 4 7.4511719 A 8 3 0 0 0 11 9 A 8 3 0 0 0 18 7.4453125 z M 18 12.445312 L 18 16 A 7 2 0 0 1 11 18 A 7 2 0 0 1 4 16 L 4 12.451172 A 8 3 0 0 0 11 14 A 8 3 0 0 0 18 12.445312 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
