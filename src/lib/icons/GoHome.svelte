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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 8 2 L 7.2929688 2.6992188 L 7.296875 2.703125 L 2 7.9980469 L 2 8 L 2 9 L 3.0078125 9 L 3.0078125 13 L 3 13 L 3 14 L 13 14 L 13 13 L 13 9 L 14 9 L 14 8 L 14 7.9980469 L 12.857422 6.8554688 L 12.15625 7.5566406 L 12.599609 8 L 12 8 L 12 13 L 9 13 L 9 10 L 7 10 L 7 13 L 4 13 L 4 9 L 4 8 L 3.4003906 8 L 7.9980469 3.4042969 L 8 3.40625 L 8.0019531 3.4042969 L 9.4433594 4.84375 L 10.144531 4.1425781 L 8.703125 2.703125 L 8.7070312 2.6992188 L 8 2 z M 11 3 L 11 6 L 12.007812 6 L 12.007812 3 L 11 3 z "
     class="ColorScheme-Text"
     />
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
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="m11 3l-.707031.707031-7.292969 7.292969.707031.707031.292969-.292969v7.585938h1 5 3 5v-1-6.585938l.292969.292969.707031-.707031-3-3v-3h-3l-1.292969-1.292969-.707031-.707031m0 1.414063l6 5.999999v7.585938h-4v-5h-3-1v5h-4v-7.585938l6-5.999999"
    class="ColorScheme-Text"
    />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64.000002"
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
    <linearGradient id="b" x1="29" x2="54.000001" y1="31.000001" y2="57.999998" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fcfcfc" offset="0"/>
        <stop stop-color="#eff0f1" offset="1"/>
    </linearGradient>
    <linearGradient id="c" x1="20.85855" x2="48.712177" y1="24.490524" y2="48.630335" gradientUnits="userSpaceOnUse">
        <stop offset="0"/>
        <stop stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="d" x1="13" x2="19" y1="20" y2="26" gradientTransform="matrix(1.6666662 0 0 1.9999996 5.33334 9e-6)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#d35400" offset="0"/>
        <stop stop-color="#f47750" offset="1"/>
    </linearGradient>
    <linearGradient id="e" x1="12.999999" x2="18.999998" y1="20" y2="29" gradientTransform="matrix(1.333333 0 0 .88888877 -2.333326 22.222227)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="f" x1="12.999999" x2="18.999998" y1="20" y2="29" gradientTransform="matrix(1.333333 0 0 .88888896 23.666671 22.222222)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="g" x1="54.282903" x2="32.000001" y1="33.775067" y2="11.492165" gradientUnits="userSpaceOnUse">
        <stop stop-color="#232629" offset="0"/>
        <stop stop-color="#31363b" offset="1"/>
    </linearGradient>
    <path d="m31.858304 8-21.858304 23.039183v27h44v-27z" fill="url(#b)"/>
    <path transform="scale(1 -1)" d="m53-58h1v28h-1z" opacity=".2"/>
    <path transform="scale(1 -1)" d="m10-58h1v28h-1z" opacity=".2"/>
    <path d="m15 40h8v8h-8z" fill="url(#e)"/>
    <path d="m41 40h8v8.000002h-8z" fill="url(#f)"/>
    <path d="m27 40h10v17.999998h-10z" fill="url(#d)"/>
    <path d="m10 57h44v1h-44z" opacity=".3"/>
    <path d="m32 9-22 21.899772v4.100228l22 22.999999 22 1e-6v-27z" fill="url(#c)" opacity=".2"/>
    <path d="m40 12v3l7 7v-10z" fill="#232629"/>
    <path d="m32 6.586-26.008 26.008 1.414 1.414 24.594-24.594 24.594 24.594 1.414-1.414z" fill="url(#g)"/>
		</svg>
	{/if}
