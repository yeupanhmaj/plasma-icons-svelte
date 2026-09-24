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
     d="m2 2v12h12v-12zm1 1h10v10h-10zm1 1v1h8v-1zm0 3v1h8v-1zm0 3v1h8v-1z"
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
    d="M 4 4 L 4 20 L 20 20 L 20 4 L 4 4 z M 5 5 L 7 5 L 8 5 L 10 5 L 11 5 L 13 5 L 14 5 L 16 5 L 17 5 L 19 5 L 19 7 L 19 8 L 19 10 L 19 11 L 19 13 L 19 14 L 19 16 L 19 17 L 19 19 L 17 19 L 16 19 L 14 19 L 13 19 L 11 19 L 10 19 L 8 19 L 7 19 L 5 19 L 5 17 L 5 16 L 5 14 L 5 13 L 5 11 L 5 10 L 5 8 L 5 7 L 5 5 z M 6 6 L 6 8 L 18 8 L 18 6 L 6 6 z M 6 11 L 6 13 L 18 13 L 18 11 L 6 11 z M 6 16 L 6 18 L 18 18 L 18 16 L 6 16 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
