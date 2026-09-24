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
			<path class="ColorScheme-Text" d="m0 2v12h5.0234a6 6.3559 0 0 1 0.12891-1h-4.1523v-10h13v5.8535a6 6.3559 0 0 1 1.3672 1.1465h0.13281c0.277 0 0.5-0.223 0.5-0.5v-3c0-0.277-0.223-0.5-0.5-0.5h-0.5v-4h-15zm2 2v8h3.4414a6 6.3559 0 0 1 3.127-3.4492l-0.56836-4.5508h-6z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m11 9c-2.7555 0-5 2.2445-5 5 0 0.16893-0.016471 0.83531 0 1h1.0078c-0.020266-0.16374-0.0078125-0.83063-0.0078125-1 0-2.2151 1.785-4 4-4 2.215 0 4 1.7849 4 4 0 0.16937 0.01244 0.83626-0.0078 1h1.0078c0.01647-0.16469 0-0.83107 0-1 0-2.7555-2.2445-5-5-5zm1 2h-1l-0.92116 2.6123c-0.078835 0.1706-0.078835 0.26357-0.078835 0.38769 0 0.55228 0.44772 1 1 1s1-0.44772 1-1z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m1 5v12h9.1523a6 6.3559 0 0 1 0.28906-1h-8.4414v-10h17v6.8535a6 6.3559 0 0 1 1 0.76562v-0.61914h0.5c0.277 0 0.5-0.223 0.5-0.5v-3c0-0.277-0.223-0.5-0.5-0.5h-0.5v-4h-16-3zm2 2v8h7.9121a6 6.3559 0 0 1 1.0879-1.373v-6.627h-9z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m15.993 13c-2.7555 0-5 2.2445-5 5 0 0.16893-0.01647 0.83531 0 1h1.0078c-0.02027-0.16374-0.0078-0.83063-0.0078-1 0-2.2151 1.785-4 4-4 2.215 0 4 1.7849 4 4 0 0.16937 0.01244 0.83626-0.0078 1h1.0078c0.01647-0.16469 0-0.83107 0-1 0-2.7555-2.2445-5-5-5zm1 2h-1l-0.92116 2.6123c-0.07883 0.1706-0.07883 0.26357-0.07883 0.38769 0 0.55228 0.44772 1 1 1s1-0.44772 1-1z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m3 10v12h12a8 8 0 0 1 0.072266-1h-11.072v-10h23v4.0742a8 8 0 0 1 2 1.6367v-2.7109c0-0.554-0.446-1-1-1v-3h-25zm2 2v8h10.27a8 8 0 0 1 2.6836-4.1895l-0.95312-3.8105h-12z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m23 15c-3.8601 0-7 3.1399-7 7s3.1399 7 7 7 7-3.1399 7-7-3.1399-7-7-7zm0 1c3.3196 0 6 2.6804 6 6s-2.6804 6-6 6-6-2.6804-6-6 2.6804-6 6-6zm1 1-1.9219 4.6133c-0.07883 0.1706-0.078125 0.2626-0.078125 0.38672 0 0.55228 0.44772 1 1 1s1-0.44772 1-1v-3zm-1.418 0.01758c-1.7059 0.14296-3.221 1.1507-4.0137 2.668l0.88672 0.46289c0.60973-1.1672 1.7508-1.9564 3.0507-2.1181zm2.7637 0.5664-0.3457-0.15162 8.97e-4 1.1031c1.0635 0.61409 1.7877 1.6846 1.96 2.9059l0.99023-0.14062c-0.22348-1.5842-1.1926-2.9663-2.6055-3.7168z" fill="currentColor"/>
		</svg>
	{/if}
