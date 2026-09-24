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
     d="M 7 2 L 7 4.1328125 A 4 4 0 0 0 4.1308594 7 L 2 7 L 2 9 L 4.1328125 9 A 4 4 0 0 0 8 12 A 4 4 0 0 0 11.869141 9 L 14 9 L 14 7 L 11.867188 7 A 4 4 0 0 0 9 4.1308594 L 9 2 L 7 2 z M 8 5 A 3 3 0 0 1 11 8 A 3 3 0 0 1 8 11 A 3 3 0 0 1 5 8 A 3 3 0 0 1 8 5 z "
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
    d="M 10 3 L 10 5.0898438 A 6 6 0 0 0 5.0859375 10 L 3 10 L 3 12 L 5.0898438 12 A 6 6 0 0 0 11 17 A 6 6 0 0 0 16.914062 12 L 19 12 L 19 10 L 16.910156 10 A 6 6 0 0 0 12 5.0859375 L 12 3 L 10 3 z M 11 6 A 5 5 0 0 1 16 11 A 5 5 0 0 1 11 16 A 5 5 0 0 1 6 11 A 5 5 0 0 1 11 6 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
