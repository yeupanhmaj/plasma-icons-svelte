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
       d="M 3 2 L 2 3 L 2 4 L 2 4.3125 L 6 9.96875 L 6 10 L 6 12 L 7 12.5 L 7 11 L 7 10 L 7 9.625 L 3 4 L 3 3 L 7.25 3 L 9 3 L 13 3 L 13 4 L 10.875 7 L 12.09375 7 L 14 4.3125 L 14 3 L 13 2 L 9 2 L 7.25 2 L 3 2 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453" 
     d="M 8.9902344 8 L 8 8.9902344 L 10.009766 11 L 8 13.009766 L 8.9902344 14 L 11 11.990234 L 13.009766 14 L 14 13.009766 L 11.990234 11 L 14 8.9902344 L 13.009766 8 L 11 10.009766 L 8.9902344 8 z "
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
			<path id="path4" class="ColorScheme-Text" d="m5 3-1 1v1.3046875l5 7.0625005v3.671872l3 2.226563v-1.246092l-2-1.484375v-3.535156h-0.035156l-4.964844-7.0117188v-0.9882812h12v0.9882812l-4.964844 7.0117188h1.22461l4.740234-6.6953125v-1.3046875l-1-1zm1 2 2 3v-2l2-1z" fill="currentColor"/>
    <path id="path6" d="M 13.990234,13 13,13.990234 15.009766,16 13,18.009766 13.990234,19 16,16.990234 18.009766,19 19,18.009766 16.990234,16 19,13.990234 18.009766,13 16,15.009766 Z" fill="#da4453"/>
		</svg>
	{/if}
