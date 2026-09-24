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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="scale(.26458333)"><path d="m4 3v1h8v-1zm0 10v1h8v-1z" opacity=".5"/><path d="m4 7v1h8v-1zm0 2v1h8v-1z"/><path d="m2 3v2h-2v1h2v6h11v2h1v-2h2v-1h-2v-6h-11v-2zm1 3h10v5h-10z"/></g>
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
			<g id="g9" class="ColorScheme-Text" fill="currentColor">
        <path id="path3" d="m5 4v1h12v-1zm1 2v1h11v-1zm-1 12v1h11v-1z" opacity=".5"/>
        <path id="path5" d="m6 10v1h10v-1zm0 2v1h10v-1zm0 2v1h10v-1z"/>
        <path id="path7" d="m4 6v2h-2v1h2v8h13v2h1v-2h2v-1h-2v-8h-13v-2zm1 3h12v7h-12z"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8.4666662 8.4666671"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="scale(.26458333)"><path d="m6 3v1h20v-1zm0 2v1h20v-1zm0 2v1h20v-1zm0 2v1h20v-1zm2 2v1h18v-1zm-1.9999999 12v1h17.9999999v-1zm-.0000001 2v1h20v-1zm0 2v1h20v-1zm0 2v1h20v-1z" opacity=".5"/><path d="m8 15v1h16v-1zm0 2v1h16v-1zm0 2v1h16v-1z"/><path d="m6 11v2h-2v1h2v8h19v2h1v-2h2v-1h-2v-8h-19v-2zm1 3h18v7h-18z"/></g>
		</svg>
	{/if}
