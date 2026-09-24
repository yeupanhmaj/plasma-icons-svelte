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
			<g transform="translate(-421.71429,-531.79074)">
    <path 
        style="fill:currentColor;fill-opacity:1;stroke:none" 
        d="m 426.71429,539.79074 1.95349,-1.875 4.29767,-4.125 0.13024,0.125 0.39069,0.375 0.22791,0.21875 -4.29768,4.125 -1.23721,1.15625 1.23721,1.15625 4.29768,4.125 -0.74884,0.71875 -4.29767,-4.125 -1.95349,-1.875 z" 
        id="rect4176" 
        class="ColorScheme-Text"
        />
  </g>
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
       d="M 11 3 C 6.568 3 3 6.568 3 11 C 3 15.432 6.568 19 11 19 C 15.432 19 19 15.432 19 11 C 19 6.568 15.432 3 11 3 z M 11 4 C 14.878 4 18 7.122 18 11 C 18 14.878 14.878 18 11 18 C 7.122 18 4 14.878 4 11 C 4 7.122 7.122 4 11 4 z M 12.292969 7 L 9 10.292969 L 8.2929688 11 L 9 11.707031 L 12.292969 15 L 13 14.292969 L 9.7070312 11 L 13 7.7070312 L 12.292969 7 z "
        class="ColorScheme-Text" />
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
     d="M 16,4 A 12,12 0 0 0 4,16 12,12 0 0 0 16,28 12,12 0 0 0 28,16 12,12 0 0 0 16,4 Z m 0,1 A 11,11 0 0 1 27,16 11,11 0 0 1 16,27 11,11 0 0 1 5,16 11,11 0 0 1 16,5 Z m 3.3,3 L 11,16 19.3,24 20,23.3 12.5,16 20,8.7 19.2,8 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
