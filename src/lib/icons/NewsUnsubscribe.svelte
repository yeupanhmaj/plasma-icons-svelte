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
     class="ColorScheme-NegativeText"
    d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 13 L 3 13 L 3 3 z M 4 4 L 4 7 L 7 7 L 7 4 L 4 4 z M 8 4 L 8 5 L 12 5 L 12 4 L 8 4 z M 8 6 L 8 7 L 12 7 L 12 6 L 8 6 z M 4 8 L 4 12 L 12 12 L 12 8 L 4 8 z " />
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
        class="ColorScheme-NegativeText"
        d="m4 3v2h-1v1 13h1 15v-1-12-1h-1v-2h-13-1m1 1h12v1h-12v-1m-1 2h14v12h-14v-12m1 1v4h4v-4h-4m6 0v1h6v-1h-6m0 3v1h6v-1h-6m-6 2v5h12v-5h-12"/>
		</svg>
	{/if}
