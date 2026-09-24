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
			<path d="m7 2 1 2v10h1v-10l1-2h-2-1zm-1 3v1h1v-1h-1zm4.345703 1c-0.163673 0.00827-0.340256 0.1434724-0.339844 0.2929688l-0.005859 4.4140622c0 0.199343 0.313156 0.37233 0.492188 0.253907l3.373046-2.2148442c0.180199-0.1169596 0.179788-0.3903338 0-0.5078126l-3.367187-2.1992187c-0.04494-0.029341-0.097759-0.0417955-0.152344-0.0390625zm-6.345703 1v1h3v-1h-3zm-2 2v1h5.0859375v-1h-5.0859375zm3 2v1h2v-1h-2z" fill="#2a6288"/>
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
			<path d="m9 3 2 3v13h1v-13l2-3h-5zm0 4v1h1v-1h-1zm5.431641 1c-0.20406 0.011584-0.424343 0.2008651-0.423829 0.4101562l-0.007812 6.1796878c0 0.279075 0.390074 0.521258 0.613281 0.355468l4.205078-3.099609c0.224665-0.163742 0.224152-0.548423 0-0.712891l-4.197265-3.0781245c-0.05603-0.041078-0.121403-0.0585085-0.189453-0.0546875zm-7.431641 1v1h3v-1h-3zm-3 2v1h6v-1h-6zm2 2v1h4v-1h-4zm2 2v1h2v-1h-2z" fill="#2a6288"/>
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
			<defs>
        <linearGradient id="a" x2="0" y1="392.36" y2="365.36" gradientTransform="translate(309.57,152.44)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" stop-opacity="0" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".2" offset="1"/>
        </linearGradient>
        <linearGradient id="b" x1="47" x2="54" y1="17" y2="24" gradientTransform="translate(-27,-8)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#060606" offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <path id="c" d="m389.57 545.8v-28h15l7 7v21h-14z"/>
    </defs>
    <g shape-rendering="auto">
        <use transform="translate(-384.57,-515.8)" width="100%" height="100%" color="#000000" color-rendering="auto" fill="#2a6288" image-rendering="auto" text-rendering="auto" xlink:href="#c"/>
        <rect transform="scale(1,-1)" x="5.0000072" y="-2.9999878" width="15" height="1" color="#000000" color-rendering="auto" fill="#fff" image-rendering="auto" opacity=".5"/>
        <rect transform="scale(1,-1)" x="5.0000072" y="-29.999989" width="22" height="1" color="#000000" color-rendering="auto" image-rendering="auto" opacity=".25"/>
        <path d="m27 9-7-7v7z" color="#000000" color-rendering="auto" fill="#fff" fill-rule="evenodd" image-rendering="auto" opacity=".5"/>
    </g>
    <path d="m20 9 7 7v-7z" fill="url(#b)" fill-rule="evenodd" opacity=".1"/>
    <path d="m14.271484 10 0.94336 1.230469 0.630859 0.822265 0.009768 9.947266h0.615232v-9.949219l0.628906-0.820312 0.94336-1.230469h-1.886719zm0 2.769531v0.615235h0.94336v-0.615235zm3.783203 0.615235c-0.15432 0.0092-0.3207 0.15862-0.320312 0.324219l-0.0059 4.890624c0 0.220814 0.296043 0.412428 0.464844 0.28125l3.179687-2.453125c0.169904-0.129557 0.169515-0.434321 0-0.564453l-3.173828-2.435547c-0.04237-0.0325-0.09307-0.04599-0.144532-0.04297zm-4.726562 0.615234v0.615234h1.886719v-0.615234zm-1.570312 1.230469v0.615234h3.457031v-0.615234zm-1.257813 1.230468v0.617188h4.714844v-0.617188zm1.257813 1.232422v0.615235h3.457031v-0.615235zm1.570312 1.230469v0.615234h1.886719v-0.615234z" fill="#fff" opacity=".75" stroke-width=".433596"/>
    <use transform="translate(-384.57,-515.8)" width="100%" height="100%" fill="url(#a)" xlink:href="#c"/>
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
			<defs>
        <linearGradient id="a" x1="40" x2="54" y1="17" y2="31" gradientUnits="userSpaceOnUse">
            <stop stop-color="#060606" offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="b" x2="0" y1="392.36" y2="336.36" gradientTransform="translate(384,822)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" stop-opacity="0" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".2" offset="1"/>
        </linearGradient>
        <path id="c" d="m442 1215.36v-58h30l14 14v44h-14z"/>
    </defs>
    <use transform="translate(-432,-1154.36)" width="100%" height="100%" fill="#2a6288" xlink:href="#c"/>
    <rect transform="scale(1,-1)" x="10" y="-3.9999855" width="30" height="1" color="#000000" color-rendering="auto" fill="#fff" image-rendering="auto" opacity=".5" shape-rendering="auto"/>
    <rect transform="scale(1,-1)" x="10" y="-60.999985" width="44" height="1" color="#000000" color-rendering="auto" image-rendering="auto" opacity=".25" shape-rendering="auto"/>
    <path d="m54 17-14-14v14z" fill="#fff" fill-rule="evenodd" opacity=".5"/>
    <path d="m40 17 14 14v-14z" fill="url(#a)" fill-rule="evenodd" opacity=".1"/>
    <path d="m28.857422 22 2.859375 3.765625 0.019528 18.234375h1.121093v-18.240234l2.857422-3.759766h-3.429687zm0 5.078125v1.126953h1.714844v-1.126953zm6.876953 1.128907c-0.280582 0.0168-0.580784 0.290153-0.580078 0.593749l-0.01172 8.962891c0 0.404826 0.536839 0.758071 0.843749 0.517578l5.783204-4.498047c0.308915-0.237522 0.308209-0.794628 0-1.033203l-5.773436-4.466797c-0.07705-0.05959-0.166198-0.08172-0.259766-0.07617zm-8.591797 1.126952v1.128906h3.429688v-1.128906zm-2.857421 2.25586v1.128906h6.287109v-1.128906zm-2.285157 2.255859v1.128907h8.572266v-1.128907zm2.285157 2.257813v1.126953h6.287109v-1.126953zm2.857421 2.255859v1.128907h3.429688v-1.128907z" fill="#fff" opacity=".75" stroke-width=".791635"/>
    <use transform="translate(-432,-1154.36)" width="100%" height="100%" fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
