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
			<path d="m2 2v12h7v-1h-6v-10h5v1h1v-1h4v6h1v-7zm6 2h-1v1h1zm0 1v1h1v-1zm0 1h-1v1 1h2v-1h-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/><path d="m9.0000005 11h4.9999995v1h-4.9999995z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"/>
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
			<path d="m3 3v16h11v-1h-10v-14h7v1h1v-1h6v10h1v-11zm8 2h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1 1h2v-1h-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/><path d="m14 16h5v1h-5z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"/>
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
			<path d="m2 2v28h17v-1h-16v-26h13v2h2v-2h11v16h1v-17zm14 3h-2v2h2zm0 2v2h2v-2zm0 2h-2v2h2zm0 2v2h2v-2zm0 2h-2v2 2h2 2v-2h-2z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/><path d="m19 24v1h11v-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"/>
		</svg>
	{/if}
