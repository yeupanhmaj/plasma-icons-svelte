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
        d="m 0,2 0,12 16,0 0,-12 z m 3,2 10,0 0,8 -10,0 z M 1,7 2,7 2,9 1,9 Z m 13,0 1,0 0,2 -1,0 z" 
        class="ColorScheme-Text"/>
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
          d="M 1 5 L 1 18 L 21 18 L 21 5 L 1 5 z M 4 6 L 7.5 6 L 8.5 6 L 18 6 L 18 17 L 8.5 17 L 7.5 17 L 4 17 L 4 6 z M 2 8 L 3 8 L 3 15 L 2 15 L 2 8 z M 19 8 L 20 8 L 20 14.5 L 20 15 L 19 15 L 19 14.5 L 19 8 z " 
          class="ColorScheme-Text"/>
		</svg>
	{/if}
