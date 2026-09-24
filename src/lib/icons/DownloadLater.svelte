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
     d="M8 2A6.00001 6.00001 0 0 0 2 8 6.00001 6.00001 0 0 0 8 14 6.00001 6.00001 0 0 0 9 13.910156V12.895A5 5 0 0 1 8 13 5 5 0 0 1 3 8 5 5 0 0 1 8 3 5 5 0 0 1 13 8H14A6.00001 6.00001 0 0 0 8 2M8 4V8H5V9H9V4zM11 9V12.09L9 10.09V11.5L11.281 13.813 11.5 14 11.719 13.813 14 11.5V10.09L12 12.09V9z"
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
			<path id="path1" class="ColorScheme-Text" d="m11 3c-4.4319982 0-8 3.568-8 8 0 4.092537 3.0443284 7.441581 7 7.931641v-1.009766c-3.3993571-0.483816-6-3.384659-6-6.921875 0-0.242375 0.0113433-0.480906 0.0351562-0.716797 0.357195-3.5383664 3.32922-6.283203 6.9648438-6.283203 3.877999 0 7 3.122 7 7 0 0.340784-0.03151 0.672498-0.07813 1h1.009766c0.040654-0.32811 0.068364-0.660537 0.068364-1 0-4.432-3.568002-8-8-8zm-1 2v7h6v-1h-5v-6zm4.932039 8.400485v4.292969l-2.292969-2.292969-0.707031 0.707031 3.5 3.5 3.5-3.5-0.707031-0.707031-2.292969 2.292969v-4.292969z" fill="currentColor"/>
		</svg>
	{/if}
