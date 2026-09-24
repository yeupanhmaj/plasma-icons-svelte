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
       d="M 2 2 L 2 10 L 4 10 L 4 9 L 3 9 L 3 3 L 10 3 L 10 5 L 11 5 L 11 2 L 2 2 z M 4 6 L 6 14 L 14 14 L 12 6 L 4 6 z M 5.5 7 L 11 7 L 12.5 13 L 7 13 L 5.5 7 z "
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
     d="M 3 3 L 3 12 L 3 13 L 4 13 L 6 13 L 6 12 L 4 12 L 4 4 L 15 4 L 15 8 L 16 8 L 16 3 L 15 3 L 4 3 L 3 3 z M 7 9 L 7.0996094 10 L 8 19 L 9 19 L 18 19 L 19 19 L 18.900391 18 L 18 9 L 17 9 L 8 9 L 7 9 z M 8.0996094 10 L 17.099609 10 L 17.900391 18 L 8.9003906 18 L 8.0996094 10 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
