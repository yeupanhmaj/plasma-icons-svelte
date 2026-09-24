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
			<path d="m9.09 2l-3.146 11.74.967.26 3.146-11.74zm-3.805 2l-2.961 3.145-.324.348.324.346 2.943 3.162.715-.695-2.621-2.813 2.639-2.797zm5.43 0l-.715.695 2.639 2.797-2.621 2.813.715.695 2.943-3.162.324-.346-.324-.348z" color="#000000" fill="#52a743" stroke-width=".1"/>
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
			<g transform="translate(-326 -534.3622)">
        <g transform="translate(-225.28572 -73.28571)" fill="#52a743">
            <path d="m563.78571 610.64791-4 15.75384 1 0.24616 4-15.75385-1-0.24615z" color="#000000"/>
            <path d="m566.03107 613.64791-0.74534 0.70967 3.66459 4.29032-3.66459 4.29033 0.74534 0.70968 3.97515-4.64516 0.27951-0.35485-0.27951-0.35483-3.97515-4.64516z" color="#000000"/>
            <path d="m558.54037 613.64791 0.74534 0.70967-3.66459 4.29032 3.66459 4.29033-0.74534 0.70968-3.97515-4.64516-0.27951-0.35485 0.27951-0.35483 3.97515-4.64516z" color="#000000"/>
        </g>
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
			<defs>
        <linearGradient id="a" x1="3.116" x2="61.689" y1="68.42" y2="-3.454" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#66b036" offset="0"/>
            <stop stop-color="#239161" offset="1"/>
        </linearGradient>
        <linearGradient id="b" x1="404.57" x2="411.57" y1="524.8" y2="531.8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#383e51" offset="0"/>
            <stop stop-color="#655c6f" stop-opacity="0" offset="1"/>
        </linearGradient>
    </defs>
    <g transform="translate(-384.57-515.8)">
        <path d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#a)"/>
        <g transform="scale(1-1)">
            <rect x="389.57" y="-518.8" width="15" height="1" fill="#fff" opacity=".5"/>
            <rect x="389.57" y="-545.8" width="22" height="1" fill="#2e3132" fill-opacity=".294"/>
        </g>
        <g fill-rule="evenodd">
            <path d="m411.57 524.8-7-7v7z" fill="#fff" opacity=".5"/>
            <path d="m411.57 531.8-7-7h7z" fill="url(#b)" opacity=".2"/>
        </g>
        <path d="m401.66 527.8-2.947 11h1.039l2.982-10.992zm-4.512 2-2.961 3.145-0.324 0.348 0.324 0.346 2.943 3.162 0.715-0.695-2.621-2.813 2.639-2.797zm7.465 0.283-0.715 0.695 2.639 2.797-2.621 2.813 0.715 0.695 2.943-3.162 0.324-0.346-0.324-0.348z" color="#000000" color-rendering="auto" fill="#fff" image-rendering="auto" opacity=".75" shape-rendering="auto"/>
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
        <linearGradient id="a" x1="40" x2="54" y1="17" y2="31" gradientTransform="translate(432 1154.36)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#060606" offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4214" x1="17.336233" x2="17.584002" y1="3.0086219" y2="60.637825" gradientTransform="matrix(.5 0 0 -.48276 -69.03301 54.17094)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#66b036" offset="0"/>
            <stop stop-color="#239161" offset="1"/>
        </linearGradient>
    </defs>
    <path d="m10 61v-58h30l14 14v44h-14z" color="#000000" color-rendering="auto" fill="url(#linearGradient4214)" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="isolation:auto;mix-blend-mode:normal"/>
    <g transform="translate(-432-1154.36)">
        <g transform="scale(1-1)" color="#000000" color-rendering="auto" image-rendering="auto" shape-rendering="auto" text-rendering="auto">
            <rect x="442" y="-1158.36" width="30" height="1" fill="#fff" opacity=".5"/>
            <rect x="442" y="-1215.36" width="44" height="1" opacity=".25"/>
        </g>
        <g fill-rule="evenodd">
            <path d="m486 1171.36-14-14v14z" fill="#fff" opacity=".5"/>
            <path d="m472 1171.36 14 14v-14z" fill="url(#a)" opacity=".1"/>
        </g>
        <path d="m466.05 1179.04l-5.318 17.59h1.045l5.318-17.59zm-9.05 3.318l-6 6 6 6 .707-.707-5.293-5.293 5.293-5.293zm12.707.25l-.707.707 5.293 5.293-5.293 5.293.707.707 6-6-.707-.707z" color="#000000" color-rendering="auto" fill="#fff" image-rendering="auto" opacity=".75" shape-rendering="auto" text-rendering="auto"/>
    </g>
		</svg>
	{/if}
