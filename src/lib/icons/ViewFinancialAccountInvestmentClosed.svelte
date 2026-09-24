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
			<path class="ColorScheme-Text" d="m4.1210938 2 1 1h6.8789062v1h1v1h1v-3h-9.8789062zm3.8789062 2c-0.5314364 0-0.953841 0.2417414-1.28125 0.5976562l0.4023438 0.4023438h2.4648437c-0.3538509-0.56299-0.8718919-1-1.5859375-1zm-6 0.1210938v0.8789062h0.8789062l-0.8789062-0.8789062zm0 1.8789062v3h1v-1h1v-1h0.8789062l-1-1h-1.8789062zm6.1210938 0 1 1h2.8789062v1h1v1h1v-3h-5.8789062zm-1.5078126 2.734375c-0.0689205 0.0860489-0.1397304 0.170977-0.1992187 0.265625h0.4648437l-0.265625-0.265625zm-4.6132812 1.265625v4h1v-2h1v-1h4.8789062l-1-1h-5.8789062zm10.121094 0 1.878906 1.878906v-1.878906h-1.878906zm-4.121094 2c-1.1045695 0-2 0.895431-2 2h1a1 1 0 0 1 1-1 1 1 0 0 1 1 1h1c0-1.104569-0.8954299-2-2-2z" fill="currentColor"/>
    <path class="ColorScheme-NegativeText" d="M 2.7070315,2 2.0000002,2.7070312 13.292969,14 14,13.267578 Z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m5.1210938 3 1 1h9.8789062v1h1v1h1v2h1v-5h-13.878906zm5.8789062 2a3 3 0 0 0-2.4726562 1.40625l0.7070312 0.7070312a2 2 0 0 1 1.714844-1.1132812 2 2 0 0 1 0.001953 0 2 2 0 0 1 0.048828 0 2 2 0 0 1 2 2h1a3 3 0 0 0-3-3zm-8 0.1210938v2.8789062h1v-1.8789062l-1-1zm0 3.8789062v5h1v-2h1v-1h1v-1h1.8789062l-1-1h-3.8789062zm8.121094 0 1 1h3.878906v1h1v1h1v2h1v-5h-7.878906zm-1.714844 2.527344a3 3 0 0 0-1.40625 2.472656h1a2 2 0 0 1 1.121094-1.757812l-0.714844-0.714844zm-6.40625 3.472656v4h1v-1h1v-1h1v-1h7.878906l-1-1h-9.878906zm14.121094 0 1.878906 1.878906v-1.878906h-1.878906zm-6.121094 2a3 3 0 0 0-2.8007812 2h1.0742187a2 2 0 0 1 1.6757815-1 2 2 0 0 1 0.001953 0 2 2 0 0 1 0.048828 0 2 2 0 0 1 1.722656 1h1.101563a3 3 0 0 0-2.824219-2z" fill="currentColor"/>
    <path class="ColorScheme-NegativeText" d="M 3.7070312,2.9999999 3,3.7070311 18.292969,19 19,18.292969 Z" fill="currentColor"/>
		</svg>
	{/if}
