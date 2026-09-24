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
     d="m3.5 2l-.531.969-.969.531.969.531.531.969.531-.969.969-.531-.969-.531zm7.631 0l-9.125 9.125 2.875 2.875 9.125-9.125zm0 1.438l1.438 1.439-2.781 2.779-1.438-1.438z"
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
    d="M 4.5 3 L 3.96875 3.96875 L 3 4.5 L 3.96875 5.03125 L 4.5 6 L 5.03125 5.03125 L 6 4.5 L 5.03125 3.96875 L 4.5 3 z M 9.5 3 L 8.96875 3.96875 L 8 4.5 L 8.96875 5.03125 L 9.5 6 L 10.03125 5.03125 L 11 4.5 L 10.03125 3.96875 L 9.5 3 z M 16.171875 3 L 3 16.171875 L 5.828125 19 L 19 5.828125 L 16.171875 3 z M 16.103516 4.4824219 L 17.517578 5.8964844 L 14.419922 8.9960938 L 13.003906 7.5800781 L 16.103516 4.4824219 z M 6.5 7 L 5.96875 7.96875 L 5 8.5 L 5.96875 9.03125 L 6.5 10 L 7.03125 9.03125 L 8 8.5 L 7.03125 7.96875 L 6.5 7 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
