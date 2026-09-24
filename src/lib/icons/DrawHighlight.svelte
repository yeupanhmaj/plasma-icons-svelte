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
			viewBox="0 0 4.233 4.233"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path d="M3.175.53L1.852 1.586l.794.794 1.058-1.323zM1.587 1.851v.53l-.529.528h.53l.264-.264h.53zM.53 3.175v.53h3.175v-.53z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path id="path3" class="ColorScheme-Text" d="M 15.991732,3.0002367 8,10 12,14 19,6 Z M 7,11 v 3 l -2,2 h 2 l 1,-1 h 3 z m -4,6 v 1.999527 L 19,19 v -2 z" fill="currentColor"/>
		</svg>
	{/if}
