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
       d="M 2.375 2 C 2.24647 2 2.12349 2.01355 2 2.03125 L 2 3 C 2.5522847 3 3 3.4477153 3 4 L 3 12 C 3 12.552285 2.5522847 13 2 13 L 2 13.96875 C 2.12349 13.98675 2.24647 14 2.375 14 L 3.5 14 L 6.5 14 L 10.25 14 C 12.3275 14 14 12.3275 14 10.25 C 14 8.59629 12.9177 7.21992 11.4375 6.71875 C 12.07059 6.24035 12.5 5.4832 12.5 4.625 C 12.5 3.17075 11.32925 2 9.875 2 L 6.5 2 L 3.5 2 L 2.375 2 z M 6 3 L 9 3 C 9.5522847 3 10 3.8954305 10 5 C 10 6.1045695 9.5522847 7 9 7 L 6 7 L 6 3 z M 6 8 L 6.5 8 L 8.75 8 L 9 8 C 9.0534726 8 9.1038355 8.0261011 9.15625 8.03125 C 10.186547 8.132461 11 9.1861289 11 10.5 C 11 11.880712 10.104569 13 9 13 L 6 13 L 6 8 z "
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
    d="M 3.5 3 C 3.3286269 3 3.1646509 3.0248281 3 3.0488281 L 3 5 C 4.108 5 5 5.892 5 7 L 5 10 L 5 15 C 5 16.108 4.108 17 3 17 L 3 18.951172 C 3.1646509 18.975172 3.3286269 19 3.5 19 L 5 19 L 9 19 L 14 19 C 16.769995 19 19 16.77 19 14 C 19 11.7951 17.577117 9.9533563 15.603516 9.2851562 C 16.447639 8.6468562 17 7.6443 17 6.5 C 17 4.561 15.439 3 13.5 3 L 9 3 L 5 3 L 3.5 3 z M 9 5 L 11 5 C 12.108 5 13 5.892 13 7 C 13 8.108 12.108 9 11 9 L 9 9 L 9 5 z M 9 11 L 12 11 C 13.662 11 15 12.338 15 14 C 15 15.662 13.662 17 12 17 L 9 17 L 9 11 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
