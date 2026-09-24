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
			<path fill="#3daee9" d="m7 9v5l2 1 2-1v-5z"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m9 1c-1.108 0-2 0.892-2 2v6.765625a3 3 0 0 0-1 2.234375 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-1-2.2324219v-6.7675781c0-1.108-0.892-2-2-2zm0 1c0.554 0 1 0.446 1 1v7.263672a2 1.9582802 0 0 1 1 1.695312 2 1.9582802 0 0 1-2 1.957032 2 1.9582802 0 0 1-2-1.957032 2 1.9582802 0 0 1 1-1.697265v-7.261719c0-0.554 0.446-1 1-1zm-5 2v1h2v-1zm0 3v1h2v-1zm5 4a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>
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
			<path fill="#3daee9" d="m10 14v5l2 1 2-1v-5z"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" d="m12 2c-1.108 0-2 .892-2 2v10.765625c-.6358612.568731-.9995185 1.381278-1 2.234375 0 1.656854 1.343146 3 3 3s3-1.343146 3-3c-.001-.852416-.364645-1.664145-1-2.232422v-10.767578c0-1.108-.892-2-2-2zm0 1c.554 0 1 .446 1 1v10.173828.826172.263672c.61861.349704.999778.995903 1 1.695312-.000704 1.081041-.895928 1.957032-2 1.957032s-1.999296-.875991-2-1.957032c-.0004909-.700106.380773-1.347212 1-1.697265v-.261719-.828125-10.171875c0-.554.446-1 1-1zm-5 2v1h2v-1zm0 3v1h2v-1zm0 3v1h2v-1zm5 5c-.552285 0-1 .447715-1 1s.447715 1 1 1 1-.447715 1-1-.447715-1-1-1z"/>
		</svg>
	{/if}
