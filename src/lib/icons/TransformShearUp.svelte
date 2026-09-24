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
       d="M 2 2 L 2 11 L 5 11 L 5 10 L 3 10 L 3 3 L 9 3 L 9 4 L 10 4 L 10 2 L 2 2 z M 6 4 L 6 12 L 14 14 L 14 6 L 6 4 z M 7 5.5 L 13 7 L 13 12.5 L 7 11 L 7 5.5 z "
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
    d="M 3 3 L 3 4 L 3 15 L 3 16 L 8 16 L 8 15 L 4 15 L 4 4 L 12 4 L 12 6 L 13 6 L 13 4 L 13 3 L 12 3 L 3 3 z M 9 7 L 9 8 L 9 17 L 9 18 L 18 18.900391 L 19 19 L 19 18 L 19 9 L 19 8 L 10 7.0996094 L 9 7 z M 10 8.0996094 L 18 8.9003906 L 18 17.900391 L 10 17.099609 L 10 8.0996094 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
