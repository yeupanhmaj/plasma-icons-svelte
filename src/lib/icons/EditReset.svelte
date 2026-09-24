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
			<path id="path4" class="ColorScheme-Text" d="m7.5 2-3.5 3.5 3.5 3.5 0.71875-0.71875-2.3125-2.28125h3.59375c1.932998 0 3.5 1.5669984 3.5 3.5 0 1.933002-1.567002 3.5-3.5 3.5h-1.5v1h1.5c2.485283 0 4.5-2.014748 4.5-4.5 0-2.4852521-2.014717-4.5-4.5-4.5h-3.59375l2.3125-2.28125z" fill="currentColor"/>
    <rect id="rect837" class="ColorScheme-Text" x="2" y="2" width="1" height="7" fill="currentColor" fill-rule="evenodd"/>
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
			<path id="path4" class="ColorScheme-Text" d="m9.300781 3-3.5 3.5 3.5 3.5 0.707031-0.707031-2.292969-2.292969h3.785154c3.047 0 5.5 2.453 5.5 5.5s-2.453 5.5-5.5 5.5h-1.5v1h1.5c3.601 0 6.5-2.899 6.5-6.5s-2.899-6.5-6.5-6.5h-3.785154l2.292969-2.292969-0.707031-0.707031" fill="currentColor"/>
    <rect id="rect837" class="ColorScheme-Text" x="4" y="3" width="1" height="7" fill="currentColor" fill-rule="evenodd"/>
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
			<rect id="rect837" class="ColorScheme-Text" x="5" y="4" width="1" height="9" fill="currentColor" fill-rule="evenodd"/>
    <path id="path840" class="ColorScheme-Text" d="m11.5 3.7929688-0.353516 0.3535156-4.3535152 4.3535156 4.3535152 4.353516 0.353516 0.353515 0.707031-0.707031-0.353515-0.353516-3.1464848-3.146484h8.2929688c4.986 0 9 4.014 9 9s-4.014 9-9 9h-1v1h1c5.54 0 10-4.46 10-10s-4.46-10-10-10h-8.2929688l3.1464848-3.1464844 0.353515-0.3535156-0.707031-0.7070312z" fill="currentColor"/>
		</svg>
	{/if}
