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
       d="M 5 2 L 5 5 L 6 5 L 6 3 L 13 3 L 13 9 L 12 9 L 12 10 L 14 10 L 14 2 L 5 2 z M 4 6 L 2 14 L 10 14 L 12 6 L 4 6 z M 5 7 L 10.5 7 L 9 13 L 3.5 13 L 5 7 z "
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
    d="M 6 3 L 6 8 L 7 8 L 7 4 L 18 4 L 18 12 L 16 12 L 16 13 L 18 13 L 19 13 L 19 12 L 19 3 L 18 3 L 7 3 L 6 3 z M 4 9 L 3.0996094 18 L 3 19 L 4 19 L 13 19 L 14 19 L 14.900391 10 L 15 9 L 14 9 L 5 9 L 4 9 z M 4.9003906 10 L 13.900391 10 L 13.099609 18 L 4.0996094 18 L 4.9003906 10 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
