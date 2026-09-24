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

	{#if numericSize <= 27}
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="6" y2="4"><stop offset="0" stop-color="#8b9195"/><stop offset="1" stop-color="#a4a9ac"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.49999999 0 0 1.2 30.000014 -22.956966)" gradientUnits="userSpaceOnUse" x1="11" x2="14" y1="9" y2="9"><stop offset="0" stop-color="#bdc3c7"/><stop offset="1" stop-color="#b4b9bc"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="4.001" x2="11.001" y1="5" y2="15"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m10 13h2v7l-2-2z" fill="#bdc3c7"/><path d="m4 5 7 10 7-10v-1h-14z" fill="url(#b)"/><path d="m4.001 5 7 10 7-10z" fill="url(#c)" opacity=".2"/><path d="m18 6c.554 0 1-.446 1-1v-1h-16v1c0 .554.446 1 1 1z" fill="url(#a)"/><path d="m10 18v-1l2 2v1z" fill="#9a9fa2"/>
		</svg>
	{:else}
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
        <linearGradient id="e" x1="16" x2="16" y1="8" y2="6" gradientTransform="translate(0,-1)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8b9195" offset="0"/>
            <stop stop-color="#a4a9ac" offset="1"/>
        </linearGradient>
        <linearGradient id="d" x1="399.57101" x2="406.57101" y1="521.79797" y2="529.13135" gradientTransform="matrix(1 0 0 .95454545 -384.571 -491.07991)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#292c2f" offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <radialGradient id="f" cx="15.999972" cy="24.964138" r="10" gradientTransform="matrix(.49999999 0 0 1.2 8.0000139 -17.956966)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#bdc3c7" offset="0"/>
            <stop stop-color="#b4b9bc" offset="1"/>
        </radialGradient>
    </defs>
    <path d="m6 6v1l9 14v5l2 2v-7l9-14v-1z" fill="url(#f)" stroke-width=".73192519"/>
    <path d="m6 7 9 14h2l9-14z" fill="url(#d)" opacity=".2" stroke-width=".9770084"/>
    <path d="m27 7c0.554 0 1-0.446 1-1v-1h-24v1c0 0.554 0.446 1 1 1z" fill="url(#e)"/>
    <path d="m15 25v1l2 2v-1z" fill="#9a9fa2" stroke-width=".73192519"/>
		</svg>
	{/if}
