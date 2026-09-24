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
     d="M 7.3847656 1.9980469 L 3.0019531 11.998047 L 4.359375 11.998047 L 5.5488281 9.2695312 L 10.476562 9.2695312 L 11.628906 11.998047 L 13.001953 11.998047 L 8.75 1.9980469 L 7.3847656 1.9980469 z M 8.0644531 3.2050781 C 8.1777031 3.5470781 8.7760781 5.0984687 9.8613281 7.8554688 L 10.085938 8.3613281 L 5.9433594 8.3613281 L 8.0644531 3.2050781 z "
     class="ColorScheme-Text"/>
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
     d="M 2.0078125 12.992188 L 2.0078125 13.992188 L 14.007812 13.992188 L 14.007812 12.992188 L 2.0078125 12.992188 z "
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
     d="M 10.146484 3 L 4.9296875 17 L 6.6171875 17 L 8.2871094 12.570312 L 13.847656 12.570312 L 15.382812 17 L 17.070312 17 L 12.140625 3 L 10.146484 3 z M 11.162109 4.6113281 L 13.291016 11.285156 L 8.8046875 11.285156 L 11.162109 4.6113281 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#2ecc71;fill-opacity:1;stroke:none" 
     d="M 3 18 L 3 19 L 19 19 L 19 18 L 3 18 z "
     />
		</svg>
	{/if}
