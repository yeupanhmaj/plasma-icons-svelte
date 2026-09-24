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
     d="M 8 2 C 4.7 2 2 4.7 2 8 C 2 11.3 4.7 14 8 14 C 11.3 14 14 11.3 14 8 C 14 4.7 11.3 2 8 2 z M 8 3 L 8 13 C 5.2 13 3 10.8 3 8 C 3 5.2 5.2 3 8 3 z "
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
     d="M 11 3 A 8 8 0 0 0 3 11 A 8 8 0 0 0 11 19 A 8 8 0 0 0 19 11 A 8 8 0 0 0 11 3 z M 11 4 L 11 18 A 7 7 0 0 1 4 11 A 7 7 0 0 1 11 4 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
