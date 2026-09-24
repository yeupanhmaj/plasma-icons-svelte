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
     d="M 6.5 2 L 3.21875 5.28125 L 3 5.5 L 3.21875 5.71875 L 6.5 9 L 7.21875 8.28125 L 4.90625 6 L 6 6 L 7.1875 6 L 8 6 L 8.5 6 C 10.432998 6 12 7.5669984 12 9.5 C 12 11.433002 10.432998 13 8.5 13 L 8 13 L 7 13 L 7 14 L 8 14 L 8.5 14 C 10.985283 14 13 11.985252 13 9.5 C 13 7.0147479 10.985283 5 8.5 5 L 8 5 L 7.1875 5 L 6 5 L 4.90625 5 L 7.21875 2.71875 L 6.5 2 z "
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
    d="m8.300781 3l-3.292969 3.292969-.207031.207031.207031.207031 3.292969 3.292969.707031-.707031-2.292969-2.292969h2.285156 1.00781.492188c3.047 0 5.5 2.453 5.5 5.5 0 3.047-2.453 5.5-5.5 5.5h-1.5v1h1.5c3.601 0 6.5-2.899 6.5-6.5 0-3.601-2.899-6.5-6.5-6.5h-.492188-1.00781-2.285156l2.292969-2.292969-.707031-.707031"
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m11 3.5l.707.707-3.793 3.793h8.09c5.523 0 10 4.477 10 10 0 5.523-4.477 10-10 10h-1v-1h1c4.971 0 9-4.03 9-9 0-4.971-4.03-9-9-9h-8.09l3.793 3.793-.707.707-5-5 1-1z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
