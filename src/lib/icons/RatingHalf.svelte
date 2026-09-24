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
			<path d="m8 .1875-2.47265625 5.00976563-5.52734375.80273437 4 3.8984375-.94335937 5.50585938 4.94335937-2.59960938 4.94335938 2.59765625-.94335938-5.50390625 4-3.8984375-5.52734375-.80273437zm0 2.26171875 1.80859375 3.66210938 4.04296875.58789062-2.92578125 2.8515625.68945313 4.02539063-3.61523438-1.90039063z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m11 .0078125-3.3984375 6.88671875-7.60351563 1.10546875 5.5 5.36132813-1.29492188 7.5703125 6.79492188-3.57421875 6.80078125 3.57421875-1.30078125-7.5703125 5.50195313-5.36132813-7.59960937-1.10546875zm0 2.25976563 2.734375 5.54101562 6.11328125.88867188-4.42382812 4.31445312 1.04492187 6.09179688-5.46875-2.87695313z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
