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
       d="M 2 2 L 2 5 L 5 5 L 5 2 L 2 2 z M 6.5 2 L 6.5 5 L 9.5 5 L 9.5 2 L 6.5 2 z M 11 2 L 11 5 L 14 5 L 14 2 L 11 2 z M 3 3 L 4 3 L 4 4 L 3 4 L 3 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 2 6.5 L 2 9.5 L 5 9.5 L 5 6.5 L 2 6.5 z M 3 7.5 L 4 7.5 L 4 8.5 L 3 8.5 L 3 7.5 z M 2 11 L 2 14 L 5 14 L 5 11 L 2 11 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#1d99f3" 
     d="M 12 6 L 12 10 L 12 10.5 C 12 11.885 10.885 13 9.5 13 C 8.6813 13 7.9551 12.6045 7.5 12 L 9 12 L 9 11 L 7.0625 11 L 7 11 L 6.0625 11 L 6 11 L 6 12 L 6 14 L 7 14 L 7 12.9375 C 7.6319 13.5955 8.5097 14 9.5 14 C 11.439 14 13 12.439 13 10.5 L 13 10 L 13 6 L 12 6 z "
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
			<path id="path4" class="ColorScheme-Text" d="m3 3v4h4v-4zm6 0v4h4v-4zm6 0v4h4v-4zm-11 1h2v2h-2zm12 0h2v2h-2zm-13 5v4h4v-4zm1 1h2v2h-2zm-1 5v4h4v-4z" fill="currentColor"/>
    <path id="path6" d="m16 9v4.5c0 1.385-1.115 2.5-2.5 2.5-0.8187 0-1.535134-0.3955-1.990234-1h1.490234v-1h-3v3h1v-1.076172c0.6319 0.658 1.5097 1.076172 2.5 1.076172 1.939 0 3.5-1.561 3.5-3.5v-4.5z" fill="#1d99f3"/>
		</svg>
	{/if}
