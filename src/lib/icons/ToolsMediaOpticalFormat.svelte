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
       d="M 8 2 A 6 6.0000086 0 0 0 2 8 A 6 6.0000086 0 0 0 8 14 A 6 6.0000086 0 0 0 14 8 A 6 6.0000086 0 0 0 8 2 z M 8 3 A 5 5 0 0 1 13 8 A 5 5 0 0 1 8 13 A 5 5 0 0 1 3 8 A 5 5 0 0 1 8 3 z M 8 6 A 2 2 0 0 0 6 8 A 2 2 0 0 0 8 10 A 2 2 0 0 0 10 8 A 2 2 0 0 0 8 6 z M 8 7 A 1 1 0 0 1 9 8 A 1 1 0 0 1 8 9 A 1 1 0 0 1 7 8 A 1 1 0 0 1 8 7 z "
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
    d="M 11 3 C 6.568 3 3 6.568 3 11 C 3 15.432 6.568 19 11 19 C 15.432 19 19 15.432 19 11 C 19 6.568 15.432 3 11 3 z M 11 4 C 14.878 4 18 7.122 18 11 C 18 14.878 14.878 18 11 18 C 7.122 18 4 14.878 4 11 C 4 7.122 7.122 4 11 4 z M 11 9 C 9.8920013 9 9 9.8920013 9 11 C 9 12.107999 9.8920013 13 11 13 C 12.107999 13 13 12.107999 13 11 C 13 9.8920013 12.107999 9 11 9 z M 11 10 C 11.553999 10 12 10.446001 12 11 C 12 11.553999 11.553999 12 11 12 C 10.446001 12 10 11.553999 10 11 C 10 10.446001 10.446001 10 11 10 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
