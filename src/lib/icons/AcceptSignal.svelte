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
     d="M 2 2 L 6.0058594 8 L 2 14 L 3 14 L 3.2617188 14 L 13 14 L 14 14 L 14 3 L 14 2 L 3.2578125 2 L 2 2 z M 3.9257812 3 L 13 3 L 13 13 L 3.9296875 13 L 7.265625 8 L 3.9257812 3 z "
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
     d="M 3.03125 3 L 3 3.0175781 L 3 3.9003906 L 7.7402344 11 L 3 18.101562 L 3 18.984375 L 3.0273438 19 L 3.3007812 19 L 3.6601562 19 L 8 19 L 8.3007812 19 L 18 19 L 19 19 L 19 4 L 19 3 L 8.3007812 3 L 3.65625 3 L 3.03125 3 z M 4.3242188 4 L 8.3007812 4 L 18 4 L 18 18 L 8.3007812 18 L 8 18 L 4.328125 18 L 9 11 L 4.3242188 4 z " transform="matrix(1 0 0 1 0 0)"
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
