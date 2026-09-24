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
			<path d="M 13.5,1.79296875 11.79296875,3.5 12.5,4.20703125 14.20703125,2.5 Z M 2,2 V 14 H 14 V 13 H 3 v -2 h 2.70703125 l 2.5,-2.5 L 7.5,7.79296875 5.29296875,10 H 3 V 2 Z M 10.5,4.79296875 8.79296875,6.5 9.5,7.20703125 11.20703125,5.5 Z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m4 3v14h-1v1h1v1h1v-1h14v-1h-14v-2h2.7070312l2.5-2.5-0.70703125-0.70703125-2.2070312 2.2070312h-2.2929688v-11h-1zm13.5 0.79296875-2.7070312 2.7070312 0.70703125 0.70703125 2.7070312-2.7070312-0.70703125-0.70703125zm-4 4-2.7070312 2.7070312 0.70703125 0.70703125 2.7070312-2.7070312-0.70703125-0.70703125z" fill="currentColor"/>
		</svg>
	{/if}
