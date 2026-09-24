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
     d="m1 2v12h7v-1h-5.344l3.986-4.65 1.357 1.357c-.013-.024 6-6 6-6v4.293h1v-6zm1.707 1h10.586l-5.293 5.293zm-.707.707l3.934 3.934-3.934 4.59z"
     class="ColorScheme-Text"
     />
  <path d="m13 8l-4 4v2h2l4-4zm-.311 1.689l.592.592-1.688 1.688v.016l-1.281 1.297-.594-.594z"  style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
   />
		</svg>
	{:else if numericSize <= 27}
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
     d="M 1 3 L 1 4 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 11 19 L 11 18 L 8 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 L 10.183594 12.134766 L 10.998047 12.949219 L 11 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 14.585938 12 L 16 12 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 10 L 21 10 L 21 3 L 20.951172 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 2 16 L 2 12 L 2 4.2226562 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z "
     class="ColorScheme-Text"
     />
    <path
     style="fill:#2ecc71;fill-opacity:1;stroke:none"
     d="M 19 11 L 18.003906 11.994141 L 18 11.990234 L 13 16.988281 L 13.007812 16.996094 L 13.003906 18 L 13 18 L 13 18.990234 L 13 19 L 15 19 L 15.005859 18.994141 L 15.009766 18.990234 C 15.013766 18.990214 15.015531 18.992188 15.019531 18.992188 L 15.013672 18.986328 L 16 18 L 20 14.003906 L 19.294922 13.294922 L 14.304688 18.28125 L 13.710938 17.689453 L 18.703125 12.701172 L 19.294922 13.294922 L 20 13.998047 L 21 12.998047 L 19 11 z "
     />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2,5 2,24.683594 2,27 17,27 17,26 3,26 3,25.111328 3.4296875,24.683594 12.785156,15.541016 16,18.683594 28.976562,6 29,6 l 0,8 1,0 0,-9 z M 3,6 3.0234375,6 12.070312,14.841797 3,23.707031 Z M 4.453125,6 27.546875,6 16,17.285156 Z"
     class="ColorScheme-Text"
     />
    <path
     style="fill:#2ecc71;fill-opacity:1;stroke:none"
     d="M 27.398438,15 22.287109,20.111328 19,23.398438 19,27 22.601562,27 31,18.601562 Z M 27,17 l 2,2 -7,7 -1,0 -1,-1 0,-1 z"
     />
		</svg>
	{/if}
