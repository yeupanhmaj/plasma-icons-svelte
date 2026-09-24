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
     d="m2 2v12h12v-12zm1 1h10v10h-10zm1 1v3h3v-3zm4 0v1h4v-1zm0 2v1h4v-1zm-4 2v4h8v-4z"
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
     d="M 4 3 L 4 5 L 3 5 L 3 6 L 3 19 L 4 19 L 19 19 L 19 18 L 19 6 L 19 5 L 18 5 L 18 3 L 5 3 L 4 3 z M 5 4 L 17 4 L 17 5 L 5 5 L 5 4 z M 4 6 L 18 6 L 18 18 L 4 18 L 4 6 z M 5 7 L 5 11 L 9 11 L 9 7 L 5 7 z M 11 7 L 11 8 L 17 8 L 17 7 L 11 7 z M 11 10 L 11 11 L 17 11 L 17 10 L 11 10 z M 5 12 L 5 17 L 17 17 L 17 12 L 5 12 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
