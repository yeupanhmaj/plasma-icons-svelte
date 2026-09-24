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
			viewBox="0 0 4.2333332 4.2333335"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="scale(.26458333)"><path d="m4 6v1h8v-1zm0 3v1h8v-1zm0 2v1h8v-1zm0 2v1h6v-1z"/><path d="m2 2v2h-2v1h2v9h1v-9h10v9h1v-10h-11v-2z"/></g>
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
			<g id="g7" class="ColorScheme-Text" fill="currentColor">
        <path id="path3" d="m5 7v1h12v-1zm0 3v1h12v-1zm0 2v1h12v-1zm0 2v1h12v-1zm0 2v1h12v-1zm0 2v1h10v-1z"/>
        <path id="path5" d="m3 3v2h-2v1h2v13h1v-13h14v13h1v-14h-15v-2z"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8.4666663 8.4666671"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="scale(.26458333)"><path d="m6 6v1h14v-1zm0 3v1h20v-1zm0 2v1h20v-1zm0 2v1h20v-1zm0 2v1h20v-1zm0 2v1h17v-1zm2 2v1h18v-1zm-2 2v1h20v-1zm0 2v1h20v-1zm0 2v1h14v-1z"/><path d="m4 2v2h-2v1h2v23h23v2h1v-2h2v-1h-2v-23h-23v-2zm1 3h22v22h-22z"/></g>
		</svg>
	{/if}
