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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="8.357143" x2="16.714286" y1="8.071429" y2="16.428572"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="7" x2="7" y1="15" y2="5"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#4d4d4d"/></linearGradient><linearGradient id="c" gradientTransform="matrix(.6666667 0 0 .64285714 .333333 .714286)" gradientUnits="userSpaceOnUse" x1="30" x2="30" y1="30" y2="2"><stop offset="0" stop-color="#fdbc4b"/><stop offset="1" stop-color="#fed286"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="3" x2="3" y1="20" y2="18.071429"><stop offset="0" stop-opacity=".4"/><stop offset="1" stop-opacity=".2"/></linearGradient><linearGradient id="e" gradientTransform="matrix(.42857357 0 0 10.285714 -16.153286 -127.65079)" gradientUnits="userSpaceOnUse" x1="38.691002" x2="38.691002" y1="14.355" y2="12.605"><stop offset="0" stop-color="#1d1e1e"/><stop offset="1" stop-color="#44484c"/></linearGradient><path d="m3 2h16v18h-16z" fill="url(#c)" stroke-width=".654654"/><path d="m3 2v18h2v-1h-1v-1h1v-16z" fill="url(#e)" stroke-width=".642857"/><path d="m3 17v3h16v-1h-14v-1h14v-1z" fill="url(#d)" fill-rule="evenodd" stroke-width=".642857"/><path d="m4 18h15v1h-15z" fill="#edf573" stroke-width=".807573"/><path d="m10 5c-1.104569 0-2 .895431-2 2s.895431 2 2 2 2-.895431 2-2-.895431-2-2-2zm0 1c.552285 0 1 .447715 1 1s-.447715 1-1 1-1-.447715-1-1 .447715-1 1-1zm4 1c-1.104571 0-2 .8954295-2 2v2h-1v4h6v-4h-1v-2c0-1.1045689-.895431-2-2-2zm0 1c.552284 0 1 .4477156 1 1v2h-2v-2c0-.5522844.447714-1 1-1zm-4 2c-1.65685 0-3 1.11929-3 2.5.002.16816.025359.33567.068359.5h2.931641v-1h-1.8808594c.28194-.59809 1.0350394-.99849 1.8808594-1z" fill="url(#b)"/><path d="m11.414062 5.5859375-2.414062.4140625-.4140625 2.4140625 1.5859375 1.5859375-2.171875 1-.9316406 2 3.9999996 4h7.931641v-5.828125l-3.585938-3.5859375h-2z" fill="url(#a)" opacity=".2" stroke-width=".642857"/>
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="30" x2="30" y1="30" y2="2"><stop offset="0" stop-color="#fdbc4b"/><stop offset="1" stop-color="#fed286"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="25" x2="25" y1="21" y2="7"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#4d4d4d"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="14" x2="28" y1="12" y2="26"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="4" x2="4" y1="30" y2="27"><stop offset="0" stop-opacity=".4"/><stop offset="1" stop-opacity=".2"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.66667 0 0 16 -25.794 -199.679)" gradientUnits="userSpaceOnUse" x1="38.691" x2="38.691" y1="14.355" y2="12.605"><stop offset="0" stop-color="#1d1e1e"/><stop offset="1" stop-color="#44484c"/></linearGradient><path d="M4 2h24v28H4z" fill="url(#a)"/><path d="M4 2v28h2v-1H5v-1h1V2z" fill="url(#b)"/><path d="M4 27v3h24v-1H5v-1h23v-1z" fill="url(#c)" fill-rule="evenodd"/><path d="M5 28h23v1H5z" fill="#edf573"/><path d="M10 21l6 6h12V16.753l-8.877-8.876L17 7l-3 3 .877 2.123L17 14.246 14 15l-3 3z" fill="url(#d)" opacity=".2"/><path d="M22 13a2 2 0 0 0-2 2v2h-1v4h6v-4h-1v-2a2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1zm-5 0c-3.878 0-7 3.122-7 7h8v-1h-6.91A5.98 5.98 0 0 1 17 15c.343 0 .676.037 1 .098v-1.012A6.654 6.654 0 0 0 17 14zm0-7c-1.662 0-3 1.338-3 3s1.338 3 3 3 3-1.338 3-3-1.338-3-3-3zm0 1c1.108 0 2 .892 2 2s-.892 2-2 2-2-.892-2-2 .892-2 2-2z" fill="url(#e)"/>
		</svg>
	{/if}
