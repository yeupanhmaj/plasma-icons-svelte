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
     d="M 7 2 C 5.895 2 5 2.895 5 4 L 5 7 L 3 7 L 3 8 L 5 8 L 5 14 L 6 14 L 6 8 L 8 8 L 8 7 L 6 7 L 6 4 C 6 3.448 6.448 3 7 3 L 9 3 L 9 2 L 8 2 L 7 2 z M 9.4707031 9.7597656 L 8.7636719 10.466797 L 10.177734 11.880859 L 8.7636719 13.294922 L 9.4707031 14.001953 L 10.884766 12.587891 L 12.298828 14.001953 L 13.005859 13.294922 L 11.591797 11.880859 L 13.005859 10.466797 L 12.298828 9.7597656 L 10.884766 11.173828 L 9.4707031 9.7597656 z "
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
     d="M 9 3 C 7.34315 3 6 4.3431 6 6 L 6 8 L 4 8 L 4 9 L 6 9 L 6 10 L 6 19 L 7 19 L 7 9 L 8 9 L 9 9 L 9 8 L 8 8 L 7 8 L 7 6 C 7 4.89543 7.89543 4 9 4 L 10 4 L 10 3 L 9 3 z M 12.742188 13 L 12 13.732422 L 14.292969 16 L 12 18.267578 L 12.742188 19 L 15.035156 16.732422 L 17.257812 18.931641 L 18 18.199219 L 15.775391 16 L 18 13.800781 L 17.257812 13.068359 L 15.035156 15.267578 L 12.742188 13 z "
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
