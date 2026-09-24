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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" d="M3 4l1 8H2V4zM0 2v12h15v-4h.5c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5H15V2zm1 1h13v10H1z"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" d="M3 7v8h3L4 7zM1 5v12h19v-4h.5c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5H20V5H4zm1 1h17v10H2z"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path class="ColorScheme-NegativeText" d="m3 10v12h25v-3c0.554 0 1-0.446 1-1v-4c0-0.554-0.446-1-1-1v-3h-25zm1 1h23v10h-23v-10zm1 1v8h4l-2-8h-2z" style="fill:currentColor;fill-opacity:1;stroke:none"/>
		</svg>
	{/if}
