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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 8 2 L 8 3 L 8.55469 3 L 8.67383 3 L 12.5 13 L 11.5 13 L 11.2773 13 L 11.2636 13 L 10.8359 11.877 L 10.207 10.2734 L 8 10.2734 L 8 14 L 14 14 L 14 2 L 8 2 Z M 8 10.2734 L 8 9.36328 L 6.14648 9.36328 L 8 4.35938 L 8 3 L 7.44531 3 L 7.32617 3 L 3.5 13 L 4.5 13 L 4.72266 13 L 4.73636 13 L 5.16409 11.877 L 5.793 10.2734 L 8 10.2734 Z M 8 4.35938 L 8 9.36328 L 9.85352 9.36328 L 8 4.35938 Z"/>
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 11 3 L 11 4 L 12.1797 4 C 13.2954 7.23942 14.4234 10.4748 15.5313 13.7168 C 16.0184 15.1554 16.5754 16.5706 17.0898 18 L 15.3418 18 C 14.8001 16.5208 14.2585 15.0417 13.7168 13.5625 L 11 13.5625 L 11 19 L 19 19 L 19 3 L 11 3 Z M 11 13.5625 L 11 12.2813 L 8.89453 12.2813 C 9.59636 10.2676 10.2982 8.25391 11 6.24023 L 11 4 L 9.91016 4 C 8.78659 7.2696 7.64125 10.5326 6.53125 13.8066 C 6.04314 15.2121 5.50683 16.6009 5 18 L 6.74805 18 C 7.28972 16.5208 7.83138 15.0417 8.37305 13.5625 L 11 13.5625 Z M 11 6.24023 L 11 12.2813 L 13.1953 12.2813 C 12.4785 10.2246 11.7617 8.16797 11.0449 6.11133 C 11.0299 6.1543 11.015 6.19727 11 6.24023 L 11 6.24023 Z"/>
		</svg>
	{/if}
