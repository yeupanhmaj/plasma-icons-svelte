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
			<path d="M12 7a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zM9.707 8l-6 6L3 13.293 8.293 8 3 2.707 3.707 2l6 6z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 5.7070312 3 L 5 3.7070312 L 11.125 9.8320312 L 12.292969 11 L 11.125 12.167969 L 5 18.292969 L 5.7070312 19 L 11.832031 12.875 L 13.707031 11 L 11.832031 9.125 L 5.7070312 3 z M 16 10 C 15.446 10 15 10.446 15 11 C 15 11.554 15.446 12 16 12 C 16.554 12 17 11.554 17 11 C 17 10.446 16.554 10 16 10 z "
    class="ColorScheme-Text"
    />
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
			<path d="M25 15a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-4.293 1l-14-14L6 2.707 19.293 16 6 29.293l.707.707z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
