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
			<path d="m8 2.0039062-6 3.8984376v1.0976562h1v6h-1v1h6v-1h-2v-6h4v1h1v-1h1v1h1v-1h1v-1.0976562zm0 1.1933594 4.310547 2.8027344h-8.6210939zm-4 3.8027344h1v6h-1zm7 2v2h-2v1h2v2h1v-2h2v-1h-2v-2z"
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
			<path id="path846" d="m11 3-8 4.6230469v0.375 1.0019531h1v9h-1v1h10v-5h-4v4h-1v-9h6v4h1v-4h2v4h1v-4h1v-1.0019531-0.375l-8-4.6230469zm0 1.15625 6.650391 3.8417969h-13.300782l6.6503906-3.8417969zm-6 4.84375h2v9h-2v-9zm11 5v2h-2v1h2v2h1v-2h2v-1h-2v-2h-1z"
      style="fill:currentColor;fill-opacity:1;stroke:none" 
      class="ColorScheme-Text"
      />
		</svg>
	{/if}
