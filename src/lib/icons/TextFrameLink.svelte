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
     d="M 2 2 L 2 14 L 7 14 L 7 13 L 3 13 L 3 3 L 7 3 L 7 2 L 2 2 z M 9 2 L 9 14 L 14 14 L 14 2 L 10 2 L 9 2 z M 10 3 L 13 3 L 13 13 L 10 13 L 10 3 z M 4 4 L 4 5 L 7 5 L 7 4 L 4 4 z M 4 6 L 4 7 L 6 7 L 6 6 L 4 6 z M 4 8 L 4 9 L 5 9 L 5 8 L 4 8 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:#1d99f3"
     d="m 6,8 0,4 2,-2 z" />
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
     d="M 3 3 L 3 4 L 3 19 L 4 19 L 10 19 L 10 18 L 4 18 L 4 4 L 10 4 L 10 3 L 4 3 L 3 3 z M 13 3 L 13 4 L 18 4 L 18 18 L 13 18 L 13 19 L 19 19 L 19 18 L 19 3 L 13 3 z M 13 18 L 13 4 L 12 4 L 12 18 L 13 18 z M 5 5 L 5 6 L 8 6 L 8 5 L 5 5 z M 5 7 L 5 8 L 8 8 L 8 7 L 5 7 z M 5 9 L 5 10 L 8 10 L 8 9 L 5 9 z M 9 9 L 9 13 L 11 11 L 9 9 z M 5 11 L 5 12 L 7 12 L 7 11 L 5 11 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
