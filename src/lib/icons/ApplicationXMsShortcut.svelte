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

	{#if numericSize <= 48}
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
        <linearGradient id="c" x1="404.57" x2="411.57" y1="524.8" y2="531.8" gradientTransform="translate(-384.57,-515.8)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#383e51" offset="0"/>
            <stop stop-color="#655c6f" stop-opacity="0" offset="1"/>
        </linearGradient>
    </defs>
    <path d="m5 30v-28h15l7 7v21h-7z" fill="#555"/>
    <rect transform="scale(1,-1)" x="5.0000072" y="-2.9999878" width="15" height="1" fill="#fff" opacity=".5"/>
    <rect transform="scale(1,-1)" x="5.0000072" y="-29.999989" width="22" height="1" fill="#2e3132" fill-opacity=".294"/>
    <path d="m27 9-7-7v7z" fill="#fff" fill-rule="evenodd" opacity=".5"/>
    <path d="m27 16-7-7h7z" fill="url(#c)" fill-rule="evenodd" opacity=".2"/>
    <g transform="translate(5,-1023.3622)" fill="#fff" opacity=".6">
        <path transform="translate(0,1030.3622)" d="m4 7c-0.5540096 0-1 0.4459904-1 1v6c0 0.55401 0.4459904 1 1 1h5c0.55401 0 1-0.44599 1-1v-1h2v1c0 0.554 0.44599 1 1 1h5c0.55401 0 1-0.446 1-1v-6c0-0.554-0.44599-1-1-1h-5c-0.55401 0-1 0.446-1 1v1h-2v-1c0-0.5540096-0.44599-1-1-1zm0 1h5v1c-0.5540096 0-1 0.4459904-1 1v2c0 0.55401 0.4459904 1 1 1v1h-5zm9 0h5v6h-5v-1c0.55401 0 1-0.44599 1-1v-2c0-0.5540096-0.44599-1-1-1zm-4 2h4v2h-4z" fill="#fff"/>
    </g>
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
        <linearGradient id="a-3" x1="40" x2="54" y1="17" y2="31" gradientUnits="userSpaceOnUse">
            <stop stop-color="#060606" offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="b-6" x2="0" y1="392.36" y2="336.36" gradientTransform="translate(-48,-332.36)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#fff" stop-opacity="0" offset="0"/>
            <stop stop-color="#fff" stop-opacity=".2" offset="1"/>
        </linearGradient>
        <path id="c-7" d="m10 61v-58h30l14 14v44h-14z"/>
    </defs>
    <g shape-rendering="auto">
        <use width="100%" height="100%" color="#000000" color-rendering="auto" fill="#555555" image-rendering="auto" text-rendering="auto" xlink:href="#c-7"/>
        <g transform="scale(1,-1)" color="#000000" color-rendering="auto" image-rendering="auto">
            <rect x="10" y="-4" width="30" height="1" fill="#fff" opacity=".4"/>
            <rect x="10" y="-61" width="44" height="1" opacity=".35"/>
        </g>
        <path d="m54 17-14-14v14z" color="#000000" color-rendering="auto" fill="#fff" fill-rule="evenodd" image-rendering="auto" opacity=".5"/>
    </g>
    <path d="m40 17 14 14v-14z" fill="url(#a-3)" fill-rule="evenodd" opacity=".4"/>
    <use width="100%" height="100%" fill="url(#b-6)" xlink:href="#c-7"/>
    <path d="m22.482422 28c-0.818609 0-1.482422 0.686566-1.482422 1.505859v7.988282c0 0.819293 0.663813 1.505859 1.482422 1.505859h6.035156c0.818609 0 1.482422-0.686566 1.482422-1.505859v-2.994141h4v2.994141c0 0.819293 0.663813 1.505859 1.482422 1.505859h6.035156c0.818609 0 1.482422-0.686566 1.482422-1.505859v-7.988282c0-0.819293-0.663813-1.505859-1.482422-1.505859h-6.035156c-0.818609 0-1.482422 0.686566-1.482422 1.505859v2.994141h-4v-2.994141c0-0.819293-0.663813-1.505859-1.482422-1.505859h-6.035156zm0 0.980469h6.035156c0.279358 0 0.501953 0.220359 0.501953 0.52539v2.994141h-1.519531c-0.554 0-1 0.446-1 1s0.446 1 1 1h1.519531v2.994141c0 0.305031-0.222595 0.52539-0.501953 0.52539h-6.035156c-0.279358 0-0.501953-0.220359-0.501953-0.52539v-7.988282c0-0.305031 0.222595-0.52539 0.501953-0.52539zm13 0h6.035156c0.279358 0 0.501953 0.220359 0.501953 0.52539v7.988282c0 0.305031-0.222595 0.52539-0.501953 0.52539h-6.035156c-0.279358 0-0.501953-0.220359-0.501953-0.52539v-2.994141h1.519531c0.554 0 1-0.446 1-1s-0.446-1-1-1h-1.519531v-2.994141c0-0.305031 0.222595-0.52539 0.501953-0.52539z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill="#fff" image-rendering="auto" opacity=".6" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
		</svg>
	{/if}
