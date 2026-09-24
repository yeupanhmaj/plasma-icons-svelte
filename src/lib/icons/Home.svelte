<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 32
	);
</script>

	{#if numericSize <= 40}
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
			<linearGradient id="a">
        <stop stop-color="#1d99f3" offset="0"/>
        <stop stop-color="#3daee9" offset="1"/>
    </linearGradient>
    <linearGradient id="b" x1="15" x2="28" y1="16" y2="30" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fcfcfc" offset="0"/>
        <stop stop-color="#eff0f1" offset="1"/>
    </linearGradient>
    <linearGradient id="c" x1="10" x2="25" y1="12" y2="25" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="d" x1="13" x2="19" y1="20" y2="26" gradientTransform="matrix(1 0 0 1.1111111 0 -2.222222)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#d35400" offset="0"/>
        <stop stop-color="#f47750" offset="1"/>
    </linearGradient>
    <linearGradient id="e" x1="12.999999" x2="18.999998" y1="20" y2="29" gradientTransform="matrix(.66666677 0 0 .44444444 -1.666667 11.111111)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="f" x1="12.999999" x2="18.999998" y1="20" y2="29" gradientTransform="matrix(.66666677 0 0 .44444444 12.333333 11.111111)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="g" x1="28" x2="16" y1="17" y2="5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#232629" offset="0"/>
        <stop stop-color="#31363b" offset="1"/>
    </linearGradient>
    <path d="m4 15 12-12 12 12v15h-24z" fill="url(#b)"/>
    <path transform="scale(1 -1)" d="m27-29h1v14.000001h-1z" opacity=".2"/>
    <path transform="scale(1 -1)" d="m4-29h1v14.000001h-1z" opacity=".2"/>
    <path d="m7 20h4.000002v4h-4.000002z" fill="url(#e)"/>
    <path d="m21 20h4.000002v4h-4.000002z" fill="url(#f)"/>
    <path d="m12.999999 20h6.000002v10.000001h-6.000002z" fill="url(#d)"/>
    <path d="m4 29h23.999998v1h-23.999998z" opacity=".3"/>
    <path d="m16 4.359375-12 11.640625v1l12 12 12 1v-13.546875z" fill="url(#c)" opacity=".2"/>
    <path d="m20 5v2l4 4v-6z" fill="#232629"/>
    <path d="m16 1.5859375-14.007812 14.007812 1.4140625 1.414062 12.59375-12.59375 12.59375 12.59375 1.414062-1.414062z" fill="url(#g)"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="a">
        <stop stop-color="#1d99f3" offset="0"/>
        <stop stop-color="#3daee9" offset="1"/>
    </linearGradient>
    <linearGradient id="b" x1="22.592247" x2="41.000001" y1="23.408558" y2="43.181641" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fcfcfc" offset="0"/>
        <stop stop-color="#eff0f1" offset="1"/>
    </linearGradient>
    <linearGradient id="c" x1="15.553479" x2="36.669783" y1="18.595903" y2="36.8967" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="d" x1="13" x2="19" y1="20" y2="26" gradientTransform="matrix(1.333333 0 0 1.5555554 2.666671 -1.111107)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#d35400" offset="0"/>
        <stop stop-color="#f47750" offset="1"/>
    </linearGradient>
    <linearGradient id="e" x1="12.999999" x2="18.999998" y1="20" y2="29" gradientTransform="matrix(.99999962 0 0 .66666649 -1.999994 16.66667)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="f" x1="12.999999" x2="18.999998" y1="20" y2="29" gradientTransform="matrix(.9999999 0 0 .66666649 18.000002 16.66667)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="g" x1="40.893044" x2="24.000001" y1="25.63467" y2="8.741627" gradientUnits="userSpaceOnUse">
        <stop stop-color="#232629" offset="0"/>
        <stop stop-color="#31363b" offset="1"/>
    </linearGradient>
    <path d="m23.892578 6.0644531-16.892578 16.935547v21h34v-21z" fill="url(#b)"/>
    <path transform="scale(1 -1)" d="m40-44h1v21h-1z" opacity=".2"/>
    <path transform="scale(1 -1)" d="m7-44h1v21h-1z" opacity=".2"/>
    <path d="m11 30h6v6h-6z" fill="url(#e)"/>
    <path d="m31 30h6.000001v6h-6.000001z" fill="url(#f)"/>
    <path d="m20 30h8.000001v14h-8.000001z" fill="url(#d)"/>
    <path d="m7 42.999985h34v1h-34z" opacity=".3"/>
    <path d="m24 6.9282598-17 17.463397v2.608343l17 17h17v-20z" fill="url(#c)" opacity=".2"/>
    <path d="m30 9v2l5 6v-8z" fill="#232629"/>
    <path d="m24 4.577925-20.007031 20.015044 1.4140624 1.414062 18.592969-18.577231 18.592969 18.577231 1.414062-1.414062z" fill="url(#g)"/>
		</svg>
	{/if}
