<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 32
	);
</script>

	{#if numericSize <= 40}
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
			<g id="32-32-user-desktop" transform="translate(-260) translate(260,0)">
        <path id="rect844" d="m0 0h32v32h-32z" fill="none"/>
        <path id="path819" class="ColorScheme-Text" d="m4 4v24h24v-24zm1 1h22v22h-22zm2 19v1h18v-1z" fill="currentColor"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g id="48-48-user-desktop" transform="translate(-260) translate(218,16)">
        <path id="rect846" d="m42-16h48v48h-48z" fill="none"/>
        <path id="path819-3" class="ColorScheme-Text" d="m48-10v36h36v-36zm2 2h32v32h-32zm2 28v2h28v-2z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
