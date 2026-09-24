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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M2 2v3h1.076C3.003 4.443 3 4.078 3 4.078 6.75 3.661 8 2 8 2zm7 0v.82c.772.484 2.037 1.04 4 1.258 0 0-.003.365-.076.922H14V2zM2 6v3h2v-.87A10.244 10.244 0 0 1 3.258 6zm10.742 0A10.244 10.244 0 0 1 12 8.13V9h2V6zM2 10v3h6v-1a7.448 7.448 0 0 1-2.78-2zm8.78 0A7.39 7.39 0 0 1 9 11.488V13h5v-3zM8 3S7 4.33 4 4.663c0 0 0 4.666 4 6.337 4-1.67 4-6.337 4-6.337C9 4.329 8 3 8 3z"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="M11 4S9.5 5.992 5 6.494c0 0 0 7 6 9.506 6-2.507 6-9.506 6-9.506C12.5 5.992 11 4 11 4zm0 0S9.5 5.993 5 6.494c0 0 0 7 6 9.506 6-2.507 6-9.506 6-9.506C12.5 5.993 11 4 11 4zm0 1s1.25 1.66 5 2.078c0 0 0 5.833-5 7.922-5-2.089-5-7.922-5-7.922C9.75 6.66 11 5 11 5zM3 3v3h1.004L4 5.91C9.25 5.325 11 3 11 3zm9 0v.879c1.015.723 2.878 1.683 6 2.031l-.004.09H19V3zM3 7v3h1.758a14.945 14.945 0 0 1-.672-3zm14.914 0a14.87 14.87 0 0 1-.672 3H19V7zM3 11v3h3.928a11.905 11.905 0 0 1-1.793-3zm13.865 0a11.905 11.905 0 0 1-1.793 3H19v-3zM3 15v3h3v-3zm4 0v3h8v-3h-.883A10.503 10.503 0 0 1 11 17a10.503 10.503 0 0 1-3.117-2zm9 0v3h3v-3z"/>
		</svg>
	{/if}
