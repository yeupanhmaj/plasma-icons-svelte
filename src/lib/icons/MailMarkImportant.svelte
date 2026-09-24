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
     class="ColorScheme-Text"
    d="M 1 2 L 1 14 L 10 14 L 10 13 L 2.65625 13 L 6.6425781 8.3496094 L 7.9980469 9.7070312 C 7.9850469 9.6830314 13.998047 3.7070312 13.998047 3.7070312 L 13.998047 8 L 14.998047 8 L 14.998047 2 L 1 2 z M 2.7070312 3 L 13.292969 3 L 8 8.2929688 L 2.7070312 3 z M 2 3.7070312 L 5.9335938 7.640625 L 2 12.230469 L 2 3.7070312 z " />
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="M 12 8 L 12 12 L 13 12 L 13 8 L 12 8 z M 12 13 L 12 14 L 13 14 L 13 13 L 12 13 z " />
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
     d="M 1 3 L 1 4 L 1 12 L 1 18 L 1 18.414062 L 1 19 L 2 19 L 8 19 L 14 19 L 14 18 L 8 18 L 2 18 L 2 17.414062 L 2.4628906 16.951172 L 8.7304688 10.683594 L 10.183594 12.134766 L 10.998047 12.949219 L 11 12.949219 L 11.816406 12.134766 L 13.269531 10.683594 L 14.585938 12 L 16 12 L 13.976562 9.9765625 L 19.728516 4.2226562 L 19.951172 4 L 20 4 L 20 4.2226562 L 20 12 L 21 12 L 21 3 L 20.951172 3 L 20 3 L 19.537109 3 L 2.4628906 3 L 2 3 L 1 3 z M 2 4 L 2.0488281 4 L 2.2714844 4.2226562 L 8.0234375 9.9765625 L 2 16 L 2 12 L 2 4.2226562 L 2 4 z M 3.4628906 4 L 18.537109 4 L 11 11.537109 L 3.4628906 4 z "
     class="ColorScheme-Text"
     />
    <path
       style="fill:#da4453;fill-opacity:1;stroke:none"
       d="M 18 13 L 18 17 L 19 17 L 19 13 L 18 13 z M 18 18 L 18 19 L 19 19 L 19 18 L 18 18 z "
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2,5 2,24.683594 2,27 19,27 19,26 3,26 3,25.111328 3.4296875,24.683594 12.785156,15.541016 16,18.683594 19.214844,15.541016 21,17.285156 21,15.888672 19.929688,14.841797 28.976562,6 29,6 l 0,8 1,0 0,-9 z M 3,6 3.0234375,6 12.070312,14.841797 3,23.707031 Z M 4.453125,6 27.546875,6 16,17.285156 Z"
     class="ColorScheme-Text"
     />
  <path  style="fill:currentColor;fill-opacity:1;stroke:none" 
      d="M 24 15 L 24 23 L 26 23 L 26 15 L 24 15 z M 24 25 L 24 27 L 26 27 L 26 25 L 24 25 z "
     class="ColorScheme-NegativeText"
    />
		</svg>
	{/if}
