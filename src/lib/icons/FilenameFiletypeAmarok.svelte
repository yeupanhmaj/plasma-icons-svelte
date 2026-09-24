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
     d="M 5 2 L 5 3 L 5 10.28125 C 4.70546 10.11049 4.36497 10 4 10 C 2.89543 10 2 10.89544 2 12 C 2 13.10456 2.89543 14 4 14 C 5.10457 14 6 13.10456 6 12 L 6 5 L 13 5 L 13 9.28125 C 12.70546 9.11049 12.36496 9 12 9 C 10.89543 9 10 9.89544 10 11 C 10 12.10456 10.89543 13 12 13 C 13.10457 13 14 12.10456 14 11 L 14 3 L 14 2 L 5 2 z M 6 3 L 13 3 L 13 4 L 6 4 L 6 3 z "
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
    d="m333 537.3622v1 10.50391a2.5 2.5 0 0 0 -1.5 -.50391 2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5 -2.5v-9.5h10v5.50391a2.5 2.5 0 0 0 -1.5 -.50391 2.5 2.5 0 0 0 -2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5 -2.5v-10.5-.5-.5h-11-1m1 1h10v2h-10v-2" transform="translate(-326-534.3622)"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
