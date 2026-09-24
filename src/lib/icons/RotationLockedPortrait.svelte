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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m4 2v12h4v-1h-3v-10h6v4h1v-5z"/>
        <path d="m11.5 8c-.828427 0-1.5.6715729-1.5 1.5v1.5h-1v3h5v-3h-1v-1.5c0-.8284271-.671573-1.5-1.5-1.5zm0 1c.276142 0 .5.223858.5.5v1.5h-1v-1.5c0-.276142.223858-.5.5-.5z" fill-rule="evenodd"/>
    </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m6 3v16h6v-1h-5v-14h8v8h1v-9z"/>
        <path d="m15.5 13c-.828427 0-1.5.671573-1.5 1.5v1.5h-1v3h5v-3h-1v-1.5c0-.828427-.671573-1.5-1.5-1.5zm0 1c.276142 0 .5.223858.5.5v1.5h-1v-1.5c0-.276142.223858-.5.5-.5z" fill-rule="evenodd"/>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="m8 4v24h10v-1h-9v-22h14v12h1v-13z"/>
        <path d="m23.5 18a2.5 2.5 0 0 0-2.5 2.5v2.5h-2v5h9v-5h-2v-2.5a2.5 2.5 0 0 0-2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5v2.5h-3v-2.5a1.5 1.5 0 0 1 1.5-1.5z" fill-rule="evenodd"/>
    </g>
		</svg>
	{/if}
