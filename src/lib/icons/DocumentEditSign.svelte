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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 3 2 L 3 14 L 7 14 L 7 13 L 4 13 L 4 3 L 9 3 L 9 6 L 12 6 L 12 7 L 13 7 L 13 5 L 10 2 L 3 2 Z M 12 8 L 8 12 L 8 14 L 10 14 L 14 10 L 12 8 Z M 11.6894 9.68945 L 12.2813 10.2813 L 9.3125 13.2813 L 8.71875 12.6875 L 11.6894 9.68945 Z"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path class="ColorScheme-Text" style="fill:currentColor; fill-opacity:1; stroke:none" d="M 4 3 L 4 19 L 9 19 L 9 18 L 5 18 L 5 4 L 13 4 L 13 8 L 17 8 L 17 11 L 18 11 L 18 7 L 14 3 L 4 3 Z M 18.0002 12.9961 L 16 11 L 10.0079 16.9893 L 9.9999 18.9825 L 12.0139 18.9805 L 18.0002 12.9961 Z M 16.2951 13.293 L 11.3049 18.2754 L 10.7112 17.6836 L 15.7034 12.6992 L 16.2951 13.293 Z"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 6 4 L 6 28 L 13 28 L 13 27 L 7 27 L 7 5 L 18 5 L 18 12 L 25 12 L 25 16 L 26 16 L 26 11 L 19 4 L 18 4 L 6 4 z M 22.398438 16 L 17.287109 21.111328 L 14 24.398438 L 14 28 L 17.601562 28 L 26 19.601562 L 22.398438 16 z M 20.349609 19.490234 L 22.509766 21.650391 L 19.335938 24.824219 L 19.335938 24.150391 L 18.322266 24.173828 L 17.287109 24.173828 L 17.287109 23.136719 L 17.287109 22.552734 L 20.349609 19.490234 z M 16.273438 23.564453 L 16.273438 25.185547 L 18.300781 25.185547 L 18.322266 25.839844 L 17.240234 26.919922 L 15.800781 26.919922 L 15.080078 26.199219 L 15.080078 24.757812 L 16.273438 23.564453 z "
     id="path8" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
