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
       d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 13 L 3 13 L 3 3 z M 6 5 L 6 11 L 10 8 L 6 5 z "
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
			<g id="media-playback-playing">
        <path d="m0 0h22v22h-22z" fill="none"/>
        <g class="ColorScheme-Text" fill="currentColor" fill-rule="evenodd">
            <path d="m11 3a8 8 0 0 0 -8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0 -8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1 -7 7 7 7 0 0 1 -7-7 7 7 0 0 1 7-7z"/>
            <path d="m9 14 6-3-6-3z"/>
        </g>
    </g>
		</svg>
	{/if}
