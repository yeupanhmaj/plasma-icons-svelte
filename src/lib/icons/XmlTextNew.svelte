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
       d="M 6.3828125 2 L 2 13 L 3.3574219 13 L 4.546875 10 L 9 10 L 9 9 L 4.9414062 9 L 7.0625 3.328125 C 7.17566 3.704205 7.773975 5.4100894 8.859375 8.4433594 L 9.0839844 9 L 10.453125 9 L 7.7480469 2 L 6.3828125 2 z M 11 9 L 11 11 L 9 11 L 9 12 L 11 12 L 11 14 L 12 14 L 12 12 L 14 12 L 14 11 L 12 11 L 12 9 L 11 9 z "
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
    d="M 16 3 L 16 5 L 14 5 L 14 6 L 16 6 L 16 8 L 17 8 L 17 6 L 19 6 L 19 5 L 17 5 L 17 3 L 16 3 z M 7.9101562 5 L 4.5957031 14.59375 L 4.4726562 15 L 3 19 L 4.6582031 19 L 6.2832031 14.5625 L 11.716797 14.5625 L 13.341797 19 L 15 19 L 13.527344 15 L 13.404297 14.59375 L 10.089844 5 L 9.875 5 L 8.125 5 L 7.9101562 5 z M 9.015625 6.9375 L 11.195312 13.28125 L 6.8046875 13.28125 L 9.015625 6.9375 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
