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
     d="M8 2A4 4 0 0 0 4 6 4 4 0 0 0 6 9.458984V14L8 12 10 14V9.459A4 4 0 0 0 12 6 4 4 0 0 0 8 2M8 3A3 3 0 0 1 11 6 3 3 0 0 1 8 9 3 3 0 0 1 5 6 3 3 0 0 1 8 3M8 4L7.381 5.316 6 5.527 7 6.553 6.764 8 8 7.316 9.236 8 9 6.553 10 5.527 8.619 5.316z"
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
    d="M 12 4 C 9.784 4 8 5.784 8 8 C 8 9.4829714 8.8072919 10.75838 10 11.449219 L 10 20 L 12 18 L 14 20 L 14 11.449219 C 15.192708 10.75838 16 9.4829714 16 8 C 16 5.784 14.216 4 12 4 z M 12 5 C 13.662 5 15 6.338 15 8 C 15 9.662 13.662 11 12 11 C 10.338 11 9 9.662 9 8 C 9 6.338 10.338 5 12 5 z M 12 6 L 11.380859 7.3164062 L 10 7.5273438 L 11 8.5527344 L 10.763672 10 L 12 9.3164062 L 13.236328 10 L 13 8.5527344 L 14 7.5273438 L 12.619141 7.3164062 L 12 6 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
