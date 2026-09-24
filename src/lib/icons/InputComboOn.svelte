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
			<g id="22-22-input-combo-on" transform="translate(-8,116.99999) translate(-16,-234)">
        <rect x="24" y="117" width="22" height="22" opacity=".00100002"/>
        <path class="ColorScheme-Text" d="m28 120v14l7 2 7-2v-14zm1 1h12v10h-12zm0 11h12v1h-12zm9-9.99999v0.83333h-1v0.83334h1v2.5h-1v0.83333h3v-0.83333h-1v-4.16667zm-4.5625 1-2.4375 6h1.07422l0.40625-1h3.03906l0.40625 1h1.07422l-2.43945-6h-0.53711l-0.0234 0.01-0.0234-0.01zm0.5625 1.25781 1.11328 2.74219h-2.22656z" fill="currentColor"/>
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
			<g id="input-combo-on" transform="translate(19,111.99999) translate(-38,-224)">
        <rect x="19" y="112" width="32" height="32" opacity=".00100002"/>
        <path class="ColorScheme-Text" d="m25 116v20l10 4 10-4v-20h-1zm1 1h18v16h-18zm0 17h18v1h-18zm6.40625-12.99999-4.40625 10h1.30078l1.32227-3h4.72265l1.34961 3h1.30469l-4.5-10zm0.55273 1.69531 1.9375 4.30469h-3.83398zm7.04102-3.69531v1.8h-2v0.9h2v5.4h-2v0.9h5v-0.9h-2v-8.1z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
