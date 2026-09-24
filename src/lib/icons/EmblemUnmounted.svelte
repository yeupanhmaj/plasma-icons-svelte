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

	{#if numericSize <= 12}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8 8"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" d="M1 0h6c.554 0 1 .446 1 1v6c0 .554-.446 1-1 1H1c-.554 0-1-.446-1-1V1c0-.554.446-1 1-1z"/>
    <path d="M7.244.049L5.646 1.646l-.59-.59-1.5 1.5 1.887 1.887 1.5-1.5-.59-.59L7.952.757a.97.97 0 0 0-.707-.707zM2.557 3.557l-1.5 1.5.59.59L.048 7.243a.97.97 0 0 0 .707.707l1.598-1.597.59.59 1.5-1.5z" fill="#fff"/>
		</svg>
	{:else if numericSize <= 19}
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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" height="16" rx="2" width="16"/>
    <path style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text" d="M2 0C.892 0 0 .892 0 2v12c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v12c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z"/>
    <path d="M13.586 1l-2.414 2.414L9.758 2 7 4.758l1.414 1.414 1.414 1.414L11.242 9 14 6.242l-1.414-1.414L15 2.414V2c0-.554-.446-1-1-1zM4.758 7L2 9.758l1.414 1.414L1 13.586V14c0 .554.446 1 1 1h.414l2.414-2.414L6.242 14 9 11.242z" fill="#fff"/>
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
			<rect style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" height="22" rx="2" width="22"/>
    <path d="M2 0C.892 0 0 .892 0 2v18c0 1.108.892 2 2 2h18c1.108 0 2-.892 2-2V2c0-1.108-.892-2-2-2zm0 1h18c.554 0 1 .446 1 1v18c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V2c0-.554.446-1 1-1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
    <path d="M19 1l-4 4-2-2-3.5 3.5 6 6L19 9l-2-2 4-4V2c0-.554-.446-1-1-1zM6.5 9.5L3 13l2 2-4 4v1c0 .554.446 1 1 1h1l4-4 2 2 3.5-3.5z" fill="#fff"/>
		</svg>
	{/if}
