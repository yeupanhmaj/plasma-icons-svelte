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
			<g id="g13" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square">
        <path id="path3" d="M 3.5,3 A 1.5,1.5 0 0 0 2,4.5 1.5,1.5 0 0 0 3.5,6 1.5,1.5 0 0 0 5,4.5 1.5,1.5 0 0 0 3.5,3 Z M 3.4882812,4 A 0.5,0.5 0 0 1 3.5,4 0.5,0.5 0 0 1 4,4.5 0.5,0.5 0 0 1 3.5,5 0.5,0.5 0 0 1 3,4.5 0.5,0.5 0 0 1 3.4882812,4 Z"/>
        <path id="path5" d="M 3.5,11 A 1.5,1.5 0 0 0 2,12.5 1.5,1.5 0 0 0 3.5,14 1.5,1.5 0 0 0 5,12.5 1.5,1.5 0 0 0 3.5,11 Z M 3.488281,12 A 0.5,0.5 0 0 1 3.5,12 0.5,0.5 0 0 1 4,12.5 0.5,0.5 0 0 1 3.5,13 0.5,0.5 0 0 1 3,12.5 0.5,0.5 0 0 1 3.488281,12 Z"/>
        <path id="path7" d="m11.5 11a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5zm-0.01172 1a0.5 0.5 0 0 1 0.01172 0 0.5 0.5 0 0 1 0.5 0.5 0.5 0.5 0 0 1-0.5 0.5 0.5 0.5 0 0 1-0.5-0.5 0.5 0.5 0 0 1 0.48828-0.5z"/>
        <path id="path9" d="m3 5h1v7h-1z"/>
        <path id="path11" d="m7 4v1h3a1 1 0 0 1 1 1v6h1v-6a2 2 0 0 0-1.951172-2 2 2 0 0 0-0.048828 0z"/>
    </g>
    <path id="path15" d="m8.5 1.7929688-2.7070312 2.7070312 2.7070312 2.7070312 0.7070312-0.7070312-2-2 2-2-0.7070312-0.7070312z" class="ColorScheme-Text" fill="currentColor"/>
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
			<g id="g13" class="ColorScheme-Text" fill="currentColor" stroke-linecap="square">
        <path id="path3" d="M 5.5,4 A 2.5,2.5 0 0 0 3,6.5 2.5,2.5 0 0 0 5.5,9 2.5,2.5 0 0 0 8,6.5 2.5,2.5 0 0 0 5.5,4 Z m 0,1 A 1.5,1.5 0 0 1 7,6.5 1.5,1.5 0 0 1 5.5,8 1.5,1.5 0 0 1 4,6.5 1.5,1.5 0 0 1 5.5,5 Z"/>
        <path id="path5" d="m5.5 14a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"/>
        <path id="path7" d="m15.5 14a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"/>
        <path id="path9" d="m5 8h1v7h-1z"/>
        <path id="path11" d="m10 6v1h4a1 1 0 0 1 1 1v7h1v-7a2 2 0 0 0-1.951172-2 2 2 0 0 0-0.048828 0z"/>
    </g>
    <path id="path15" d="M 12.5 2.7929688 L 12.146484 3.1464844 L 8.7929688 6.5 L 12.146484 9.8535156 L 12.5 10.207031 L 13.207031 9.5 L 12.853516 9.1464844 L 10.207031 6.5 L 12.853516 3.8535156 L 13.207031 3.5 L 12.5 2.7929688 z " class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
