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
			<path d="m12.5 2c-.397802.0000601-.779289.1581347-1.060547.4394531l-1.9999999 2-.9394531-.9394531-1 1 .6464844.6464844-4.5898438 4.5898437c-.3716796.3716799-.5566407.8625979-.5566406 1.3535159v.910156l-1.5 1.5 1 1 1.5-1.5h.9101562c.490918 0 .9818361-.184962 1.3535157-.556641l4.5898441-4.5898434.646484.6464844 1-1-.939453-.9394531 2-2c.281318-.2812583.439393-.6627452.439453-1.0605469v-.5c0-.5522847-.447715-1-1-1zm-3.6464844 3.8535156 1.2929684 1.2929688-2.8535152 2.8535156h-2.5859376z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m17.5 3a1.5 1.4999998 0 0 0 -1.060547.4394531l-2 2-.939453-.9394531-1 1 .646484.6464844-8.5898434 8.5898436c-.37168.37168-.5566406.862598-.5566406 1.353516v.910156l-1.5 1.5 1 1 1.5-1.5h.9101562c.490918 0 .9818357-.184962 1.3535157-.556641l8.5898441-8.5898434.646484.6464844 1-1-.939453-.9394531 1.984375-1.984375a1.5 1.4999998 0 0 0 .015625-.015625 1.5 1.4999998 0 0 0 .439453-1.0605469v-.5a1 1 0 0 0 -1-1zm-3.646484 3.8535156 1.292968 1.2929688-5.8535152 5.8535156h-2.5859376z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m26 4c-.530402.0000803-1.039052.2108465-1.414062.5859375l-2.792969 2.7929687-1.585938-1.5859374-1.414062 1.4140624 1.148437 1.1484376-13.175781 13.1738282c-.5097509.509751-.7656252 1.181695-.765625 1.853515v1.203126l-2 2 1.4140625 1.414062 2-2h1.2050781c.6718211 0 1.3437654-.253921 1.8535154-.763672l13.175782-13.173828 1.144531 1.144531 1.414062-1.414062-1.585937-1.585938 2.792968-2.7929685c.375099-.3750117.585858-.8836601.585938-1.4140625v-.5a1.5 1.5 0 0 0 -1.5-1.5zm-5.351562 5.0625 2.292968 2.292969-8.646484 8.644531h-4.5859376z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
