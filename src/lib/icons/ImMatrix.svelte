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
			<g fill="currentColor" stroke-width=".75" class="ColorScheme-Text"><path d="M13 13V3h-1v-.998h2V14h-2.25v-1zM5.507 5.913v.577h.02a1.9 1.9 0 0 1 .641-.513 1.95 1.95 0 0 1 .857-.182q.466 0 .848.157.386.158.586.555.218-.28.594-.495t.888-.215q.39 0 .719.083.331.082.568.265.237.181.37.476.133.293.133.709v2.86h-1.348V7.769q0-.214-.02-.405a.8.8 0 0 0-.103-.33.6.6 0 0 0-.252-.224 1 1 0 0 0-.452-.082 1 1 0 0 0-.46.095.75.75 0 0 0-.276.248.9.9 0 0 0-.133.347q-.033.196-.033.394v2.381H7.306v-2.4q0-.19-.01-.375a1 1 0 0 0-.08-.343.55.55 0 0 0-.237-.252q-.166-.095-.491-.095-.128.004-.252.037a.844.844 0 0 0-.555.438q-.104.195-.104.51v2.482H4.23V5.92z"/><path d="M3 3v10h1.25v.998H2V2h2.25v1z"/></g>
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
			<g fill="currentColor" stroke-width=".75" class="ColorScheme-Text"><path d="M18 18V4h-2v-.998h3V19h-3v-1zM7.676 8.217v.77h.026c.22-.282.512-.515.855-.685A2.6 2.6 0 0 1 9.7 8.06q.621 0 1.131.21.514.209.781.74.29-.375.793-.66.501-.288 1.182-.287.52 0 .96.11.442.11.757.353.315.242.494.635.176.39.176.945v3.815h-1.797v-3.23q0-.287-.025-.54a1.04 1.04 0 0 0-.14-.44.8.8 0 0 0-.334-.299q-.221-.11-.603-.11-.379 0-.615.127a1 1 0 0 0-.367.33 1.2 1.2 0 0 0-.177.464q-.044.261-.044.525v3.175h-1.798v-3.2q0-.254-.012-.5a1.3 1.3 0 0 0-.108-.458.73.73 0 0 0-.315-.336q-.223-.127-.655-.127a1.5 1.5 0 0 0-.335.05 1.125 1.125 0 0 0-.74.584q-.14.26-.14.68v3.31H5.972v-5.7z"/><path d="M4 4v14h2v.998H3V3h3v1z"/></g>
		</svg>
	{/if}
