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
     d="m4.75 2c-.393 0-.75.357-.75.75 0 .393.357.75.75.75.393 0 .75-.357.75-.75 0-.393-.357-.75-.75-.75m.75 2.25l.005 9.75 2.995-4h4.5z"
     class="ColorScheme-Text"
     />
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="M6 3A1 1 0 0 0 5 4 1 1 0 0 0 6 5 1 1 0 0 0 7 4 1 1 0 0 0 6 3M7 6L7.00586 19 10.900391 14.300781 17 14 7 6"
    class="ColorScheme-Text"
    />
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m 8.990234,5 c -0.5522847,0 -1,0.4477153 -1,1 0,0.5522847 0.4477153,1 1,1 0.5522847,0 1,-0.4477153 1,-1 0,-0.5522847 -0.4477153,-1 -1,-1 z m 2,4 L 11,29 16.841796,21.769531 26,21 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
