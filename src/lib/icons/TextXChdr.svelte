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
			<path d="M5 2v12h1v-3.5C6 9.115 7.115 8 8.5 8S11 9.115 11 10.5V14h1v-3.5C12 8.561 10.439 7 8.5 7c-.983 0-1.865.404-2.5 1.053v-6.05z" fill="#cf74e0"/>
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
			<path d="M7 3v16h1v-5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v5h1v-5a4 4 0 0 0-4-4 4 4 0 0 0-3 1.361V3z" fill="#cf74e0"/>
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
        <path id="a" d="M389.57 545.8v-28h15l7 7v21h-14z"/>
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="20" x2="27" y1="9" y2="16">
            <stop offset="0" stop-color="#060606"/>
            <stop offset="1" stop-opacity="0"/>
        </linearGradient>
    </defs>
    <use fill="#cf74e0" height="100%" transform="translate(-384.57 -515.8)" width="100%" xlink:href="#a"/>
    <path d="M5 3h15V2H5z" fill="#fff" opacity=".5"/>
    <path d="M5 30h22v-1H5z" opacity=".25"/>
    <path d="M27 9l-7-7v7z" fill="#fff" opacity=".5"/>
    <use fill="none" height="100%" transform="translate(-384.57 -515.8)" width="100%" xlink:href="#a"/>
    <path d="M20 9l7 7V9z" fill="url(#b)" opacity=".2"/>
    <path d="M13 10v12h1v-3.5c0-1.385 1.115-2.5 2.5-2.5s2.5 1.115 2.5 2.5V22h1v-3.5c0-1.939-1.561-3.5-3.5-3.5-.983 0-1.865.404-2.5 1.053v-6.05z" fill="#fff"/>
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
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="40" x2="54" y1="17" y2="31">
            <stop offset="0" stop-color="#060606"/>
            <stop offset="1" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="c" gradientTransform="translate(264 1062)" gradientUnits="userSpaceOnUse" x2="0" y1="392.36" y2="336.36">
            <stop offset="0" stop-color="#fff" stop-opacity="0"/>
            <stop offset="1" stop-color="#fff" stop-opacity=".1"/>
        </linearGradient>
        <path id="a" d="M322 1455.36v-58h30l14 14v44h-14z"/>
    </defs>
    <use fill="#cf74e0" height="100%" transform="translate(-312 -1394.36)" width="100%" xlink:href="#a"/>
    <path d="M10 4h30V3H10z" fill="#fff" opacity=".5"/>
    <path d="M10 61h44v-1H10z" opacity=".25"/>
    <path d="M54 17L40 3v14z" fill="#fff" opacity=".5"/>
    <path d="M40 17l14 14V17z" fill="url(#b)" fill-rule="evenodd" opacity=".2"/>
    <use fill="url(#c)" height="100%" transform="translate(-312 -1394.36)" width="100%" xlink:href="#a"/>
    <path d="M27 22v20h1v-6a4 4 0 1 1 8 0v6h1v-6a5 5 0 0 0-5-5 5 5 0 0 0-4 2.01V22z" fill="#fff" fill-rule="evenodd"/>
		</svg>
	{/if}
