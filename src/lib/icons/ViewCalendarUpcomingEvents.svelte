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
     d="m2 2v12h12v-12h-2v2h-2v-2h-4v2h-2v-2m-1 3h10v8h-10z"
     class="ColorScheme-Text"/>
 <path 
     d="m7 6v4h2v-4h-2m0 5v1h2v-1h-2"  style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
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
     d="M 6 3 C 6 3 5 2.99997 5 4 L 3 4 L 3 7 L 3 18 L 3 19 L 19 19 L 19 18 L 19 7 L 19 4 L 17 4 C 17 2.99997 16 3 16 3 L 13 3 C 13 3 12 2.99997 12 4 L 10 4 C 10 2.99997 9 3 9 3 L 6 3 z M 6 4 L 9 4 L 9 5 L 6 5 L 6 4 z M 13 4 L 16 4 L 16 5 L 13 5 L 13 4 z M 4 7 L 18 7 L 18 18 L 4 18 L 4 7 z M 5 9 L 5 11 L 7 11 L 7 9 L 5 9 z M 9 9 L 9 11 L 11 11 L 11 9 L 9 9 z M 13 9 L 13 11 L 15 11 L 15 9 L 13 9 z M 9 12 L 9 14 L 11 14 L 11 12 L 9 12 z M 13 12 L 13 14 L 15 14 L 15 12 L 13 12 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 16 9 L 16 14 L 17 14 L 17 9 L 16 9 z M 16 15 L 16 16 L 17 16 L 17 15 L 16 15 z "
     />
		</svg>
	{/if}
