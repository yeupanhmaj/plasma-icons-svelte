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
       d="M 2 2 L 2 14 L 9 14 L 13 14 L 14 14 L 14 9 L 14 2 L 12 2 L 12 4 L 10 4 L 10 2 L 6 2 L 6 4 L 4 4 L 4 2 L 2 2 z M 3 5 L 13 5 L 13 9 L 13 13 L 9 13 L 3 13 L 3 5 z M 10.335938 6.5 L 7.1875 10.109375 L 5.6621094 8.5566406 L 5 9.2324219 L 7.2265625 11.5 L 11 7.1777344 L 10.335938 6.5 z "
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
    d="m3 3v16h10 5 1v-6-10h-2v3h-2v-3h-8v3h-2v-3h-2m1 4h14v6 5h-5-9v-11m10.292969 2l-4.591797 4.591797-1.146484-1.146485-.707031.707032 1.845703 1.847656.005859-.007812.007812.007812 5.292969-5.292969-.707031-.707031"
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
