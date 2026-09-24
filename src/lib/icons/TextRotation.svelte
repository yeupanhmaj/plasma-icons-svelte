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
     d="M 10.560547 4.6601562 L 9.0078125 10.455078 L 9.9726562 10.714844 L 10.171875 9.9726562 A 3 3 0 0 0 11.904297 11.232422 A 3 3 0 0 0 15.578125 9.1113281 A 3 3 0 0 0 13.457031 5.4375 A 3 3 0 0 0 11.326172 5.6621094 L 11.525391 4.9199219 L 10.560547 4.6601562 z M 4.0039062 5 A 3 3 0 0 0 1.0039062 8 A 3 3 0 0 0 4.0039062 11 A 3 3 0 0 0 6.0039062 10.232422 L 6.0039062 11.001953 L 7.0039062 11.001953 L 7.0039062 5.0019531 L 6.0039062 5.0019531 L 6.0039062 5.7714844 A 3 3 0 0 0 4.0039062 5.0019531 L 4.0039062 5 z M 4.0039062 6.0019531 A 2 2 0 0 1 6.0039062 8.0019531 A 2 2 0 0 1 4.0039062 10.001953 A 2 2 0 0 1 2.0039062 8.0019531 A 2 2 0 0 1 4.0039062 6.0019531 z M 12.664062 6.3339844 A 2 2 0 0 1 13.199219 6.4023438 A 2 2 0 0 1 14.613281 8.8515625 A 2 2 0 0 1 12.164062 10.265625 A 2 2 0 0 1 10.75 7.8164062 A 2 2 0 0 1 12.664062 6.3339844 z "
     class="ColorScheme-Text"/>
  <path
     style="fill:#1d99f3"
     d="M 7.5 2 L 7.5 14 L 8.5 14 L 8.5 12.388672 L 14.501953 13.998047 L 14.761719 13.03125 L 8.5 11.355469 L 8.5 2 L 7.5 2 z " />
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
	d="M 14.666016 6.8945312 L 13.333984 10.666016 L 12 14.4375 L 12.943359 14.771484 L 13.396484 13.488281 A 4 4 0 0 0 15.771484 15.771484 A 4 4 0 0 0 20.875 13.333984 A 4 4 0 0 0 18.4375 8.2285156 A 4 4 0 0 0 15.15625 8.5117188 L 15.609375 7.2285156 L 14.666016 6.8945312 z M 5 7.4472656 A 4 4 0 0 0 1 11.447266 A 4 4 0 0 0 5 15.447266 A 4 4 0 0 0 8 14.085938 L 8 15.447266 L 9 15.447266 L 9 11.447266 L 9 7.4472656 L 8 7.4472656 L 8 8.8085938 A 4 4 0 0 0 5 7.4472656 z M 5 8.4472656 A 3 3 0 0 1 8 11.447266 A 3 3 0 0 1 5 14.447266 A 3 3 0 0 1 2 11.447266 A 3 3 0 0 1 5 8.4472656 z M 17.011719 9.0019531 A 3 3 0 0 1 18.105469 9.171875 A 3 3 0 0 1 19.933594 13 A 3 3 0 0 1 16.105469 14.828125 A 3 3 0 0 1 14.275391 11 A 3 3 0 0 1 17.011719 9.0019531 z "
       class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="M 10 3 L 10 19 L 11 19 L 11 16.580078 L 20.359375 18.685547 L 20.591797 17.658203 L 11 15.5 L 11 3 L 10 3 z "
       class="ColorScheme-Accent"
     />
		</svg>
	{/if}
