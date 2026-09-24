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
			<path class="ColorScheme-Text" d="m8 2-5.96875 0.03125-0.03125 5.96875 5 4.615234v-5.615234h5.615234l-4.615234-5zm-2.5 2c0.8284271 0 1.5 0.6715728 1.5 1.5s-0.6715729 1.5-1.5 1.5-1.5-0.6715728-1.5-1.5 0.6715729-1.5 1.5-1.5zm6.5 4-4 4v2h2l4-4-2-2zm-0.310547 1.6894531 0.591797 0.5917969-2.96875 2.984375v0.015625l-0.59375-0.59375 2.970703-2.9980469z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m9 3-6 2 2 6 7 3.5v-2.5h5l2-4-10-5zm-6 2v6l8 8 1-1v-2.634766l-8-4.365234-1-6zm3.5 0c0.831 0 1.5 0.669 1.5 1.5s-0.669 1.5-1.5 1.5-1.5-0.669-1.5-1.5 0.669-1.5 1.5-1.5zm10.5 8-4 4v2h2l4-4-2-2zm-0.310547 1.689453 0.591797 0.591797-2.96875 2.984375v0.015625l-0.59375-0.59375 2.970703-2.998047z" fill="currentColor"/>
		</svg>
	{/if}
