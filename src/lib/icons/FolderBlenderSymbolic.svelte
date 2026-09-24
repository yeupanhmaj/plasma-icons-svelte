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
       style="fill:currentColor"
       class="ColorScheme-Text"
       d="M 7.3808594 1.9472656 L 7.3808594 1.953125 A 0.5 0.5 0 0 0 7.0351562 2.1 A 0.5 0.5 0 0 0 7.0351562 2.8066406 L 10.240234 6.0117188 A 4 4 0 0 0 10 6.0019531 L 2.5 6.0019531 A 0.5 0.5 0 0 0 2 6.5019531 A 0.5 0.5 0 0 0 2.5 7.0019531 L 7.2929688 7.0019531 L 2.1464844 12.148438 A 0.500012 0.5 0 0 0 2.1464844 12.855469 A 0.500012 0.5 0 0 0 2.8535156 12.855469 L 6.0175781 9.6914062 A 4 4 0 0 0 6 10.001953 A 4 4 0 0 0 10 14.001953 A 4 4 0 0 0 14 10.001953 A 4 4 0 0 0 13.039062 7.40625 L 13.044922 7.3964844 L 12.910156 7.2617188 A 4 4 0 0 0 12.707031 7.0585938 L 7.7421875 2.09375 A 0.5 0.5 0 0 0 7.3808594 1.9472656 z M 10 7.0039062 A 3 3 0 0 1 11.996094 7.7675781 L 12.222656 7.9941406 A 3 3 0 0 1 13 10.003906 A 3 3 0 0 1 10 13.003906 A 3 3 0 0 1 7 10.003906 A 3 3 0 0 1 10 7.0039062 z M 10 9.0039062 A 1 1 0 0 0 9 10.003906 A 1 1 0 0 0 10 11.003906 A 1 1 0 0 0 11 10.003906 A 1 1 0 0 0 10 9.0039062 z "
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
       style="fill:currentColor"
       class="ColorScheme-Text"
       d="M 10.5 3 A 0.5 0.5 0 0 0 10.150391 3.1503906 A 0.5 0.5 0 0 0 10.150391 3.8496094 L 14.400391 8.0996094 A 5.5 5.5 0 0 0 13.5 8 L 3.5 8 A 0.5 0.5 0 0 0 3 8.5 A 0.5 0.5 0 0 0 3.5 9 L 10.34375 9 A 5.5 5.5 0 0 0 9.1503906 10.150391 L 3.1503906 16.150391 A 0.5 0.5 0 0 0 3.1503906 16.849609 A 0.5 0.5 0 0 0 3.8496094 16.849609 L 8.0996094 12.640625 A 5.5 5.5 0 0 0 8 13.5 A 5.5 5.5 0 0 0 13.5 19 A 5.5 5.5 0 0 0 19 13.5 A 5.5 5.5 0 0 0 16.839844 9.140625 L 10.849609 3.1503906 A 0.5 0.5 0 0 0 10.5 3 z M 13.5 9 A 4.5 4.5 0 0 1 18 13.5 A 4.5 4.5 0 0 1 13.5 18 A 4.5 4.5 0 0 1 9 13.5 A 4.5 4.5 0 0 1 13.5 9 z M 13.5 12 A 1.5 1.5 0 0 0 12 13.5 A 1.5 1.5 0 0 0 13.5 15 A 1.5 1.5 0 0 0 15 13.5 A 1.5 1.5 0 0 0 13.5 12 z "
       />
		</svg>
	{/if}
