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
       d="M 8.28125 2 C 5.87276 1.9779 2.98125 3.61871 4.59375 7.3125 L 10.25 7.3125 C 1.25 5.0625 8.75114 -0.1875 10.28125 5.8125 L 11 5.8125 L 11 3.75 C 10.9887 2.625 9.72635 2.01328 8.28125 2 z M 2 8 L 2 8.75 L 2 9 L 14 9 L 14 8.75 L 14 8 L 2 8 z M 8.75 9.5 C 12.71497 13.43247 6.77502 14.69352 5 10.25 L 4.25 10.25 L 4.25 12.5 C 4.39332 14.38685 13.25 15.5 11.75 9.5 L 8.75 9.5 z "
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
    d="M 11.367188 3 C 8.1558629 2.9704971 4.2894531 5.1569693 6.4394531 10.082031 L 14 10.082031 C 1.999998 7.0820318 12.000924 0.08203135 14.041016 8.0820312 L 15 8.0820312 L 15 5.3339844 C 14.984965 3.8339844 13.29398 3.0177018 11.367188 3 z M 3 11 L 3 12 L 19 12 L 19 11 L 3 11 z M 12 12.998047 C 17.286623 18.241347 9.3666873 19.922747 7 13.998047 L 6 13.998047 L 6 16.998047 C 6.1910979 19.513847 18 20.998047 16 12.998047 L 12 12.998047 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
