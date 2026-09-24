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
     d="M 2 2 L 2 5 L 5 5 L 5 2 L 2 2 z M 6 2 L 6 3 L 14 3 L 14 2 L 6 2 z M 6 4 L 6 5 L 10 5 L 10 4 L 6 4 z M 2 7 L 2 10 L 5 10 L 5 7 L 2 7 z M 6 7 L 6 8 L 13 8 L 13 7 L 6 7 z M 6 9 L 6 10 L 8 10 L 8 9 L 6 9 z M 13.335938 9 L 10.1875 12.609375 L 8.6621094 11.056641 L 8 11.732422 L 10.226562 14 L 14 9.6777344 L 13.335938 9 z "
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
    d="M 3 3 L 3 7 L 7 7 L 7 3 L 3 3 z M 8 3 L 8 4 L 20 4 L 20 3 L 8 3 z M 8 6 L 8 7 L 15 7 L 15 6 L 8 6 z M 3 9 L 3 13 L 7 13 L 7 9 L 3 9 z M 8 9 L 8 10 L 20 10 L 20 9 L 8 9 z M 8 12 L 8 13 L 12 13 L 12 12 L 8 12 z M 19.292969 12.613281 L 14.701172 17.205078 L 13.554688 16.058594 L 12.847656 16.765625 L 14.693359 18.613281 L 14.699219 18.605469 L 14.707031 18.613281 L 20 13.320312 L 19.292969 12.613281 z M 3 15 L 3 19 L 7 19 L 7 15 L 3 15 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
