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
       d="M 2 2 L 2 3 L 14 3 L 14 2 L 2 2 z M 2 4 L 2 5 L 9 5 L 14 5 L 14 4 L 9 4 L 2 4 z M 2 7 L 2 8 L 5 8 L 14 8 L 14 7 L 5 7 L 2 7 z M 2 9 L 2 10 L 10 10 L 14 10 L 14 9 L 10 9 L 2 9 z M 2 12 L 2 13 L 6 13 L 14 13 L 14 12 L 6 12 L 2 12 z "
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
    d="m3 3v1h16v-1zm0 3v1h16v-1zm0 3v1h16v-1zm0 3v1h16v-1zm0 3v1h16v-1zm0 3v1h16v-1z"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
