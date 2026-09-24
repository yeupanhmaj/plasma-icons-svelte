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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" class="ColorScheme-Text" d="M 4.5 2 C 3.11929 2 2 3.11929 2 4.5 L 2 10.5 C 2 11.8807 3.11929 13 4.5 13 L 10 13 L 10 12 L 4.5 12 C 3.67157 12 3 11.3284 3 10.5 C 3 9.67157 3.67157 9 4.5 9 L 5 9 L 5 5 L 12 5 L 12 10 L 13 10 L 13 4 L 5 4 L 5 2 L 4.5 2 Z M 4 3.08789 L 4 8.05078 C 3.63721 8.12586 3.29564 8.28063 3 8.50391 L 3 4.5 C 3.00089 3.8651 3.40141 3.29952 4 3.08789 Z"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" class="ColorScheme-Text" d="M 8.5 6 C 7.11929 6 6 7.11929 6 8.5 C 6 9.88071 7.11929 11 8.5 11 C 8.98983 10.9992 9.46864 10.8546 9.87695 10.584 L 12.293 13 L 13 12.293 L 10.584 9.87695 C 10.8546 9.46864 10.9992 8.98983 11 8.5 C 11 7.11929 9.88071 6 8.5 6 Z M 8.5 7 C 9.32843 7 10 7.67157 10 8.5 C 10 9.32843 9.32843 10 8.5 10 C 7.67157 10 7 9.32843 7 8.5 C 7 7.67157 7.67157 7 8.5 7 Z"/>
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
			<path style="fill:currentColor; fill-opacity:1; stroke:none" class="ColorScheme-Text" d="M 6 3 C 4.929 3 3.93784 3.57249 3.40234 4.5 C 3.13459 4.96375 3 5.48188 3 6 L 3 16 C 3 16.5181 3.1346 17.0362 3.40234 17.5 C 3.93784 18.4275 4.929 19 6 19 L 16 19 L 16 18 L 6 18 C 5.28467 18 4.62524 17.6195 4.26758 17 C 3.90991 16.3805 3.90991 15.6195 4.26758 15 C 4.62524 14.3805 5.28467 14 6 14 L 7 14 L 7 7 L 17 7 L 17 15 L 18 15 L 18 6 L 7 6 L 7 3 L 6 3 Z M 6 4 L 6 6 L 6 7 L 6 13 C 5.24975 13 4.5427 13.2863 4 13.7734 L 4 6 C 4 5.65487 4.08874 5.30975 4.26758 5 C 4.62524 4.3805 5.28467 4 6 4 Z"/>
    <path style="fill:currentColor; fill-opacity:1; stroke:none" class="ColorScheme-Text" d="M 12 8 C 9.79086 8 8 9.79086 8 12 C 8 14.2091 9.79086 16 12 16 C 12.8874 15.9982 13.749 15.7014 14.4492 15.1563 L 18.293 19 L 19 18.293 L 15.1582 14.4512 C 15.7031 13.7502 15.9992 12.8878 16 12 C 16 9.79086 14.2091 8 12 8 Z M 12 9 C 13.6569 9 15 10.3431 15 12 C 15 13.6569 13.6569 15 12 15 C 10.3431 15 9 13.6569 9 12 C 9 10.3431 10.3431 9 12 9 Z"/>
		</svg>
	{/if}
