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
     d="m2 2v12h12v-12h-12m1 2h10v9h-10v-9" 
     class="ColorScheme-Text"/>
 <path 
     d="m6.2 6l-.707.707 1.793 1.793-1.793 1.793.707.707 1.793-1.793 1.793 1.793.707-.707-1.793-1.793 1.793-1.793-.707-.707-1.793 1.793"
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
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
     d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 7 L 18 7 L 18 18 L 4 18 L 4 7 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 8.7070312 9 L 8 9.7070312 L 10.292969 12 L 8 14.292969 L 8.7070312 15 L 11 12.707031 L 13.292969 15 L 14 14.292969 L 11.707031 12 L 14 9.7070312 L 13.292969 9 L 11 11.292969 L 8.7070312 9 z "
     />
		</svg>
	{/if}
