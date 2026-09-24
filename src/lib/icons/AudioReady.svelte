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
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
       d="M 14.00001,8 A 2.0000048,2.0000048 0 0 1 12.000005,10 2.0000048,2.0000048 0 0 1 10,8 2.0000048,2.0000048 0 0 1 12.000005,6 2.0000048,2.0000048 0 0 1 14.00001,8 Z"
       class="ColorScheme-NeutralText"
        />
    <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-Text"
       d="M 8,2 4,6 4,10 8,14 9,14 9,2 8,2 Z M 2,6 2,10 3,10 3,6 2,6 Z"
       id="path4147" />
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
			<path d="m10.988281 3-4.988281 4.9902344v.0097656 1 4 1 .009766l4.988281 4.990234h1.011719v-.402344-15.1953122-.4023438zm-7.988281 5v1 4 1h2v-1-4-1z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/><circle cx="16" cy="11" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NeutralText" r="3"/>
		</svg>
	{/if}
