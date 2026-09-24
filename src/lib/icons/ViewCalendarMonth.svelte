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
     d="m2 2v12h12v-12h-2v2h-2v-2h-4v2h-2v-2h-2m1 3h10v8h-10v-8"
     class="ColorScheme-Text"/>
 <path d="m4 6v2h2v-2h-2m3 0v2h2v-2h-2m3 0v2h2v-2h-2m-6 3v2h2v-2h-2m3 0v2h2v-2h-2m3 0v2h2v-2h-2"   style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
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
     d="M 6 3 C 6 3 5 2.99997 5 4 L 3 4 L 3 7 L 3 18 L 3 19 L 19 19 L 19 18 L 19 7 L 19 4 L 17 4 C 17 2.99997 16 3 16 3 L 13 3 C 13 3 12 2.99997 12 4 L 10 4 C 10 2.99997 9 3 9 3 L 6 3 z M 6 4 L 9 4 L 9 5 L 6 5 L 6 4 z M 13 4 L 16 4 L 16 5 L 13 5 L 13 4 z M 4 7 L 18 7 L 18 18 L 4 18 L 4 7 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#2ecc71;fill-opacity:1;stroke:none" 
     d="M 6 8 L 6 10 L 8 10 L 8 8 L 6 8 z M 10 8 L 10 10 L 12 10 L 12 8 L 10 8 z M 14 8 L 14 10 L 16 10 L 16 8 L 14 8 z M 6 11 L 6 13 L 8 13 L 8 11 L 6 11 z M 10 11 L 10 13 L 12 13 L 12 11 L 10 11 z M 14 11 L 14 13 L 16 13 L 16 11 L 14 11 z M 14 14 L 14 16 L 16 16 L 16 14 L 14 14 z "
     />
		</svg>
	{/if}
