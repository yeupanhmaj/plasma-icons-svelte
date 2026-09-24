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

	{#if numericSize <= 27}
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
			<g id="22-22-input-num-on" transform="translate(-8,84.999986) translate(-16,-202)">
        <rect x="24" y="117" width="22" height="22" opacity=".00100002"/>
        <path class="ColorScheme-Text" d="m28 120v14l7 2 7-2v-14zm1 1h12v10h-12zm6 2v1h-1v1h1v3h-1v1h3v-1h-1v-5zm-6 9h12v1h-12z" fill="currentColor"/>
    </g>
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
			<g id="input-num-on" transform="translate(19,79.999986) translate(-38,-192)">
        <rect x="19" y="112" width="32" height="32" opacity=".00100002"/>
        <path class="ColorScheme-Text" d="m25 116v20l10 4 10-4v-20h-1zm1 1h18v16h-18zm9 3v2h-2v1h2v6h-2v1h5v-1h-2v-9zm-9 14h18v1h-18z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
