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
			<path style="fill:currentColor;fill-opacity:0.5;stroke:none"
       transform="translate(-421.71-531.79)"
       d="m429.71 533.79c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3 0-1.657-1.343-3-3-3m-2 2.5h4v1h-4zm2 4.5c-2.761 0-5 2.01-5 4.5.001.167.012.334.033.5h9.93c.023-.166.035-.333.037-.5 0-2.485-2.239-4.5-5-4.5m0 1c1.987.002 3.671 1.279 3.955 3h-7.91c.284-1.721 1.968-2.998 3.955-3"
       class="ColorScheme-Text"
     />
 <path fill="#fff" d="m427.71 536.29h4v1h-4z" transform="translate(-421.71-531.79)" />
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
     style="fill:currentColor;fill-opacity:0.5;stroke:none" 
     d="M 11 3 A 3.9999902 4.0000296 0 0 0 7 7 A 3.9999902 4.0000296 0 0 0 11 11 A 3.9999902 4.0000296 0 0 0 15 7 A 3.9999902 4.0000296 0 0 0 11 3 z M 11 4 A 3 3.0000296 0 0 1 14 7 A 3 3.0000296 0 0 1 11 10 A 3 3.0000296 0 0 1 8 7 A 3 3.0000296 0 0 1 11 4 z M 11 12 A 7.9999504 8.0000296 0 0 0 3.0722656 19 L 4.0800781 19 A 6.9999604 7.0000296 0 0 1 11 13 A 6.9999604 7.0000296 0 0 1 12 13.080078 L 12 12.070312 A 7.9999504 8.0000296 0 0 0 11 12 z M 15.5 12 C 13.567003 12 12 13.567003 12 15.5 C 12 17.432997 13.567003 19 15.5 19 C 17.432997 19 19 17.432997 19 15.5 C 19 13.567003 17.432997 12 15.5 12 z M 13 15 L 18 15 L 18 16 L 13 16 L 13 15 z "
     class="ColorScheme-Text"
     />
    <path
       style="fill:#ffffff;fill-opacity:1;stroke:none"
       d="M 13 15 L 13 16 L 18 16 L 18 15 L 13 15 z " />
		</svg>
	{/if}
