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
     d="M 5 2 L 3 5 L 4 5 L 4 7 L 6 4 L 5 4 L 5 2 z M 8 2 L 8 3 L 12 3 L 12 10 L 9 10 L 9 13 L 4 13 L 4 8 L 3 8 L 3 14 L 9 14 L 10 14 L 13 11 L 13 10 L 13 2 L 8 2 z "
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
    d="M 8 3 L 4 10 L 6 10 L 6 15 L 10 8 L 8 8 L 8 3 z M 9 3 L 9 4 L 17 4 L 17 14 L 13 14 L 13 14.998047 L 13 17.998047 L 5 17.998047 L 5 15 L 4 15 L 4 19 L 5 19 L 13 19 L 14 19 L 14 18.988281 L 14.007812 19 L 18 15.007812 L 18 14.996094 L 18 14 L 18 4 L 18 3 L 9 3 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
