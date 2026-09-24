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
			<path id="path3" class="ColorScheme-Text" d="M 3.5,3 A 1.5,1.5 0 0 0 2,4.5 1.5,1.5 0 0 0 3.5,6 1.5,1.5 0 0 0 5,4.5 1.5,1.5 0 0 0 3.5,3 Z M 3.4882812,4 A 0.5,0.5 0 0 1 3.5,4 0.5,0.5 0 0 1 4,4.5 0.5,0.5 0 0 1 3.5,5 0.5,0.5 0 0 1 3,4.5 0.5,0.5 0 0 1 3.4882812,4 Z" fill="currentColor" stroke-linecap="square"/>
    <path id="path5" class="ColorScheme-Text" d="m3 5v5a2 2 0 0 0 1.9511719 2 2 2 0 0 0 0.0488281 0h3v-1h-3a1 1 0 0 1-1-1v-5z" fill="currentColor" stroke-linecap="square" stroke-width=".845154"/>
    <path id="path7" d="m6.5 8.7929688-0.7070312 0.7070312 2 2-1.6464844 1.646484-0.3535156 0.353516 0.7070312 0.707031 0.3535156-0.353515 2.3535156-2.353516-2.7070312-2.7070312z" class="ColorScheme-Text" fill="currentColor"/>
    <path id="path9" class="ColorScheme-Text" d="m11.5 13a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5zm0.01172-1a0.5 0.5 0 0 1-0.01172 0 0.5 0.5 0 0 1-0.5-0.5 0.5 0.5 0 0 1 0.5-0.5 0.5 0.5 0 0 1 0.5 0.5 0.5 0.5 0 0 1-0.488281 0.5z" fill="currentColor" stroke-linecap="square"/>
    <path id="path11" class="ColorScheme-Text" d="m12 11v-5a2 2 0 0 0-1.951172-2 2 2 0 0 0-0.04883 0h-2.9999981v1h3.0000001a1 1 0 0 1 1 1v5z" fill="currentColor" stroke-linecap="square" stroke-width=".845154"/>
    <path id="path13" d="m8.5 1.7929688-2.7070312 2.7070312 2.7070312 2.7070312 0.7070312-0.7070312-2-2 2-2-0.7070312-0.7070312z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path id="path3" class="ColorScheme-Text" d="m5.5 4a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z" fill="currentColor"/>
    <path id="path5" class="ColorScheme-Text" d="m5 8v6a2 2 0 0 0 1.9511719 2 2 2 0 0 0 0.0488281 0h4v-1h-4a1 1 0 0 1-1-1v-6z" fill="currentColor"/>
    <path id="path7" d="m8.5 11.792969-0.7070312 0.707031 0.3535156 0.353516 2.6464846 2.646484-2.6464846 2.646484-0.3535156 0.353516 0.7070312 0.707031 0.3535156-0.353515 3.3535154-3.353516-3.3535154-3.353516-0.3535156-0.353515z" class="ColorScheme-Text" fill="currentColor"/>
    <path id="path9" class="ColorScheme-Text" d="m15.5 18a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5 2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5zm0-1a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5z" fill="currentColor"/>
    <path id="path11" class="ColorScheme-Text" d="m16 14v-6.0000002a2 2 0 0 0-1.951172-2 2 2 0 0 0-0.04883 0h-3.9999981v1h4.0000001a1 1 0 0 1 1 1v6.0000002z" fill="currentColor"/>
    <path id="path13" d="M 12.5 2.7929688 L 12.146484 3.1464844 L 8.7929688 6.5 L 12.146484 9.8535156 L 12.5 10.207031 L 13.207031 9.5 L 12.853516 9.1464844 L 10.207031 6.5 L 12.853516 3.8535156 L 13.207031 3.5 L 12.5 2.7929688 z " class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
