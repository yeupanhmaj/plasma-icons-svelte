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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="24.064" x2="24.064" y1="17.504" y2="-.496"><stop offset="0" stop-color="#bdc3c7"/><stop offset="1" stop-color="#dadfe1"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="29.064" x2="29.064" y1="12.504" y2="4.504"><stop offset="0" stop-color="#566472"/><stop offset="1" stop-color="#6c7a89"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="8" x2="16.714844" xlink:href="#d" y1="8" y2="16.714844"/><linearGradient id="d"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="16.086" x2="16.086" y1="21.086" y2="11.086"><stop offset="0" stop-color="#27ae60"/><stop offset="1" stop-color="#2ecc71"/></linearGradient><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="17.086" x2="19.086" xlink:href="#d" y1="17.086" y2="19.086"/><path d="m11 2a9 9 0 0 0 -9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0 -9-9zm0 7a2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -2-2 2 2 0 0 1 2-2z" fill="url(#a)" stroke-width="2"/><path d="m19.974609 10.359375a9 9 0 0 1 -8.974609 8.640625 9 9 0 0 1 -8.9648437-8.5 9 9 0 0 0 -.0351563.5 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0 -.02539-.640625z" fill="#9fa5a8" stroke-width="2"/><path d="m11 7a4 4 0 0 0 -4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0 -4-4zm0 1a3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3-3 3 3 0 0 1 3-3zm0 1a2 2 0 0 0 -2 2 2 2 0 0 0 .0644531.503906 2 2 0 0 1 1.9355469-1.503906 2 2 0 0 1 1.935547 1.496094 2 2 0 0 0 .064453-.496094 2 2 0 0 0 -2-2z" fill="url(#b)" stroke-width="2.66667"/><path d="m13.828125 8.171875c1.562097 1.5620971 1.562097 4.094153 0 5.65625s-4.0941529 1.562097-5.65625 0l8.171875 8.171875h5.65625v-5.65625z" fill="url(#c)" opacity=".2"/><g transform="translate(-.086 -.086)"><path d="m16.086 11.086c-2.77 0-5 2.23-5 5s2.23 5 5 5 5-2.23 5-5-2.23-5-5-5z" fill="url(#e)"/><path d="m18.586 13.586.5.5.5.5-4.5 4.5-2.5-2.5.5-.5.5-.5 1.5 1.5z" fill="#fcfcfc"/><path d="m19.586 14.586-4.5 4.5 1.914 1.914a4.987 4.987 0 0 0 4.086-4.914z" fill="url(#f)" opacity=".2"/></g>
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
			<linearGradient id="c" gradientUnits="userSpaceOnUse" x1="12" x2="25" xlink:href="#a" y1="12" y2="25"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="22" y2="10"><stop offset="0" stop-color="#566472"/><stop offset="1" stop-color="#6c7a89"/></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="30" y2="2"><stop offset="0" stop-color="#bdc3c7"/><stop offset="1" stop-color="#dadfe1"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="25" x2="25" y1="30" y2="20"><stop offset="0" stop-color="#27ae60"/><stop offset="1" stop-color="#2ecc71"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="26" x2="28" xlink:href="#a" y1="26" y2="28"/><path d="M16 2A14 14 0 0 0 2 16a14 14 0 0 0 14 14 14 14 0 0 0 14-14A14 14 0 0 0 16 2zm0 12a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z" fill="url(#b)"/><path d="M20.242 11.758S20.938 13.48 21 16a5 5 0 0 1-5 5c-3.6-.211-4.243-.757-4.242-.758l8.931 8.932a14 14 0 0 0 8.487-8.483z" fill="url(#c)" opacity=".2"/><path d="M29.979 15.414A14 14 0 0 1 16 29 14 14 0 0 1 2.021 15.586 14 14 0 0 0 2 16a14 14 0 0 0 14 14 14 14 0 0 0 14-14 14 14 0 0 0-.021-.586z" fill="#9fa5a8"/><path d="M25 20c-2.77 0-5 2.23-5 5s2.23 5 5 5 5-2.23 5-5-2.23-5-5-5z" fill="url(#d)"/><path d="M27.5 22.5l.5.5.5.5L24 28l-2.5-2.5.5-.5.5-.5L24 26z" fill="#fcfcfc"/><path d="M28.5 23.5L24 28l1.914 1.914A4.987 4.987 0 0 0 30 25z" fill="url(#e)" opacity=".2"/><path d="M16 14a2 2 0 0 0-2 2 2 2 0 0 0 .064.504A2 2 0 0 1 16 15a2 2 0 0 1 1.936 1.496A2 2 0 0 0 18 16a2 2 0 0 0-2-2z" fill="#5b686f"/><path d="M16 10a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 3a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3z" fill="url(#f)"/>
		</svg>
	{/if}
