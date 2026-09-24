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
     d="M 8 2 C 4.7 2 2 4.7 2 8 C 2 11.3 4.7 14 8 14 C 11.3 14 14 11.3 14 8 C 14 4.7 11.3 2 8 2 z "
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
     d="M 11 3 C 6.6 3 3 6.6 3 11 C 3 15.4 6.6 19 11 19 C 15.4 19 19 15.4 19 11 C 19 6.6 15.4 3 11 3 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
