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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 9 5 L 10 5 L 10 8 L 13 8 L 13 13 L 7 13 L 7 12 L 6 12 L 6 14 L 14 14 L 14 7 L 11 4 L 9 4 L 9 5 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 5.5 2 C 4.11929 2 3 3.11929 3 4.5 L 3 6 L 2 6 L 2 11 L 9 11 L 9 6 L 8 6 L 8 4.5 C 8 3.11929 6.88071 2 5.5 2 Z M 5.5 3 C 6.32843 3 7 3.67157 7 4.5 L 7 6 L 4 6 L 4 4.5 C 4 3.67157 4.67157 3 5.5 3 Z M 3 7 L 4 7 L 7 7 L 8 7 L 8 10 L 3 10 L 3 7 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 11 18 L 19 18 L 19 11 L 16 11 L 15 11 L 15 10 L 15 7 L 12 7 L 12 6 L 16 6 L 20 10 L 20 11 L 20 18 L 20 19 L 10 19 L 10 16 L 11 16 L 11 18 Z"/>
    <path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 10 L 12 10 L 12 14 L 4 14 L 4 10 Z M 8 4 C 9.10457 4 10 4.89543 10 6 L 10 9 L 6 9 L 6 6 C 6 4.89543 6.89543 4 8 4 Z M 8 3 C 6.34314 3 5 4.34314 5 6 L 5 9 L 3 9 L 3 15 L 13 15 L 13 9 L 11 9 L 11 6 C 11 4.34314 9.65686 3 8 3 Z"/>
		</svg>
	{/if}
