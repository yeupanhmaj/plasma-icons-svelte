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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="5.08194" x2="5.08194" y1="19.653846" y2="1.346154"><stop offset="0" stop-color="#54d883"/><stop offset="1" stop-color="#abf9c7"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="7.697324" x2="20.774247" y1="3.961539" y2="17.038462"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="5.08194" x2="5.08194" y1="19.653846" y2="1.346154"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#433a35"/><stop offset="1" stop-color="#997657"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6c5548"/><stop offset="1" stop-color="#997657"/></linearGradient><radialGradient id="f" cx="6" cy="10.999999" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#bdc3c7"/></radialGradient><linearGradient id="g" x1="19" x2="19" xlink:href="#e" y1="19.782609" y2="1.695653"/><linearGradient id="h" x1="18.999999" x2="18.295986" xlink:href="#e" y1="19.999999" y2="19.999999"/><linearGradient id="i" gradientTransform="matrix(1.0000002 0 0 .67999998 -3.000002 -.72)" x1="11" x2="12" xlink:href="#d" y1="29" y2="29"/><linearGradient id="j" gradientUnits="userSpaceOnUse" x1="4" x2="9" y1="11" y2="11"><stop offset="0" stop-color="#997657"/><stop offset="1" stop-color="#d4ba94"/></linearGradient><linearGradient id="k" x1="5" x2="8" xlink:href="#e" y1="3" y2="3"/><linearGradient id="l" x1="3" x2="5" xlink:href="#d" y1="11" y2="11"/><g stroke-width=".653846"><path d="m9 3v15h9v-15z" fill="url(#c)"/><path d="m9 3v15h9v-15z" fill="url(#b)" opacity=".2"/><path d="m14 2-5 1v4l1 1v-1l1-1v-1h1v-1l1-1v1l1-1zm-5 9v5l1 1v1h5l1-1v-1l1-1v-1l-2-1h-1v-1h-1l-2-1z" fill="url(#a)"/></g><path d="m8 2h11v1h-11zm0 16h11v1h-11z" fill="url(#g)" stroke-width=".695652"/><path d="m18 2h1v17h-1z" fill="url(#h)" stroke-width=".704013"/><path d="m8 2h1v17h-1z" fill="url(#i)" stroke-width=".824621"/><g stroke-width=".695652"><path d="m9 3-5-2v20l5-2z" fill="url(#j)"/><path d="m5 3v2h1v-1.5zm2 1v2h1v-1.5zm-2 2v2h1v-1.5zm2 1v2h1v-1.5zm0 6v2l1-.5v-1.5zm-2 1v2l1-.5v-1.5zm2 2v2l1-.5v-1.5zm-2 1v2l1-.5v-1.5z" fill="url(#k)"/><path d="m3 1.5 1-.5v20l-1-.5z" fill="url(#l)"/></g><circle cx="6" cy="11" fill="url(#f)" r="1"/>
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
			<linearGradient id="e" gradientUnits="userSpaceOnUse" x1="6" x2="6" y1="30" y2="2"><stop offset="0" stop-color="#54d883"/><stop offset="1" stop-color="#abf9c7"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="10" x2="30" y1="6" y2="26"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="6" x2="6" y1="30" y2="2"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#433a35"/><stop offset="1" stop-color="#997657"/></linearGradient><linearGradient id="a" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6c5548"/><stop offset="1" stop-color="#997657"/></linearGradient><radialGradient id="f" cx="16" cy="16" gradientTransform="matrix(.88889 -.00002 .00003 1.44444 4.778 -7.11)" gradientUnits="userSpaceOnUse" r="9"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#eff0f1" stop-opacity="0"/></radialGradient><radialGradient id="u" cx="7" cy="16" gradientUnits="userSpaceOnUse" r="1"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#bdc3c7"/></radialGradient><linearGradient id="g" x1="27" x2="27" xlink:href="#a" y1="29" y2="3"/><linearGradient id="h" x1="27" x2="26" xlink:href="#a" y1="29" y2="29"/><linearGradient id="i" x1="11" x2="12" xlink:href="#b" y1="29" y2="29"/><linearGradient id="j" gradientTransform="matrix(1 0 0 .04 3 2.84)" x1="8" x2="9" xlink:href="#b" y1="29" y2="29"/><linearGradient id="k" gradientUnits="userSpaceOnUse" x1="5" x2="13" y1="16" y2="16"><stop offset="0" stop-color="#997657"/><stop offset="1" stop-color="#d4ba94"/></linearGradient><linearGradient id="l" x1="8" x2="6" xlink:href="#a" y1="27" y2="27"/><linearGradient id="m" x1="12" x2="10" xlink:href="#a" y1="26" y2="26"/><linearGradient id="n" x1="8" x2="6" xlink:href="#a" y1="7" y2="7"/><linearGradient id="o" x1="12" x2="10" xlink:href="#a" y1="8" y2="8"/><linearGradient id="p" x1="8" x2="6" xlink:href="#a" y1="21" y2="21"/><linearGradient id="q" x1="12" x2="10" xlink:href="#a" y1="21" y2="21"/><linearGradient id="r" x1="8" x2="6" xlink:href="#a" y1="13" y2="13"/><linearGradient id="s" x1="12" x2="10" xlink:href="#a" y1="13" y2="13"/><linearGradient id="t" x1="4" x2="5" xlink:href="#a" y1="16" y2="16"/><path d="M14.809 3A13.943 13.943 0 0 0 11 5.266v21.468A13.943 13.943 0 0 0 14.809 29H25.19c.628-.25 1.23-.543 1.809-.877V3.877A13.895 13.895 0 0 0 25.191 3z" fill="url(#c)"/><path d="M14.807 3A13.965 13.965 0 0 0 11 5.26v12.314l6.188 3.559L18.502 29h6.686A13.97 13.97 0 0 0 27 28.125V3.877A13.895 13.895 0 0 0 25.191 3z" fill="url(#d)" fill-rule="evenodd" opacity=".2"/><path d="M14.854 3A14 14 0 0 0 11 5.291V11l1 1v-2l2-1V8l2-1 2-2v1l1-1-1-1h2v1l2-1-1-1zM14 16l-2 1h-1v1l1 1-1 1v2l1 2 2 2v2.629a14 14 0 0 0 .885.371H21v-1l2-1 1-1v-2l1-1v-1l-1-1-3-1-1-1-1-1h-1l-1-1z" fill="url(#e)"/><path d="M11 3h16v26H11z" fill="url(#f)" opacity=".4"/><path d="M11 3h16v1H11zm0 25h16v1H11z" fill="url(#g)"/><path d="M26 3h1v26h-1z" fill="url(#h)"/><path d="M11 4h1v25h-1z" fill="url(#i)"/><path d="M11 3h1v1h-1z" fill="url(#j)"/><path d="M13 4L5 2v28l8-2z" fill="url(#k)"/><path d="M6 28l2-.5v-4.625L6 23z" fill="url(#l)"/><path d="M10 27l2-.5v-3.875l-2 .125z" fill="url(#m)"/><path d="M6 4l2 .5v4.625L6 9z" fill="url(#n)"/><path d="M10 5l2 .5v3.875l-2-.125z" fill="url(#o)"/><path d="M8 18H6v4l2-.125z" fill="url(#p)"/><path d="M12 18h-2v3.75l2-.125z" fill="url(#q)"/><path d="M8 14H6v-4l2 .125z" fill="url(#r)"/><path d="M12 14h-2v-3.75l2 .125z" fill="url(#s)"/><path d="M4 2.5L5 2v28l-1-.5z" fill="url(#t)"/><circle cx="7" cy="16" fill="url(#u)" r="1"/>
		</svg>
	{/if}
