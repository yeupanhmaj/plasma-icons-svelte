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
			<g transform="translate(-421.71-531.79)" style="fill-rule:evenodd">
  <path d="m423.71 533.79h1v12h-1z" 
        class="ColorScheme-Text"
        style="fill:currentColor;fill-opacity:1;stroke:none"
        />
  <path d="m424.71 533.79l5 1v1l6 2-2 1 2 1-6 1v-1l-5 1z" style="fill:#1d99f3"/>
</g>
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
	d="m3 3v16h1v-7-9h-1"
    class="ColorScheme-Text"
    />  
 <path d="m4 3v9l5-1 1-.199219v2l9-1.800781-2-1 2-1-9-2.400391v-2l-1-.265625-5-1.333984" style="fill:#1d99f3"/>
		</svg>
	{/if}
