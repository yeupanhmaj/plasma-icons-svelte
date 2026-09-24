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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 8 2 L 2 8 L 5 8 L 5 14 L 11 14 L 11 8 L 14 8 L 8 2 z M 8 3.4140625 L 11.585938 7 L 10 7 L 10 8 L 10 13 L 6 13 L 6 8 L 6 7 L 4.4140625 7 L 8 3.4140625 z "
     class="ColorScheme-Text"
     />
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
			<g id="22-22-input-caps-on" transform="translate(59.241379,23.258607) translate(-16,-170)">
        <rect x="-43.241379" y="146.74138" width="22" height="22" opacity=".00100002"/>
        <path class="ColorScheme-Text" d="m-39.241379 149.74138v14l7 2 7-2v-14zm1 1h12v10h-12zm5.4375 2-2.4375 6h1.07422l0.40625-1h3.03906l0.40625 1h1.07422l-2.43945-6h-0.53711l-0.0234 0.01-0.0234-0.01zm0.5625 1.25781 1.11328 2.74219h-2.22656zm-6 7.74219h12v1h-12z" fill="currentColor"/>
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
			<g id="input-caps-on" transform="translate(19,48.000003) translate(-38,-160)">
        <rect x="19" y="112" width="32" height="32" opacity=".00100002"/>
        <path class="ColorScheme-Text" d="m25 116v20l10 4 10-4v-20h-1zm1 1h18v16h-18zm8.40625 3-4.40625 10h1.30078l1.32227-3h4.72265l1.34961 3h1.30469l-4.5-10zm0.55273 1.69531 1.9375 4.30469h-3.83398zm-8.95898 12.30469h18v1h-18z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
