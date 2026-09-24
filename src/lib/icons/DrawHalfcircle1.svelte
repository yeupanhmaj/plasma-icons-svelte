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
			<path class="ColorScheme-Text" d="m9 13.992h-1c-3.314 0-6-2.684-6-5.996 0-3.311 2.686-5.996 6-5.996 0.069-0.019 1 0 1 0v10.992zm-1-0.999v-9.993c-2.761 0-5 2.237-5 4.997s2.239 4.997 5 4.997" fill="currentColor"/>
    <path d="m7.8992658 13.457769c-1.2623485-0.143236-2.7498475-0.809909-3.6528238-1.637137-0.6085305-0.557483-1.1604987-1.352433-1.4561363-2.0971416-0.2212476-0.5573209-0.2402863-0.6942009-0.2419017-1.7391776-0.0016177-1.0464496 0.0168072-1.1818169 0.2380314-1.7488115 0.8177971-2.0960033 2.8571315-3.5252597 5.3899161-3.7774937l0.5124726-0.051036v5.5675739c0 4.4087495-0.02235 5.5655825-0.107381 5.5580085-0.059059-0.0052-0.3660392-0.03891-0.6821776-0.07478z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{:else}
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
			<path class="ColorScheme-Text" transform="translate(-.99999-.99999)" d="m12 4c-4.432 0-8 3.568-8 8s3.568 8 8 8h1v-16h-1m0 1v14c-3.878 0-7-3.122-7-7s3.122-7 7-7" fill="currentColor"/>
    <path d="m9.9496714 18.246214c-1.9544015-0.369149-3.8602027-1.589489-4.9752651-3.185807-1.1995645-1.717289-1.5967351-3.959131-1.0570583-5.9665981 0.4059321-1.5099682 1.5430729-3.1394679 2.8179069-4.0380033 1.2139785-0.855643 3.0947861-1.5274157 4.2764091-1.5274157h0.426472v14.868644l-0.394629-0.0094c-0.217045-0.0051-0.709272-0.06881-1.0938356-0.141443z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
