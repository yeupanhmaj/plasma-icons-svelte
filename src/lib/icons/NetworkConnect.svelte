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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 13.300781 2 L 10.650391 4.6503906 L 9.5859375 3.5859375 L 3.5859375 9.5859375 L 4.6503906 10.650391 L 2 13.300781 L 2.6992188 14 L 5.3496094 11.349609 L 6.4140625 12.414062 L 12.414062 6.4140625 L 11.349609 5.3496094 L 14 2.6992188 L 13.300781 2 z "
     class="ColorScheme-Text"
     />
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
     d="M 18.292969 3 L 14.792969 6.5 L 13.292969 5 L 11.292969 7 L 8 10.292969 L 6 12.292969 L 7.5 13.792969 L 3 18.292969 L 3.7070312 19 L 8.2070312 14.5 L 9.7070312 16 L 11.707031 14 L 15 10.707031 L 17 8.7070312 L 15.5 7.2070312 L 19 3.7070312 L 18.292969 3 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
