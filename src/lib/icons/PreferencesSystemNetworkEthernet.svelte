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
			viewBox="0 0 5.8210625 5.8210625"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="a" gradientTransform="matrix(3.2479051 0 0 5.1965181 -3.328849 -1507.3037)" gradientUnits="userSpaceOnUse" x1="1.948594" x2="1.948594" y1="290.63763" y2="291.21494"><stop offset="0" stop-color="#fdbc4b" stop-opacity=".8"/><stop offset="1" stop-color="#fdbc4b" stop-opacity="0"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.74998211 0 0 .66715658 -.263994 -192.32324)" gradientUnits="userSpaceOnUse" x1="4.444" x2="4.444" xlink:href="#e" y1="295.41199" y2="294.61801"/><linearGradient id="c" gradientTransform="matrix(.94482224 0 0 2.5214375 3.000755 -728.86242)" gradientUnits="userSpaceOnUse" x1="4.444" x2="4.444" xlink:href="#e" y1="295.41199" y2="294.61801"/><linearGradient id="d"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#a2abae"/></linearGradient><linearGradient id="e"><stop offset="0" stop-color="#31363b"/><stop offset="1" stop-color="#31363b" stop-opacity="0"/></linearGradient><linearGradient id="f" gradientTransform="matrix(.68750031 0 0 .64282457 0 .189133)" gradientUnits="userSpaceOnUse" x1="4.233" x2="4.233" y1="7.938" y2=".53"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#bdc3c7"/></linearGradient><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="2.910598" x2="2.910598" y1="1.075063" y2="5.07714"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#292c2f"/></linearGradient><linearGradient id="h" gradientTransform="matrix(1.8896445 0 0 3.7821559 -3.998489 -1103.2935)" gradientUnits="userSpaceOnUse" x1="4.444" x2="4.444" xlink:href="#e" y1="295.41199" y2="294.61801"/><radialGradient id="i" cx="-1.146" cy="-291.923" gradientTransform="matrix(-1.9938737 .00008495 -.00014977 -3.4929223 -1.668938 -1017.6781)" gradientUnits="userSpaceOnUse" r=".265" xlink:href="#d"/><radialGradient id="j" cx="-1.146" cy="-291.923" gradientTransform="matrix(1.9938741 .00003498 .00005492 -3.4926868 7.462543 -1017.6109)" gradientUnits="userSpaceOnUse" r=".265" xlink:href="#d"/><rect fill="url(#f)" height="4.762687" rx=".529187" stroke-width=".664787" width="5.821065" y=".529188"/><path d="m.5291875.79378125v1.05837505h-.26459375v.2645937h.26459375v.5291875h-.26459375v.2645938h.26459375v.7937812h1.058375v.5291875h.5291875v.5291875h1.5875625v-.5291875h.5291875v-.5291875h1.058375v-.7937812h.2645938v-.2645938h-.2645938v-.5291875h.2645938v-.2645937h-.2645938v-1.05837505z" fill="url(#g)" stroke-width=".181913"/><path d="m3 3v3h1.25v-3zm2.9492188 0v3h1.25v-3zm2.9511718 0v3h1.2500004v-3zm2.9492184 0v3h1.25v-3zm2.951172 0v3h1.25v-3zm2.949219 0v3h1.25v-3z" fill="url(#a)" stroke-width="2.90501" transform="scale(.26459375)"/><path d="m2 11v3h4v-3zm14 0v3h4v-3z" fill="url(#h)" stroke-width="2.61936" transform="scale(.26459375)"/><path d="m6 14v2h2v-2zm8 0v2h2v-2z" fill="url(#c)" stroke-width="1.51229" transform="scale(.26459375)"/><path d="m2.11675 4.2335h1.5875625v.5291875h-1.5875625z" fill="url(#b)" stroke-width=".693066"/><path d="m.52818903 2.6459375h-.26359528v-.5291875h.26459375z" fill="url(#i)" stroke-width=".499469"/><path d="m5.2923742 2.6459375h.2640946v-.5291875h-.2645938z" fill="url(#j)" stroke-width=".499469"/><path d="m0 4.4980938v.2645937c0 .2931696.23601789.5291875.5291875.5291875h4.7626875c.2931697 0 .5291875-.2360179.5291875-.5291875v-.2645937c0 .2931696-.2360178.5291875-.5291875.5291875h-4.7626875c-.29316961 0-.5291875-.2360179-.5291875-.5291875z" fill="#69777b" stroke-width=".664787"/>
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
			<linearGradient id="b"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#a2abae"/></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#31363b"/><stop offset="1" stop-color="#31363b" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="4.233" x2="4.233" y1="7.938" y2=".53"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#bdc3c7"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="5" y2="27"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#292c2f"/></linearGradient><linearGradient id="e" gradientTransform="matrix(1 0 0 1.99995 -.794 -579.962)" gradientUnits="userSpaceOnUse" x1="4.234" x2="4.234" y1="290.65" y2="291.179"><stop offset="0" stop-color="#fdbc4b" stop-opacity=".8"/><stop offset="1" stop-color="#fdbc4b" stop-opacity="0"/></linearGradient><linearGradient id="f" gradientTransform="matrix(1.25 0 0 1 -1.058 -288.268)" gradientUnits="userSpaceOnUse" x1="4.233" x2="4.233" xlink:href="#a" y1="295.412" y2="294.619"/><linearGradient id="g" gradientTransform="matrix(.375 0 0 1 .926 -289.063)" gradientUnits="userSpaceOnUse" x1="4.587" x2="4.587" xlink:href="#a" y1="295.413" y2="294.619"/><linearGradient id="h" gradientTransform="matrix(.375 0 0 1 4.366 -289.063)" gradientUnits="userSpaceOnUse" x1="3.88" x2="3.88" xlink:href="#a" y1="295.413" y2="294.619"/><linearGradient id="i" gradientTransform="matrix(.47242 0 0 7.5588 27.499 -2216.967)" gradientUnits="userSpaceOnUse" x1="7.411" x2="7.411" xlink:href="#a" y1="295.413" y2="294.619"/><linearGradient id="j" gradientTransform="matrix(.47242 0 0 7.5588 .499 -2216.967)" gradientUnits="userSpaceOnUse" x1="1.061" x2="1.061" xlink:href="#a" y1="295.413" y2="294.619"/><linearGradient id="k" gradientTransform="matrix(.625 0 0 1.66667 -1.19 -486.798)" gradientUnits="userSpaceOnUse" x1="4.444" x2="4.444" xlink:href="#a" y1="295.412" y2="294.618"/><linearGradient id="l" gradientTransform="matrix(.625 0 0 1.66667 4.366 -486.798)" gradientUnits="userSpaceOnUse" x1="4.021" x2="4.021" xlink:href="#a" y1="295.412" y2="294.618"/><radialGradient id="m" cx="-1.146" cy="-291.923" gradientTransform="matrix(-3.99387 .00017 -.0003 -6.98997 -3.343 -2037.884)" gradientUnits="userSpaceOnUse" r=".265" xlink:href="#b"/><radialGradient id="n" cx="-1.146" cy="-291.923" gradientTransform="matrix(3.99387 .00007 .00011 -6.9895 11.756 -2037.75)" gradientUnits="userSpaceOnUse" r=".265" xlink:href="#b"/><rect fill="url(#c)" height="7.409" rx=".529" width="8.467" y=".529"/><path d="M3 5v5H2v1h1v4H2v1h1v5h5v3h3v3h10v-3h3v-3h5v-5h1v-1h-1v-4h1v-1h-1V5z" fill="url(#d)" transform="scale(.2646)"/><path d="M1.323 1.323h.265v1.058h-.265zm.794 0h.264v1.058h-.264zm.794 0h.264v1.058h-.264zm3.968 0h.265v1.058h-.265zm-.793 0h.264v1.058h-.264zm-.794 0h.264v1.058h-.264zm-.794 0h.265v1.058h-.265zm-.794 0h.265v1.058h-.265z" fill="url(#e)"/><path d="M2.91 6.35h2.646v.794H2.911z" fill="url(#f)"/><path d="M2.117 5.556h.794v.794h-.794z" fill="url(#g)"/><path d="M5.556 5.556h.794v.794h-.794z" fill="url(#h)"/><path d="M29 10v1h1v-1zm0 5v1h1v-1z" fill="url(#i)" transform="scale(.2646)"/><path d="M2 10v1h1v-1zm0 5v1h1v-1z" fill="url(#j)" transform="scale(.2646)"/><path d="M.794 4.234h1.323v1.322H.794z" fill="url(#k)"/><path d="M6.35 4.233h1.323v1.323H6.35z" fill="url(#l)"/><path d="M1.058 3.969H.53V2.91h.53z" fill="url(#m)"/><path d="M7.409 3.969h.529V2.91h-.53z" fill="url(#n)"/><path d="M0 7.144v.265c0 .293.236.529.53.529h7.408a.528.528 0 0 0 .529-.53v-.264c0 .293-.236.53-.53.53H.53A.528.528 0 0 1 0 7.143z" fill="#69777b"/>
		</svg>
	{/if}
