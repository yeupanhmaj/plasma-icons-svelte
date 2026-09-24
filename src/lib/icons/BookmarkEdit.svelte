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
          d="m12 8-4.000005 3.999989v2h2.000005l4-3.999989zm-0.3106 1.68945 0.5919 0.591846-2.968805 2.999993-0.59375-0.5938zm-7.6894-7.68945v12l3-1.195312v-1.001954l-2 0.791016v-9.59375h6v4h1v-5h-7z"
          class="ColorScheme-Text"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
          d="m17.005915 13.00414-4 4v2h2l4-4zm-0.3106 1.68945 0.5919 0.59185-2.9688 3-0.59375-0.5938zm-10.695315-11.69359v16l5-2 1 0.400391v-1l-1-0.400391-4 1.599609v-13.599609h8v8h1v-9z"
          class="ColorScheme-Text"/>
		</svg>
	{/if}
