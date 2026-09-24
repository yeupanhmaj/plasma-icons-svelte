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
       d="M 2 2 L 2 14 L 8 14 L 8 13.185547 L 8 13 L 8 8 L 13 8 L 14 8 L 14 2 L 2 2 z M 13 8 L 12 9 L 11 10 L 9 12 L 9 13 L 9 14 L 11 14 L 11.59375 13.40625 L 12 13 L 13 12 L 14 11 L 15 10 L 13 8 z M 3 3 L 7 3 L 7 7 L 3 7 L 3 3 z M 8 3 L 13 3 L 13 7 L 8 7 L 8 3 z M 3 8 L 7 8 L 7 13 L 3 13 L 3 8 z M 12.689453 9.6894531 L 13.28125 10.28125 L 13 10.5625 L 11.59375 11.96875 L 11.59375 11.984375 L 10.3125 13.28125 L 9.71875 12.6875 L 12.689453 9.6894531 z "
        class="ColorScheme-Text" />
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
	d="M 2 3 L 2 19 L 11 19 L 11 18 L 11 11 L 18 11 L 19 11 L 19 3 L 2 3 z M 18 11 L 17.003906 11.994141 L 17 11.994141 L 12 16.988281 L 12.007812 16.990234 L 12.003906 17.992188 L 12 17.992188 L 12 18.982422 L 14 18.982422 L 14.005859 18.982422 L 14.009766 18.982422 L 14.019531 18.982422 L 14.013672 18.980469 L 15 17.994141 L 19 14.001953 L 18.294922 13.292969 L 13.304688 18.275391 L 12.710938 17.683594 L 17.703125 12.699219 L 18.294922 13.292969 L 19 13.996094 L 20 12.996094 L 18 11 z M 3 4 L 10 4 L 10 10 L 3 10 L 3 4 z M 11 4 L 18 4 L 18 10 L 11 10 L 11 4 z M 6.0800781 5.0019531 C 5.5402063 4.9805793 5.0146542 5.1785419 4.6230469 5.5507812 C 3.9624223 6.1786461 3.8098264 7.1737319 4.2519531 7.9707031 C 4.6945213 8.7673952 5.6197228 9.1641396 6.5019531 8.9355469 C 7.3838742 8.7068867 7.9997998 7.9110819 8 7 L 6 7 L 7.0585938 5.3027344 C 6.7640388 5.1192826 6.4268204 5.0156266 6.0800781 5.0019531 z M 3 11 L 10 11 L 10 18 L 3 18 L 3 11 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
