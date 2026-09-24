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
			<path class="ColorScheme-Text"
          style="fill:currentColor;fill-opacity:1;stroke:none"
          d="m2 2v1 3 1 6 1h6v-0.960938l-5-0.039062v-6h10v1h1v-2-1-1h-4.9921875l-2-2-0.0078125 0.0078125v-0.0078125h-4-1zm1 1h3.5917969l1.0019531 1h-0.59375v0.0078125l-0.0078125-0.0078125-2 2h-1.9921875v-3zm8.5 5c-0.828397 0-1.5 0.6715724-1.5 1.5v0.5h1v-0.5c0-0.2761391 0.2239-0.5 0.5-0.5s0.5 0.2238609 0.5 0.5v1.5h-1-1-1v3h5v-3h-1v-1.5c0-0.8284276-0.671603-1.5-1.5-1.5zm-1.5 4h3v1h-3v-1z"/>
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
			<path class="ColorScheme-Text"
          style="fill:currentColor;fill-opacity:1;stroke:none"
          d="m5 11v2h2v-2h-2zm4 0v2h2v-2h-2zm7.5 1c-0.830996 0-1.5 0.669004-1.5 1.5v0.5h1v-0.5c0-0.277 0.223-0.5 0.5-0.5s0.5 0.223 0.5 0.5v1.5h-1-1-1v4h5v-4h-1v-1.5c0-0.830996-0.669004-1.5-1.5-1.5zm-9.5 2v2h2v-2h-2zm8 2h3v2h-3v-2zm-10 1v2h2v-2h-2zm4 0v2h2v-2h-2z"/>
    <path class="ColorScheme-Text"
          style="fill:currentColor;fill-opacity:1;stroke:none"
          d="m3 3v16h1v-9h3v-0.00781l0.0078125 0.00781 2-2h8.9921875v4h1v-7h-6.992188l-2-2-0.007812 0.0078125v-0.0078125h-6z"/>
		</svg>
	{/if}
