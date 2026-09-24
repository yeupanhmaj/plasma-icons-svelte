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
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 8.5 3.0019531 L 8.5 11 L 8.5 14.005859 L 9.5 14.005859 L 9.5 13.230469 A 3 3.0000075 0 0 0 11.5 14 A 3 3.0000075 0 0 0 14.5 11 A 3 3.0000075 0 0 0 11.5 8 A 3 3.0000075 0 0 0 9.5 8.7695312 L 9.5 3.0019531 L 8.5 3.0019531 z M 6.5 7.9980469 L 6.5 8.7695312 A 3 3.0000075 0 0 0 4.5 8 A 3 3.0000075 0 0 0 1.5 11 A 3 3.0000075 0 0 0 4.5 14 A 3 3.0000075 0 0 0 6.5 13.232422 L 6.5 13.998047 L 7.5 13.998047 L 7.5 7.9980469 L 6.5 7.9980469 z M 4.5 9 A 2.0000002 2.0000048 0 0 1 6.5 11 A 2.0000002 2.0000048 0 0 1 4.5 13 A 2.0000002 2.0000048 0 0 1 2.5 11 A 2.0000002 2.0000048 0 0 1 4.5 9 z M 11.5 9 A 2.0000002 2.0000048 0 0 1 13.5 11 A 2.0000002 2.0000048 0 0 1 11.5 13 A 2.0000002 2.0000048 0 0 1 9.5 11 A 2.0000002 2.0000048 0 0 1 11.5 9 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 9.49975,1.9975 5.00025,0 -2.49975,3 z"
        class="ColorScheme-Accent"
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
     d="M 12 7 L 12 15 L 12 19 L 13 19 L 13 17.638672 A 4 4 0 0 0 16 19 A 4 4 0 0 0 20 15 A 4 4 0 0 0 16 11 A 4 4 0 0 0 13 12.361328 L 13 7 L 12 7 z M 6 11 A 4 4 0 0 0 2 15 A 4 4 0 0 0 6 19 A 4 4 0 0 0 9 17.638672 L 9 19 L 10 19 L 10 11 L 9 11 L 9 12.361328 A 4 4 0 0 0 6 11 z M 6 12 A 3 3 0 0 1 9 15 A 3 3 0 0 1 6 18 A 3 3 0 0 1 3 15 A 3 3 0 0 1 6 12 z M 16 12 A 3 3 0 0 1 19 15 A 3 3 0 0 1 16 18 A 3 3 0 0 1 13 15 A 3 3 0 0 1 16 12 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 13 3 L 16 7 L 19 3 L 13 3 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
