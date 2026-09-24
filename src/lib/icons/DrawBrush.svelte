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
     d="M 13.427734 2.0058594 A 1.500133 6.7506007 44.989453 0 0 8.0507812 5.8300781 A 1.500133 6.7506007 44.989453 0 0 5.3945312 8.9160156 C 6.2015113 9.1731156 6.8308906 9.802075 7.0878906 10.609375 A 1.500133 6.7506007 44.989453 0 0 10.171875 7.9511719 A 1.500133 6.7506007 44.989453 0 0 13.882812 2.1171875 A 1.500133 6.7506007 44.989453 0 0 13.634766 2.0058594 A 1.500133 6.7506007 44.989453 0 0 13.427734 2.0058594 z M 5 9.9960938 L 5 10 C 2.00008 10.8042 4.24994 12.7027 2 14 C 4.99992 14 6.5 12.499247 6.5 11.498047 C 6.5 10.998947 6.55095 10.079094 5 9.9960938 z "
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
	d="M19.513672 4.00781A2 9 45 0 0 12.06836 9.105469 2 9 45 0 0 8.525391 13.21875c1.07606.34264 1.915172 1.181743 2.257812 2.257812A2 9 45 0 0 14.896484 11.933594 2 9 45 0 0 19.845703 4.15625 2 9 45 0 0 19.513672 4.00781M8 14.664062C3.99999 15.735863 7 18.26795 4 20c4.00339 0 6-2.00082 6-3.335938 0-.66488.0676-1.88944-2-2z" transform="translate(-.99999-.99999)" 
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
