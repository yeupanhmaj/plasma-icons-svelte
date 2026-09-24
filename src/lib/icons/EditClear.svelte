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
     d="M 6 2 L 0.70703125 7.2929688 L 0 8 L 0.70703125 8.7070312 L 6 14 L 15 14 L 16 14 L 16 2 L 15 2 L 6 2 z M 8.0019531 5 L 10.011719 7.0097656 L 12.021484 5 L 13.011719 5.9902344 L 11.001953 8 L 13.011719 10.009766 L 12.021484 11 L 10.011719 8.9902344 L 8.0019531 11 L 7.0117188 10.009766 L 9.0214844 8 L 7.0117188 5.9902344 L 8.0019531 5 z "
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
	d="M 8 3 L 0.94335938 10.056641 L 0 11 L 0.94335938 11.943359 L 8 19 L 20.333984 19 L 22 19 L 22 3 L 20.333984 3 L 8 3 z M 11.320312 7 L 14 9.6796875 L 16.679688 7 L 18 8.3203125 L 15.320312 11 L 18 13.679688 L 16.679688 15 L 14 12.320312 L 11.320312 15 L 10 13.679688 L 12.679688 11 L 10 8.3203125 L 11.320312 7 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
