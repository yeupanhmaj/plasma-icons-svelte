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
     d="M 1,2 4,8 1,14 1,14 15,8 Z M 3.1152344,3.9960938 12.458984,8 3.1152344,12.003906 5.1171875,8 Z"
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
     d="M 20 2 L 2 10 L 6 13 L 6 20 L 10 16.5 L 15 20 L 20 2 z M 17.140625 4.8828125 L 7 18 L 7 12.849609 L 17.140625 4.8828125 z M 14.912109 5.3632812 L 6.4003906 12.050781 L 3.9824219 10.236328 L 14.912109 5.3632812 z M 17.912109 5.7832031 L 14.443359 18.273438 L 10.871094 15.640625 L 17.912109 5.7832031 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
