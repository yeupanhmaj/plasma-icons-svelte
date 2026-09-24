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
			viewBox="0 0 4.2333332 4.2333335"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path d="m3.9687499 295.67707h-.2645833-.3358968c-.2253544-.00042-.4399078-.0966-.5901449-.26458h-2.51354156v-.26458-.52917-.26458h1.32291666v-.26459h.5291666v.26459h.6614583c.1502353-.16797.364789-.26417.5901449-.26459h.3358968.2645833zm-.2645833-.26458v-1.05833h-.3358968c-.1889036.00015-.3634028.10098-.4578532.26458v.52917c.09445.1636.2689496.26443.4578532.26458zm-1.0583333-.26458v-.52917h-2.11666663v.52917z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="translate(0 -292.76666)"/>
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
			<path id="path3" class="ColorScheme-Text" d="m20 14.000013h-3.269532c-0.851733-0.001588-1.662643-0.365103-2.230468-0.999988l-12.5-3.8e-5v-3.999987l9 3.78e-5v-1.0000252h1.999999v1.0000252h1.500001c0.567818-0.634885 1.378729-0.9984378 2.230468-1.0000252h3.269532zm-1.000001-0.999988v-3.9999872h-2.269531c-0.713265 0.00125-1.371879 0.3822614-1.728515 0.9999872h-2e-3v2.000013c0.356988 0.618293 1.016506 0.99942 1.730469 0.999987zm-4.999999-0.999987v-2.000013l-11-3.76e-5v2.0000126z" fill="currentColor"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8.4666665 8.4666669"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path d="m7.9374999 294.08957h-.2645833-.9368937c-.4153051-.00097-.8060481-.19692-1.0552328-.52916h-5.15162344v-.26459-1.05833-.26458l3.43958334-.00001v-.26459h.7937499v.26459l.9172567.00001c.2494012-.33254.6405956-.52852 1.0562663-.52917h.9368937.2645833zm-.2645833-.26458v-2.11667h-.9368937c-.3776222.00049-.7263775.20214-.9151896.52917v1.05833c.1888121.32703.5375674.52868.9151896.52917zm-2.1166667-.52917v-1.05833h-.0320394-4.73046051v1.05833h4.73149391z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="translate(0 -288.53332)"/>
		</svg>
	{/if}
