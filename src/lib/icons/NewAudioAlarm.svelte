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
     d="m5 2v8.281c-.295-.171-.635-.281-1-.281-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-7h7v4.281c-.295-.171-.635-.281-1-.281-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-9zm1 1h7v1h-7z"
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
     d="M 7 3 L 7 4 L 7 14.503906 A 2.5 2.5 0 0 0 5.5 14 A 2.5 2.5 0 0 0 3 16.5 A 2.5 2.5 0 0 0 5.5 19 A 2.5 2.5 0 0 0 8 16.5 L 8 7 L 18 7 L 18 12.503906 A 2.5 2.5 0 0 0 16.5 12 A 2.5 2.5 0 0 0 14 14.5 A 2.5 2.5 0 0 0 16.5 17 A 2.5 2.5 0 0 0 19 14.5 L 19 4 L 19 3.5 L 19 3 L 8 3 L 7 3 z M 8 4 L 18 4 L 18 6 L 8 6 L 8 4 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
