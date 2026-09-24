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
     d="m13.646 1.646l-4.354 4.354h-3.293v3.293l-4.354 4.354.707.707 4.354-4.354h3.293v-3.293l4.354-4.354zm-11.646.354v1h1v-1zm2 2v1h1v-1zm7 7v1h1v-1zm2 2v1h1v-1z"
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
     d="M 3 3 L 3 4 L 4 4 L 4 3 L 3 3 z M 18.292969 3 L 12.292969 9 L 9 9 L 9 12.292969 L 3 18.292969 L 3.7070312 19 L 9.7070312 13 L 13 13 L 13 9.7070312 L 19 3.7070312 L 18.292969 3 z M 5 5 L 5 6 L 6 6 L 6 5 L 5 5 z M 7 7 L 7 8 L 8 8 L 8 7 L 7 7 z M 14 14 L 14 15 L 15 15 L 15 14 L 14 14 z M 16 16 L 16 17 L 17 17 L 17 16 L 16 16 z M 18 18 L 18 19 L 19 19 L 19 18 L 18 18 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
