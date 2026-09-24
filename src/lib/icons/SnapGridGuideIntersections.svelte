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
        d="M 4 2 L 4 6 L 6 4 L 4 2 z M 7 2 L 7 9 L 8 9 L 8 2 L 7 2 z M 11 2 L 9 4 L 11 6 L 11 2 z M 13.449219 5.5 L 8.3632812 9.0019531 L 9.0058594 9.0019531 L 9.0058594 9.7773438 L 14.005859 6.3398438 L 13.449219 5.5 z M 6.0058594 10.625 L 2.3027344 13.179688 L 2.3066406 13.181641 L 2.8613281 14.001953 L 6.9335938 11.201172 L 6.5058594 11.201172 L 6.5058594 11.001953 L 6.0058594 11.001953 L 6.0058594 10.625 z M 7 12 L 7 14 L 8 14 L 8 12 L 7 12 z "
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 5,8 0,4 5,0 0,-4 z m 1,1 3,0 0,2 -3,0 z"
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
     d="M 10.5 3 L 10.5 12 L 11.5 12 L 11.5 3 L 10.5 3 z M 7.5 4 L 7.5 8 L 9.5 6 L 7.5 4 z M 14.5 4 L 12.5 6 L 14.5 8 L 14.5 4 z M 18.466797 7.2519531 L 18.460938 7.2539062 L 18.460938 7.2558594 L 18.466797 7.2519531 z M 18.460938 7.2558594 L 11.568359 12 L 12 12 L 12 12.919922 L 19 8.1074219 L 18.460938 7.2558594 z M 10 13.080078 L 3.3007812 17.691406 L 3.8828125 18.5 L 10.427734 14 L 10 14 L 10 13.080078 z M 3.3007812 17.691406 L 3.2988281 17.6875 L 3.2988281 17.693359 L 3.3007812 17.691406 z M 10.5 14 L 10.5 19 L 11.5 19 L 11.5 14 L 10.5 14 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 9 11 L 9 15 L 13 15 L 13 11 L 9 11 z M 10 12 L 12 12 L 12 14 L 10 14 L 10 12 z "
     class="ColorScheme-Accent"
     />
		</svg>
	{/if}
