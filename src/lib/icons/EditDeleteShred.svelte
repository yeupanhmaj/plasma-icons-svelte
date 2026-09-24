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
			<path d="m3 2v5h1v-4h5v3h3v1h1v-2l-3-3z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"/><path d="m2 8h12v1h-12z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"/><g fill="#da4452"><path d="m3.0000117 10 .9999883.000012-.0000117 3.999988-.9999883-.000012z"/><path d="m5.0000117 10 .9999883.000012-.0000117 3.999988-.9999883-.000012z"/><path d="m7.0000117 10 .9999883.000012-.0000117 3.999988-.9999883-.000012z"/><path d="m9.0000117 10 .9999883.000012-.0000117 3.999988-.9999883-.000012z"/><path d="m11.000012 10 .999988.000012-.000012 3.999988-.999988-.000012z"/></g>
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"><path d="m4 3v7h1v-6h8v4h4v2h1v-3-.007813l-3.992188-3.992187-.007812.009766v-.009766z"/><path d="m3.0000117 11 15.9999883.000012-.000012.999988-15.999988-.000012z"/><path d="m4.0000117 13 .9999883.000072-.0000117 5.999928-.9999883-.000072z"/><path d="m6.0000234 13 .9999883.000072-.0000117 5.999928-.9999883-.000072z"/><path d="m8.0000234 13 .9999883.000072-.0000117 5.999928-.9999883-.000072z"/><path d="m10.000023 13 .999989.000072-.000012 5.999928-.999988-.000072z"/><path d="m12.000023 13 .999989.000072-.000012 5.999928-.999988-.000072z"/><path d="m14.000023 13 .999989.000072-.000012 5.999928-.999988-.000072z"/><path d="m16.000023 13 .999989.000072-.000012 5.999928-.999988-.000072z"/></g>
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"><path d="m5 2v13h1v-12h14v7h7v5h1v-6l-7-7z"/><path d="m5.0000234 17.999856 1.9999766.000144-.0000233 11.999784-1.9999767-.000144z"/><path d="m2 16h28v1h-28z"/><path d="m8.0000234 17.999856 1.9999766.000144-.000023 11.999784-1.999977-.000144z"/><path d="m11 18 1.999977.000144-.000023 11.999784-1.999977-.000144z"/><path d="m14 18 1.999977.000144-.000023 11.999784-1.999977-.000144z"/><path d="m17 18 1.999977.000144-.000023 11.999784-1.999977-.000144z"/><path d="m20 18 1.999977.000144-.000023 11.999784-1.999977-.000144z"/><path d="m23.000023 17.999856 1.999977.000144-.000023 11.999784-1.999977-.000144z"/><path d="m26.000023 17.999856 1.999977.000144-.000023 11.999784-1.999977-.000144z"/></g>
		</svg>
	{/if}
