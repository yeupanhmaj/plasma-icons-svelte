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
       d="M 2 2 L 2 3 L 14 3 L 14 2 L 2 2 z M 7 4 L 7 5 L 14 5 L 14 4 L 7 4 z M 4 7 L 4 8 L 14 8 L 14 7 L 4 7 z M 9 9 L 9 10 L 14 10 L 14 9 L 9 9 z M 6 12 L 6 13 L 14 13 L 14 12 L 6 12 z M 2 13 L 2 14 L 4 14 L 4 13 L 2 13 z "
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
    d="m3 1033.3622v1h16v-1zm0 2v1h9v-1zm0 4v1h10v-1zm0 2v1h4v-1zm0 4v1h10v-1zm0 2v1h7v-1zm8 1v1h2v-1z" transform="matrix(-1 0 0 1 22-1030.3622)"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
