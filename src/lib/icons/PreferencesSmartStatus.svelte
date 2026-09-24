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
			<linearGradient id="a" gradientTransform="matrix(.33540428 0 0 .34615286 -21.018857 -.076429)" gradientUnits="userSpaceOnUse" x1="3" x2="3" y1="17" y2="3"><stop offset="0" stop-color="#eef1f2"/><stop offset="1" stop-color="#f9fafb"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="6" x2="20" y1="5" y2="16"><stop offset="0" stop-color="#31363b"/><stop offset="1" stop-color="#232629"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="7" x2="14" y1="7" y2="14"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="d" gradientTransform="matrix(.36685 0 0 .34615286 -142.9925 -173.08407)" gradientUnits="userSpaceOnUse" x1="388.423" x2="388.423" y1="557.79797" y2="505.798"><stop offset="0" stop-color="#7f8c8d"/><stop offset="1" stop-color="#afb0b3"/></linearGradient><path d="m2 2h15v18h-15z" fill="url(#d)" stroke-width=".633866"/><path d="m4 18h11v2h-11z" fill="#292c2e" stroke-width=".654654"/><path d="m5 19h6v1h-6zm7 0h2v1h-2z" fill="#f6b44d" stroke-width=".811273"/><path d="m15 18h2v2h-2zm-13 0h2v2h-2z" fill="#292c2f" opacity=".2" stroke-width=".654654"/><path d="m2 18 2 2v-2zm13 0v1.999996l2 .000004v-2z" opacity=".2" stroke-width=".642857"/><path d="m6 3a3 3 0 0 0 -3 3v3 .2695312a2 2 0 0 1 1 1.7304688 2 2 0 0 1 -1 1.732422v.267578 2l2 2h9l2-2v-2-.267578a2 2 0 0 1 -1-1.732422 2 2 0 0 1 1-1.7324219v-.2675781-3a3 3 0 0 0 -3-3z" fill="url(#a)"/><path d="m12 6h6v1h-6z" fill="#4d4d4d"/><path d="m10 5v2.4140625l3.974609 3.9746095c-.190639 1.47318-1.449511 2.611328-2.974609 2.611328-1.6568542 0-3-1.343146-3-3v-2.984375-.015625h-2v3c0 2.761424 2.2385763 5 5 5 2.615383 0 4.760757-2.007946 4.980469-4.566406l4.019531-4.0195315v-2.4140625h-2v1.5859375l-3 3-3-3v-1.5859375z" fill="url(#b)"/><path d="m10 2v3h1v-2h1v-1h-1zm8 0v1h1v2h1v-3h-1zm-11 3a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2zm0 1a1 1 0 0 1 1 1 1 1 0 0 1 -1 1 1 1 0 0 1 -1-1 1 1 0 0 1 1-1z" fill="#7f8c8d"/><path d="m7.7421875 6.3300781c.3546817.3925462.3431643.9986327-.0351563 1.3769531-.3783204.3783206-.9844069.389838-1.3769531.0351563l1.6699219 1.6699219v1.5878906c0 1.656854 1.3431458 3 3 3 1.193057 0 2.223647-.696573 2.707031-1.705078z" fill="url(#c)" opacity=".2"/><path d="m12 1v2h1a1 1 0 0 0 1-1v-.0429688a1 1 0 0 0 -.957031-.9570312zm5 0a1 1 0 0 0 -1 1v.0429688a1 1 0 0 0 .957031.9570312h1.042969v-2z"/>
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
			<linearGradient id="a" x1="9" x2="23" y1="9" y2="23" gradientUnits="userSpaceOnUse" xlink:href="#j"/>
    <linearGradient id="b">
        <stop stop-color="#7f8c8d" offset="0"/>
        <stop stop-color="#bdc3c7" offset="1"/>
    </linearGradient>
    <linearGradient id="c">
        <stop stop-color="#31363b" offset="0"/>
        <stop stop-color="#232629" offset="1"/>
    </linearGradient>
    <linearGradient id="d" x1="26" x2="27" y1="10" y2="5" gradientUnits="userSpaceOnUse" xlink:href="#b"/>
    <radialGradient id="e" cx="23" cy="13" r="6.324219" gradientTransform="matrix(1 0 0 .31624458 -1 8.88882)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4d4d4d" offset="0"/>
        <stop stop-color="#31363b" offset="1"/>
    </radialGradient>
    <linearGradient id="f" x1="15" x2="24" y1="10" y2="19" gradientUnits="userSpaceOnUse" xlink:href="#c"/>
    <linearGradient id="g" x1="9" x2="23" y1="21" y2="21" gradientUnits="userSpaceOnUse" xlink:href="#c"/>
    <linearGradient id="h" x1="9" x2="11" y1="13" y2="15" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fcfcfc" offset="0"/>
        <stop stop-color="#eff0f1" offset="1"/>
    </linearGradient>
    <linearGradient id="i" x1="13" x2="7" y1="17" y2="11" gradientUnits="userSpaceOnUse" xlink:href="#b"/>
    <linearGradient id="j">
        <stop stop-color="#292c2f" offset="0"/>
        <stop stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="k" x1="388.423" x2="388.423" y1="557.798" y2="505.798" gradientTransform="matrix(.58696 0 0 .53846 -228.988 -270.353)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7f8c8d" offset="0"/>
        <stop stop-color="#afb0b3" offset="1"/>
    </linearGradient>
    <linearGradient id="l" x1="-422.447" x2="-411.447" y1="-504.204" y2="-493.204" gradientUnits="userSpaceOnUse" xlink:href="#j"/>
    <linearGradient id="m" x1="1.333" x2="1.333" y1="48.714" y2="9.714" gradientTransform="matrix(.52174 0 0 .53846 -1.696 -1.23)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#eef1f2" offset="0"/>
        <stop stop-color="#f9fafb" offset="1"/>
    </linearGradient>
    <path d="m3 2h24v28h-24z" fill="url(#k)"/>
    <path d="m6 27h18v3h-18z" fill="#292c2e"/>
    <path d="m8 28h9v1h-9zm10 0h4v1h-4z" fill="#f6b44d"/>
    <path d="m23 27h4v3h-4zm-20 0h4v3h-4z" fill="#292c2f" opacity=".2"/>
    <path d="m3 27h4v3h-1zm20 0h4v3h-4z" fill="#292c2f" opacity=".2"/>
    <path d="m23.535 5.465 3.465 3.463v21.072h-14l-8-8z" fill="url(#l)" opacity=".2"/>
    <path d="m10 4a5 5 0 0 0 -5 5v4.768a3 3 0 0 1 .996 2.117 2 2 0 0 1 .004.115 2 2 0 0 1 -.01.2 3 3 0 0 1 0 .005 3 3 0 0 1 -.99 2.025v3.77l3 3h14l3-3v-3.768a3 3 0 0 1 -.996-2.117 2 2 0 0 1 -.004-.115 2 2 0 0 1 .01-.205 3 3 0 0 1 .99-2.025v-4.77a5 5 0 0 0 -5-5z" fill="url(#m)"/>
    <path d="m15 5v8.5l6 6-1 4.5-9.5-.5 3.5 3.5h13v-15.4l-6-6zm8 1 4 4v-4z" fill="url(#a)" opacity=".3"/>
    <path d="m9 19c0 3.865993 3.134007 7 7 7s7-3.134007 7-7h-2c0 2.761424-2.238576 5-5 5s-5-2.238576-5-5v-3h-2z" fill="url(#g)"/>
    <circle cx="10" cy="14" r="3" fill="url(#i)" stroke-width="4"/>
    <path d="m21.4 22.55-10-10-2.85 2.849813 2 2-.55 4.962762 6 2.637425z" fill="url(#a)" opacity=".3"/>
    <circle cx="10" cy="14" r="2" fill="url(#h)" stroke-width="2.66667"/>
    <path d="m15.675781 11a7 7 0 0 0 6.324219 4 7 7 0 0 0 6.324219-4h-1.128907a6 6 0 0 1-5.195312 3 6 6 0 0 1-5.195312-3z" fill="url(#e)"/>
    <path d="m28 10v3l-6 6-6-6v-3" fill="none" stroke="url(#f)" stroke-width="2"/>
    <path d="m18 5.5h-2.5v4.5m13 0v-4.5h-2.5" fill="none" stroke="url(#d)"/>
    <path d="m18 7v-3h1.500344c.828428 0 1.5.6715729 1.5 1.5s-.671571 1.5-1.5 1.5z"/>
    <path d="m26 4v3h-1.500344c-.828428 0-1.5-.6715729-1.5-1.5s.671571-1.5 1.5-1.5z"/>
		</svg>
	{/if}
