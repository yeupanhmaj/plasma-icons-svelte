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
       d="M 10.171875 1.671875 L 9.4648438 2.3789062 L 10.414062 3.328125 L 11.085938 4 L 9 4 L 7 4 L 7 5 L 8 5 L 9 5 L 11.085938 5 L 10.414062 5.671875 L 9.4648438 6.6210938 L 10.171875 7.328125 L 11.121094 6.3789062 L 13 4.5 L 11.121094 2.6210938 L 10.171875 1.671875 z M 5.828125 3.671875 L 4.8789062 4.6210938 L 3 6.5 L 4.8789062 8.3789062 L 5.828125 9.328125 L 6.5351562 8.6210938 L 5.5859375 7.671875 L 4.9140625 7 L 7 7 L 8 7 L 9 7 L 9 6 L 7 6 L 4.9140625 6 L 5.5859375 5.328125 L 6.5351562 4.3789062 L 5.828125 3.671875 z M 12 7 L 12 10 L 9 10 L 9 13 L 4 13 L 4 9 L 3 9 L 3 14 L 9 14 L 10 14 L 13 11 L 13 10 L 13 7 L 12 7 z "
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
	d="M 4 2.9980469 L 4 3 L 8.2929688 3 L 10 3 L 10 4 L 17 4 L 17 6 L 18 6 L 18 2.9980469 L 17 2.9980469 L 5 2.9980469 L 4 2.9980469 z M 8.2929688 3 L 5.5 5.7929688 L 4.7929688 6.5 L 5.5 7.2070312 L 8.2929688 10 L 9 9.2929688 L 6.7070312 7 L 12 7 L 12 6 L 11 6 L 10 6 L 6.7070312 6 L 9 3.7070312 L 8.2929688 3 z M 13.707031 6 L 13 6.7070312 L 15.292969 9 L 10 9 L 10 10 L 11 10 L 12 10 L 15.292969 10 L 13 12.292969 L 13.707031 13 L 16.5 10.207031 L 17.207031 9.5 L 16.5 8.7929688 L 13.707031 6 z M 4 10 L 4 19 L 5 19 L 13 19 L 14 19 L 14 18.990234 L 14.007812 19 L 18 15.007812 L 18 14.998047 L 18 13.591797 L 18 13 L 17 13 L 17 14 L 13 14 L 13 15 L 13 18 L 5 18 L 5 10 L 4 10 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
