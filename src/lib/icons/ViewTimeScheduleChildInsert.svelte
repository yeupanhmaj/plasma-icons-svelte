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
			<path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 2 2 L 2 9 L 3 9 L 3 5 L 4 5 L 12 5 L 13 5 L 13 8 L 14 8 L 14 2 L 12 2 L 12 4 L 10 4 L 10 2 L 6 2 L 6 4 L 4 4 L 4 2 L 2 2 z M 4 6 L 4 8 L 5 8 L 9 8 L 10 8 L 10 6 L 9 6 L 9 7 L 5 7 L 5 6 L 4 6 z M 4 9 L 4 11 L 2 11 L 2 12 L 4 12 L 4 14 L 5 14 L 5 12 L 7 12 L 7 11 L 5 11 L 5 9 L 4 9 z M 8 9 L 8 14 L 14 14 L 14 9 L 13 9 L 13 10 L 12 10 L 12 9 L 10 9 L 10 10 L 9 10 L 9 9 L 8 9 z M 9 11 L 13 11 L 13 13 L 9 13 L 9 11 z "
     class="ColorScheme-Text"
       id="rect4449" />
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
    d="M 3 3 L 3 13 L 4 13 L 4 7 L 18 7 L 18 9 L 19 9 L 19 3 L 17 3 L 17 5.0996094 L 15 5.0996094 L 15 3 L 7 3 L 7 5.0996094 L 5 5.0996094 L 5 3 L 3 3 z M 11 11 L 11 19 L 19 19 L 19 11 L 18 11 L 18 12 L 17 12 L 17 11 L 13 11 L 13 12 L 12 12 L 12 11 L 11 11 z M 12 13 L 18 13 L 18 18 L 12 18 L 12 13 z M 5 14 L 5 16 L 3 16 L 3 17 L 5 17 L 5 19 L 6 19 L 6 17 L 8 17 L 8 16 L 6 16 L 6 14 L 5 14 z M 13 14 L 13 15 L 13 16 L 13 17 L 14 17 L 14 16 L 16 16 L 16 17 L 17 17 L 17 14 L 16 14 L 16 15 L 14 15 L 14 14 L 13 14 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
