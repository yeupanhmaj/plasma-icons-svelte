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
       d="M 2,2 2,14 4,14 4,13 3,13 3,5 6,5 6,9 7,9 7,2 2,2 Z m 6,0 0,7 1,0 0,-4 4,0 0,2 1,0 0,-5 -6,0 z M 12.171875,7.671875 11.464844,8.3789062 12.414062,9.328125 13.085938,10 11,10 l -2,0 0,1 1,0 1,0 2.085938,0 -0.671876,0.671875 -0.949218,0.949219 0.707031,0.707031 0.949219,-0.949219 L 15,10.5 13.121094,8.6210938 12.171875,7.671875 Z m -4.34375,2 L 6.8789062,10.621094 5,12.5 6.8789062,14.378906 7.828125,15.328125 8.5351562,14.621094 7.5859375,13.671875 6.9140625,13 9,13 l 1,0 1,0 0,-1 -2,0 -2.0859375,0 0.671875,-0.671875 L 8.5351562,10.378906 7.828125,9.671875 Z"
     class="ColorScheme-Text"
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
    d="M 3 3 L 3 19 L 9 19 L 9 18 L 4 18 L 4 7 L 9 7 L 9 9 L 10 9 L 10 7 L 10 3 L 3 3 z M 11 3 L 11 9 L 12 9 L 12 7 L 13 7 L 18 7 L 18 12 L 19 12 L 19 3 L 13 3 L 12 3 L 11 3 z M 11.292969 10 L 8.5 12.792969 L 7.7929688 13.5 L 8.5 14.207031 L 11.292969 17 L 12 16.292969 L 9.7070312 14 L 15 14 L 15 13 L 14 13 L 13 13 L 9.7070312 13 L 12 10.707031 L 11.292969 10 z M 16.707031 13 L 16 13.707031 L 18.292969 16 L 13 16 L 13 17 L 14 17 L 15 17 L 18.292969 17 L 16 19.292969 L 16.707031 20 L 19.5 17.207031 L 20.207031 16.5 L 19.5 15.792969 L 16.707031 13 z "
	class="ColorScheme-Text"
    />
		</svg>
	{/if}
