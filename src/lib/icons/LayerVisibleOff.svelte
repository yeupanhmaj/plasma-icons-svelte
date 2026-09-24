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
     d="M 13.320312 2 L 2.0058594 13.294922 L 2.7207031 14 L 14.005859 2.6972656 L 13.320312 2 z M 4.0058594 3 L 1.0058594 5 L 9.0253906 5 L 11.025391 3 L 4.0058594 3 z M 4.0058594 7 L 1.0058594 9 L 5.0253906 9 L 7.0253906 7 L 4.0058594 7 z M 11.025391 7 L 9.0253906 9 L 12.007812 9 L 15.007812 7 L 11.025391 7 z M 6.9804688 11 L 4.9804688 13 L 12 13 L 15 11 L 6.9804688 11 z "
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
     d="M 4 3 L 1 7 L 13 7 L 17 3 L 4 3 z M 18.292969 3 L 3 18.292969 L 3.7070312 19 L 19 3.7070312 L 18.292969 3 z M 4 9 L 1 13 L 7 13 L 11 9 L 4 9 z M 15 9 L 11 13 L 18 13 L 21 9 L 15 9 z M 9 15 L 5 19 L 18 19 L 21 15 L 9 15 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
