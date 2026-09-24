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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 10,2 15.292969,7.2929688 16,8 15.292969,8.7070312 10,14 1,14 0,14 0,2 1,2 10,2 Z M 7.9980469,5 5.988281,7.0097656 3.978516,5 2.988281,5.9902344 4.998047,8 2.988281,10.009766 3.978516,11 5.988281,8.9902344 7.9980469,11 8.9882812,10.009766 6.9785156,8 8.9882812,5.9902344 7.9980469,5 Z"
     class="ColorScheme-Text"
     id="path6" />
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 14,3 21.056641,10.056641 22,11 21.056641,11.943359 14,19 1.666016,19 0,19 0,3 1.666016,3 14,3 Z M 10.679688,7 8,9.6796875 5.320312,7 4,8.3203125 6.679688,11 4,13.679688 5.320312,15 8,12.320312 10.679688,15 12,13.679688 9.320312,11 12,8.3203125 10.679688,7 Z"
     class="ColorScheme-Text"
     id="path6" />
		</svg>
	{/if}
