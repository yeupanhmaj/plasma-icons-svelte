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
     d="M 1 2 L 1 14 L 10 14 L 10 2 L 1 2 z M 8 3 L 9 3 L 9 13 L 8 13 L 8 3 z M 11 5 L 11 12 L 12.5 14 L 14 12 L 14 5 L 11 5 z M 12 6 L 13 6 L 13 11 L 12 11 L 12 6 z "
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
    d="M 2 3 L 2 4 L 2 19 L 3 19 L 16 19 L 16 18 L 16 3 L 3 3 L 2 3 z M 12 4 L 14 4 L 14 18 L 12 18 L 12 4 z M 17 9 L 17 10 L 17 11 L 17 12 L 17 17 L 17 17.414062 L 18.410156 18.824219 L 18.410156 18.996094 L 18.414062 19 L 18.5 18.914062 L 18.585938 19 L 18.589844 18.996094 L 18.589844 18.824219 L 20 17.414062 L 20 16 L 20 12 L 20 11 L 20 10 L 20 9 L 17 9 z M 18 10 L 19 10 L 19 11 L 18 11 L 18 10 z M 18 12 L 19 12 L 19 17 L 18.5 17.5 L 18 17 L 18 12 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
