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
			<path d="m8 2.0039062-6 3.8984376v1.0976562h1v6h-1v1h5v-1h-1v-6h8v-1.0976562zm0 1.1933594 4.310547 2.8027344h-8.6210939zm-4 3.8027344h1v6h-1zm8 1-4 4v2h2l4-4zm-.310547 1.6894531.591797.5917969-2.96875 2.984375v.015625l-.59375-.59375z"
       style="fill:currentColor;fill-opacity:1;stroke:none" 
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
    d="m11 3-8 4.6230469v1.3769531h1v9h-1v1h8v-5h-2v4h-1v-9h6v3h1v-3h2v3h1v-3h1v-1.3769531zm0 1.15625 6.650391 3.8417969h-13.3007816zm-6 4.84375h2v9h-2zm11 4-4 4v2h2l4-4zm-.310547 1.689453.591797.591797-2.96875 2.984375v.015625l-.59375-.59375z"
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
