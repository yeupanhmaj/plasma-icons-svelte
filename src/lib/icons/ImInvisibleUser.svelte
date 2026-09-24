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
     d="M 8 2 A 3 3 0 0 0 5 5 A 3 3 0 0 0 8 8 A 3 3 0 0 0 11 5 A 3 3 0 0 0 8 2 z M 9.2929688 3 L 10 3.7070312 L 6.7070312 7 L 6 6.2929688 L 9.2929688 3 z M 8 9 A 5 4.5 0 0 0 3 13.5 A 5 4.5 0 0 0 3.0332031 14 L 12.962891 14 A 5 4.5 0 0 0 13 13.5 A 5 4.5 0 0 0 8 9 z M 8 10 A 4 3.5 0 0 1 11.955078 13 L 4.0449219 13 A 4 3.5 0 0 1 8 10 z "
     class="ColorScheme-Text"
     />
  <path
     style="fill:#ffffff"
     d="M 9.3,3 10.007,3.707 6.714,7 6.007,6.293 Z" />
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
			<path id="path1" class="ColorScheme-Text" d="m11 3a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3zm0 8a8 8 0 0 0-7.9277 7h1.0078a7 7 0 0 1 6.9199-6 7 7 0 0 1 1 0.08008v-1.0098a8 8 0 0 0-1-0.070312zm4.5 0a3.5 3.5 0 0 0-3.5 3.5 3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0-3.5-3.5zm1.293 1.5 0.70703 0.70703-3.293 3.293-0.70703-0.70703z" fill="currentColor;fill-opacity:1;stroke:none"/>
		</svg>
	{/if}
