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
       d="M 2 2 L 2 3 L 14 3 L 14 2 L 2 2 z M 4 4 L 4 5 L 12 5 L 12 4 L 4 4 z M 2 7 L 2 8 L 14 8 L 14 7 L 2 7 z M 5 9 L 5 10 L 11 10 L 11 9 L 5 9 z M 2 12 L 2 13 L 14 13 L 14 12 L 2 12 z M 6 14 L 6 15 L 10 15 L 10 14 L 6 14 z "
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
    d="m3 1033.3622v1h16v-1zm2 2v1h12.1v-1zm-2 4v1h16v-1zm4 2v1h8v-1zm-4 3v1h16v-1zm2 2v1h12v-1zm5 2v1h2v-1z" transform="translate(0-1030.3622)"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
