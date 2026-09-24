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
     d="M 3.5 2 C 2.6715729 2 2 2.6715729 2 3.5 C 2 4.1558381 2.413588 4.7024102 3 4.90625 L 3 5 L 3 6 L 3 11 L 2 11 L 2 14 L 5 14 L 5 13 L 8 13 L 8 12 L 5 12 L 5 11 L 4 11 L 4 6 L 4 5 L 4 4.90625 C 4.4320931 4.7560523 4.7560523 4.4320931 4.90625 4 L 5 4 L 6 4 L 11 4 L 11 5 L 12 5 L 12 8 L 13 8 L 13 5 L 14 5 L 14 2 L 11 2 L 11 3 L 6 3 L 5 3 L 4.90625 3 C 4.7024102 2.413588 4.1558381 2 3.5 2 z M 3.5 3 C 3.7761424 3 4 3.2238576 4 3.5 C 4 3.7761424 3.7761424 4 3.5 4 C 3.2238576 4 3 3.7761424 3 3.5 C 3 3.2238576 3.2238576 3 3.5 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z "
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
	d="m4.5 3c-.831 0-1.5.669-1.5 1.5 0 .6542.418077 1.202203 1 1.408203v10.0918h-1v3h3v-1h7v-1h-7v-1h-1v-10.0918c.424456-.1503.756746-.485503.908203-.908203h10.0918v1h1v7h1v-7h1v-3h-3v1h-10.0918c-.206006-.5819-.753963-1-1.408203-1m0 1c.277 0 .5.223.5.5 0 .277-.223.5-.5.5-.277 0-.5-.223-.5-.5 0-.277.223-.5.5-.5m12.5 0h1v1h-1v-1m-1 10v2h-2v1h2v2h1v-2h2v-1h-2v-2h-1m-12 3h1v1h-1v-1" 
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
