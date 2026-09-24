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
     d="M 9.5 2 L 8.78125 2.71875 L 11.09375 5 L 10 5 L 8.8125 5 L 8 5 L 7.5 5 C 5.0147171 5 3 7.0147479 3 9.5 C 3 11.985252 5.0147171 14 7.5 14 L 8 14 L 9 14 L 9 13 L 8 13 L 7.5 13 C 5.5670021 13 4 11.433002 4 9.5 C 4 7.5669984 5.5670021 6 7.5 6 L 8 6 L 8.8125 6 L 10 6 L 11.09375 6 L 8.78125 8.28125 L 9.5 9 L 12.78125 5.71875 L 13 5.5 L 12.78125 5.28125 L 9.5 2 z "
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
	d="m13.699219 3l-.707031.707031 2.292968 2.292969h-2.285156-1.00781-.492188c-3.601 0-6.5 2.899-6.5 6.5 0 3.601 2.899 6.5 6.5 6.5h1.5v-1h-1.5c-3.047 0-5.5-2.453-5.5-5.5 0-3.047 2.453-5.5 5.5-5.5h.492188 1.00781 2.285156l-2.292968 2.292969.707031.707031 3.292969-3.292969.207031-.207031-.207031-.207031-3.292969-3.292969" 
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
     d="m21 3.5l-.707.707 3.793 3.793h-8.09a10 10 0 0 0 -10 10 10 10 0 0 0 10 10h1v-1h-1a9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9h8.09l-3.793 3.793.707.707 5-5-1-1z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
