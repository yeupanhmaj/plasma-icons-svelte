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
     d="M 7 2 L 7 7 L 9 7 L 9 2 L 7 2 z M 5 5 L 2.0332031 11 L 2 11 L 2 14 L 14 14 L 14 11 L 13.966797 11 L 11 5 L 10.021484 5 L 10.021484 6 L 10.423828 6 L 12.945312 11 L 11 11 L 10 12 L 9 12 L 7 12 L 6 12 L 5 11 L 3.0546875 11 L 5.5761719 6 L 5.9785156 6 L 5.9785156 5 L 5 5 z M 6.0253906 7 L 5.3105469 7.734375 L 8.0078125 10.5 L 10.697266 7.7441406 L 9.9804688 7.0097656 L 8.0078125 9.0332031 L 6.0253906 7 z "
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
    d="M 9 3 L 9 4 L 9 8 L 7.109375 8 L 5.9550781 8 L 2 14.849609 L 2 16.310547 L 2 19 L 6 19 L 16 19 L 20 19 L 20 16.310547 L 20 14.849609 L 16.044922 8 L 16 8 L 13 8 L 13 4 L 13 3 L 9 3 z M 10 4 L 12 4 L 12 11 L 13 11 L 13 9 L 15.46875 9 L 18.933594 15 L 16 15 L 15 17 L 7 17 L 6 15 L 3.0664062 15 L 6.53125 9 L 9 9 L 9 11 L 10 11 L 10 4 z M 6.7578125 10.34375 L 6.0507812 11.050781 L 11 16 L 15.949219 11.050781 L 15.242188 10.34375 L 11 14.585938 L 6.7578125 10.34375 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
