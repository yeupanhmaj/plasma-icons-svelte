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
          d="m11 9v2.000013h-1.999998v0.999987h1.999998v2.000013h1.000002v-2.000013h1.999998v-0.999987h-1.999998v-2.000013h-1.000002m-7-7v12l4-1.59375v-1l-3 1.1875v-9.59375h6v5h1v-6h-7z"
          class="ColorScheme-Text"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
          d="m16 14v2h-2v1h2v2h1v-2h2v-1h-2v-2zm-10-11v16l5-2 2 0.800781v-1l-2-0.800781-4 1.599609v-13.599609h8v9h1v-10z"
          class="ColorScheme-Text"/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none"
          d="m22 17v5h-5v1h5v5h1v-5h5v-1h-5v-5zm-14-13v24l8-4v-1l-7 3.556641v-21.556641h14v11h1v-12z"
          class="ColorScheme-Text"/>
		</svg>
	{/if}
