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
     d="m2 2v12h12v-12h-11zm1 3h10v8h-10zm1 1v2h2v-2zm3 1v1h5v-1zm-3 3v2h2v-2zm3 0v1h5v-1z"
     class="ColorScheme-Text"/>
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
    d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 7 L 18 7 L 18 18 L 4 18 L 4 7 z M 6 9 L 6 11 L 8 11 L 8 9 L 6 9 z M 9 10 L 9 11 L 16 11 L 16 10 L 9 10 z M 6 14 L 6 16 L 8 16 L 8 14 L 6 14 z M 9 14 L 9 15 L 16 15 L 16 14 L 9 14 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
