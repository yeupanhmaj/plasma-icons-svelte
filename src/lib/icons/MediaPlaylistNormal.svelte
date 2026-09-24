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

	{#if numericSize <= 27}
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
    d="M 16 5 L 16 7 L 3 7 L 3 8 L 16 8 L 16 10 L 19 7.5 L 16 5 z M 16 12 L 16 14 L 3 14 L 3 15 L 16 15 L 16 17 L 19 14.5 L 16 12 z "
    class="ColorScheme-Text"
    />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 23.5,6.9999993 V 9.9999998 L 4,10 v 1 h 19.5 v 3 L 28,10.5 Z M 23.5,18 v 3 H 4 c 0,1 0,0 0,1 h 19.5 v 3 L 28,21.5 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
