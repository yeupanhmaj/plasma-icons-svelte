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
     class="ColorScheme-Text"
     d="M 6,8 9,11 14,6 13,5 9,9 7,7 6,8 M 3,2 V 3 4 H 2 v 1 h 1 v 6 H 2 v 1 h 1 v 1 1 h 2 2 7 V 13 8 h -1 v 5 H 7 5 V 3 h 8 v 1 h 1 V 2 H 13 Z M 6,4 V 6 H 8 V 4 Z m 3,0 v 1 h 3 V 4 Z m 1,7 v 1 h 2 v -1 z"
     style="fill:currentColor;fill-opacity:1;stroke:none"
     id="path5400" />
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
     class="ColorScheme-Text"
     d="M 19,9 12,16 8,12 9.4896719,10.543135 12,13 17.482382,7.5492102 Z M 4,3 V 5 H 3 V 6 H 4 V 7 H 3 v 1 h 1 v 6 H 3 v 1 h 1 v 1 H 3 v 1 h 1 v 2 h 3 12 v -1 -7 h -1 v 1 1 2 1 2 H 10 9 7 V 16 15 13 12 10 9 7 6 4 h 2 1 8 v 2 h 1 V 3 H 7 Z m 4,3 v 2 h 2 V 6 Z m 3,0 v 1 h 6 V 6 Z"
     style="fill:currentColor;fill-opacity:1;stroke:none"
     />
		</svg>
	{/if}
