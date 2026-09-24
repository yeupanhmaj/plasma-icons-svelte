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
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
       d="M 8 2 C 4.6862915 2 2 4.6863 2 8 L 3 8 C 3 5.2386 5.2385763 3 8 3 C 10.761424 3 13 5.2386 13 8 L 14 8 C 14 4.6863 11.313708 2 8 2 z M 8 6 C 6.8954305 6 6 6.8954 6 8 L 7 8 C 7 7.4477 7.4477153 7 8 7 C 8.5522847 7 9 7.4477 9 8 L 10 8 C 10 6.8954 9.1045695 6 8 6 z M 11 8 L 11 11.09375 C 10.845681 11.03975 10.672589 11 10.5 11 C 9.671573 11 9 11.6716 9 12.5 C 9 13.3284 9.671573 14 10.5 14 C 11.328427 14 12 13.3284 12 12.5 L 12 9 L 13 9 L 12 8 L 11 8 z M 3 9 L 3 14 L 5 14 L 6 13 L 7 12 L 7 9 L 3 9 z M 4 10 L 6 10 L 6 12 L 5 12 L 5 13 L 4 13 L 4 10 z "
     class="ColorScheme-Text"/>
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
       d="M 11 3 A 8 8 0 0 0 3 11 L 4 11 A 7 7 0 0 1 11 4 A 7 7 0 0 1 18 11 L 19 11 A 8 8 0 0 0 11 3 z M 11 5 C 7.676 5 5 7.676 5 11 L 8 11 C 8 9.338 9.338 8 11 8 L 11 5 z M 11 9 A 2 2 0 0 0 9 11 L 10 11 A 1 1 0 0 1 11 10 A 1 1 0 0 1 12 11 L 13 11 A 2 2 0 0 0 11 9 z M 16 11 L 16 15.277344 C 15.704935 15.106144 15.367047 15 15 15 C 13.892 15 13 15.892 13 17 C 13 18.108 13.892 19 15 19 C 16.108 19 17 18.108 17 17 L 17 13 L 18 13 L 17 11 L 16 11 z M 4 12 L 4 19 L 7 19 L 9 17 L 9 12 L 4 12 z M 5 13 L 8 13 L 8 17 L 7 17 L 7 18 L 5 18 L 5 13 z "
       id="rect4119" 
       class="ColorScheme-Text"/>
		</svg>
	{/if}
