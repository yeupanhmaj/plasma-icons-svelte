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
			<style type="text/css">.ColorScheme-Text {
            color:#232629;
        }</style>
    <rect x="2" y="2" width="12" height="12" rx="2" fill="#9b59b6"/>
    <path d="m8 3c-1.6450096 0-3 1.3549904-3 3h2c0-0.5641294 0.4358706-1 1-1s1 0.4358706 1 1c0 0.4526634-0.2792831 0.8225967-0.6816406 0.9511719l-0.0019532-0.0039063c-0.7590229 0.2762618-1.2692496 0.9808804-1.3085937 1.78125h-0.0039063c-0.0026479 0.0343535-0.0039015 0.0673206-0.0039062 0.0976563v1.1738281h2v-1.1738281c1.160087-0.4158575 2-1.5310298 2-2.8261719 0-1.6450096-1.3549904-3-3-3zm-1 8v2h2v-2h-2z" fill="#fff"/>
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
			<style type="text/css">.ColorScheme-Text {
            color:#232629;
        }</style>
    <rect x="3" y="3" width="16" height="16" rx="2" fill="#9b59b6"/>
    <path d="m11 5a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2h-1v3h2v-1.133a4 4 0 0 0 3-3.867 4 4 0 0 0-4-4zm-1 10v2h2v-2z" fill="#fff"/>
		</svg>
	{/if}
