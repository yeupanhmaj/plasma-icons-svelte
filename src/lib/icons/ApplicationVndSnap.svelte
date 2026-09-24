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
			<path class="ColorScheme-Text" d="m1 2 7 7v-4.5l-7-2.5zm7.5 2.5 5.5 2.5-1.5-2.5h-4zm-0.2 0.15-0.05 4 2.75-2.65-2.7-1.35zm-2.05 3.1-3.25 6.25 4.8-4.75-1.55-1.5z" fill="#59786a"/>
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
			<path class="ColorScheme-Text" d="m 2,3 9.5,9 V 6 Z M 12,6 20,9.6666664 18,6 Z m 0,0.5566389 V 12 L 15.84615,8.3333333 Z M 9.5127119,11 3,20 11,12.5 Z" fill="#59786a"/>
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
        <linearGradient id="linearGradient5849" x2="0" y1="394.54437" y2="335.43387" gradientTransform="matrix(.48 0 0 .40601922 362.65133 385.60566)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" stop-opacity="0" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".2" offset="1"/>
        </linearGradient>
    </defs>
    <g transform="translate(-384.57143 -515.798)">
        <rect x="388.57144" y="521.79797" width="23.999989" height="23.999989" color="#000000" color-rendering="auto" fill="#59786a" image-rendering="auto" shape-rendering="auto" solid-color="#000000" isolation="auto" mix-blend-mode="normal"/>
        <rect x="388.57144" y="544.79797" width="24.00001" height=".999974" color="#000000" color-rendering="auto" image-rendering="auto" opacity=".25" shape-rendering="auto" solid-color="#000000" isolation="auto" mix-blend-mode="normal"/>
        <g fill="#fff">
            <rect x="388.57144" y="521.79797" width="23.999989" height="1.00003" color="#000000" color-rendering="auto" image-rendering="auto" opacity=".5" shape-rendering="auto" solid-color="#000000" isolation="auto" mix-blend-mode="normal"/>
            <path d="m404.57143 522.79812v1h1v-1zm1 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v2h2v-1h-1z" color="#000000" color-rendering="auto" image-rendering="auto" opacity=".8" shape-rendering="auto" solid-color="#000000" stroke-linecap="square" stroke-width="2" isolation="auto" mix-blend-mode="normal"/>
            <path class="ColorScheme-Text" d="m390.57143 531.798 7 7v-4.5zm7.5 2.5 5.5 2.5-1.5-2.5zm-0.2 0.15-0.05 4 2.75-2.65zm-2.05 3.1-3.25 6.25 4.8-4.75z" color="#232629" opacity=".8"/>
        </g>
        <rect x="388.57144" y="521.79797" width="24" height="24" color="#000000" color-rendering="auto" fill="url(#linearGradient5849)" image-rendering="auto" shape-rendering="auto" solid-color="#000000" isolation="auto" mix-blend-mode="normal"/>
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
        <linearGradient id="linearGradient4850" x1="58" x2="58" y1="393.95328" y2="324.65894" gradientTransform="matrix(1.0000005 0 0 .84587337 -47.000023 -272.73453)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" stop-opacity="0" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".2" offset="1"/>
        </linearGradient>
    </defs>
    <g shape-rendering="auto">
        <rect x="7" y="10.999992" width="49.999977" height="49.999977" color="#000000" color-rendering="auto" fill="#59786a" image-rendering="auto" solid-color="#000000" style="isolation:auto;mix-blend-mode:normal"/>
        <rect x="7" y="59.999992" width="50" height="1.0000085" color="#000000" color-rendering="auto" image-rendering="auto" opacity=".25" solid-color="#000000" style="isolation:auto;mix-blend-mode:normal"/>
        <rect x="7" y="10.999992" width="50" height="1.0000085" color="#000000" color-rendering="auto" fill="#fff" image-rendering="auto" opacity=".5" solid-color="#000000" style="isolation:auto;mix-blend-mode:normal"/>
    </g>
    <path d="m40 12v2h2v-2zm2 2v2h2v-2zm0 2h-2v2h2zm0 2v2h2v-2zm0 2h-2v2h2zm0 2v2h2v-2zm0 2h-2v2h2zm-2 3v4h1v4h2v-4h1v-4zm1 1h2v2h-2z" fill="#fff" opacity=".75"/>
    <path class="ColorScheme-Text" d="m10 40 9.5 9v-6zm10 3 8 3.666666-2-3.666666zm0 0.556639v5.443361l3.84615-3.666667zm-2.487288 4.443361-6.512712 9 8-7.5z" color="#232629" fill="#fff" opacity=".75"/>
    <rect x="7" y="11" width="50" height="49.999977" color="#000000" color-rendering="auto" fill="url(#linearGradient4850)" image-rendering="auto" opacity=".552" shape-rendering="auto" solid-color="#000000" style="isolation:auto;mix-blend-mode:normal"/>
		</svg>
	{/if}
