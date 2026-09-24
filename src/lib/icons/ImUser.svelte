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
     d="m429.71429 533.79074a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 -3 3 3 0 0 0 -3 -3m0 1a2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2 2 2 0 0 1 2 -2m0 6a5 4.5 0 0 0 -5 4.5 5 4.5 0 0 0 .0332 .5h9.93a5 4.5 0 0 0 .0371 -.5 5 4.5 0 0 0 -5 -4.5m.00005 1a4 3.5 0 0 1 3.95508 3h-7.91a4 3.5 0 0 1 3.95508 -3" 
     transform="translate(-421.71-531.79)"
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
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 3 A 3.9999902 4.0000296 0 0 0 7 7 A 3.9999902 4.0000296 0 0 0 11 11 A 3.9999902 4.0000296 0 0 0 15 7 A 3.9999902 4.0000296 0 0 0 11 3 z M 11 4 A 3 3.0000296 0 0 1 14 7 A 3 3.0000296 0 0 1 11 10 A 3 3.0000296 0 0 1 8 7 A 3 3.0000296 0 0 1 11 4 z M 11 12 A 7.9999504 8.0000296 0 0 0 3.0722656 19 L 4.0800781 19 A 6.9999604 7.0000296 0 0 1 11 13 A 6.9999604 7.0000296 0 0 1 17.921875 19 L 18.929688 19 A 7.9999504 8.0000296 0 0 0 11 12 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
