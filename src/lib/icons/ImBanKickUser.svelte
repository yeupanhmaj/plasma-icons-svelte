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
    d="M8 2A6 5.99997 0 0 0 2 8 6 5.99997 0 0 0 8 14 6 5.99997 0 0 0 14 8 6 5.99997 0 0 0 8 2M8 3A5 4.999975 0 0 1 13 8 5 4.999975 0 0 1 8 13 5 4.999975 0 0 1 3 8 5 4.999975 0 0 1 8 3M5.548828 4.841797A4 4 0 0 0 4.84375 5.550781L7.293 8 4.842 10.451A4 4 0 0 0 5.550781 11.15625L8 8.707 10.451 11.158A4 4 0 0 0 11.15625 10.449219L8.707 8 11.158 5.549A4 4 0 0 0 10.449219 4.84375L8 7.293z" />
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText">
        <path d="M7.837891 7.130859A5 5 0 0 0 7.130859 7.837891L10.292969 11 7.130859 14.162109A5 5 0 0 0 7.837891 14.869141L11 11.707031 14.162109 14.869141A5 5 0 0 0 14.869141 14.162109L11.707031 11 14.869141 7.837891A5 5 0 0 0 14.162109 7.130859L11 10.292969 7.837891 7.130859"/>
        <path d="M11 3A8 7.99997 0 0 0 3 11 8 7.99997 0 0 0 11 19 8 7.99997 0 0 0 19 11 8 7.99997 0 0 0 11 3M11 4A7 6.999974 0 0 1 18 11 7 6.999974 0 0 1 11 18 7 6.999974 0 0 1 4 11 7 6.999974 0 0 1 11 4"/>
    </g>
		</svg>
	{/if}
