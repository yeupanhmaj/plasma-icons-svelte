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
       d="M 3 2 L 2 3 L 2 4 L 2 4.3125 L 6 9.96875 L 6 10 L 6 12 L 10 14 L 10 10 L 10 9.96875 L 14 4.3125 L 14 3 L 13 2 L 9 2 L 7.25 2 L 3 2 z M 3 3 L 7.25 3 L 9 3 L 13 3 L 13 4 L 9 9.625 L 9 10 L 9 11 L 9 12 L 7 11 L 7 10 L 7 9.625 L 3 4 L 3 3 z "
     class="ColorScheme-Text"
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
    d="M 5 3 L 4 4 L 4 5 L 4 5.3046875 L 9 12.367188 L 9 16 L 9 16.039062 L 12.990234 19 L 13 19 L 13 12.367188 L 18 5.3046875 L 18 4 L 17 3 L 5 3 z M 5 4 L 17 4 L 17 4.9882812 L 12.035156 12 L 12 12 L 12 12.048828 L 12 13 L 12 17.019531 L 10 15.535156 L 10 13 L 10 12.048828 L 10 12 L 9.9648438 12 L 5 4.9882812 L 5 4 z M 6 5 L 8 8 L 8 6 L 10 5 L 6 5 z "
	class="ColorScheme-Text"
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
     d="M 6.2929688 4 L 5 5.2929688 L 5 7.8320312 C 5.055 7.8720313 13 18.5 13 18.5 L 13 23.509766 L 19 28.011719 L 19 18.501953 L 27 7.8339844 L 27 5.2949219 L 25.707031 4.0019531 L 6.2929688 4 z M 6.7070312 5 L 25.292969 5 L 26 5.7070312 L 26 7.5019531 L 18 18.167969 L 18 26.009766 C 16.84 25.142766 15.285 23.975766 14 23.009766 L 14 18.167969 L 6 7.5019531 L 6 5.7070312 L 6.7070312 5 z M 7 6 L 12 12.5 C 11.985 12.505 12 9 12 9 L 15 6 L 7 6 z "
     id="path64" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
