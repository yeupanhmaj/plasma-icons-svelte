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
     d="M 3.5 2 C 2.672 2 2 2.672 2 3.5 C 2 4.156 2.414 4.70225 3 4.90625 L 3 11 L 2 11 L 2 14 L 5 14 L 5 11 L 4 11 L 4 4.90625 C 4.432 4.75625 4.75625 4.432 4.90625 4 L 11 4 L 11 5 L 14 5 L 14 2 L 11 2 L 11 3 L 4.90625 3 C 4.70225 2.414 4.156 2 3.5 2 z M 3.5 3 C 3.776 3 4 3.224 4 3.5 C 4 3.776 3.776 4 3.5 4 C 3.224 4 3 3.776 3 3.5 C 3 3.224 3.224 3 3.5 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 6 5 L 6 11.125 L 7.2695312 10.5 L 8.8007812 12 L 8.640625 9.9003906 L 10 9.375 L 6 5 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z "
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
	d="m4.5 3c-.831 0-1.5.669-1.5 1.5 0 .65424.418077 1.202197 1 1.408203v10.0918h-1v3h3v-3h-1v-10.0918c.424456-.150261.756746-.48554.908203-.908203h10.0918v1h3v-3h-3v1h-10.0918c-.206006-.581923-.753963-1-1.408203-1m0 1c.277 0 .5.223.5.5 0 .277-.223.5-.5.5-.277 0-.5-.223-.5-.5 0-.277.223-.5.5-.5m12.5 0h1v1h-1v-1m-11 2v7l2-2.5h3l-5-4.5m-2 11h1v1h-1v-1"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
