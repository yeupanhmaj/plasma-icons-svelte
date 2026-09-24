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
			<path style="fill:currentColor" 
     d="M 8 2 A 6 6 0 0 0 2 8 A 6 6 0 0 0 8 14 A 6 6 0 0 0 14 8 A 6 6 0 0 0 8 2 z M 8 3 L 8 8 L 13 8 A 5 5 0 0 1 8 13 A 5 5 0 0 1 3 8 A 5 5 0 0 1 8 3 z "
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
     style="fill:currentColor"
     d="M 11 3 C 6.6 3 3 6.6 3 11 C 3 15.4 6.6 19 11 19 C 15.4 19 19 15.4 19 11 C 19 6.6 15.4 3 11 3 z M 11 4 L 11 11 L 18 11 L 18 11 C 18 14.9 14.9 18 11 18 C 7.122 18 4 14.9 4 11 C 4 7.122 7.122 4 11 4 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
