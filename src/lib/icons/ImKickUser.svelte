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
     class="ColorScheme-NegativeText"
    d="M 8 2 C 6.343 2 5 3.343 5 5 C 5 6.657 6.343 8 8 8 C 9.657 8 11 6.657 11 5 C 11 3.343 9.657 2 8 2 z M 6.0507812 4.5 L 10.050781 4.5 L 10.050781 5.5 L 6.0507812 5.5 L 6.0507812 4.5 z M 8 9 C 5.239 9 3 11.01 3 13.5 C 3.001 13.667 3.0122031 13.834 3.0332031 14 L 12.962891 14 C 12.985891 13.834 12.998 13.667 13 13.5 C 13 11.015 10.761 9 8 9 z M 8 10 C 9.987 10.002 11.671078 11.279 11.955078 13 L 4.0449219 13 C 4.3289219 11.279 6.013 10.002 8 10 z "
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText" transform="translate(-421.714 -525.79)">
        <path d="M432.714 528.79a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4m0 1a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3M432.714 537.79a8 8 0 0 0-7.927 7h1.007a7 7 0 0 1 6.92-6 7 7 0 0 1 1 .08v-1.009a8 8 0 0 0-1-.07"/>
        <circle cx="437.214" cy="541.291" r="3.5"/>
    </g>
    <path d="M13 15h5v1h-5z" fill="#fff"/>
		</svg>
	{/if}
