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
			<g class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none">
        <path d="m2 13v-10h12v10h-1v-9h-10v8h2v1z"/>
        <path d="m8 14h3.15l1-3s-2.15-1-3.15-1.00002v-2.25427c0-.99999-1-.99999-1 .00009v4.2542h-.25l-.5-1c-.75-1.5-1.5 0-1.5 0z"/>
        <path d="m10 7.25v1.75c.5664-.35 1-1.04318 1-1.75 0-1.24264-1.11929-2.25-2.5-2.25s-2.5 1.00736-2.5 2.25c0 .70682.43361 1.4 1 1.75v-1.75c0-.59386.56986-1.25 1.5-1.25s1.5.65614 1.5 1.25z"/>
    </g>
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
			<g class="ColorScheme-Text" style="fill:currentColor;fill-opacity:1;stroke:none">
        <path d="m2 18v-15h18v14.5h-1v-13.5h-16v13h3v1z"/>
        <path d="m10 20.9999h6.5l1.5-6c-2-1.4999-4.5-2-6-2v-3.69991c0-1.29999-2-2.00008-2 0v7.70001l-1.5-2.0001c-1.5-2-3 0-3 0z"/>
        <path d="m9.0001 12.3726c-.9068-.6325-1.5001-1.6833-1.5001-2.87272 0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 .97932-.4022 1.86482-1.0505 2.50002h1.2927c.4787-.715.7578-1.5749.7578-2.50002 0-2.48528-2.0147-4.5-4.5-4.5-2.48528 0-4.5 2.01472-4.5 4.5 0 1.76692 1.01833 3.29592 2.5001 4.03232z"/>
    </g>
		</svg>
	{/if}
