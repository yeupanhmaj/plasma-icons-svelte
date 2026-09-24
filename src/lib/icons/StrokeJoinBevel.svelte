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
     d="m6.242 2l-4.242 4.242.008.008h-.008v7.75h4v-5.344l2.656-2.656h5.344v-4h-7.756zm.414 1h6.344v2h-4.758l-3.242 3.242v4.758h-2v-6.344zm1.344 5v6h4v-2h2v-4h-5zm1 1h4v2h-2v2h-2z"
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
	d="m9.242188 3l-4.242188 4.242188.007813.007813h-.007813v2.75 9h1 3v-1-8.34375l2.65625-2.65625h4.34375 1v-1-2-1h-1-5.00977-1.746093-.001953m.414063 1h1.333984 5.00977v2h-4-.753906-.003906l-3.242188 3.242188v.001953 8.755859h-2v-10.34375l3.65625-3.65625m1.34375 5v1 9h1 3v-1-5h1 1v-1-2-1h-1-1-3-1m1 1h3 1v2h-1-1v1 5h-2v-8"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
