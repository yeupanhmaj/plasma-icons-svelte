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
     d="M 7.5 2 L 4 9 L 4.8945312 9.4472656 L 7 5.2363281 L 7 8 L 8 8 L 8 5.2363281 L 10.105469 9.4472656 L 11 9 L 7.5 2 z M 7 9 L 7 11 L 8 11 L 8 9 L 7 9 z M 7 12 L 7 14 L 8 14 L 8 12 L 7 12 z "
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
	d="M 10.5 3 L 7 10 L 7.8945312 10.447266 L 10 6.2363281 L 10 10 L 11 10 L 11 6.2363281 L 13.105469 10.447266 L 14 10 L 10.5 3 z M 10 11 L 10 13 L 11 13 L 11 11 L 10 11 z M 10 14 L 10 16 L 11 16 L 11 14 L 10 14 z M 10 17 L 10 19 L 11 19 L 11 17 L 10 17 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
