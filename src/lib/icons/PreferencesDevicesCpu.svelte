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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="2.000007" x2="2.000007" y1="19.999979" y2="1.999979"><stop offset="0" stop-color="#63984b"/><stop offset="1" stop-color="#8fc278"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="12.200004" x2="12.200004" y1="16.999983" y2="4.999983"><stop offset="0" stop-color="#999a9c"/><stop offset="1" stop-color="#dcdfdf"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="9.000007" x2="18.000007" y1="8.999999" y2="17.999999"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m2 5v-3h18v18h-18v-12l2-1z" fill="url(#a)" stroke-width=".642857"/><path d="m19 17-2 2h2z" fill="#e6ea97" fill-rule="evenodd"/><path d="m5 17 3 3h12v-12l-3-3z" fill="url(#c)" opacity=".2" stroke-width=".642857"/><path d="m5 5h12v12h-12z" fill="url(#b)" stroke-width=".599999"/><path d="m5 16h12v1h-12z" fill="#616365" stroke-width=".774597"/><path d="m2 19h18v1h-18z" fill="#4a7937" stroke-width=".801784"/><path d="m12 7v3h1v-1h1v-1h-1v-1zm2 1h1v-1h-1zm0 1v1h1v-1zm-7 2v1h4v-1zm0 2v1h2v-1z" fill="#484a4b" stroke-width=".999999"/><path d="m18 4v1h1v-1zm1 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm0 1h-1v1h1zm0 1v1h1v-1zm-1 4v1h1v-1zm1 1v1h1v-1zm0 1h-1v1h1zm-16 2v1h1v-1zm1 1v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm4-1v1h1v-1zm1 1v1h1v-1zm1 0h1v-1h-1zm1 0v1h1v-1zm1 0h1v-1h-1zm-4 0h-1v1h1z" opacity=".1"/>
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
			<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="378.571" x2="378.571" y1="553.798" y2="525.798"><stop offset="0" stop-color="#63984b"/><stop offset="1" stop-color="#8fc278"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="394.571" x2="394.571" y1="549.798" y2="529.798"><stop offset="0" stop-color="#999a9c"/><stop offset="1" stop-color="#dcdfdf"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="394.857" x2="394.857" y1="543.798" y2="535.798"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="392.571" x2="406.571" xlink:href="#a" y1="539.798" y2="553.798"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="389.571" x2="399.571" y1="536.798" y2="546.798"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="M378.571 530.798v-5h28v28h-28v-20l2-1z" fill="url(#b)" transform="translate(-376.571 -523.798)"/><path d="M29 27l-2 2h2z" fill="#e6ea97" fill-rule="evenodd"/><path d="M382.571 549.798l4 4h20v-20l-4-4z" fill="url(#c)" opacity=".2" transform="translate(-376.571 -523.798)"/><path d="M382.571 529.798h20v20h-20z" fill="url(#d)" transform="translate(-376.571 -523.798)"/><path d="M391.425 536.944l2.646 2.646h1.5v-.292h.5l6.5 6.5v4h-1l-8-8-.5-.5.647-.646-3-3zm-1.072 2.573l-1.063 1.062 2.25 2.25-.676.676 6.291 6.293h3.479z" fill="url(#a)" opacity=".2" transform="translate(-376.571 -523.798)"/><path d="M391.571 541.798c-.554 0-1 .446-1 1s.446 1 1 1 1-.446 1-1-.446-1-1-1zm-1.75-2.5a.748.748 0 0 0-.75.75.749.749 0 1 0 1.5 0 .748.748 0 0 0-.75-.75zm3.75-2.5l-1 1 1.5 1.5-1.5 1.5 1 1 1.5-1.5 1-1-1-1zm-2.5 0a.499.499 0 1 0 0 1 .499.499 0 1 0 0-1z" fill="url(#e)" transform="translate(-376.571 -523.798)"/><path d="M6 25h20v1H6z" fill="#616365"/><path d="M7 21h4v1H7zm0 2h2v1H7zM22 7v3h1V9h1V8h-1V7zm2 1h1V7h-1zm0 1v1h1V9z" fill="#484a4b"/><path d="M5 27h1v1H5zm1 1h1v1H6zm1-1h1v1H7zm1 1h1v1H8zm1-1h1v1H9zm1 1h1v1h-1zm1-1h1v1h-1zm14 0h1v1h-1zm-1 1h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zm-1-1h1v1h-1zm-1 1h1v1h-1zm-6 0h1v1h-1zM27 4h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm1 1h1v1h-1zm-1 11h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1z"/><path d="M2 29h28v1H2z" fill="#4a7937"/>
		</svg>
	{/if}
