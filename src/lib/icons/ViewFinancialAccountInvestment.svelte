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
			<path class="ColorScheme-PositiveText" d="m2 10v4h1v-2h1v-1h8v1h1v2h1v-4h-12zm6 2c-1.1045695 0-2 0.895431-2 2h1a1 1 0 0 1 1-1 1 1 0 0 1 1 1h1c0-1.104569-0.8954299-2-2-2z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m2 2v3h1v-1h1v-1h8v1h1v1h1v-3h-12zm6 2c-0.7140452 0-1.2320865 0.43701-1.5859375 1h3.171875c-0.3538509-0.56299-0.8718919-1-1.5859375-1zm-6 2v3h1v-1h1v-1h8v1h1v1h1v-3h-12zm6 2c-0.7140452 0-1.2320865 0.43701-1.5859375 1h3.171875c-0.353851-0.56299-0.8718919-1-1.5859375-1z" fill="currentColor"/>
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
			<path class="ColorScheme-PositiveText" d="m3 15v4h1v-1h1v-1h1v-1h10v1h1v1h1v1h1v-4h-16zm8 2a3 3 0 0 0-2.8007812 2h1.0742187a2 2 0 0 1 1.6757815-1 2 2 0 0 1 0.001953 0 2 2 0 0 1 0.048828 0 2 2 0 0 1 1.722656 1h1.101563a3 3 0 0 0-2.824219-2z" fill="currentColor"/>
    <path class="ColorScheme-Text" d="m3 3v5h1v-2h1v-1h1v-1h10v1h1v1h1v2h1v-5h-16zm8 2a3 3 0 0 0-3 3h1a2 2 0 0 1 1.949219-2 2 2 0 0 1 0.001953 0 2 2 0 0 1 0.048828 0 2 2 0 0 1 2 2h1a3 3 0 0 0-3-3zm-8 4v5h1v-2h1v-1h1v-1h10v1h1v1h1v2h1v-5h-16zm8 2a3 3 0 0 0-3 3h1a2 2 0 0 1 1.949219-2 2 2 0 0 1 0.001953 0 2 2 0 0 1 0.048828 0 2 2 0 0 1 2 2h1a3 3 0 0 0-3-3z" fill="currentColor"/>
		</svg>
	{/if}
