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
       d="M 9.0898438 2 L 5.9433594 13.740234 L 6.9101562 14 L 10.056641 2.2597656 L 9.0898438 2 z M 5.2851562 4 L 2.3242188 7.1445312 L 2 7.4921875 L 2.3242188 7.8378906 L 5.2675781 11 L 5.9824219 10.304688 L 3.3613281 7.4921875 L 6 4.6953125 L 5.2851562 4 z M 10.714844 4 L 10 4.6953125 L 12.638672 7.4921875 L 12.166016 8 L 13.525391 8 L 13.675781 7.8378906 L 14 7.4921875 L 13.675781 7.1445312 L 10.714844 4 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z "
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
    d="M 12.5 3 L 8.5 18.753906 L 9.5 19 L 13.5 3.2460938 L 12.5 3 z M 7.2539062 6 L 3.2792969 10.644531 L 3 11 L 3.2792969 11.355469 L 7.2539062 16 L 8 15.291016 L 4.3359375 11 L 8 6.7089844 L 7.2539062 6 z M 14.746094 6 L 14 6.7089844 L 17.664062 11 L 15.957031 13 L 17.3125 13 L 18.720703 11.355469 L 19 11 L 18.720703 10.644531 L 14.746094 6 z M 16 14 L 16 16 L 14 16 L 14 17 L 16 17 L 16 19 L 17 19 L 17 17 L 19 17 L 19 16 L 17 16 L 17 14 L 16 14 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
