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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-16.213949" x2="-16.213949" y1="13.571091" y2="2.000002"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#bdc3c7"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.64280617 0 0 -.64280617 20.71483 21.285151)" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="3" y2="18"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#292c2f"/></linearGradient><linearGradient id="c" gradientTransform="matrix(2.8348686 0 0 -5.6602369 -3.252302 1663.1437)" gradientUnits="userSpaceOnUse" x1="4.234" x2="4.234" y1="290.64999" y2="291.17899"><stop offset="0" stop-color="#fdbc4b" stop-opacity=".8"/><stop offset="1" stop-color="#fdbc4b" stop-opacity="0"/></linearGradient><linearGradient id="d" gradientTransform="matrix(2.8356147 0 0 -2.4294721 -1.003805 720.69521)" gradientUnits="userSpaceOnUse" x1="4.233" x2="4.233" xlink:href="#j" y1="295.41199" y2="294.61801"/><linearGradient id="e" gradientTransform="matrix(.94589385 0 0 -2.5188917 2.995086 749.11084)" gradientUnits="userSpaceOnUse" x1="4.233" x2="4.233" xlink:href="#j" y1="295.41199" y2="294.61801"/><linearGradient id="f" gradientTransform="matrix(.94589385 0 0 -5.0377833 12.995086 1495.2217)" gradientUnits="userSpaceOnUse" x1="4.233" x2="4.233" xlink:href="#j" y1="295.41199" y2="294.61801"/><radialGradient id="g" cx="-1.147" cy="-291.923" gradientTransform="matrix(-7.5355991 .00005671 -.00009434 -13.21212 -4.166033 -3845.4203)" gradientUnits="userSpaceOnUse" r=".265" xlink:href="#h"/><linearGradient id="h"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#9aa4a6"/></linearGradient><radialGradient id="i" cx="-1.146" cy="-291.923" gradientTransform="matrix(7.5356049 -.00013233 -.00024528 -13.213121 26.067926 -3845.7075)" gradientUnits="userSpaceOnUse" r=".265" xlink:href="#h"/><linearGradient id="j"><stop offset="0" stop-color="#31363b"/><stop offset="1" stop-color="#31363b" stop-opacity="0"/></linearGradient><rect fill="url(#a)" height="18" ry="2" stroke-linejoin="round" stroke-width="2" width="18" x="2" y="2"/><path d="m2 17v1c0 1.108.892 2 2 2h14c1.108 0 2-.892 2-2v-1c0 1.108-.892 2-2 2h-14c-1.108 0-2-.892-2-2z" fill="#69777b" stroke-linejoin="round" stroke-width="2"/><path d="m8 3v2h-2v2h-2v4h-1v4h1v3h14v-3h1v-4h-1v-4h-2v-2h-2v-2z" fill="url(#b)"/><path d="m7.997571 4.9290008h6.002429v-1.9290008h-6.0001609z" fill="url(#d)" stroke-width="2.3476"/><path d="m5.9980469 5v2h2.0019531v-2zm8.0019531 0v2h2.001953v-2z" fill="url(#e)" stroke-width="1.38061"/><path d="m4 7v4h2.0019531v-4zm11.998047 0v4h2.001953v-4z" fill="url(#f)" stroke-width="1.95247"/><path d="m5 18h1v-3h-1zm2 0h.9992917v-3h-.9992917zm9 0h1v-3h-1zm-1.999291 0h.999291v-3h-.999291zm-2.500709 0h1.5v-3h-1.5zm-2.5 0h1.5v-3h-1.5z" fill="url(#c)" stroke-width="2.83252"/><path d="m4 14h-1v-2h1z" fill="url(#g)" stroke-width="1.88857"/><path d="m18.001886 14h.998114v-2h-1z" fill="url(#i)" stroke-width="1.88858"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8.467 8.467"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="b"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#9aa4a6"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1" x2="1" y1="30" y2="2"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#bdc3c7"/></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#31363b"/><stop offset="1" stop-color="#31363b" stop-opacity="0"/></linearGradient><linearGradient id="d" gradientTransform="matrix(.99995 0 0 -.99995 0 32)" gradientUnits="userSpaceOnUse" x1="16.001" x2="16.001" y1="28.001" y2="6"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#292c2f"/></linearGradient><linearGradient id="e" gradientTransform="matrix(1 0 0 -1.99995 -.794 588.164)" gradientUnits="userSpaceOnUse" x1="4.234" x2="4.234" y1="290.65" y2="291.179"><stop offset="0" stop-color="#fdbc4b" stop-opacity=".8"/><stop offset="1" stop-color="#fdbc4b" stop-opacity="0"/></linearGradient><linearGradient id="f" gradientTransform="matrix(1.25 0 0 -1 -1.058 296.47)" gradientUnits="userSpaceOnUse" x1="4.233" x2="4.233" xlink:href="#a" y1="295.412" y2="294.618"/><linearGradient id="g" gradientTransform="matrix(.375 0 0 -1 .926 297.265)" gradientUnits="userSpaceOnUse" x1="4.587" x2="4.587" xlink:href="#a" y1="295.413" y2="294.619"/><linearGradient id="h" gradientTransform="matrix(.375 0 0 -1 4.366 297.265)" gradientUnits="userSpaceOnUse" x1="3.88" x2="3.88" xlink:href="#a" y1="295.413" y2="294.619"/><linearGradient id="i" gradientTransform="matrix(.47242 0 0 7.5588 25.5 -2211.968)" gradientUnits="userSpaceOnUse" x1="7.41" x2="7.41" xlink:href="#a" y1="295.413" y2="294.619"/><linearGradient id="j" gradientTransform="matrix(.47242 0 0 7.5588 2.498 -2211.968)" gradientUnits="userSpaceOnUse" x1="1.062" x2="1.062" xlink:href="#a" y1="295.413" y2="294.619"/><linearGradient id="k" gradientTransform="matrix(.375 0 0 -1.66667 .132 495)" gradientUnits="userSpaceOnUse" x1="4.587" x2="4.587" xlink:href="#a" y1="295.412" y2="294.618"/><linearGradient id="l" gradientTransform="matrix(.375 0 0 -1.66667 5.16 495)" gradientUnits="userSpaceOnUse" x1="3.88" x2="3.88" xlink:href="#a" y1="295.412" y2="294.618"/><radialGradient id="m" cx="-1.147" cy="-291.923" gradientTransform="matrix(-3.99387 .00003 -.00005 -6.98921 -2.74 -2036.341)" gradientUnits="userSpaceOnUse" r=".265" xlink:href="#b"/><radialGradient id="n" cx="-1.146" cy="-291.923" gradientTransform="matrix(3.99387 -.00007 -.00013 -6.98974 11.155 -2036.493)" gradientUnits="userSpaceOnUse" r=".265" xlink:href="#b"/><path d="M3.996 2A1.993 1.993 0 0 0 2 4v24c0 1.108.89 2 1.996 2h24.008A1.993 1.993 0 0 0 30 28V4c0-1.108-.89-2-1.996-2zM27 16h1v4h-1z" fill="url(#c)" transform="scale(.2646)"/><path d="M11 4v3H8v3H5v5H4v1h1v4H4v1h1v5h22v-5h1v-6h-1v-5h-3V7h-3V4z" fill="url(#d)" transform="scale(.2646)"/><path d="M2.117 6.88h.264V5.82h-.264zm.794 0h.264V5.82h-.264zm3.175 0h.264V5.82h-.264zm-.794 0h.264V5.82h-.264zm-.794 0h.265V5.82h-.265zm-.794 0h.265V5.82h-.265z" fill="url(#e)"/><path d="M2.91 1.852h2.646v-.794H2.911z" fill="url(#f)"/><path d="M2.117 2.646h.794v-.794h-.794z" fill="url(#g)"/><path d="M5.556 2.646h.794v-.794h-.794z" fill="url(#h)"/><path d="M27 15v1h1v-1zm0 5v1h1v-1z" fill="url(#i)" transform="scale(.2646)"/><path d="M4 15v1h1v-1zm0 5v1h1v-1z" fill="url(#j)" transform="scale(.2646)"/><path d="M1.323 3.969h.794V2.646h-.794z" fill="url(#k)"/><path d="M6.35 3.969h.794V2.646H6.35z" fill="url(#l)"/><path d="M1.588 5.292h-.53V4.234h.53z" fill="url(#m)"/><path d="M6.88 5.292h.529V4.234h-.53z" fill="url(#n)"/><path d="M.53 7.144v.265c0 .293.235.529.527.529H7.41a.527.527 0 0 0 .528-.53v-.264c0 .293-.236.53-.528.53H1.057a.527.527 0 0 1-.528-.53z" fill="#69777b"/>
		</svg>
	{/if}
