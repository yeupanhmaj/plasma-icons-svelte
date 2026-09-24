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
     d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 13 L 3 13 L 3 3 z M 8.0175781 4 L 6.765625 6.6269531 L 4 7.0390625 L 5.9882812 9.09375 L 5.5 11.984375 L 7.9804688 10.626953 L 10.443359 12 L 9.9882812 9.1074219 L 12 7.0664062 L 9.2382812 6.6347656 L 8.0175781 4 z "
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
     d="M 3 3 L 3 4 L 3 18 L 3 19 L 4 19 L 19 19 L 19 18 L 19 3 L 4 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z M 11 6 L 9.453125 9.2910156 L 6 9.8183594 L 8.5 12.380859 L 7.9101562 16 L 11 14.291016 L 14.089844 16 L 13.5 12.380859 L 16 9.8183594 L 12.546875 9.2910156 L 11 6 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
