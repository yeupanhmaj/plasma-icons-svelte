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
     d="M 8 2 A 6 6 0 0 0 2 8 A 6 6 0 0 0 8 14 A 6 6 0 0 0 14 8 A 6 6 0 0 0 8 2 z M 8 3 L 8 8 L 3 8 A 5 5 0 0 1 8 3 z "
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
     d="m 11,3 c -4.4,0 -8,3.6 -8,8 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z m 0,1 v 7 H 4 C 4,7.1 7.1,4 11,4 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
