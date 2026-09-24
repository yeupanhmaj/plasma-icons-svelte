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
			viewBox="0 0 32 32.000001"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="a" gradientTransform="matrix(.88842045 0 0 1 -3.995784 -1)" gradientUnits="userSpaceOnUse" x1="9" x2="9" y1="37" y2="40"><stop offset="0" stop-color="#fcfcfc" stop-opacity=".8"/><stop offset="1" stop-color="#fcfcfc" stop-opacity=".45"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="2" x2="24" y1="38" y2="38"><stop offset="0" stop-color="#3daee9"/><stop offset="1" stop-color="#2a7aaf"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="14" x2="15" y1="43" y2="47"><stop offset="0" stop-color="#318bba"/><stop offset="1" stop-color="#115c92"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="23" x2="32.8" y1="16.7" y2="30"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="e"><stop offset="0" stop-opacity=".102"/><stop offset="1" stop-opacity=".03"/></linearGradient><linearGradient id="f" gradientTransform="matrix(.71428571 0 0 .7 -1.428571 -.8)" gradientUnits="userSpaceOnUse" x1="30" x2="30" y1="4" y2="44"><stop offset="0" stop-color="#fcfcfc"/><stop offset="1" stop-color="#cacaca"/></linearGradient><linearGradient id="g" gradientTransform="matrix(.6875 0 0 .75000001 -.75 12.5)" gradientUnits="userSpaceOnUse" x1="20" x2="20" y1="26" y2="30"><stop offset="0" stop-color="#194d6f"/><stop offset="1" stop-color="#0c3d61"/></linearGradient><linearGradient id="h" gradientTransform="matrix(.99999999 0 0 .69230769 -6 -.769231)" gradientUnits="userSpaceOnUse" x1="16" x2="16" xlink:href="#e" y1="43" y2="4"/><linearGradient id="i" gradientTransform="matrix(.99999999 0 0 .69230769 -14 -.769231)" gradientUnits="userSpaceOnUse" x1="43" x2="43" xlink:href="#e" y1="43" y2="4"/><g stroke-linejoin="round"><path d="m10 2h20v28h-20z" fill="url(#f)" stroke-width=".999997"/><g stroke-width="1.42857"><path d="m10 29h20v1.000001h-20z" fill="#979797"/><path d="m12 6v.9999999h10v-.9999999zm0 2.0000003v.9999997h9v-.9999997zm0 1.9999994v1.0000003h10v-1.0000003z" fill="#4d4d4d"/><path d="m24 6v.9999999h4v-.9999999zm0 3.9999997v1.0000003h4v-1.0000003z" fill="#da4453"/><path d="m24 8.0000003h4v.9999997h-4z" fill="#27ae60"/></g><path d="m10 2h1v27h-1z" fill="url(#h)"/><path d="m29 2h1v27h-1z" fill="url(#i)"/></g><path d="m23 16v14h7v-7.410156l-6.294922-6.294922z" fill="url(#d)" opacity=".1" stroke-width=".999999"/><g transform="translate(0 -15)"><path d="m3 31c-.554 0-1 .446-1 1v8a1 1.5 0 0 1 1 1.5 1 1.5 0 0 1 -1 1.5v1c0 .554.446 1 1 1h20c.554 0 1-.446 1-1v-12c0-.554-.446-1-1-1z" fill="url(#b)" stroke-linejoin="round"/><path d="m2 32h22v3h-22z" fill="url(#g)" stroke-width="1.42857"/><g stroke-linejoin="round"><path d="m2 43v1c0 .554.446 1 1 1h20c.554 0 1-.446 1-1v-1c0 .554-.446 1-1 1h-20c-.554 0-1-.446-1-1z" fill="url(#c)"/><rect fill="url(#a)" height="3" rx=".5" width="4" x="4" y="36"/><path d="m6 41v1h3v-1zm4 0v1h3v-1zm4 0v1h3v-1zm4 0v1h3v-1z" fill="#1f5b83"/></g></g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48.000002"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="a"><stop offset="0" stop-opacity=".102"/><stop offset="1" stop-opacity=".03"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="30" x2="30" y1="4" y2="44"><stop offset="0" stop-color="#fcfcfc"/><stop offset="1" stop-color="#cacaca"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="9" x2="9" y1="32" y2="36"><stop offset="0" stop-color="#fcfcfc" stop-opacity=".8"/><stop offset="1" stop-color="#fcfcfc" stop-opacity=".45"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="20" x2="20" y1="26" y2="30"><stop offset="0" stop-color="#194d6f"/><stop offset="1" stop-color="#0c3d61"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="18" x2="36" y1="24" y2="44"><stop offset="0" stop-color="#3daee9"/><stop offset="1" stop-color="#2a7aaf"/></linearGradient><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="19" x2="20" y1="42" y2="48"><stop offset="0" stop-color="#318bba"/><stop offset="1" stop-color="#115c92"/></linearGradient><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="16" x2="16" xlink:href="#a" y1="43" y2="4"/><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="43" x2="43" xlink:href="#a" y1="43" y2="4"/><linearGradient id="i" gradientUnits="userSpaceOnUse" x1="34" x2="48" y1="25" y2="44"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><g stroke-linejoin="round"><path d="m16 4h28v40h-28z" fill="url(#b)"/><path d="m16 43h28v1h-28z" fill="#979797"/><path d="m19 10v1h14v-1zm0 3v1h12v-1zm0 3v1h13v-1z" fill="#4d4d4d"/><path d="m36 10v1h5v-1zm0 6v1h5v-1z" fill="#da4453"/><path d="m36 13h5v1h-5z" fill="#27ae60"/><path d="m16 4h1v39h-1z" fill="url(#g)"/><path d="m43 4h1v39h-1z" fill="url(#h)"/></g><path d="m35.41 24.59 8.59 8.58v10.83h-10v-20z" fill="url(#i)" opacity=".1"/><g stroke-linejoin="round"><path d="m6 24c-1.108 0-2 .892-2 2v11.115234c.5990986.282418.9997293 1.037513 1 1.884766-.0002707.847253-.4009014 1.602348-1 1.884766v1.115234c0 1.108.892 2 2 2h28c1.108 0 2-.892 2-2v-16c0-1.108-.892-2-2-2z" fill="url(#e)"/><path d="m4 41v1c0 1.108.892 2 2 2h28c1.108 0 2-.892 2-2v-1c0 1.108-.892 2-2 2h-28c-1.108 0-2-.892-2-2z" fill="url(#f)"/><path d="m4 26h32v4h-32z" fill="url(#d)"/><path d="m6.5 32c-.277 0-.5.223-.5.5v3c0 .277.223.5.5.5h5c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5z" fill="url(#c)" stroke-width=".999999"/><path d="m11 39v1h4v-1zm5 0v1h4v-1zm5 0v1h4v-1zm5 0v1h4v-1z" fill="#1f5b83"/></g>
		</svg>
	{/if}
