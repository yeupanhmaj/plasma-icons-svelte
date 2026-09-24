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
        d="M 9 5 L 9 14 L 10 14 L 10 13.228516 A 3 3 0 0 0 12.003906 14 A 3 3 0 0 0 15.003906 11 A 3 3 0 0 0 12.003906 8 A 3 3 0 0 0 10 8.7734375 L 10 5 L 9 5 z M 3.8964844 5.9980469 L 1.0078125 13.998047 L 2.1757812 13.998047 L 3.1699219 11.712891 L 5.9472656 11.712891 L 6.8417969 13.998047 L 8.0078125 13.998047 L 5.3632812 5.9980469 L 3.8964844 5.9980469 z M 4.6289062 7.2382812 L 5.7226562 10.570312 L 3.4199219 10.570312 L 4.6289062 7.2382812 z M 12.003906 9 A 2 2 0 0 1 14.003906 11 A 2 2 0 0 1 12.003906 13 A 2 2 0 0 1 10.003906 11 A 2 2 0 0 1 12.003906 9 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 2,5 7,5 4.5,2 Z"
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
			<g transform="translate(-421.71429,-525.79074)" >
 <path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 5.0351562 7 L 1 19 L 1.9746094 19 L 3.4199219 15 L 8.453125 15 L 9.8945312 19 L 11 19 L 6.9101562 7 L 5.0351562 7 z M 12 7 L 12 15 L 12 19 L 13 19 L 13 17.638672 A 4 4 0 0 0 16 19 A 4 4 0 0 0 20 15 A 4 4 0 0 0 16 11 A 4 4 0 0 0 13 12.361328 L 13 7 L 12 7 z M 5.9433594 8.0292969 L 8.0917969 14 L 3.7832031 14 L 5.9433594 8.0292969 z M 16 12 A 3 3 0 0 1 19 15 A 3 3 0 0 1 16 18 A 3 3 0 0 1 13 15 A 3 3 0 0 1 16 12 z "
    transform="translate(421.71429,525.79074)"
    class="ColorScheme-Text"
    />  
 <path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="m 424.71429,531.79074 3,-4 3,4 z"
    class="ColorScheme-Accent"
    />  
 </g>
		</svg>
	{/if}
