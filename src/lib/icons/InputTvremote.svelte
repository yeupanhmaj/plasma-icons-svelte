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
			<path
        d="m6 1c-1.108 0-2 .892-2 2v10c0 1.108.892 2 2 2h4c1.108 0 2-.892 2-2v-10c0-1.108-.892-2-2-2zm0 1h4c.554 0 1 .446 1 1v10c0 .554-.446 1-1 1h-4c-.554 0-1-.446-1-1v-10c0-.554.446-1 1-1zm.5 1a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm3 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm-1.5 2a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm0 1a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1-1 1 1 0 0 1 1-1zm-1.5 4a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm-3 2a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5z"
        style="fill:currentColor;fill-opacity:1;stroke:none"
        class="ColorScheme-Text" />
		</svg>
	{:else if numericSize <= 43}
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
			<path
        d="m9 2c-1.108 0-2 .892-2 2v14c0 1.108.892 2 2 2h4c1.108 0 2-.892 2-2v-14c0-1.108-.892-2-2-2zm0 1h4c.554 0 1 .446 1 1v14c0 .554-.446 1-1 1h-4c-.554 0-1-.446-1-1v-14c0-.554.446-1 1-1zm.5 1a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm3 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm-3 2a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm-1.5 2a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm0 1a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1-1 1 1 0 0 1 1-1zm-1.5 4a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm-3 2a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5zm1.5 0a.5.5 0 0 0 -.5.5.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5z"
        style="fill:currentColor;fill-opacity:1;stroke:none"
        class="ColorScheme-Text" />
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
			<linearGradient id="a">
        <stop offset="0" stop-color="#424649"/>
        <stop offset="1" stop-color="#2a2c2f"/>
    </linearGradient>
    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="22" x2="22" xlink:href="#a" y1="6" y2="58"/>
    <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="24" x2="24" y1="9" y2="13">
        <stop offset="0" stop-color="#da4453"/>
        <stop offset="1" stop-color="#c0392b"/>
    </linearGradient>
    <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="40" x2="40" y1="9" y2="19">
        <stop offset="0" stop-color="#7f8c8d"/>
        <stop offset=".39746994" stop-color="#596364"/>
        <stop offset=".60099477" stop-color="#7f8c8d"/>
        <stop offset="1" stop-color="#596364"/>
    </linearGradient>
    <linearGradient id="e" gradientUnits="userSpaceOnUse" x1="24" x2="24" y1="37" y2="21">
        <stop offset="0" stop-color="#596364"/>
        <stop offset="1" stop-color="#4c5455"/>
        <stop offset="1" stop-color="#596364"/>
        <stop offset="1" stop-color="#4c5455"/>
    </linearGradient>
    <linearGradient id="f" gradientUnits="userSpaceOnUse" x1="32" x2="32" xlink:href="#a" y1="25" y2="34"/>
    <linearGradient id="g" gradientUnits="userSpaceOnUse" x1="24" x2="24" y1="39" y2="49">
        <stop offset="0" stop-color="#596364"/>
        <stop offset=".40000001" stop-color="#4c5455"/>
        <stop offset=".60000002" stop-color="#596364"/>
        <stop offset="1" stop-color="#4c5455"/>
    </linearGradient>
    <rect fill="url(#b)" height="52" ry="3" stroke-width="2.896" width="20" x="22" y="6"/>
    <g stroke-width="2">
        <circle cx="32" cy="29" fill="url(#e)" r="8"/>
        <circle cx="32" cy="29" fill="url(#f)" r="4"/>
        <path d="m24 11v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm12 0v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm-12 6v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm6 0v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm6 0v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm-.0352 11.4805a4 4 0 0 1 -3.9648 3.5195 4 4 0 0 1 -3.9648-3.5 4 4 0 0 0 -.0352.5 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0 -.0352-.5195zm-11.9648 12.5195v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm6 0v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm6 0v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm-12 6v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm6 0v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1zm6 0v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-1z" opacity=".15"/>
    </g>
    <path d="m22 54v1c0 1.662 1.338 3 3 3h14c1.662 0 3-1.338 3-3v-1c0 1.662-1.338 3-3 3h-14c-1.662 0-3-1.338-3-3z" opacity=".4" stroke-width="2.896"/>
    <g stroke-width="2">
        <circle cx="26" cy="11" fill="url(#c)" r="2"/>
        <path d="m38 9a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm-12 6a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm6 0a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm6 0a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2z" fill="url(#d)"/>
        <path d="m26 39a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm6 0a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm6 0a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm-12 6a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm6 0a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm6 0a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2z" fill="url(#g)"/>
    </g>
		</svg>
	{/if}
