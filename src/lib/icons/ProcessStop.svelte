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
     class="ColorScheme-NegativeText"
    d="M 8 2 A 6 5.9999852 0 0 0 4.5273438 3.1132812 L 5.2460938 3.8320312 A 5 5 0 0 1 8 3 A 5 5 0 0 1 13 8 A 5 5 0 0 1 12.167969 10.753906 L 12.884766 11.470703 A 6 5.9999852 0 0 0 14 8 A 6 5.9999852 0 0 0 8 2 z M 3.1152344 4.5292969 A 6 5.9999852 0 0 0 2 8 A 6 5.9999852 0 0 0 8 14 A 6 5.9999852 0 0 0 11.472656 12.886719 L 10.753906 12.167969 A 5 5 0 0 1 8 13 A 5 5 0 0 1 3 8 A 5 5 0 0 1 3.8320312 5.2460938 L 3.1152344 4.5292969 z M 5 7 L 5 9 L 11 9 L 11 7 L 5 7 z "
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText">
        <path d="M11 3c4.432 0 8 3.568 8 8 0 1.442-.383 2.79-1.045 3.955l-.738-.738A6.985 6.985 0 0 0 18 11c0-3.878-3.122-7-7-7a6.985 6.985 0 0 0-3.217.783l-.738-.738A7.982 7.982 0 0 1 11 3M4.045 7.045l.738.738A6.985 6.985 0 0 0 4 11c0 3.878 3.122 7 7 7a6.985 6.985 0 0 0 3.217-.783l.738.738A7.982 7.982 0 0 1 11 19c-4.432 0-8-3.568-8-8 0-1.442.383-2.79 1.045-3.955"/>
        <path d="M7.5 9.998h7v2h-7z"/>
    </g>
		</svg>
	{/if}
