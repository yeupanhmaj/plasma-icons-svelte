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
     d="M 8 2 C 4.6862915 2 2 4.6862915 2 8 C 2 11.313708 4.6862915 14 8 14 L 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 5.2385763 5.2385763 3 8 3 C 10.419003 3 12.43717 4.7176961 12.900391 7 L 13.910156 7 C 13.433066 4.1634955 10.972138 2 8 2 z M 7 4 L 7 8 L 7 9 L 8 9 L 9 9 L 9 8 L 8 8 L 8 7 L 8 4 L 7 4 z M 10 8 L 10 14 L 15 11 L 10 8 z "
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
    d="M 11 3 C 6.568002 3 3 6.568002 3 11 C 3 15.431998 6.568002 19 11 19 C 11.692084 19 12.360349 18.903948 13 18.740234 L 13 17.707031 C 12.366247 17.894565 11.696167 18 11 18 C 7.122001 18 4 14.877999 4 11 C 4 7.122001 7.122001 4 11 4 C 14.877999 4 18 7.122001 18 11 C 18 11.696167 17.894565 12.366247 17.707031 13 L 18.740234 13 C 18.903948 12.360349 19 11.692084 19 11 C 19 6.568002 15.431998 3 11 3 z M 10 5 L 10 12 L 11 12 L 16 12 L 16 11 L 11 11 L 11 5 L 10 5 z M 14 13 L 14 19 L 20 16 L 14 13 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
