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
			<g fill="#1d70f7">
        <path d="M8 2v1H7v1h1v1h1V4h1V3H9V2zm4 0v1h-1v1h1v1h1V4h1V3h-1V2z"/>
        <path d="M6 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 2.826-1.174l-.707-.707A3 3 0 0 1 6 13a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 2.12.88l.706-.706A4 4 0 0 0 6 6z" fill-rule="evenodd"/>
    </g>
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
			<g fill="#1d70f7">
        <path d="M16 3v2h-2v1h2v2h1V6h2V5h-2V3zm-6 0v2H8v1h2v2h1V6h2V5h-2V3z"/>
        <path d="M8 9a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 3.533-1.467l-.707-.707A4 4 0 0 1 8 18a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 2.826 1.174l.707-.707A5 5 0 0 0 8 9z" fill-rule="evenodd"/>
    </g>
		</svg>
	{:else if numericSize <= 48}
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
			<defs>
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="20" x2="27" y1="9" y2="16">
            <stop offset="0" stop-color="#060606"/>
            <stop offset="1" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="384.57" x2="384.57" y1="544.8" y2="517.8">
            <stop offset="0" stop-color="#fff" stop-opacity="0"/>
            <stop offset="1" stop-color="#fff" stop-opacity=".2"/>
        </linearGradient>
        <path id="a" d="M389.57 545.8v-28h15l7 7v21h-14z"/>
    </defs>
    <use fill="#1d70f7" height="100%" transform="translate(-384.57 -515.8)" width="100%" xlink:href="#a"/>
    <path d="M5 3h15V2H5z" fill="#fff" opacity=".5"/>
    <path d="M5 30h22v-1H5z" opacity=".25"/>
    <path d="M27 9l-7-7v7z" fill-rule="evenodd" opacity=".6"/>
    <path d="M20 9l7 7V9z" fill="url(#b)" fill-rule="evenodd" opacity=".1"/>
    <use fill="url(#c)" height="100%" transform="translate(-384.57 -515.8)" width="100%" xlink:href="#a"/>
    <g opacity=".7">
        <path d="M16 10v1h-1v1h1v1h1v-1h1v-1h-1v-1zm4 0v1h-1v1h1v1h1v-1h1v-1h-1v-1z"/>
        <path d="M14 14a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 2.826-1.174l-.707-.707A3 3 0 0 1 14 21a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 2.12.88l.706-.706A4 4 0 0 0 14 14z" fill-rule="evenodd"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs>
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="412" x2="426" y1="1331.36" y2="1345.36">
            <stop offset="0" stop-color="#060606"/>
            <stop offset="1" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="c" gradientTransform="translate(324 982)" gradientUnits="userSpaceOnUse" x2="0" y1="392.36" y2="336.36">
            <stop offset="0" stop-color="#fff" stop-opacity="0"/>
            <stop offset="1" stop-color="#fff" stop-opacity=".2"/>
        </linearGradient>
        <path id="a" d="M382 1375.36v-58h30l14 14v44h-14z"/>
    </defs>
    <use fill="#1d70f7" height="100%" transform="translate(-372 -1314.36)" width="100%" xlink:href="#a"/>
    <path d="M10 4h30V3H10z" fill="#fff" opacity=".5"/>
    <path d="M10 61h44v-1H10z" opacity=".25"/>
    <g fill-rule="evenodd">
        <path d="M54 17L40 3v14z" opacity=".6"/>
        <path d="M412 1331.36l14 14v-14z" fill="url(#b)" opacity=".2" transform="translate(-372 -1314.36)"/>
    </g>
    <use fill="url(#c)" height="100%" transform="translate(-372 -1314.36)" width="100%" xlink:href="#a"/>
    <path d="M30 22v3h-3v1h3v3h1v-3h3v-1h-3v-3zm8 0v3h-3v1h3v3h1v-3h3v-1h-3v-3z" opacity=".7"/>
    <path d="M28 30a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 4.24-1.76l-.707-.707A5 5 0 0 1 28 41a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 3.533 1.467l.707-.707A6 6 0 0 0 28 30z" fill-rule="evenodd" opacity=".7"/>
		</svg>
	{/if}
