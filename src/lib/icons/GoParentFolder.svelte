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
       d="M 2 2 L 2 3 L 2 6 L 2 7 L 2 13 L 2 14 L 9 14 L 9 13 L 3 13 L 3 7 L 13 7 L 13 8 L 14 8 L 14 6 L 14 5 L 14 4 L 9.0078125 4 L 7.0078125 2 L 7 2.0078125 L 7 2 L 3 2 L 2 2 z M 3 3 L 6.5917969 3 L 7.59375 4 L 7 4 L 7 4.0078125 L 6.9921875 4 L 4.9921875 6 L 3 6 L 3 3 z M 11.5 8 L 9.6210938 9.8789062 L 8.671875 10.828125 L 9.3789062 11.535156 L 10.328125 10.585938 L 11 9.9140625 L 11 12 L 11 14 L 12 14 L 12 13 L 12 12 L 12 9.9140625 L 12.671875 10.585938 L 13.621094 11.535156 L 14.328125 10.828125 L 13.378906 9.8789062 L 11.5 8 z "
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
     d="M 3 3 L 3 4 L 3 19 L 4 19 L 12 19 L 12 18 L 4 18 L 4 10 L 7 10 L 7 9.9921875 L 7.0078125 10 L 9.0078125 8 L 18 8 L 18 12 L 19 12 L 19 5 L 12.007812 5 L 10.007812 3 L 10 3.0078125 L 10 3 L 4 3 L 3 3 z M 15.5 11.792969 L 14.792969 12.5 L 12 15.292969 L 12.707031 16 L 15 13.707031 L 15 19 L 16 19 L 16 18 L 16 17 L 16 13.707031 L 18.292969 16 L 19 15.292969 L 16.207031 12.5 L 15.5 11.792969 z "
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
     d="M 4 4 L 4 28 L 18 28 L 18 27 L 5 27 L 5 14 L 10 14 L 13 11 L 27 11 L 27 16 L 28 16 L 28 7 L 18 7 L 15 4 L 4 4 z M 23 16 L 18 21 L 18.707031 21.707031 L 22.5 17.914062 L 22.5 28.003906 L 23.5 28.003906 L 23.5 17.914062 L 27.292969 21.707031 L 28 21 L 24 17 L 23 16 z "
     id="path71" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
