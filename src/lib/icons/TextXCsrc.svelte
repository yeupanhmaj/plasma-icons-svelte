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
			<path d="M8 2a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 4.24-1.76l-.707-.707A5 5 0 0 1 8 13a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 3.533 1.467l.707-.707A6 6 0 0 0 8 2z" fill="#13a4f7" fill-rule="evenodd"/>
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
			<path d="M11 3a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 5.654-2.346l-.707-.707A7 7 0 0 1 11 18a7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 4.947 2.053l.707-.707A8 8 0 0 0 11 3z" fill="#13a4f7" fill-rule="evenodd"/>
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
        <linearGradient id="c" gradientTransform="translate(309.57 152.44)" gradientUnits="userSpaceOnUse" x2="0" y1="392.36" y2="365.36">
            <stop offset="0" stop-color="#fff" stop-opacity="0"/>
            <stop offset="1" stop-color="#fff" stop-opacity=".2"/>
        </linearGradient>
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="404.57" x2="411.57" y1="524.8" y2="531.8">
            <stop offset="0" stop-color="#060606"/>
            <stop offset="1" stop-opacity="0"/>
        </linearGradient>
        <path id="a" d="M389.57 545.8v-28h15l7 7v21h-14z"/>
    </defs>
    <g transform="translate(-384.57 -515.8)">
        <use fill="#13a4f7" xlink:href="#a"/>
        <path d="M389.57 518.8h15v-1h-15z" fill="#fff" opacity=".5"/>
        <path d="M389.57 545.8h22v-1h-22z" opacity=".25"/>
        <path d="M411.57 524.8l-7-7v7z" fill-rule="evenodd" opacity=".6"/>
        <path d="M404.57 524.8l7 7v-7z" fill="url(#b)" fill-rule="evenodd" opacity=".1"/>
        <use fill="url(#c)" xlink:href="#a"/>
    </g>
    <path d="M16 10a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 4.24-1.76l-.707-.707A5 5 0 0 1 16 21a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 3.533 1.467l.707-.707A6 6 0 0 0 16 10z" fill-rule="evenodd" opacity=".7"/>
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
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="352" x2="366" y1="1331.36" y2="1345.36">
            <stop offset="0" stop-color="#060606"/>
            <stop offset="1" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="c" gradientTransform="translate(264 982)" gradientUnits="userSpaceOnUse" x2="0" y1="392.36" y2="336.36">
            <stop offset="0" stop-color="#fff" stop-opacity="0"/>
            <stop offset="1" stop-color="#fff" stop-opacity=".2"/>
        </linearGradient>
        <path id="a" d="M322 1375.36v-58h30l14 14v44h-14z"/>
    </defs>
    <g transform="translate(-312 -1314.36)">
        <use fill="#13a4f7" height="100%" width="100%" xlink:href="#a"/>
        <path d="M322 1318.36h30v-1h-30z" fill="#fff" opacity=".5"/>
        <path d="M322 1375.36h44v-1h-44z" opacity=".25"/>
    </g>
    <g fill-rule="evenodd">
        <path d="M54 17L40 3v14z" opacity=".6"/>
        <path d="M352 1331.36l14 14v-14z" fill="url(#b)" opacity=".2" transform="translate(-312 -1314.36)"/>
    </g>
    <use fill="url(#c)" height="100%" transform="translate(-312 -1314.36)" width="100%" xlink:href="#a"/>
    <path d="M32 22a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 7.066-2.934l-.707-.707A9 9 0 0 1 32 41a9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 6.36 2.64l.706-.706A10 10 0 0 0 32 22z" fill-rule="evenodd" opacity=".7"/>
		</svg>
	{/if}
