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
			<path class="ColorScheme-Text" d="m2 9v-1c0-3.314 2.684-6 5.996-6 3.311 0 5.996 2.686 5.996 6 0.019 0.069 0 1 0 1h-10.992zm0.999-1h9.993c0-2.761-2.237-5-4.997-5s-4.997 2.239-4.997 5" fill="currentColor"/>
    <path d="m2.4061195 8.3927465c1.26e-5 -0.050293 0.012525-0.2307146 0.027806-0.400937 0.1618253-1.8027295 1.0945573-3.3951283 2.5691847-4.3862185 1.2502388-0.8402798 2.7846372-1.1384869 4.2734235-0.8305311 1.7719853 0.3665353 3.3445223 1.6779759 4.0624213 3.3879169 0.290812 0.6926764 0.47673 1.5371325 0.47673 2.165355v0.1558565h-11.409588z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-551.28571-607.64789)" d="m570.28572 618.6479c0-4.432-3.568-8-8-8s-8 3.568-8 8v1h16v-1m-1 0h-14c0-3.878 3.122-7 7-7s7 3.122 7 7" fill="currentColor"/>
    <path d="m3.4950138 11.167581c0.0997665-1.5507735 0.4986551-2.8733603 1.2213012-4.0494437 2.3109009-3.7609173 7.027431-4.7915005 10.535892-2.30214 1.963415 1.393103 3.210141 3.7214683 3.339742 6.2372467l0.02307 0.447821h-15.141459z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
