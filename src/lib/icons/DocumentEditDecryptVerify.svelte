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
     d="M 3 2 L 3 4 L 5 4 L 5 2 L 3 2 z M 5 4 L 5 6 L 7 6 L 7 4 L 5 4 z M 7 4 L 9 4 L 9 2 L 7 2 L 7 4 z M 9 4 L 9 6 L 11 6 L 11 4 L 9 4 z M 11 4 L 13 4 L 13 2 L 11 2 L 11 4 z M 9 6 C 7.338 6 6 7.338 6 9 C 6 10.662 7.338 12 9 12 C 9.64939 12 10.26003 11.7855 10.75 11.4375 L 13.28125 14 L 14 13.28125 L 11.4375 10.75 C 11.78555 10.2601 12 9.6494 12 9 C 12 7.338 10.662 6 9 6 z M 3 6 L 3 13 L 3 14 L 9 14 L 9 13 L 4 13 L 4 6 L 3 6 z M 9 7 C 10.108 7 11 7.892 11 9 C 11 10.108 10.108 11 9 11 C 7.892 11 7 10.108 7 9 C 7 7.892 7.892 7 9 7 z "
     class="ColorScheme-Text"
     />
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
	d="m4 2.998047v.001953 2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2-.001953h-1-12-1m2 3.00195v2h2v-2h-2m4 0v2h2v-2h-2m4 0v2h2v-2h-2m-10 3v2 8h1 7v-1h-7v-7h1v-2h-2m4 0v2h2v-2h-2m5 2c-1.662003 0-3 1.338-3 3 0 1.662 1.337997 3 3 3 .649392 0 1.246354-.208586 1.736328-.556641l2.556641 2.556641.707031-.707031-2.556641-2.556641c.348055-.489974.556641-1.086937.556641-1.736328 0-1.662-1.337997-3-3-3m0 1c1.108003 0 2 .892 2 2 0 1.108-.891997 2-2 2-1.108003 0-2-.892-2-2 0-1.108.891997-2 2-2" 
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 6 4 L 6 6 L 8 6 L 8 4 L 6 4 z M 12 4 L 12 6 L 14 6 L 14 4 L 12 4 z M 18 4 L 18 6 L 20 6 L 20 4 L 18 4 z M 24 4 L 24 6 L 26 6 L 26 4 L 24 4 z M 9 7 L 9 9 L 11 9 L 11 7 L 9 7 z M 15 7 L 15 9 L 17 9 L 17 7 L 15 7 z M 21 7 L 21 9 L 23 9 L 23 7 L 21 7 z M 6 10 L 6 12 L 8 12 L 8 10 L 6 10 z M 12 10 L 12 12 L 14 12 L 14 10 L 12 10 z M 18 10 L 18 12 L 20 12 L 20 10 L 18 10 z M 24 10 L 24 12 L 26 12 L 26 10 L 24 10 z M 9 13 L 9 15 L 11 15 L 11 13 L 9 13 z M 15 13 L 15 15 L 17 15 L 17 13 L 15 13 z M 21 13 L 21 15 L 23 15 L 23 13 L 21 13 z M 6 16 L 6 28 L 14 28 L 14 27 L 7 27 L 7 16 L 6 16 z M 18.5 16 C 16.007 16 14 18.01 14 20.5 C 14 22.993 16.01 25 18.5 25 C 19.563643 25 20.526341 24.618801 21.294922 24.005859 L 25.291016 28.001953 L 25.998047 27.294922 L 22.001953 23.298828 C 22.617604 22.529048 23 21.565338 23 20.5 C 23 18.007 20.99 16 18.5 16 z M 18.5 17 C 20.439 17 22 18.561 22 20.5 C 22 22.439 20.439 24 18.5 24 C 16.561 24 15 22.439 15 20.5 C 15 18.561 16.561 17 18.5 17 z "
     id="path66" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
