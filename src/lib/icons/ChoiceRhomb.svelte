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
     d="M 8 2 L 2 8 L 8 14 L 14 8 L 8 2 z M 8 3.4140625 L 12.585938 8 L 8 12.585938 L 3.4140625 8 L 8 3.4140625 z "
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
    d="m 562.28572,610.6479 -8,8 0,0 8,7.99999 8,-7.99999 z m -5.6e-4,1.4146 6.58593,6.58594 -6.58593,6.58594 -6.58594,-6.58594 z"     
     transform="translate(-551.28571,-607.64789)"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
