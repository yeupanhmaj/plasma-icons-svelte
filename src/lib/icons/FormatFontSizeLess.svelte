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
       d="M 6.3828125 2 L 2 13 L 3.3574219 13 L 4.546875 10 L 9 10 L 9.4746094 10 L 10.839844 10 L 7.7480469 2 L 6.3828125 2 z M 7.0625 3.328125 C 7.17566 3.704205 7.773975 5.4100894 8.859375 8.4433594 L 9.0839844 9 L 4.9414062 9 L 7.0625 3.328125 z M 12 9 L 12 12.09375 L 10 10.09375 L 10 11.5 L 12.28125 13.8125 L 12.5 14 L 12.71875 13.8125 L 15 11.5 L 15 10.09375 L 13 12.09375 L 13 9 L 12 9 z "
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
    d="M 8.2167969 3 L 3 17 L 4.6875 17 L 6.3554688 12.570312 L 11.917969 12.570312 L 12.066406 13 L 13.732422 13 L 10.210938 3 L 8.2167969 3 z M 9.2324219 4.6113281 L 11.361328 11.285156 L 6.8730469 11.285156 L 9.2324219 4.6113281 z M 15 12.792969 L 15 17.085938 L 12.707031 14.792969 L 12 15.5 L 15.292969 18.792969 L 15.5 19 L 15.707031 18.792969 L 19 15.5 L 18.292969 14.792969 L 16 17.085938 L 16 12.792969 L 15 12.792969 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
