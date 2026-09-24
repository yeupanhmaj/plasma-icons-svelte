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
			<path d="m8 2a6 6 0 0 0-5.9082031 5h1.0234375a5 5 0 0 1 4.8847656-4 5 5 0 0 1 4.564453 3h-3.564453v1h3.896484 0.103516 0.914062 0.085938v-5h-1v2.6894531a6 6 0 0 0-5-2.6894531zm-6 7v5h1v-2.699219a6 6 0 0 0 5 2.699219 6 6 0 0 0 5.908203-5h-1.023437a5 5 0 0 1-4.884766 4 5 5 0 0 1-4.5546875-3h3.5546875v-1h-3.8847656-0.1152344-0.9082031-0.0917969z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m11 3a8 8 0 0 0-7.9277344 7h1.0058594a7 7 0 0 1 6.921875-6 7 7 0 0 1 6.320312 4h-3.320312v1h5v-1-4h-1v3.1679688a8 8 0 0 0-7-4.1679688zm6.921875 9a7 7 0 0 1-6.921875 6 7 7 0 0 1-6.3105469-4h3.3105469v-1h-5v1 4h1v-3.195312a8 8 0 0 0 7 4.195312 8 8 0 0 0 7.927734-7h-1.005859z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m16 4a12 12 0 0 0-12 12 12 12 0 0 0 0.0722656 1h1.0058594a11 11 0 0 1-0.078125-1 11 11 0 0 1 11-11 11 11 0 0 1 9.183594 5h-4.183594v1h4.796875 0.203125 0.90625 0.09375v-6h-1v4.3886719a12 12 0 0 0-10-5.3886719zm10.951172 11a11 11 0 0 1 0.048828 1 11 11 0 0 1-11 11 11 11 0 0 1-9.1835938-5h4.1835938v-1h-4.796875-1.1113281-0.0917969v1 5h1v-4.384766a12 12 0 0 0 10 5.384766 12 12 0 0 0 12-12 12 12 0 0 0-0.044922-1h-1.003906z" class="ColorScheme-Text" fill="currentColor" />
		</svg>
	{/if}
