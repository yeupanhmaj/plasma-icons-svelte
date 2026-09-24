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
       d="M 2 2 L 2 14 L 7 14 L 7 13 L 3 13 L 3 5 L 13 5 L 13 8 L 14 8 L 14 2 L 12 2 L 12 4 L 10 4 L 10 2 L 6 2 L 6 4 L 4 4 L 4 2 L 2 2 z M 4 6 L 4 9 L 5 9 L 5 8 L 8 8 L 8 9 L 9 9 L 9 6 L 8 6 L 8 7 L 5 7 L 5 6 L 4 6 z M 12 8 L 11 9 L 10 10 L 8 12 L 8 13 L 8 14 L 10 14 L 10.59375 13.40625 L 11 13 L 12 12 L 13 11 L 14 10 L 12 8 z M 11.689453 9.6894531 L 12.28125 10.28125 L 12 10.5625 L 10.59375 11.96875 L 10.59375 11.984375 L 9.3125 13.28125 L 8.71875 12.6875 L 11.689453 9.6894531 z "
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
     d="M 3 3 L 3 19 L 12 19 L 12 18 L 4 18 L 4 7 L 18 7 L 18 13 L 19 13 L 19 3 L 17 3 L 17 6 L 15 6 L 15 3 L 7 3 L 7 6 L 5 6 L 5 3 L 3 3 z M 5 8 L 5 11 L 6 11 L 6 10 L 10 10 L 10 11 L 11 11 L 11 8 L 10 8 L 10 9 L 6 9 L 6 8 L 5 8 z M 7 12 L 7 15 L 8 15 L 8 14 L 12 14 L 12 15 L 13 15 L 13 12 L 12 12 L 12 13 L 8 13 L 8 12 L 7 12 z M 17 13 L 16 14 L 15 15 L 13 17 L 13 18 L 13 19 L 15 19 L 15.59375 18.40625 L 16 18 L 17 17 L 18 16 L 19 15 L 17 13 z M 16.689453 14.689453 L 17.28125 15.28125 L 17 15.5625 L 15.59375 16.96875 L 15.59375 16.984375 L 14.3125 18.28125 L 13.71875 17.6875 L 16.689453 14.689453 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
