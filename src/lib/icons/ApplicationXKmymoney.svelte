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
			<g fill="#e3a943" fill-rule="evenodd">
        <path d="m7 2.5v3.5h.5859375l2.95703125-2.95703125-.54296875-.54296875zm-2 1-2.5 2.5v4l2.5 2.5v-2.5h-2v-1h2v-2h-2v-1h2zm6.95703125.95703125-1.54296875 1.54296875h2.5859375v1h-3.5859375l-1 1 1 1h3.5859375v1h-2.5859375l1.54296875 1.54296875 1.54296875-1.54296875v-4zm-4.95703125 5.54296875v3.5h3l.54296875-.54296875-2.95703125-2.95703125z"/>
        <path d="m8 2a6 6 0 0 0 -6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0 -6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1 -5 5 5 5 0 0 1 -5-5 5 5 0 0 1 5-5z"/>
    </g>
		</svg>
	{:else if numericSize <= 27}
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
			<g fill="#e3a943" fill-rule="evenodd">
        <path d="m9 3.5v5.5h.5859375l4.70703125-4.70703125-1.29296875-.29296875zm-2 1-2 1.5-1.5 3v4l1.5 3 2 1.5v-4.5h-3v-1h3v-2h-3v-1h3zm8.95703125.95703125-3.54296875 3.54296875h5.5859375v1h-6.5859375l-1 1 1 1h6.5859375v1h-5.5859375l3.54296875 3.54296875 2.54296875-3.54296875v-4zm-6.95703125 7.54296875v5.5l4-.5 1.04296875-.54296875-4.45703125-4.45703125z"/>
        <path d="m11 3a8 8 0 0 0 -8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0 -8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1 -7 7 7 7 0 0 1 -7-7 7 7 0 0 1 7-7z"/>
    </g>
		</svg>
	{:else if numericSize <= 48}
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="20" x2="27" y1="9" y2="16">
        <stop offset="0" stop-color="#060606"/>
        <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="5" x2="27" y1="5" y2="27">
        <stop offset="0" stop-color="#fdc665"/>
        <stop offset="1" stop-color="#e3a943"/>
    </linearGradient>
    <path d="m5 30v-28h15l7 7v21h-14z" fill="url(#b)"/>
    <path d="m5 3h15v-1h-15z" fill="#fff" opacity=".5"/>
    <path d="m5 30h22v-1h-22z" opacity=".25"/>
    <path d="m27 9-7-7v7z" fill="#fff" opacity=".5"/>
    <g fill="#fcfcfc" fill-rule="evenodd" transform="translate(8 8)">
        <path d="m7 2.5v3.5h.5859375l2.95703125-2.95703125-.54296875-.54296875zm-2 1-2.5 2.5v4l2.5 2.5v-2.5h-2v-1h2v-2h-2v-1h2zm6.95703125.95703125-1.54296875 1.54296875h2.5859375v1h-3.5859375l-1 1 1 1h3.5859375v1h-2.5859375l1.54296875 1.54296875 1.54296875-1.54296875v-4zm-4.95703125 5.54296875v3.5h3l.54296875-.54296875-2.95703125-2.95703125z"/>
        <path d="m8 2a6 6 0 0 0 -6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0 -6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1 -5 5 5 5 0 0 1 -5-5 5 5 0 0 1 5-5z"/>
    </g>
    <path d="m-1.89571022 38.40724493v-28h15l7 7v21h-14z" fill="none"/>
    <path d="m20 9 7 7v-7z" fill="url(#a)" opacity=".2"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="40.013" x2="54.013" y1="17.016" y2="31.016">
        <stop offset="0" stop-color="#060606"/>
        <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="10.01" x2="54.01" y1="10.02" y2="54.02">
        <stop offset="0" stop-color="#fcc565"/>
        <stop offset="1" stop-color="#e3a943"/>
    </linearGradient>
    <path d="m10.01 61.02v-58h30l14 14v44h-14z" fill="url(#b)"/>
    <g transform="scale(1 -1)">
        <path d="m10.01-4.02h30v1h-30z" fill="#fff" opacity=".5"/>
        <path d="m10.01-61.02h44v1h-44z" opacity=".25"/>
    </g>
    <g fill-rule="evenodd">
        <path d="m54.01 17.02-14-14v14z" fill="#fff" opacity=".5"/>
        <path d="m40.01 17.02 14 14v-14z" fill="url(#a)" opacity=".2"/>
        <g fill="#fcfcfc">
            <path d="m29 20.75v9.12890625l7.93945313-7.93945312-1.93945313-.93945313zm-3 1.5-3 2.25-2.25 5.5v4l2.25 5.5 3 2.25v-7.75h-4.5v-1h4.5v-2h-4.5v-1h4.5zm13.43554688 1.43554688-6.31445313 6.31445312h9.37890625v1h-10.37890625l-1 1 1 1h10.37890625v1h-9.37890625l6.31445313 6.31445313 3.56445312-3.81445313v-9zm-10.43554688 19.56445312 6-.25 2-.87890625-8-8z"/>
            <path d="m32 20a12 12 0 0 0 -12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0 -12-12zm0 1a11 11 0 0 1 11 11 11 11 0 0 1 -11 11 11 11 0 0 1 -11-11 11 11 0 0 1 11-11z"/>
            <g transform="translate(50)">
                <path d="m29 22v7.87890625l7.41015625-7.41015625-1.41015625-.46875zm-3 1-3 3-1 3v1h4zm13.06054688 1.06054688-5.93945313 5.93945312h8.87890625v-1l-.79492188-2.38476563-.625-1.03515625zm-6.93945313 6.93945312-1 1 1 1h9.87890625v-2zm-10.12109375 0v2h4v-2zm0 3v1l1 3 3 3v-7zm11.12109375 0 5.93945313 5.93945313 1.51953125-1.51953125.625-1.03515625.79492187-2.38476563v-1zm-4.12109375.12109375v7.87890625h6l1.41015625-.46875z"/>
                <path d="m32 21a11 11 0 0 0 -11 11 11 11 0 0 0 11 11 11 11 0 0 0 11-11 11 11 0 0 0 -11-11zm0 1a10 10 0 0 1 10 10 10 10 0 0 1 -10 10 10 10 0 0 1 -10-10 10 10 0 0 1 10-10z"/>
            </g>
        </g>
    </g>
		</svg>
	{/if}
