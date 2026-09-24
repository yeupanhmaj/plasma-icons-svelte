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
       d="M 14 2 L 6 4 L 6 12 L 14 10 L 14 2 z M 13 3.5 L 13 9 L 7 10.5 L 7 5 L 13 3.5 z M 2 5 L 2 14 L 10 14 L 10 12 L 9 12 L 9 13 L 3 13 L 3 6 L 5 6 L 5 5 L 2 5 z "
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
    d="M 19 3 L 18 3.0996094 L 9 4 L 9 5 L 9 14 L 9 15 L 10 14.900391 L 19 14 L 19 13 L 19 4 L 19 3 z M 18 4.0996094 L 18 13.099609 L 10 13.900391 L 10 4.9003906 L 18 4.0996094 z M 3 6 L 3 7 L 3 18 L 3 19 L 12 19 L 13 19 L 13 18 L 13 16 L 12 16 L 12 18 L 4 18 L 4 7 L 8 7 L 8 6 L 3 6 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
