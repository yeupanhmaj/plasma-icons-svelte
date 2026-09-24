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
			<rect fill="#7f8c8d" height="6" ry="1" width="8" y="1"/>
    <g fill="#fff">
        <path d="M2 2c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1h1c.554 0 1-.446 1-1V3c0-.554-.446-1-1-1zm0 1h1v2H2zM5 2c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1h1c.554 0 1-.446 1-1V3c0-.554-.446-1-1-1zm0 1h1v2H5z"/>
    </g>
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
			<rect fill="#7f8c8d" height="10" ry="2" width="16" y="3"/>
    <path d="M2 3C.892 3 0 3.892 0 5v6c0 1.108.892 2 2 2h12c1.108 0 2-.892 2-2V5c0-1.108-.892-2-2-2zm0 1h12c.554 0 1 .446 1 1v6c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V5c0-.554.446-1 1-1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
    <g fill="#fff">
        <rect height="2" ry="1" width="6" x="5" y="7"/>
        <path d="M3 5c-.554 0-1 .446-1 1v4c0 .554.446 1 1 1h3c.554 0 1-.446 1-1V6c0-.554-.446-1-1-1zm0 1h3v4H3zM10 5c-.554 0-1 .446-1 1v4c0 .554.446 1 1 1h3c.554 0 1-.446 1-1V6c0-.554-.446-1-1-1zm0 1h3v4h-3z"/>
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
			<rect fill="#7f8c8d" height="14" ry="2" width="22" y="4"/>
    <path d="M1.818 4A1.815 1.815 0 0 0 0 5.818v10.364C0 17.189.811 18 1.818 18h18.364A1.815 1.815 0 0 0 22 16.182V5.818A1.815 1.815 0 0 0 20.182 4zM2 5h18c.554 0 1 .446 1 1v10c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V6c0-.554.446-1 1-1z" style="fill:currentColor;fill-opacity:0.6;stroke:none" class="ColorScheme-Text"/>
    <g fill="#fff">
        <path d="M4 7c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h5c.554 0 1-.446 1-1V8c0-.554-.446-1-1-1zm0 1h5v6H4zM13 7c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h5c.554 0 1-.446 1-1V8c0-.554-.446-1-1-1zm0 1h5v6h-5z"/>
        <rect height="3" ry="1" width="6" x="8" y="9.5"/>
    </g>
		</svg>
	{/if}
