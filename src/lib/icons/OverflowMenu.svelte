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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 7,3 7,5 9,5 9,3 Z M 7,7 7,9 9,9 9,7 Z m 0,4 0,2 2,0 0,-2 z"
     class="ColorScheme-Text"
     id="path6" />
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
     d="m 10,5 0,2 2,0 0,-2 -2,0 m 0,5 0,2 2,0 0,-2 -2,0 m 0,5 0,2 2,0 0,-2 -2,0"
     class="ColorScheme-Text"
     id="path6" />
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
     d="m 15,5 0,2 2,0 0,-2 z m 0,10 0,2 2,0 0,-2 z m 0,10 0,2 2,0 0,-2 z"
     id="a"
     class="ColorScheme-Text" />
		</svg>
	{/if}
