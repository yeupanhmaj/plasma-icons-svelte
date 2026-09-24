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
			<linearGradient id="a" gradientTransform="matrix(.6770843 0 0 .69118956 -255.63738 -341.36517)" gradientUnits="userSpaceOnUse" x1="379.03311" x2="393.80231" y1="521.36951" y2="501.11459"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.66477325 0 0 .60185273 -249.971 -294.5464)" gradientUnits="userSpaceOnUse" x1="386.57144" x2="429.57144"><stop offset="0" stop-color="#f2f2f2"/><stop offset="1" stop-color="#f9f9f9"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="11.000006" x2="19.750025" y1="6.999981" y2="15.74998"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m1 2v18h20v-18z" fill="#23262c" stroke-width=".625"/><path d="m1.0000062 5.1250124h19.9999938v13.8749876h-20z" fill="url(#a)" stroke-width=".625"/><path d="m2 6h18v1h-18z" fill="#cad3d6" stroke-width=".801781"/><path d="m2 3v1h2v-1zm0 4v10h18v-10z" fill="url(#b)" stroke-width=".633869"/><path d="m17 6-1 11 2 2h3v-9z" fill="url(#c)" opacity=".2" stroke-width=".625"/><path d="m17 6h-2l-.000032 9.303812 1.000032 1.696188.999968-1.696188z" fill="#23262c"/><g stroke-width=".625"><path d="m15 11h2v3h-2z" fill="#74868f"/><path d="m18 3v1h2v-1zm-3 11v1h2v-1z" fill="#147de1"/></g>
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
			<linearGradient id="a" gradientTransform="matrix(1.0833349 0 0 1.1059033 -410.61979 -547.38428)" gradientUnits="userSpaceOnUse" x1="409.4946" x2="409.57144" y1="541.98621" y2="502.65509">
        <stop offset="0" stop-color="#c6cdd1"/>
        <stop offset="1" stop-color="#e0e5e7"/>
    </linearGradient>
    <linearGradient id="b" gradientTransform="matrix(1.0340918 0 0 .96296436 -389.9549 -472.47424)" gradientUnits="userSpaceOnUse" x1="386.57144" x2="429.57144">
        <stop offset="0" stop-color="#f2f2f2"/>
        <stop offset="1" stop-color="#f9f9f9"/>
    </linearGradient>
    <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="16.00001" x2="30.00004" y1="9.99997" y2="23.99997"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <path d="m0 2v28h32v-28z" fill="#23262c"/>
    <path d="m.00001 7.00002h31.99999v22h-31.99999z" fill="url(#a)"/>
    <path d="m2 4v1h3v-1zm0 6v16h28v-16z" fill="url(#b)"/>
    <path d="m24 11-1 14.695312 4.304688 4.304688h4.695312v-11z" fill="url(#c)" opacity=".2"/>
    <path d="m24 11h-2v13l1.000033 1.696188.999967-1.696188z" fill="#23262c"/>
    <path d="m22 18h2v5h-2z" fill="#74868f"/>
    <path d="m27 4v1h3v-1zm-5 19v1h2v-1z" fill="#147de1"/>
    <path d="m2 9h28v1h-28z" fill="#cad3d6"/>
		</svg>
	{/if}
