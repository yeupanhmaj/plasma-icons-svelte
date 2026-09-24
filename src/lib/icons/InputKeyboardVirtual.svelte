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
        <path d="M1 2v9l3 3v-3h11V2zm1 1h12v7H2z"/>
        <path d="M3 4v1h1V4zm2 0v1h1V4zm2 0v1h1V4zm2 0v1h1V4zm2 0v1h2V4zM3 6v1h2V6zm3 0v1h1V6zm2 0v1h1V6zm2 0v1h3V6zM3 8v1h1V8zm2 0v1h6V8zm7 0v1h1V8z"/>
    </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
        <path d="M2 6v9l3 4v-4h15V6zm1 1h16v7H3z"/>
        <path d="M4 8v1h1V8zm2 0v1h1V8zm2 0v1h1V8zm2 0v1h1V8zm2 0v1h1V8zm2 0v1h1V8zm2 0v1h2V8zM4 10v1h2v-1zm3 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm2 0v1h3v-1zM4 12v1h2v-1zm3 0v1h8v-1zm9 0v1h2v-1z"/>
    </g>
		</svg>
	{/if}
